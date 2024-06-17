import { Alert, AlertTitle, FormLabel, Grid } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  severity: "error" | "info" | "warning";
  message?: string;
}

const AlertMessage = (props: Props) => {
  return (
    <Grid item xs={12} sx={{ mt: 4, mb: 4 }}>
      {props.severity === "error" && (
        <FormLabel component="legend">Registre no sistema</FormLabel>
      )}
      <Alert severity={props.severity}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
    </Grid>
  );
};

export default AlertMessage;
