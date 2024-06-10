import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Control, Controller, FieldValues } from "react-hook-form";

interface Props {
  control: Control<FieldValues>;
  label?: string;
  name: string;
  opcoes: { label: string; value: string }[];
  defaultValue?: string;
}

const FormInputRadio = (props: Props) => {
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
    <>
      <FormControl component="fieldset">
        {!!props.label && (
          <FormLabel component="legend">{props.label}</FormLabel>
        )}
        <Controller
          name={props.name}
          control={props.control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup
              value={value}
              onChange={onChange}
              row
              defaultValue={props.defaultValue}
            >
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
      </FormControl>
    </>
  );
};

export default FormInputRadio;
