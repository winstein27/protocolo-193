import React from "react";
import { Grid } from "@mui/material";
import { AlertMessage } from "@site/src/components/structure";
import { useForm, FormProvider } from "react-hook-form";
import StartForm from "./forms/Index";

const defaultValues = {
  incidenteBoolean: false,
  naturezaAgenciaBoolean: false,
  ocorrenciaRelato: "",
  tipoAtendimento: "",
  ufOcorrencia: "DF",
  cidadeOcorrencia: "",
  endereco: "",
  pontoReferenciaBoolean: false,
  pontoReferencia: "",
  narrativa: "",
  grupoNatureza: {
    grupoNaturezaAPH: false,
    grupoNaturezaSalvamento: false,
    grupoNaturezaIncendio: false,
    grupoNaturezaOutros: false,
  },
  naturezas: [],
  tags: [],
  tagStates: {
    vitimas: {
      quantidadeVitimas: 1,
      estadoVitima: "",
      estadoVitimaOutroText: "",
      estadoVitimaOutroEmergencialBoolean: false,
    },
    ovace: {
      confirmaOVACE: false,
    },
    incendio_vegetacao: {
      pessoasBoolean: false,
      animaisBoolean: false,
      residenciasBoolean: false,
      origemBoolean: false,
      origemText: "",
      irEstradaBoolean: false,
    },
    captura_inseto: {
      insetosAtacandoBoolean: false,
      localInsetos: "",
      alturaEnxame: "",
    },
    suicidio: {
      statusSuicidio: "",
      tentante: "",
    },
  },
  ocorrenciaEmergencial: false,
  protocoloEmergencialBoolean: false,
  protocoloEmergencialNome: "",
  descricao: "",
  nomeSolicitante: "",
  telefoneSolicitanteBoolean: true,
  telefoneSolicitanteNumber: "",
};

const Formulario = () => {
  const methods = useForm({ defaultValues });

  return (
    <FormProvider {...methods}>
      <Grid>
        <form>
          <AlertMessage
            severity="info"
            title='"Bombeiros, Emergência, Distrito Federal"'
          >
            Repita até 3 vezes
          </AlertMessage>

          <StartForm />
        </form>
      </Grid>
    </FormProvider>
  );
};

export default Formulario;
