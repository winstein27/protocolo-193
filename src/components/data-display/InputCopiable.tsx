import { FormLabel, Grid, IconButton, TextField, Tooltip } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { useState } from "react";

interface Props {
  label: string;
  value: string;
}

const InputCopiable = (props: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const narrativa = props.value;
    navigator.clipboard.writeText(narrativa);
    setCopied(true);
  };

  return (
    <Grid item xs={12}>
      <FormLabel component="legend">{props.label}</FormLabel>
      <TextField
        sx={{
          backgroundColor: "rgba(0, 255, 0, 0.1)",
        }}
        multiline
        fullWidth
        value={props.value}
        InputProps={{
          disabled: true,
          endAdornment: (
            <IconButton onClick={handleCopy} aria-label="copy">
              <Tooltip title={copied ? "Copiado!" : ""} placement="top">
                <FileCopyIcon />
              </Tooltip>
            </IconButton>
          ),
        }}
      />
    </Grid>
  );
};

export default InputCopiable;
