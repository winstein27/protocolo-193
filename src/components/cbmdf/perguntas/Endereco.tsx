import { useFormContext } from "react-hook-form";
import FormInputSelect from "../../form-components/FormInputSelect";
import { AlertMessage } from "../../structure";
import cidadesData from "@site/src/static/js/cidades.json";

const Endereco = () => {
  const { control } = useFormContext();

  const ufs = Object.keys(cidadesData);
  const ufOpcoes = ufs.map((uf) => {
    return { label: uf, value: uf };
  });

  return (
    <>
      <AlertMessage severity="info" title='"De qual cidade está falando?"' />
      <FormInputSelect
        control={control}
        name="ufOcorrencia"
        label="UF"
        defaultValue="DF"
        opcoes={ufOpcoes}
      />
    </>
  );
};

export default Endereco;
