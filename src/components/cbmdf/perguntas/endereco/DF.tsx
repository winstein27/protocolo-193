import { Button, Grid } from "@mui/material";
import { EmergencialContext } from "@site/src/components/Start";
import { InputCopy } from "@site/src/components/structure";
import { useContext } from "react";
import FormInputText from "@site/src/components/form-components/FormInputText";
import { useFormContext } from "react-hook-form";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FormInputRadioSimNao from "@site/src/components/form-components/FormInputRadioSimNao";
import AlertMessage from "@site/src/components/data-display/messages/AlertMessage";
import EmConstrucao from "@site/src/components/data-display/messages/EmConstrução";

const DF = () => {
  const { emergencial, protocoloEmergencialNome } =
    useContext(EmergencialContext);
  const { control, watch } = useFormContext();

  const enderecoValue = watch("endereco");
  const ufOcorrenciaValue = watch("ufOcorrencia");
  const cidadeOcorrenciaValue = watch("cidadeOcorrencia");
  const naturezasValue = watch("naturezas");
  const pontoReferenciaValue = watch("pontoReferencia");
  const nomeSolicitanteValue = watch("nomeSolicitante");
  const ocorrenciaRelatoValue = watch("ocorrenciaRelato");
  const telefoneSolicitanteBooleanValue = watch("telefoneSolicitanteBoolean");

  // ADICIONAR DADOS DA NATUREZA
  const gerarNarrativa = (): string => {
    let narrativa = "";

    if (emergencial) narrativa += "## OCORRÊNCIA EMERGENCIAL ##\n\n";
    if (!!protocoloEmergencialNome)
      narrativa += `## PROTOCOLO DE ${protocoloEmergencialNome} INICIADO PELA CENTRAL DE OPERAÇÕES  ##\n\n`;

    narrativa += `Natureza(s): ${naturezasValue
      .map((natureza) => natureza.nome.toUpperCase())
      .join(", ")}\n`;

    narrativa += `Endereço: ${enderecoValue.toUpperCase()} - ${cidadeOcorrenciaValue.toUpperCase()} - ${ufOcorrenciaValue}\n`;

    if (!!pontoReferenciaValue)
      narrativa += `Ponto de Referência: ${pontoReferenciaValue.toUpperCase()}\n`;
    if (!!nomeSolicitanteValue)
      narrativa += `Nome do Solicitante: ${nomeSolicitanteValue.toUpperCase()}\n`;
    if (!!ocorrenciaRelatoValue)
      narrativa += `\nInformações Complementares: ${ocorrenciaRelatoValue}`;

    return narrativa;
  };

  return (
    <Grid>
      {emergencial ? (
        <AlertMessage
          severity="info"
          title="Ok, vamos cadastrar o endereço para que o socorro chegue o quanto antes. Me confirme seu endereço completo por favor"
        />
      ) : (
        <AlertMessage
          severity="info"
          title="Me confirme seu endereço completo por favor"
        />
      )}
      <FormInputText control={control} label="Endereço" name="endereco" />
      <AlertMessage
        severity="info"
        title='"Tem algum ponto de referência ou complemento?"'
      />
      <FormInputText
        control={control}
        label="Ponto de referência"
        name="pontoReferencia"
      />
      <AlertMessage
        severity="info"
        title='"Um momento, vamos enviar a ocorrência para o socorro mais próximo"'
      />
      <AlertMessage severity="error" title="Copie o endereço abaixo" />
      <InputCopy
        field="Endereço"
        value={`${enderecoValue.toUpperCase()} - ${cidadeOcorrenciaValue.toUpperCase()} - ${ufOcorrenciaValue}`}
      />
      <AlertMessage
        severity="error"
        title="Cole o endereço na aba de PESQUISA do Google Maps"
      />
      <AlertMessage severity="error" title="Clique na opção que surgir" />
      <AlertMessage
        severity="error"
        title="Confirme no mapa se o endereço caiu no lugar correto. Caso tenha caído em outro local, digite o endereço de forma reduzida ou indique o localizador manualmente"
      />
      <AlertMessage severity="info" title='"Só mais um momento"' />

      {/* CADASTRO INICIAL */}
      <Grid>
        <AlertMessage severity="error" title="Copie o texto abaixo" />
        <InputCopy
          field="Narrativa"
          value={`${gerarNarrativa()}\n## CADASTRO EM ANDAMENTO NA COCB - AGUARDE MAIS INFORMAÇÕES ##`}
        />
        <AlertMessage severity="error" title="Cole no campo NARRATIVA" />
        <AlertMessage
          severity="error"
          title="Clique em 'ENCAMINHAR E CONTINUAR EDIÇÃO"
        />
      </Grid>
      {emergencial ? (
        // INÍCIO DE PROTOCOLO CASO NATUREZA TENHA PROCEDIMENTOS (OVACE, PCR, PARTO, TENTTIVA DE SUICÍDIO)
        <Grid>
          <AlertMessage
            severity="info"
            title={`A ocorrência já foi cadastrada e o socorro será enviado. Vamos iniciar o protocolo de ${protocoloEmergencialNome} ok?`}
          />
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
        </Grid>
      ) : (
        // CASO NÃO HAJA PROTOCOLO EMERGENCIAL, SEGUIMOS COM O ATENDIMENTO
        <Grid>
          <AlertMessage
            severity="info"
            title='"A ocorrência já foi cadastrada e encaminhada para a unidade mais próxima, ok? Agora vamos complementar alguns dados"'
          />
          {/* INFORMAÇÕES DO SOLICITANTE */}
          <Grid>
            <AlertMessage severity="info" title='"Qual o seu nome?"' />
            <FormInputText
              control={control}
              label="Nome do Solicitante"
              name="nomeSolicitante"
            />

            <AlertMessage
              severity="info"
              title='"Seu telefone é o final "XXXX"?"'
              message="Informe os 4 últimos dígitos"
            />

            <FormInputRadioSimNao
              control={control}
              name="telefoneSolicitanteBoolean"
            />
            {telefoneSolicitanteBooleanValue === "nao" && (
              <Grid>
                <AlertMessage
                  severity="info"
                  title='"Informe o número correto por favor"'
                />

                <FormInputText
                  control={control}
                  label="Telefone do Solicitante"
                  name="telefoneSolicitanteNumber"
                />
              </Grid>
            )}
          </Grid>

          {/* QUEM/QUANTO - RECURSOS EMPREGADOS - SOLICITAÇÃO DE OUTROS RECURSOS */}
          <Grid>
            <EmConstrucao message="Verificar se é necessário o encaminhamento para outras agências" />
          </Grid>
          {/* CONCLUSÃO */}
          <Grid>
            <AlertMessage
              severity="info"
              title="Deseja acrescentar mais alguma informação?"
            />
            <FormInputText
              control={control}
              label="Insira mais observações"
              name="ocorrenciaRelato"
            />

            <AlertMessage severity="error" title="Copie o texto abaixo" />
            <InputCopy field="Narrativa" value={gerarNarrativa()} />
            <AlertMessage severity="error" title="Cole no campo NARRATIVA" />
            <AlertMessage
              severity="error"
              title="Clique em 'FINALIZAR EDIÇÃO"
            />
            <AlertMessage
              severity="info"
              title='"O registro foi finalizado. Qualquer apoio que precisar, pode nos ligar novamente"'
            />
            <AlertMessage
              severity="error"
              title="Aguarde o OK do solicitante"
            />
            <AlertMessage
              severity="info"
              title='"Informamos também que, nos próximos dias, você receberá em seu Whatsapp uma Pesquisa de Satisfação do atendimento do CBMDF. Seu retorno é muito importante para a melhoria dos nossos serviços"'
            />
            <AlertMessage
              severity="error"
              title="Aguarde o OK do solicitante"
            />
            <AlertMessage
              severity="info"
              title='"Conte sempre com o Corpo de Bombeiros"'
            />
            <AlertMessage severity="error" title="Finalize o atendimento" />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default DF;
