import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CheckboxGroup } from "@site/src/components/structure";
import { Controller, useFormContext } from "react-hook-form";

interface Props {
  opcoes: { label: string; value: string }[];
}

export const ClassificacaoChamadaForm = (props: Props) => {
  const { control } = useFormContext();

  const generateRadioOptions = () => {
    return props.opcoes.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Grid item xs={12}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Identifique o Tipo de Chamada</FormLabel>
        <Controller
          name="tipoAtendimento"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup value={value} onChange={onChange} row>
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
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
