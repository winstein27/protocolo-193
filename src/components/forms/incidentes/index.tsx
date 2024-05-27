import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CheckboxGroup } from "@site/src/components/structure";

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
