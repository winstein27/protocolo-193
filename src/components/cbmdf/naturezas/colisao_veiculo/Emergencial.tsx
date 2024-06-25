import { Grid } from "@mui/material";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";

const Emergencial = () => {
  return (
    <Grid>
      <AlertMessage
        severity="info"
        title='"Quais veículos envolvidos?"'
      ></AlertMessage>
      <AlertMessage
        severity="info"
        title='"Está vazando combusível?"'
      ></AlertMessage>
      <AlertMessage
        severity="info"
        title='"Veículos estão na via?"'
      ></AlertMessage>
    </Grid>
  );
};

export default Emergencial;
