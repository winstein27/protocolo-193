import { FormControl, FormLabel, Switch } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label: string;
  name: string;
}

const FormInputSwitch = (props: Props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange } }) => (
        <FormControl component="fieldset">
          <FormLabel component="legend">{props.label}</FormLabel>
          <Switch
            onChange={onChange}
            inputProps={{ "aria-label": props.label }}
          />
        </FormControl>
      )}
    />
  );
};

export default FormInputSwitch;
