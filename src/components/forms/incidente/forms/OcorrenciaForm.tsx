import FormInputAutoComplete from "@site/src/components/form-components/FormInputAutoComplete";
import { useFormContext } from "react-hook-form";
import naturezasList from "@site/src/static/js/naturezas.json";
import { Grid } from "@mui/material";
import { CBMDFForm } from "../../../cbmdf";
import Endereco from "@site/src/components/cbmdf/perguntas/endereco/Index";

const naturezasOrdenadas = naturezasList.sort((a, b) =>
  a.nome.localeCompare(b.nome)
);

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]/g, "");
};

const filtraNaturezas = (naturezas: any, descricao: string) => {
  const excludedWords = [
    "e",
    "ou",
    "para",
    "com",
    "de",
    "da",
    "do",
    "em",
    "no",
    "na",
    "os",
    "as",
    "um",
    "uma",
    "uns",
    "umas",
    "por",
    "que",
    "se",
    "como",
    "com",
    "no",
    "nos",
    "na",
    "nas",
    "num",
    "numa",
    "nuns",
    "numas",
    "neste",
    "nesta",
    "nestes",
    "nestas",
    "esse",
    "essa",
    "esses",
    "essas",
    "isto",
    "isso",
    "aquele",
    "aquela",
    "aqueles",
    "aquelas",
    "onde",
    "quando",
    "qual",
    "quais",
    "por que",
    "porque",
    "a",
    "o",
  ]; // Lista expandida de palavras a serem excluídas
  const inputWords = descricao
    .trim()
    .toLowerCase()
    .split(" ")
    .map((word) => normalizeString(word))
    .filter((word) => !excludedWords.includes(word)); // Usando as palavras da descrição para a pesquisa
  const naturezasFiltradas = naturezas.filter((natureza) => {
    const tags_pesquisa = natureza.pesquisa || [];
    // Verificar se pelo menos uma das palavras da descrição (excluindo as palavras comuns) está presente em alguma tag
    return inputWords.some((inputWord) => {
      return tags_pesquisa.some((tag_pesquisa) =>
        tag_pesquisa.toLowerCase().includes(inputWord)
      );
    });
  });
  return naturezasFiltradas;
};

const OcorrenciaForm = () => {
  const { control, watch } = useFormContext();

  const descricaoValue = watch("descricao");
  const naturezas = watch("naturezas");

  return (
    <>
      <FormInputAutoComplete
        control={control}
        label="Naturezas"
        name="naturezas"
        options={naturezasOrdenadas}
        optionLabel={(option: any) => option.nome}
        filterOptions={() =>
          filtraNaturezas(naturezasOrdenadas, descricaoValue)
        }
      />

      {naturezas.length > 0 && (
        <Grid item xs={12}>
          {
            // QUANDO - CLASSIFICAR COMO EMERGENCIAL / NÃO EMERGENCIAL (DEFINIR QUANDO SERÃO ENVIADOS OS RECURSOS)
            <Grid>
              {/* // Dados EMERGENCIAIS */}
              <CBMDFForm tags={naturezas[0].tags} />
              <Endereco />
            </Grid>
          }{" "}
        </Grid>
      )}
    </>
  );
};

export default OcorrenciaForm;
