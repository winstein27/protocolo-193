import { Grid } from "@mui/material";

import { useFormContext } from "react-hook-form";
import { ClassificacaoChamadaForm } from ".";
import LigacaoMudaForm from "./naoIncidente/LigacaoMudaForm";
import QuedaLigacaoForm from "./naoIncidente/QuedaLigacaoForm";
import TroteForm from "./naoIncidente/TroteForm";
import InformacaoForm from "./naoIncidente/InformacaoForm";
import AgradecimentoForm from "./naoIncidente/AgradecimentoForm";
import DenunciaForm from "./naoIncidente/DenunciaForm";

const NaoIncidente = () => {
  const { watch } = useFormContext();
  const tipoAtendimento = watch("tipoAtendimento");

  return (
    <Grid>
      <ClassificacaoChamadaForm
        value={tipoAtendimento}
        // onChange={(value) => handleChange("tipoAtendimento", value)}
      />
      {tipoAtendimento === "Ligação Muda" && <LigacaoMudaForm />}
      {tipoAtendimento === "Queda de Ligação" && <QuedaLigacaoForm />}
      {tipoAtendimento === "Trote" && <TroteForm />}
      {tipoAtendimento === "Informação" && <InformacaoForm />}
      {tipoAtendimento === "Agradecimento" && <AgradecimentoForm />}
      {tipoAtendimento === "Denúncia" && <DenunciaForm />}
    </Grid>
  );
};

export default NaoIncidente;
