
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { AlertMessage, CheckboxGroup, CustomTextField, EmConstrucao, UfSelect } from "@site/src/components/structure";


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
                    <FormControlLabel value="Ocorrência" control={<Radio />} label="OCORRÊNCIA" />
                    <FormControlLabel value="Ligação Muda" control={<Radio />} label="Ligação Muda" />
                    <FormControlLabel value="Trote" control={<Radio />} label="Trote" />
                    <FormControlLabel value="Queda de Ligação" control={<Radio />} label="Queda de Ligação" />
                    <FormControlLabel value="Informação" control={<Radio />} label="Informação" />
                    <FormControlLabel value="Agradecimento" control={<Radio />} label="Agradecimento" />
                    <FormControlLabel value="Denúncia" control={<Radio />} label="Denúncia" />
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
            <EmConstrucao />
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
            <EmConstrucao />
            <CustomTextField label="Descreva a informação requisitada" name="informacaoRelato" value={props.informacaoRelato} onChange={props.onChange} />
            <AlertMessage severity="info" title='"Um momento, vamos buscar a resposta"'></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const DenunciaForm = props => {
    return (
        <Grid item xs={12}>
            <EmConstrucao />
            <AlertMessage severity="info" title='"Vamos transferir sua ligação para a Ouvidoria do GDF. Aguarde um momento"'></AlertMessage>
            <AlertMessage severity="error" title="Transfira a ligação par  número 162"></AlertMessage>
            <AlertMessage severity="error" title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"></AlertMessage>
            <AlertMessage severity="error" title="Classifique o atendimento como INFORMAÇÕES no campo CLASSIFICAÇÃO DA CHAMADA"></AlertMessage>
            <AlertMessage severity="error" title="Finalize o atendimento"></AlertMessage>
        </Grid>
    )
}

export const Agencias = () => {
    const options = [
        { value: 'bombeiro', label: 'CBMDF', checked: true },
        { value: 'policia_militar', label: 'PMDF' },
        { value: 'samu', label: 'SAMU' },
        { value: 'policia_civil', label: 'PCDF' },
        { value: 'transito_urbano', label: 'DETRAN' },
        { value: 'transito_rodovia', label: 'DER' },
        { value: 'outros', label: 'Outros' }
    ];

    return <CheckboxGroup options={options} legend="Quais Agências atuarão nessa ocorrência?" />;
};

export const NaturezasForm = props => {

    const handleChange = (event) => {
        props.onChange({ ...props.value, [event.target.name]: event.target.checked });
    };

    return (
        <Grid item xs={12}>
            <FormControl component="fieldset">
                <FormLabel component="legend">Identifique os Grupos de Natureza</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        control={<Checkbox color="primary" checked={props.value.ocorrencia} onChange={handleChange} name="grupoNaturezaAPH" />}
                        label="Atendimento Pré-Hospitalar"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.value.ligacaoMuda} onChange={handleChange} name="grupoNaturezaSalvamento" />}
                        label="Salvamento"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.value.trote} onChange={handleChange} name="grupoNaturezaIncendio" />}
                        label="Incêndio"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.value.quedaLigacao} onChange={handleChange} name="grupoNaturezaOutros" />}
                        label="Outros"
                    />
                </FormGroup>
            </FormControl>
        </Grid>
    )
}