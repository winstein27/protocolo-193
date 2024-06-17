import { Button, Grid } from "@mui/material";
import { EmergencialContext } from "@site/src/components/Start";
import TabelaUnidades from "@site/src/components/data-display/TabelaUnidades";
import {
  AlertMessage,
  EmConstrucao,
  InputCopy,
} from "@site/src/components/structure";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const ForaDF = () => {
  const { watch } = useFormContext();
  const { emergencial, protocoloEmergencialNome } =
    useContext(EmergencialContext);

  const ufOcorrenciaValue = watch("ufOcorrencia");
  const cidadeOcorrenciaValue = watch("cidadeOcorrencia");
  const ocorrenciaEmergencialValue = watch("ocorrenciaEmergencial");
  const protocoloEmergencialBooleanValue = watch("protocoloEmergencialBoolean");
  const naturezasValue = watch("naturezas");

  const gerarNarrativa = () => {
    let narrativa = "";

    if (ocorrenciaEmergencialValue)
      narrativa += "## OCORRÊNCIA EMERGENCIAL ##\n\n";

    if (protocoloEmergencialBooleanValue)
      narrativa += `## PROTOCOLO DE ${protocoloEmergencialNome} INICIADO PELA CENTRAL DE OPERAÇÕES  ##\n\n`;

    narrativa += `Ocorrência fora da circunscrição\nTransferida para ${cidadeOcorrenciaValue} - ${ufOcorrenciaValue}\n\n`;
    narrativa += `Natureza(s): ${naturezasValue
      .map((item) => item.nome.toUpperCase())
      .join(", ")}\n`;

    return narrativa;
  };

  return (
    <Grid>
      <AlertMessage
        severity="info"
        title={`Você ligou para o Distrito Federal, mas vamos lhe transferir para ${cidadeOcorrenciaValue}`}
      ></AlertMessage>
      {emergencial && (
        <AlertMessage
          severity="info"
          title={`Enquanto transferimos, vamos iniciar o protocolo de ${protocoloEmergencialNome} ok?`}
        ></AlertMessage>
      )}
      <AlertMessage
        severity="info"
        title={`Aguarde na linha e, caso a ligação caia, faça contato novamente`}
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Clique abaixo para copiar o telefone da Unidade"
      ></AlertMessage>
      <TabelaUnidades uf={ufOcorrenciaValue} cidade={cidadeOcorrenciaValue} />
      <AlertMessage
        severity="error"
        title="No ISSABEL, clique em TRANSFERIR"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Cole o número da Unidade"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Clique em TRANSFERÊNCIA ASSISTIDA"
      ></AlertMessage>
      <AlertMessage
        severity="error"
        title="Aguarde o atendente na outra linha atender para desligar a chamada"
      ></AlertMessage>
      {emergencial ? (
        <a href={`socorro_teleatendimento/${protocoloEmergencialNome}`}>
          <Button
            size="large"
            variant="contained"
            color="error"
            startIcon={<LocalHospitalIcon />}
          >
            INICIAR PROTOCOLO {protocoloEmergencialNome}
          </Button>
        </a>
      ) : (
        <Grid>
          <EmConstrucao message="Se atendente da outra ponta não atender, cadastrar a ocorrência e enviar" />
          <AlertMessage
            severity="error"
            title="No SINESPCAD, lance o número que efetuou a ligação no campo NÚMERO DO TELEFONE"
          ></AlertMessage>
          <AlertMessage
            severity="error"
            title="Classifique o atendimento como CHAMADA TRANSFERIDA no campo CLASSIFICAÇÃO DA CHAMADA"
          ></AlertMessage>
          <AlertMessage
            severity="error"
            title="Copie e Cole a Narrativa abaixo no campo NARRATIVA"
          ></AlertMessage>
          <InputCopy title="Narrativa" value={gerarNarrativa()} />
        </Grid>
      )}
    </Grid>
  );
};

export default ForaDF;
