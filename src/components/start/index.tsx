import { useState, useEffect } from 'react';
import { Autocomplete, Grid, Stack, TextField } from '@mui/material';
import {
    AlertMessage, CidadeSelect, CustomTextField,
    EmConstrucao,
    Narrativa,
    SwitchField,
    UfSelect,
    UnidadeSelect,
    UnidadesTable,
} from '@site/src/components/structure';
import { AgradecimentoForm, ClassificacaoChamadaForm, DenunciaForm, InformacaoForm, LigacaoMudaForm, NaturezasForm, QuedaLigacaoForm, TroteForm } from '@site/src/components/forms/incidentes';
import { APHForm } from '@site/src/components/forms/cbmdf/naturezas/_archive/aph';
import { SalvamentoForm } from '@site/src/components/forms/cbmdf/naturezas/_archive/salvamento';
import { IncendioForm } from '@site/src/components/forms/cbmdf/naturezas/_archive/incendio';
// import { OutrosForm } from '@site/src/components/forms/cbmdf/naturezas/outros';
import naturezasList from '@site/src/static/js/naturezas.json'
import { CBMDFForm } from '../forms/cbmdf';


const Formulario = () => {

    const [state, setState] = useState({
        ligacaoMudaBoolean: null,
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
        ocorrenciaEmergencial: false,
        dadosAPH: '',
        dadosSalvamento: '',
        dadosIncendio: '',
        dadosOutros: ''
    });

    const { ligacaoMudaBoolean,
        ocorrenciaRelato,
        tipoAtendimento,
        ufOcorrencia,
        cidadeOcorrencia,
        endereco,
        pontoReferenciaBoolean,
        pontoReferencia,
        grupoNatureza,
        naturezas,
        tags,
        ocorrenciaEmergencial,
        dadosAPH,
        dadosSalvamento,
        dadosIncendio,
        dadosOutros } = state;

    const handleChange = (field, value) => {
        setState(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const handleNaturezasChange = (_, value) => {
        // Extrair todas as tags únicas dos itens selecionados
        const tagsSelecionadas = new Set<string>();
        value.forEach((item) => {
            item.tags.forEach((tag) => {
                tagsSelecionadas.add(tag);
            });
        });

        // Atualizar o estado com as naturezas selecionadas e as tags únicas
        setState(prevState => ({
            ...prevState,
            naturezas: value,
            tags: Array.from(tagsSelecionadas), // Convertendo o Set para um array
        }));
        console.log(naturezas)
        console.log(tags)
    };


    const narrativa = `
${ocorrenciaEmergencial ? '## OCORRÊNCIA EMERGENCIAL ##' : ''}
TIPO DE ATENDIMENTO: ${tipoAtendimento}

RELATO DA OCORRÊNCIA: ${ocorrenciaRelato}

Endereço: ${endereco} - ${cidadeOcorrencia} - ${ufOcorrencia}
Ponto de Referência: ${pontoReferencia}

${grupoNatureza.grupoNaturezaAPH ? `APH: ${dadosAPH}` : ''}
${grupoNatureza.grupoNaturezaSalvamento ? `Salvamento: ${dadosSalvamento}` : ''}
${grupoNatureza.grupoNaturezaIncendio ? `Incêndio: ${dadosIncendio}` : ''}
${grupoNatureza.grupoNaturezaOutros ? `Outros: ${dadosOutros}` : ''}
`;


    return (
        <Grid>
            <AlertMessage severity="info" title='"Bombeiros, Emergência, Distrito Federal"'>Repita até 3 vezes</AlertMessage>
            {!ligacaoMudaBoolean &&
                <Grid>
                    <ClassificacaoChamadaForm value={tipoAtendimento} onChange={(value) => handleChange("tipoAtendimento", value)} />

                    {tipoAtendimento === "Ocorrência" &&
                        <Grid item xs={12}>
                            {
                                // O QUÊ - NATUREZA E CIRCUNSTÂNCIAS
                                <Grid>
                                    {/* <NaturezasForm value={grupoNatureza} onChange={(value) => handleChange("grupoNatureza", value)} /> */}
                                    <Autocomplete
                                        multiple
                                        id="tags-standard"
                                        options={naturezasList}
                                        // value={naturezas}
                                        getOptionLabel={(option) => option.nome}
                                        filterOptions={(options, { inputValue }) => {
                                            const filteredOptions = options.filter((option) => {
                                                const tags = option.pesquisa || [];
                                                return tags.some((tag) => tag.toLowerCase().includes(inputValue.toLowerCase()));
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
                                </Grid>
                            }

                            {
                                // QUANDO - CLASSIFICAR COMO EMERGENCIAL / NÃO EMERGENCIAL (DEFINIR QUANDO SERÃO ENVIADOS OS RECURSOS)
                                <Grid>
                                    {/* // Dados EMERGENCIAIS */}
                                    <CBMDFForm tags={tags} />
                                    {/* {grupoNatureza.grupoNaturezaAPH &&
                                        <APHForm dados={dadosAPH} />
                                    }
                                    {grupoNatureza.grupoNaturezaSalvamento &&
                                        <SalvamentoForm />
                                    }
                                    {grupoNatureza.grupoNaturezaIncendio &&
                                        <IncendioForm />
                                    }
                                    {grupoNatureza.grupoNaturezaOutros &&
                                        <OutrosForm />
                                    }
                                    {(grupoNatureza.grupoNaturezaAPH || grupoNatureza.grupoNaturezaIncendio || grupoNatureza.grupoNaturezaSalvamento || grupoNatureza.grupoNaturezaOutros) &&
                                        <Grid>
                                            <p>Se for emergencial, cadastrar ocorrência com dados de Natureza, endereço e descrição</p>
                                            <p>- Se não for emergencial, proceder</p>
                                            <p>- Se não for emergencial, transferir para fila não emergencial?</p>
                                        </Grid>} */}
                                </Grid>
                            }

                            {
                                // ONDE - ENDEREÇO
                                <Grid>
                                    <AlertMessage severity="info" title='"De qual cidade está falando?"'></AlertMessage>
                                    <UfSelect value={ufOcorrencia} title="Registre a UF do solicitante" name="ufOcorrencia" onChange={handleChange} />
                                    <CidadeSelect value={cidadeOcorrencia} uf={ufOcorrencia} title="Registre a Cidade do solicitante" name="cidadeOcorrencia" onChange={handleChange} />
                                    {(ufOcorrencia !== "DF" && cidadeOcorrencia !== '') &&
                                        <Grid>
                                            <AlertMessage severity="info" title={`Vamos lhe transferir para ${cidadeOcorrencia}. 
                                    Aguarde na linha e, caso a ligação caia, faça contato novamente`}>
                                            </AlertMessage>
                                            <AlertMessage severity="error" title="Clique abaixo para copiar o telefone da Unidade"></AlertMessage>
                                            <UnidadesTable value={cidadeOcorrencia} uf={ufOcorrencia} cidade={cidadeOcorrencia} title="Selecione a Unidade" name="unidadeTransferência" onChange={handleChange} />
                                            <AlertMessage severity="error" title="No ISSABEL, clique em TRANSFERIR"></AlertMessage>
                                            <AlertMessage severity="error" title="Cole o número da Unidade"></AlertMessage>
                                            <AlertMessage severity="error" title="Clique em TRANSFERÊNCIA ASSISTIDA"></AlertMessage>
                                            <AlertMessage severity="error" title="Aguarde o atendente na outra linha atender para desligar a chamada"></AlertMessage>
                                            <p>Se atendente da outra ponta não atender, cadastrar a ocorrência e enviar</p>
                                            <AlertMessage severity="error" title="No SINESPCAD, lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
                                            <AlertMessage severity="error" title="Classifique o atendimento como CHAMADA TRANSFERIDA no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
                                            <AlertMessage severity="error" title="Copie e Cole a Narrativa abaixo no campo NARRATIVA"></AlertMessage>
                                            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
                                            <Narrativa value={narrativa} />
                                        </Grid>
                                    }
                                    {(ufOcorrencia === "DF" && cidadeOcorrencia !== '') &&
                                        <Grid>
                                            <EmConstrucao message="É natureza do CBMDF? Se não, transferir de imediato" />
                                            <CustomTextField label="Qual o endereço?" name="endereco" value={endereco} onChange={handleChange} />
                                            <SwitchField label="Precisa de Ponto de Referência?" value={pontoReferenciaBoolean} onChange={(value) => handleChange("pontoReferenciaBoolean", value)} />
                                            {pontoReferenciaBoolean && <CustomTextField label="Me dê um ponto de referência" name="pontoReferencia" value={pontoReferencia} onChange={handleChange} />}
                                            <p>Clique abaixo e cole o endereço no campo LOGRADOURO</p>
                                            <p>Cole o endereço também na aba de pesquisa do Google Maps</p>
                                            <p>COnfirme o endereço no mapa</p>
                                        </Grid>
                                    }
                                </Grid>
                            }

                            {
                                // QUEM - INFORMAÇÕES DO SOLICITANTE
                                <Grid>
                                    <AlertMessage severity="info" title='"Qual o seu nome?"'></AlertMessage>
                                    <AlertMessage severity="info" title='"Seu telefone é o final "XXXX"?"'>Informe os 4 últimos dígitos</AlertMessage>
                                </Grid>
                            }
                            {
                                // COMO - VEÍCULOS / OBJETOS / CRONOGRAMA
                                <Grid>
                                    {/* // Dados não emergenciais */}
                                    <CBMDFForm tags={tags} />
                                    <CustomTextField label="Insira mais observações" name="ocorrenciaRelato" value={ocorrenciaRelato} onChange={handleChange} />
                                </Grid>
                            }
                            {
                                // QUANTO - RECURSOS EMPREGADOS - SOLICITAÇÃO DE OUTROS RECURSOS
                                <Grid>
                                </Grid>
                            }
                            {
                                // CONCLUSÃO
                                <Grid>
                                    <Narrativa value={narrativa} />
                                </Grid>
                            }

                        </Grid>
                        // <OcorrenciaForm estado={ufOcorrencia} ocorrenciaRelato={ocorrenciaRelato} />
                    }
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
