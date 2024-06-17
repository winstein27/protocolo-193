import { useFormContext } from "react-hook-form";
import FormInputSelect from "../../../form-components/FormInputSelect";
import cidadesData from "@site/src/static/js/cidades.json";
import ForaDF from "./ForaDF";
import DF from "./DF";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";

const ufs = Object.keys(cidadesData).map((uf) => ({ label: uf, value: uf }));

const Endereco = () => {
  const { control, watch } = useFormContext();

  const ufOcorrenciaValue = watch("ufOcorrencia");
  const cidadeOcorrenciaValue = watch("cidadeOcorrencia");

  const cidades = Object.keys(cidadesData[ufOcorrenciaValue]).map((cidade) => ({
    label: cidade,
    value: cidade,
  }));

  return (
    <>
      <AlertMessage severity="info" title='"De qual cidade está falando?"' />
      <FormInputSelect
        control={control}
        name="ufOcorrencia"
        label="UF"
        defaultValue="DF"
        opcoes={ufs}
      />

      <FormInputSelect
        control={control}
        name="cidadeOcorrencia"
        opcoes={cidades}
        label="Cidade do solicitante"
      />

      {ufOcorrenciaValue !== "DF" && !!cidadeOcorrenciaValue && <ForaDF />}
      {ufOcorrenciaValue === "DF" && !!cidadeOcorrenciaValue && <DF />}
    </>
  );
};

export default Endereco;
