import { useFormContext } from "react-hook-form";
import FormInputSelect from "../../form-components/FormInputSelect";
import { AlertMessage, UnidadesTable } from "../../structure";
import cidadesData from "@site/src/static/js/cidades.json";
import { Grid } from "@mui/material";
import TabelaUnidades from "../../data-display/TabelaUnidades";

const ufs = Object.keys(cidadesData).map((uf) => ({ label: uf, value: uf }));

const Endereco = () => {
  const { control, watch } = useFormContext();

  const ufOcorrenciaValue = watch("ufOcorrencia");
  const cidadeOcorrenciaValue = watch("cidadeOcorrencia");

  const cidades = Object.keys(cidadesData[ufOcorrenciaValue]).map((uf) => ({
    label: uf,
    value: uf,
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

      {ufOcorrenciaValue !== "DF" && !!cidadeOcorrenciaValue && (
        <Grid>
          <AlertMessage
            severity="info"
            title={`Você ligou para o Distrito Federal, mas vamos lhe transferir para ${cidadeOcorrenciaValue}`}
          ></AlertMessage>
          {/* {protocoloEmergencialBoolean && (
            <AlertMessage
              severity="info"
              title={`Enquanto transferimos, vamos iniciar o protocolo de ${protocoloEmergencialNome} ok?`}
            ></AlertMessage>
          )} */}
          <AlertMessage
            severity="info"
            title={`Aguarde na linha e, caso a ligação caia, faça contato novamente`}
          ></AlertMessage>
          <AlertMessage
            severity="error"
            title="Clique abaixo para copiar o telefone da Unidade"
          ></AlertMessage>
          <TabelaUnidades
            uf={ufOcorrenciaValue}
            cidade={cidadeOcorrenciaValue}
          />
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
          {/* {protocoloEmergencialBoolean && (
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
          )}
          {!protocoloEmergencialBoolean && (
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
              <InputCopy title="Narrativa" value={narrativa} />
            </Grid>
          )} */}
        </Grid>
      )}
    </>
  );
};

export default Endereco;
