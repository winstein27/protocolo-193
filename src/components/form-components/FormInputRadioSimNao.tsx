import { Grid } from "@mui/material";
import { AlertMessage } from "../structure";
import FormInputRadio from "./FormInputRadio";
import { Control, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label?: string;
  name: string;
  defaultValue?: string;
}

const FormInputRadioSimNao = (props: Props) => {
  return (
    <Grid>
      {!!props.label && (
        <AlertMessage severity="info" title={props.label}></AlertMessage>
      )}
      <FormInputRadio
        control={props.control}
        name={props.name}
        opcoes={[
          { label: "Não", value: "nao" },
          { label: "Sim", value: "sim" },
        ]}
        defaultValue={props.defaultValue || "nao"}
      />
    </Grid>
  );
};

export default FormInputRadioSimNao;
