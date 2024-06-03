import { Grid } from "@mui/material";
import { useFormContext } from "react-hook-form";
import LigacaoMudaForm from "./naoIncidente/ligacaoMudaForm";
import QuedaLigacaoForm from "./naoIncidente/quedaLigacaoForm";
import TroteForm from "./naoIncidente/troteForm";
import InformacaoForm from "./naoIncidente/informacaoForm";
import AgradecimentoForm from "./naoIncidente/agradecimentoForm";
import DenunciaForm from "./naoIncidente/denunciaForm";
import FormInputRadio from "../../form-components/FormInputRadio";

const opcoes = [
  {
    label: "Ligação Muda",
    value: "mudo",
  },
  {
    label: "Trote",
    value: "trote",
  },
  {
    label: "Queda de Ligação",
    value: "queda",
  },
  {
    label: "Informação",
    value: "info",
  },
  {
    label: "Agradecimento",
    value: "agradecimento",
  },
  {
    label: "Denúncia",
    value: "denuncia",
  },
];

const NaoIncidente = () => {
  const { watch, control } = useFormContext();
  const tipoAtendimento = watch("tipoAtendimento");

  return (
    <Grid>
      <FormInputRadio
        control={control}
        label="Identifique o Tipo de Chamada"
        name="tipoAtendimento"
        opcoes={opcoes}
      />

      {tipoAtendimento === "mudo" && <LigacaoMudaForm />}
      {tipoAtendimento === "queda" && <QuedaLigacaoForm />}
      {tipoAtendimento === "trote" && <TroteForm />}
      {tipoAtendimento === "info" && <InformacaoForm />}
      {tipoAtendimento === "agradecimento" && <AgradecimentoForm />}
      {tipoAtendimento === "denuncia" && <DenunciaForm />}
    </Grid>
  );
};

export default NaoIncidente;
