import { FormControl, FormLabel, Grid, MenuItem, Select } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label?: string;
  name: string;
  defaultValue?: string;
  opcoes: { label: string; value: string }[];
}

const FormInputSelect = (props: Props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      render={({ field }) => (
        <Grid item xs={12}>
          <FormControl>
            {!!props.label && (
              <FormLabel component="legend">{props.label}</FormLabel>
            )}
            <Select {...field}>
              {props.opcoes.map((opcao, i) => (
                <MenuItem value={opcao.value} key={i}>
                  {opcao.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      )}
    />
  );
};

export default FormInputSelect;
