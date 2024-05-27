export default interface IFormInput {
  incidenteBoolean: boolean;
  naturezaAgenciaBoolean: boolean;
  ocorrenciaRelato: string;
  tipoAtendimento: string;
  ufOcorrencia: string;
  cidadeOcorrencia: string;
  endereco: string;
  pontoReferenciaBoolean: boolean;
  pontoReferencia: string;
  narrativa: string;
  grupoNatureza: {
    grupoNaturezaAPH: boolean;
    grupoNaturezaSalvamento: boolean;
    grupoNaturezaIncendio: boolean;
    grupoNaturezaOutros: boolean;
  };
  naturezas: string[];
  tags: string[];
  tagStates: {
    vitimas: {
      quantidadeVitimas: number;
      estadoVitima: string;
      estadoVitimaOutroText: string;
      estadoVitimaOutroEmergencialBoolean: boolean;
    };
    ovace: {
      confirmaOVACE: boolean;
    };
    incendio_vegetacao: {
      pessoasBoolean: boolean;
      animaisBoolean: boolean;
      residenciasBoolean: boolean;
      origemBoolean: boolean;
      origemText: string;
      irEstradaBoolean: boolean;
    };
    captura_inseto: {
      insetosAtacandoBoolean: boolean;
      localInsetos: string;
      alturaEnxame: string;
    };
    suicidio: {
      statusSuicidio: string;
      tentante: string;
    };
  };
  ocorrenciaEmergencial: boolean;
  protocoloEmergencialBoolean: boolean;
  protocoloEmergencialNome: string;
  descricao: string;
  nomeSolicitante: string;
  telefoneSolicitanteBoolean: boolean;
  telefoneSolicitanteNumber: string;
}
