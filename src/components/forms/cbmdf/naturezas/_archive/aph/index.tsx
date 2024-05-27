import { Grid } from "@mui/material";

export const APHForm = (props) => {
  return (
    <Grid>
      <h3>INSERIR FLUXOS MERMAID NO REACT</h3>
      <p>EMERGENCIA MEDICA</p>
      <p>Quantidade de Vítimas</p>
      <p>Para cada pessoa:</p>
      <p>
        Como ela está? Respira, não respira, respira com dificuldade, engasgada?
      </p>
      <p>Apresenta Hemorragia?</p>
      <p>Suspeita de AVC?</p>
      <p>Trauma?</p>
      <p>Se respira, não emergencial</p>
      <p>Se outros, emergencial</p>
    </Grid>
  );
};
