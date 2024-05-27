import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import {
  AlertMessage,
  CheckboxGroup,
  CustomTextField,
  EmConstrucao,
  InputCopy,
} from "@site/src/components/structure";

export const ClassificacaoChamadaForm = (props) => {
  const handleChange = (newValue) => {
    props.onChange(newValue);
  };

  return (
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Identifique o Tipo de Chamada</FormLabel>
        <RadioGroup
          row
          aria-label="Tipo de Atendimento"
          name="tipoAtendimento"
          value={props.value}
          onChange={(event) => handleChange(event.target.value)}
        >
          <FormControlLabel
            value="Ligação Muda"
            control={<Radio />}
            label="Ligação Muda"
          />
          <FormControlLabel value="Trote" control={<Radio />} label="Trote" />
          <FormControlLabel
            value="Queda de Ligação"
            control={<Radio />}
            label="Queda de Ligação"
          />
          <FormControlLabel
            value="Informação"
            control={<Radio />}
            label="Informação"
          />
          <FormControlLabel
            value="Agradecimento"
            control={<Radio />}
            label="Agradecimento"
          />
          <FormControlLabel
            value="Denúncia"
            control={<Radio />}
            label="Denúncia"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
};

export const LigacaoMudaForm = (props) => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Por falta de comunicação, esta ligação será encerrada"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o número que efetuou a ligação"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Cole o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o texto abaixo"
      ></AlertMessage>
      <InputCopy field="Narrativa" value={`LIGAÇÃO MUDA`} />
      <AlertMessage
        severity="error"
        title="Cole o texto no campo NARRATIVA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const QuedaLigacaoForm = (props) => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Comunicação encerrada por queda de ligação"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o número que efetuou a ligação"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Cole o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como MUDO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Copie o texto abaixo"
      ></AlertMessage>
      <InputCopy field="Narrativa" value={`QUEDA DE LIGAÇÃO`} />
      <AlertMessage
        severity="error"
        title="Cole o texto no campo NARRATIVA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const TroteForm = (props) => {
  return (
    <Grid item xs={12}>
      <AlertMessage
        severity="info"
        title='"Informamos que esta chamada foi realizada pelo número ******* e será registrada como trote para envio a Polícia Civil"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como TROTE no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const InformacaoForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <CustomTextField
        label="Descreva a informação requisitada"
        name="informacaoRelato"
        value={props.informacaoRelato}
        onChange={props.onChange}
      />
      <AlertMessage
        severity="info"
        title='"Um momento, vamos buscar a resposta"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como INFORMAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const AgradecimentoForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <CustomTextField
        label="Descreva a informação requisitada"
        name="informacaoRelato"
        value={props.informacaoRelato}
        onChange={props.onChange}
      />
      <AlertMessage
        severity="info"
        title='"Um momento, vamos buscar a resposta"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como QUEDA DE LIGAÇÃO no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const DenunciaForm = (props) => {
  return (
    <Grid item xs={12}>
      <EmConstrucao />
      <AlertMessage
        severity="info"
        title='"Vamos transferir sua ligação para a Ouvidoria do GDF. Aguarde um momento"'
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Transfira a ligação para o número 162"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Classifique o atendimento como INFORMAÇÕES no campo CLASSIFICAÇÃO DA CHAMADA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Finalize o atendimento"
      ></AlertMessage>
    </Grid>
  );
};

export const Agencias = () => {
  const options = [
    { value: "bombeiro", label: "Corpo de Bombeiros", checked: true },
    { value: "policia_militar", label: "Polícia Militar" },
    { value: "samu", label: "SAMU" },
    { value: "policia_civil", label: "Polícia Civil" },
    { value: "transito_urbano", label: "DETRAN" },
    { value: "transito_rodovia_estadual", label: "DER" },
    { value: "transito_rodovia_federal", label: "PRF" },
    { value: "outros", label: "Outros" },
  ];

  return (
    <CheckboxGroup
      options={options}
      legend="Quais Agências atuarão nessa ocorrência?"
    />
  );
};
