import { FormLabel, TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label: string;
  name: string;
}

const FormInputText = (props: Props) => {
  return (
    <>
      <FormLabel component="legend">{props.label}</FormLabel>
      <Controller
        name={props.name}
        control={props.control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            fullWidth
            value={value}
            onChange={onChange}
            error={!!error}
          />
        )}
      />
    </>
  );
};

export default FormInputText;
