import { Autocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label: string;
  name: string;
  options: any;
  optionLabel: (option: any) => any;
  filterOptions?: () => any;
}

const FormInputAutoComplete = (props: Props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { ref, ...field } }) => (
        <Autocomplete
          multiple
          id="tags-standard"
          options={props.options}
          getOptionLabel={props.optionLabel}
          filterOptions={props.filterOptions}
          onChange={(e, value) => field.onChange(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label={props.label}
              placeholder={props.label}
            />
          )}
        />
      )}
    />
  );
};

export default FormInputAutoComplete;
