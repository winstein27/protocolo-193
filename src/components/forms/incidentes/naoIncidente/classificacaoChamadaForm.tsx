import { Grid } from "@mui/material";
import FormInputRadio from "@site/src/components/form-components/FormInputRadio";
import { CheckboxGroup } from "@site/src/components/structure";
import { useFormContext } from "react-hook-form";

interface Props {
  opcoes: { label: string; value: string }[];
}

export const ClassificacaoChamadaForm = (props: Props) => {
  const { control } = useFormContext();

  return (
    <Grid item xs={12}>
      <FormInputRadio
        control={control}
        label="Identifique o Tipo de Chamada"
        name="tipoAtendimento"
        opcoes={props.opcoes}
      />
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
