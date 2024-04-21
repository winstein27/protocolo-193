
import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { AlertMessage, CustomTextField, UfSelect } from "@site/src/components/structure";


export const ClassificacaoChamadaForm = props => {

    const handleChange = (newValue) => {
        props.onChange(newValue);
    };

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Identifique o Tipo de Chamada</FormLabel>
                <RadioGroup row
                    aria-label="Tipo de Atendimento"
                    name="tipoAtendimento"
                    value={props.value}
                    onChange={(event) => handleChange(event.target.value)}
                >
                    <FormControlLabel value="Ocorrência" control={<Radio color="error" />} label="OCORRÊNCIA" />
                    <FormControlLabel value="Ligação Muda" control={<Radio />} label="Ligação Muda" />
                    <FormControlLabel value="Trote" control={<Radio />} label="Trote" />
                    <FormControlLabel value="Queda de Ligação" control={<Radio />} label="Queda de Ligação" />
                    <FormControlLabel value="Informação" control={<Radio />} label="Informação" />
                    <FormControlLabel value="Agradecimento" control={<Radio />} label="Agradecimento" />
                </RadioGroup>
            </FormControl>
        </Grid>
    )
}


export const OcorrenciaForm = props => {
    const handleChange = (newValue) => {
        props.onChange(newValue);
    };

    return (
        <Grid item xs={12}>
            <CustomTextField label="Faça uma breve descrição do ocorrido" name="relato" value={props.ocorrenciaRelato} onChange={() => handleChange} />
            <UfSelect value={props.estado} title="Informe a UF do solicitante" onChange={() => handleChange} />
            <p>- Se estiver fora da circunscrição, transferir ou informar telefone</p>
            <p>- Se for da circunscrição, mas a natureza é de outra agência, transferir</p>
            <h2>Preencher questionário base dos tipos</h2>
            <p>- Se não for emergencial, proceder (obs.: Ainda não podemos afirmar se é emergencial, só após as perguntas. Por enquanto, só identificamos o que definitivamente não é emergência)</p>
            <p>- Se não for emergencial, transferir para fila não emergencial?</p>
            <p>- OBS.: Seria interessante se conseguíssemos aproveitar os dados. Se integrarmos com o ISSABEL, seria possível</p>
        </Grid>
    )
}

export const LigacaoMudaForm = props => {
    return (
        <Grid item xs={12}>
            <AlertMessage severity="info" title='"Por falta de comunicação, esta ligação será encerrada"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const QuedaLigacaoForm = props => {
    return (
        <Grid item xs={12}>
            <AlertMessage severity="info" title='"Comunicação encerrada por queda de ligação"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const TroteForm = props => {
    return (
        <Grid item xs={12}>
            <CustomTextField label="Descreva o teor do trote" name="informacaoTrote" value={props.informacaoTrote} onChange={props.onChange} />
            <AlertMessage severity="info" title='"Esta chamada foi realizada pelo número *******. A ligação será registrada como trote e encaminhada para a Polícia Civil"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como TROTE no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const InformacaoForm = props => {
    return (
        <Grid item xs={12}>
            <CustomTextField label="Descreva a informação requisitada" name="informacaoRelato" value={props.informacaoRelato} onChange={props.onChange} />
            <AlertMessage severity="info" title='"Um momento, vamos buscar a resposta"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const AgradecimentoForm = props => {
    return (
        <Grid item xs={12}>
            <CustomTextField label="Descreva a informação requisitada" name="informacaoRelato" value={props.informacaoRelato} onChange={props.onChange} />
            <AlertMessage severity="info" title='"Um momento, vamos buscar a resposta"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}