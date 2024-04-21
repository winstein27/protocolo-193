import { useState } from 'react';
import { Grid } from '@mui/material';
import {
    AlertMessage, CustomTextField,
    UfSelect,
} from '@site/src/components/structure';
import { ClassificacaoChamadaForm, LigacaoMudaForm, OcorrenciaForm, QuedaLigacaoForm, TroteForm } from '@site/src/components/forms/inicio';


const Formulario = () => {

    const [state, setState] = useState({
        ligacaoMudaBoolean: null,
        ocorrenciaRelato: '',
        tipoAtendimento: '',
        ufOcorrencia: 'DF'
    })

    const { ligacaoMudaBoolean, ocorrenciaRelato, tipoAtendimento, ufOcorrencia } = state

    const handleChange = (field, value) => {
        setState(prevState => ({ ...prevState, [field]: value }));
    };

    return (
        <Grid>
            <AlertMessage severity="info" title='"Bombeiros, Emergência, Distrito Federal"'>Repita até 3 vezes</AlertMessage>
            {!ligacaoMudaBoolean &&
                <Grid>
                    <ClassificacaoChamadaForm value={tipoAtendimento} onChange={(value) => handleChange("tipoAtendimento", value)} />

                    {tipoAtendimento === "Ocorrência" &&
                        <Grid item xs={12}>
                            <CustomTextField label="Faça uma breve descrição do ocorrido" name="ocorrenciaRelato" value={ocorrenciaRelato} onChange={handleChange} />
                            <UfSelect value={ufOcorrencia} title="Informe a UF do solicitante" name="ufOcorrencia" onChange={handleChange} />
                            {ufOcorrencia !== "DF" &&
                                <Grid>
                                    <p>Ocorrencia fora da jurisdição</p>
                                    <p>Encontrar unidade que irá atender</p>
                                    <p>Informar que irá transferir</p>
                                    <p>Copiar telefone</p>
                                </Grid>
                            }
                            {ufOcorrencia === "DF" &&
                                <Grid>
                                    <p>Selecionar grupos de natureza</p>
                                    <p>- Se for da circunscrição, mas a natureza é de outra agência, transferir</p>
                                    <p>Abrir questionários base de cada grupo</p>
                                    <h2>Preencher questionário base dos tipos</h2>
                                    <p>- Se não for emergencial, proceder (obs.: Ainda não podemos afirmar se é emergencial, só após as perguntas. Por enquanto, só identificamos o que definitivamente não é emergência)</p>
                                    <p>- Se não for emergencial, transferir para fila não emergencial?</p>
                                    <p>- OBS.: Seria interessante se conseguíssemos aproveitar os dados. Se integrarmos com o ISSABEL, seria possível</p>
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
                        <p>Informação</p>
                    }
                    {tipoAtendimento === "Agradecimento" &&
                        // <AgradecimentoForm />
                        <p>Agradecimento</p>
                    }
                </Grid>
            }
        </Grid >
    );
};

export default Formulario;
