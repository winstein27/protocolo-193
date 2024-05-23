import React, { useState, useEffect, useMemo } from 'react';
import { Alert, Snackbar, Button, Grid, TextField, Autocomplete } from '@mui/material';
import { normalizeString } from './utils';
import naturezasList from '@site/src/static/js/naturezas.json';
import {
    AlertMessage, CidadeSelect, CustomTextField,
    EmConstrucao, InputCopy, SwitchField, UfSelect,
    UnidadesTable, YesNoField
} from '@site/src/components/structure';
import {
    AgradecimentoForm, ClassificacaoChamadaForm, DenunciaForm,
    InformacaoForm, LigacaoMudaForm, QuedaLigacaoForm, TroteForm
} from '@site/src/components/forms/incidentes';
import { CBMDFForm } from './forms/cbmdf';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


const Formulario = () => {

    const [state, setState] = useState({
        incidenteBoolean: false,
        naturezaAgenciaBoolean: false,
        ocorrenciaRelato: '',
        tipoAtendimento: '',
        ufOcorrencia: 'DF',
        cidadeOcorrencia: '',
        endereco: '',
        pontoReferenciaBoolean: false,
        pontoReferencia: '',
        narrativa: '',
        grupoNatureza: {
            grupoNaturezaAPH: false,
            grupoNaturezaSalvamento: false,
            grupoNaturezaIncendio: false,
            grupoNaturezaOutros: false,
        },
        naturezas: [],
        tags: [],
        tagStates: {
            vitimas: {
                quantidadeVitimas: 1,
                estadoVitima: '',
                estadoVitimaOutroText: '',
                estadoVitimaOutroEmergencialBoolean: false
            },
            ovace: {
                confirmaOVACE: false
            },
            incendio_vegetacao: {
                pessoasBoolean: false,
                animaisBoolean: false,
                residenciasBoolean: false,
                origemBoolean: false,
                origemText: '',
                irEstradaBoolean: false
            },
            captura_inseto: {
                insetosAtacandoBoolean: false,
                localInsetos: '',
                alturaEnxame: ''
            },
            suicidio: {
                statusSuicidio: '',
                tentante: ''
            }
        },
        ocorrenciaEmergencial: false,
        protocoloEmergencialBoolean: false,
        protocoloEmergencialNome: '',
        descricao: '',
        nomeSolicitante: '',
        telefoneSolicitanteBoolean: true,
        telefoneSolicitanteNumber: ''
    });

    const { incidenteBoolean,
        naturezaAgenciaBoolean,
        ocorrenciaRelato,
        tipoAtendimento,
        ufOcorrencia,
        cidadeOcorrencia,
        endereco,
        pontoReferencia,
        tagStates,
        naturezas,
        tags,
        ocorrenciaEmergencial,
        protocoloEmergencialBoolean,
        protocoloEmergencialNome,
        descricao,
        nomeSolicitante,
        telefoneSolicitanteBoolean,
        telefoneSolicitanteNumber } = state;
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    useEffect(() => {
        if (ocorrenciaEmergencial) {
            setSnackbarOpen(true);
            const timer = setTimeout(() => {
                setSnackbarOpen(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [ocorrenciaEmergencial]);

    const handleChange = (field, value) => {
        setState(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const UpdateTagState = (field, value) => {
        setState(prevState => {
            const { ocorrenciaEmergencial, protocoloEmergencialBoolean, protocoloEmergencialNome } = checkProtocoloEmergencial(field, value);
            return {
                ...prevState,
                tagStates: {
                    ...prevState.tagStates,
                    [field]: value,
                },
                ocorrenciaEmergencial,
                protocoloEmergencialBoolean,
                protocoloEmergencialNome,
            };
        });
    };

    const checkProtocoloEmergencial = (field, value) => {
        if (field === "vitimas") {
            if (value.estadoVitimaOutroEmergencialBoolean) {
                return { ocorrenciaEmergencial: true };
            }
            if (value.estadoVitima === "Inconsciente") {
                return { ocorrenciaEmergencial: true, protocoloEmergencialBoolean: true, protocoloEmergencialNome: "PCR" };
            }
        } else if (field === "ovace") {
            if (value.confirmaOVACE) {
                return { ocorrenciaEmergencial: true, protocoloEmergencialBoolean: true, protocoloEmergencialNome: "OVACE" };
            }
        } else if (field === "incendio_vegetacao") {
            if (value.pessoasBoolean || value.animaisBoolean || value.residenciasBoolean) {
                return { ocorrenciaEmergencial: true };
            }
        } else if (field === "captura_inseto") {
            if (value.insetosAtacandoBoolean) {
                return { ocorrenciaEmergencial: true };
            }
        }
        return { ocorrenciaEmergencial: false, protocoloEmergencialBoolean: false, protocoloEmergencialNome: "" };
    };

    const handleNaturezasChange = (_, value) => {
        const tagsSelecionadas = new Set();
        value.forEach((item) => {
            item.tags.forEach((tag) => {
                tagsSelecionadas.add(tag);
            });
        });
        setState(prevState => ({
            ...prevState,
            naturezas: value,
            tags: Array.from(tagsSelecionadas),
        }));
    };

    const sortedOptions = naturezasList.sort((a, b) => a.nome.localeCompare(b.nome));


    // Função para gerar a narrativa com as informações fornecidas
    function gerarNarrativa() {
        let narrativa = '';

        if (incidenteBoolean) {
            narrativa += `Incidente Registrado: ${tipoAtendimento.toUpperCase()}\n`;
        } else if (naturezaAgenciaBoolean) {
            narrativa += `OCORRÊNCIA DE ${naturezas.map(item => item.nome.toUpperCase()).join(', ')} NÃO ATENDIDA PELO CBMDF`;
        } else {
            narrativa += adicionarOcorrenciaEmergencial();
            narrativa += adicionarProtocoloEmergencial();
            narrativa += adicionarTransferenciaForaDF();
            narrativa += adicionarInformacoesNaturezas();
            narrativa += adicionarRelatoEndereco();
            narrativa += adicionarInformacoesVitima();
            narrativa += adicionarInformacoesIncendioVegetacao();
            narrativa += adicionarInformacoesCapturaInseto();
            narrativa += adicionarInformacoesAdicionais();
        }
        return narrativa;
    }

    function adicionarOcorrenciaEmergencial() {
        return ocorrenciaEmergencial ? '## OCORRÊNCIA EMERGENCIAL ##\n\n' : '';
    }

    function adicionarProtocoloEmergencial() {
        return protocoloEmergencialBoolean ? `## PROTOCOLO DE ${protocoloEmergencialNome} INICIADO PELA CENTRAL DE OPERAÇÕES  ##\n\n` : '';
    }

    function adicionarTransferenciaForaDF() {
        return ufOcorrencia !== "DF" ? `Ocorrência fora da circunscrição\nTransferida para ${cidadeOcorrencia} - ${ufOcorrencia}\n\n` : '';
    }

    function adicionarInformacoesNaturezas() {
        return `Natureza(s): ${naturezas.map(item => item.nome.toUpperCase()).join(', ')}\n`;
    }

    function adicionarRelatoEndereco() {
        let texto = '';

        if (ufOcorrencia === "DF") {
            texto += `Endereço: ${endereco.toUpperCase()} - ${cidadeOcorrencia.toUpperCase()} - ${ufOcorrencia}\n`;
            texto += pontoReferencia ? `Ponto de Referência: ${pontoReferencia.toUpperCase()}\n` : '';
            texto += nomeSolicitante ? `Nome do Solicitante: ${nomeSolicitante.toUpperCase()}\n` : '';
        }

        return texto;
    }

    function adicionarInformacoesVitima() {
        let texto = '';

        if (tags.includes("vitimas")) {
            texto += '\nINFORMAÇÕES SOBRE A VÍTIMA\n';
            texto += `- ${tagStates.vitimas.estadoVitima == 'Outros' ? '. ' + tagStates.vitimas.estadoVitimaOutroText : tagStates.vitimas.estadoVitima
                }\n`;
            if (tagStates.vitimas.estadoVitimaOutroEmergencialBoolean) texto += `- Quadro classificado como EMERGENCIAL pelo teleatendente\n`;
        }
        return texto;
    }

    function adicionarInformacoesIncendioVegetacao() {
        let texto = '';
        if (tags.includes("incendio_vegetacao")) {
            texto += '\nINFORMAÇÕES SOBRE O INCÊNDIO EM VEGETAÇÃO\n';
            if (tagStates.incendio_vegetacao.pessoasBoolean) texto += `- Pessoas no local do incêndio\n`;
            if (tagStates.incendio_vegetacao.animaisBoolean) texto += `- Animais no local do incêndio\n`;
            if (tagStates.incendio_vegetacao.residenciasBoolean) texto += `- Incêndio ameaçando residências\n`;
            if (tagStates.incendio_vegetacao.origemBoolean) texto += `- Suposta origem informada do incêndio: ${tagStates.incendio_vegetacao.origemText}\n`;
            if (tagStates.incendio_vegetacao.irEstradaBoolean) texto += `- Solicitante informou que se deslocará para estrada a fim de facilitar a localização\n`;
        }

        return texto;
    }

    function adicionarInformacoesCapturaInseto() {
        let texto = '';
        if (tags.includes("captura_inseto")) {
            texto += '\nINFORMAÇÕES SOBRE A CAPTURA DE INSETOS\n';
            if (tagStates.captura_inseto.insetosAtacandoBoolean) texto += `- Insetos atacando pessoas\n`;
            if (tagStates.captura_inseto.localInsetos) texto += `- Local dos insetos: ${tagStates.captura_inseto.localInsetos}\n`;
            if (tagStates.captura_inseto.alturaEnxame) texto += `- Altura aproximada do enxme: ${tagStates.captura_inseto.alturaEnxame}\n`;

        }

        return texto;
    }

    function adicionarInformacoesAdicionais() {
        return ocorrenciaRelato ? `\nInformações Complementares: ${ocorrenciaRelato}` : '';
    }


    // Gerar a narrativa
    const narrativa = useMemo(() => gerarNarrativa(), [state, naturezas, tags, tagStates]);


    return (
        <Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert onClose={() => setSnackbarOpen(false)} severity="warning" variant="filled">
                    Ocorrência definida como EMERGENCIAL
                </Alert>
            </Snackbar>

            <AlertMessage severity="info" title='"Bombeiros, Emergência, Distrito Federal"'>Repita até 3 vezes</AlertMessage>

            <SwitchField label="Não é ocorrência" value={incidenteBoolean} onChange={(value) => handleChange("incidenteBoolean", value)} />

            {// O QUÊ - NATUREZA E CIRCUNSTÂNCIAS
                !incidenteBoolean &&
                <Grid>
                    <CustomTextField label="Descreva brevemente o que está ocorrendo" name="descricao" value={descricao} onChange={handleChange} />

                    <SwitchField label="Ocorrência atendida por outra agência" value={naturezaAgenciaBoolean} onChange={(value) => handleChange("naturezaAgenciaBoolean", value)} />
                    {naturezaAgenciaBoolean &&
                        <Grid>
                            <EmConstrucao message="Escolher agencia" />
                            <EmConstrucao message="Informar que ligação será transferida para a agência X" />
                            <AlertMessage severity="error" title="No ISSABEL, clique em TRANSFERIR"></AlertMessage>
                            <AlertMessage severity="error" title="Cole o número da Unidade"></AlertMessage>
                            <AlertMessage severity="error" title="Clique em TRANSFERÊNCIA ASSISTIDA"></AlertMessage>
                            <AlertMessage severity="error" title="Aguarde o atendente na outra linha atender para desligar a chamada"></AlertMessage>
                            <EmConstrucao message="Se atendente da outra ponta não atender, cadastrar a ocorrência e enviar" />
                            <AlertMessage severity="error" title="No SINESPCAD, lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
                            <AlertMessage severity="error" title="Classifique o atendimento como CHAMADA TRANSFERIDA no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
                            <AlertMessage severity="error" title="Copie e Cole a Narrativa abaixo no campo NARRATIVA"></AlertMessage>
                            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
                        </Grid>
                    }
                    {!naturezaAgenciaBoolean &&
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={sortedOptions}
                            getOptionLabel={(option) => option.nome}
                            filterOptions={(options) => {
                                const excludedWords = [
                                    "e", "ou", "para", "com", "de", "da", "do", "em", "no", "na", "os",
                                    "as", "um", "uma", "uns", "umas", "por", "que", "se", "como", "com",
                                    "no", "nos", "na", "nas", "num", "numa", "nuns", "numas", "neste",
                                    "nesta", "nestes", "nestas", "esse", "essa", "esses", "essas", "isto",
                                    "isso", "aquele", "aquela", "aqueles", "aquelas", "onde", "quando",
                                    "qual", "quais", "por que", "porque", "a", "o"
                                ]; // Lista expandida de palavras a serem excluídas
                                const inputWords = descricao.trim().toLowerCase().split(" ").map(word => normalizeString(word)).filter(word => !excludedWords.includes(word)); // Usando as palavras da descrição para a pesquisa
                                const filteredOptions = options.filter((option) => {
                                    const tags_pesquisa = option.pesquisa || [];
                                    // Verificar se pelo menos uma das palavras da descrição (excluindo as palavras comuns) está presente em alguma tag
                                    return inputWords.some((inputWord) => {
                                        return tags_pesquisa.some((tag_pesquisa) => tag_pesquisa.toLowerCase().includes(inputWord));
                                    });
                                });
                                return filteredOptions;
                            }}
                            onChange={handleNaturezasChange}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    label="Naturezas"
                                    placeholder="Naturezas"
                                />
                            )}
                        />
                    }


                    {naturezas.length !== 0 &&
                        <Grid item xs={12}>
                            {
                                // QUANDO - CLASSIFICAR COMO EMERGENCIAL / NÃO EMERGENCIAL (DEFINIR QUANDO SERÃO ENVIADOS OS RECURSOS)
                                <Grid>
                                    {/* // Dados EMERGENCIAIS */}
                                    <CBMDFForm tags={tags} emergencial={true} tagStates={tagStates} updateTagState={UpdateTagState} />
                                </Grid>
                            }

                            {
                                // ONDE - ENDEREÇO
                                <Grid>
                                    <AlertMessage severity="info" title='"De qual cidade está falando?"'></AlertMessage>
                                    <UfSelect value={ufOcorrencia} title="UF" name="ufOcorrencia" onChange={handleChange} />
                                    <CidadeSelect value={cidadeOcorrencia} uf={ufOcorrencia} title="Cidade do solicitante" name="cidadeOcorrencia" onChange={handleChange} />
                                    {(ufOcorrencia !== "DF" && cidadeOcorrencia !== '') &&
                                        <Grid>
                                            <AlertMessage severity="info" title={`Você ligou para o Distrito Federal, mas vamos lhe transferir 
                                            para ${cidadeOcorrencia}`}>
                                            </AlertMessage>
                                            {protocoloEmergencialBoolean &&
                                                <AlertMessage severity="info" title={`Enquanto transferimos, vamos iniciar o protocolo de ${protocoloEmergencialNome} ok?`}></AlertMessage>
                                            }
                                            <AlertMessage severity="info" title={`Aguarde na linha e, caso a ligação caia, faça contato novamente`}>
                                            </AlertMessage>
                                            <AlertMessage severity="error" title="Clique abaixo para copiar o telefone da Unidade"></AlertMessage>
                                            <UnidadesTable value={cidadeOcorrencia} uf={ufOcorrencia} cidade={cidadeOcorrencia} title="Selecione a Unidade" name="unidadeTransferência" onChange={handleChange} />
                                            <AlertMessage severity="error" title="No ISSABEL, clique em TRANSFERIR"></AlertMessage>
                                            <AlertMessage severity="error" title="Cole o número da Unidade"></AlertMessage>
                                            <AlertMessage severity="error" title="Clique em TRANSFERÊNCIA ASSISTIDA"></AlertMessage>
                                            <AlertMessage severity="error" title="Aguarde o atendente na outra linha atender para desligar a chamada"></AlertMessage>
                                            {protocoloEmergencialBoolean &&
                                                <a href={`socorro_teleatendimento/${protocoloEmergencialNome}`}>
                                                    <Button
                                                        size="large"
                                                        variant="contained"
                                                        color="error"
                                                        startIcon={<LocalHospitalIcon />}
                                                    >
                                                        INICIAR PROTOCOLO {protocoloEmergencialNome}
                                                    </Button>
                                                </a>
                                            }
                                            {!protocoloEmergencialBoolean && <Grid>
                                                <EmConstrucao message="Se atendente da outra ponta não atender, cadastrar a ocorrência e enviar" />
                                                <AlertMessage severity="error" title="No SINESPCAD, lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
                                                <AlertMessage severity="error" title="Classifique o atendimento como CHAMADA TRANSFERIDA no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
                                                <AlertMessage severity="error" title="Copie e Cole a Narrativa abaixo no campo NARRATIVA"></AlertMessage>
                                                <InputCopy title="Narrativa" value={narrativa} />
                                            </Grid>
                                            }
                                        </Grid>
                                    }
                                    {(ufOcorrencia === "DF" && cidadeOcorrencia !== '') &&
                                        <Grid>
                                            {ocorrenciaEmergencial &&
                                                <AlertMessage severity="info" title='"Ok, vamos cadastrar o endereço para que o socorro chegue o quanto antes. Me confirme seu endereço completo por favor"'></AlertMessage>
                                            }
                                            {!ocorrenciaEmergencial &&
                                                <AlertMessage severity="info" title='"Me confirme seu endereço completo por favor"'></AlertMessage>
                                            }

                                            <CustomTextField label="Endereço" name="endereco" value={endereco} onChange={handleChange} />
                                            {/* <SwitchField label="Precisa de Ponto de Referência?" value={pontoReferenciaBoolean} onChange={(value) => handleChange("pontoReferenciaBoolean", value)} />
                                            {pontoReferenciaBoolean &&
                                                <Grid> */}
                                            <AlertMessage severity="info" title='"Tem algum ponto de referência ou complemento?"'></AlertMessage>
                                            <CustomTextField label="Ponto de referência" name="pontoReferencia" value={pontoReferencia} onChange={handleChange} />
                                            <AlertMessage severity="info" title='"Um momento, vamos enviar a ocorrência para o socorro mais próximo"' />
                                            <AlertMessage severity="error" title="Copie o endereço abaixo"></AlertMessage>
                                            <InputCopy field="Endereço" value={`${endereco.toUpperCase()} - ${cidadeOcorrencia.toUpperCase()} - ${ufOcorrencia}`} />
                                            <AlertMessage severity="error" title="Cole o endereço na aba de PESQUISA do Google Maps"></AlertMessage>
                                            <AlertMessage severity="error" title="Clique na opção que surgir"></AlertMessage>
                                            <AlertMessage severity="error" title="Confirme no mapa se o endereço caiu no lugar correto. Caso tenha caído em outro local, digite o endereço de forma reduzida ou indique o localizador manualmente"></AlertMessage>
                                            <AlertMessage severity="info" title='"Só mais um momento"' />
                                            {/* {pontoReferencia &&
                                                <Grid>
                                                    <AlertMessage severity="error" title="Copie o ponto de referência abaixo abaixo"></AlertMessage>
                                                    <InputCopy field="Ponto de Referência" value={pontoReferencia.toUpperCase()} />

                                                    <AlertMessage severity="error" title="Cole o Ponto de Referência no campo PONTO DE REFERÊNCIA"></AlertMessage>
                                                </Grid>
                                            } */}




                                            {// CADASTRO INICIAL
                                                <Grid>
                                                    <AlertMessage severity="error" title="Copie o texto abaixo"></AlertMessage>
                                                    <InputCopy field="Narrativa" value={narrativa + `\n## CADASTRO EM ANDAMENTO NA COCB - AGUARDE MAIS INFORMAÇÕES ##`} />
                                                    <AlertMessage severity="error" title="Cole no campo NARRATIVA"></AlertMessage>
                                                    <AlertMessage severity="error" title="Clique em 'ENCAMINHAR E CONTINUAR EDIÇÃO"></AlertMessage>
                                                </Grid>
                                            }
                                            {// INÍCIO DE PROTOCOLO CASO NATUREZA TENHA PROCEDIMENTOS (OVACE, PCR, PARTO, TENTTIVA DE SUICÍDIO)
                                                protocoloEmergencialBoolean &&
                                                <Grid>
                                                    <AlertMessage severity="info" title={`A ocorrência já foi cadastrada e o socorro será enviado. Vamos iniciar o protocolo de ${protocoloEmergencialNome} ok?`}></AlertMessage>
                                                    <a href={`socorro_teleatendimento/${protocoloEmergencialNome}`}>
                                                        <Button
                                                            size="large"
                                                            variant="contained"
                                                            color="error"
                                                            startIcon={<LocalHospitalIcon />}
                                                        >
                                                            INICIAR PROTOCOLO {protocoloEmergencialNome}
                                                        </Button>
                                                    </a>
                                                </Grid>
                                            }

                                            {// CASO NÃO HAJA PROTOCOLO EMERGENCIAL, SEGUIMOS COM O ATENDIMENTO
                                                !protocoloEmergencialBoolean &&
                                                <Grid>
                                                    <AlertMessage severity="info" title='"A ocorrência já foi cadastrada e encaminhada para a unidade mais próxima, ok? Agora vamos complementar alguns dados"'></AlertMessage>
                                                    {
                                                        //  INFORMAÇÕES DO SOLICITANTE
                                                        <Grid>
                                                            <AlertMessage severity="info" title='"Qual o seu nome?"'></AlertMessage>
                                                            <CustomTextField label="Nome do Solicitante" name="nomeSolicitante" value={nomeSolicitante} onChange={handleChange} />
                                                            <AlertMessage severity="info" title='"Seu telefone é o final "XXXX"?"'>Informe os 4 últimos dígitos</AlertMessage>
                                                            <YesNoField value={telefoneSolicitanteBoolean} onChange={(value) => handleChange("telefoneSolicitanteBoolean", value)} />
                                                            {!telefoneSolicitanteBoolean &&
                                                                <Grid>
                                                                    <AlertMessage severity="info" title='"Informe o número correto por favor"'></AlertMessage>

                                                                    {/* <TelefoneTextField name="telefoneSolicitanteNumber" value={telefoneSolicitanteNumber} onChange={handleChange} /> */}
                                                                    <CustomTextField label="Telefone do Solicitante" name="telefoneSolicitanteNumber" value={telefoneSolicitanteNumber} onChange={handleChange} />
                                                                </Grid>
                                                            }

                                                        </Grid>
                                                    }
                                                    {
                                                        // COMO - Protocolo Operacional Padrão de acordo com elementos na cena (veículos, pessoas, objetos)
                                                        <Grid>
                                                            {/* // Dados não emergenciais */}
                                                            <CBMDFForm tags={tags} emergencial={false} tagStates={tagStates} updateTagState={UpdateTagState} />
                                                        </Grid>
                                                    }
                                                    {
                                                        // QUEM/QUANTO - RECURSOS EMPREGADOS - SOLICITAÇÃO DE OUTROS RECURSOS
                                                        <Grid>
                                                            <EmConstrucao message="Verificar se é necessário o encaminhamento para outras agências" />
                                                        </Grid>
                                                    }
                                                    {
                                                        // CONCLUSÃO
                                                        <Grid>
                                                            <AlertMessage severity="info" title="Deseja acrescentar mais alguma informação?"></AlertMessage>
                                                            <CustomTextField label="Insira mais observações" name="ocorrenciaRelato" value={ocorrenciaRelato} onChange={handleChange} />
                                                            <AlertMessage severity="error" title="Copie o texto abaixo"></AlertMessage>
                                                            <InputCopy field="Narrativa" value={narrativa} />
                                                            <AlertMessage severity="error" title="Cole no campo NARRATIVA"></AlertMessage>
                                                            <AlertMessage severity="error" title="Clique em 'FINALIZAR EDIÇÃO"></AlertMessage>
                                                            <AlertMessage severity="info" title='"O registro foi finalizado. Qualquer apoio que precisar, pode nos ligar novamente"'></AlertMessage>
                                                            <AlertMessage severity="error" title="Aguarde o OK do solicitante"></AlertMessage>
                                                            <AlertMessage severity="info" title='"Informamos também que, nos próximos dias, você receberá em seu Whatsapp uma Pesquisa de Satisfação do atendimento do CBMDF. Seu retorno é muito importante para a melhoria dos nossos serviços"'></AlertMessage>
                                                            <AlertMessage severity="error" title="Aguarde o OK do solicitante"></AlertMessage>
                                                            <AlertMessage severity="info" title='"Conte sempre com o Corpo de Bombeiros"'></AlertMessage>
                                                            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
                                                        </Grid>
                                                    }
                                                </Grid>
                                            }
                                        </Grid>

                                    }
                                </Grid>
                            }
                        </Grid>
                    }
                </Grid>
            }
            {incidenteBoolean &&
                <Grid>
                    <ClassificacaoChamadaForm value={tipoAtendimento} onChange={(value) => handleChange("tipoAtendimento", value)} />
                    {tipoAtendimento === "Ligação Muda" &&
                        // <QuedaLigacaoForm />
                        <LigacaoMudaForm />
                    }
                    {tipoAtendimento === "Queda de Ligação" &&
                        <QuedaLigacaoForm />
                    }
                    {tipoAtendimento === "Trote" &&
                        <TroteForm />
                    }
                    {tipoAtendimento === "Informação" &&
                        // <InformacaoForm />
                        <InformacaoForm />
                    }
                    {tipoAtendimento === "Agradecimento" &&
                        // <AgradecimentoForm />
                        <AgradecimentoForm />
                    }
                    {tipoAtendimento === "Denúncia" &&
                        // <AgradecimentoForm />
                        <DenunciaForm />
                    }
                </Grid>
            }
        </Grid >
    );
};

export default Formulario;
