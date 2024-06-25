import { Grid } from "@mui/material";
import { AlertMessage } from "@site/src/components/structure";

const NaoEmergencial = () => {
  return (
    <Grid>
      <AlertMessage
        severity="info"
        title='"Qual a placa dos veículos?"'
      ></AlertMessage>
    </Grid>
  );
};

export default NaoEmergencial;
