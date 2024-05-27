import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import {
  YesNoField,
  SwitchField,
  AlertMessage,
  InputCopy,
  CustomTextField,
} from "@site/src/components/structure";

const Formulario = () => {
  const [state, setState] = useState({
    pessoas: false,
    animais: false,
    residencias: false,
    origem: false,
    origemText: "",
    pessoaNoLocal: false,
    relato: "",
    endereco: "",
    narrativa: "",
    pontoReferencia: "",
    irEstrada: false,
    pontoReferenciaBoolean: false,
  });

  const {
    pessoas,
    animais,
    residencias,
    origem,
    origemText,
    relato,
    endereco,
    narrativa,
    pontoReferencia,
    irEstrada,
    pontoReferenciaBoolean,
  } = state;

  const handleChange = (field, value) => {
    setState((prevState) => ({ ...prevState, [field]: value }));
  };

  useEffect(() => {
    const text = `
RELATO DA OCORRÊNCIA: ${relato}

Endereço: ${endereco}
Ponto de Referência: ${pontoReferencia}

INFORMAÇÕES:
Há pessoas no local: ${pessoas ? "Sim" : "Não"}
Há animais no local: ${animais ? "Sim" : "Não"}
Incêndio ameaça residências: ${residencias ? "Sim" : "Não"}
Conseguiu identificar onde começou o incêndio: ${
      origem ? `Sim - ${origemText}` : "Não"
    }
Solicitante orientado a ir para ponto de melhor localização?: ${
      irEstrada ? "Sim" : "Não"
    }
  `;
    setState((prevState) => ({ ...prevState, narrativa: text }));
  }, [
    relato,
    endereco,
    pessoas,
    animais,
    residencias,
    origem,
    origemText,
    irEstrada,
    pontoReferencia,
    pontoReferenciaBoolean,
  ]);

  return (
    <Grid container spacing={2}>
      <CustomTextField
        label="O que está acontecendo?"
        name="relato"
        value={relato}
        onChange={handleChange}
      />
      <CustomTextField
        label="Qual o endereço?"
        name="endereco"
        value={endereco}
        onChange={handleChange}
      />
      <SwitchField
        label="Precisa de Ponto de Referência?"
        value={pontoReferenciaBoolean}
        onChange={(value) => handleChange("pontoReferenciaBoolean", value)}
      />
      {pontoReferenciaBoolean && (
        <CustomTextField
          label="Me dê um ponto de referência"
          name="pontoReferencia"
          value={pontoReferencia}
          onChange={handleChange}
        />
      )}

      <YesNoField
        label="Há pessoas no local?"
        value={pessoas}
        onChange={(value) => handleChange("pessoas", value)}
      />
      {pessoas && (
        <AlertMessage severity="warning" title="Informe ao Solicitante:">
          Por favor, peça pra todos se afastarem e ficarem em local seguro
        </AlertMessage>
      )}

      <YesNoField
        label="Há animais no local?"
        value={animais}
        onChange={(value) => handleChange("animais", value)}
      />
      {animais && (
        <AlertMessage severity="warning" title="Informe ao Solicitante:">
          Por favor, tente colocar todos em um local seguro
        </AlertMessage>
      )}

      <YesNoField
        label="Incêndio está ameaçando residências?"
        value={residencias}
        onChange={(value) => handleChange("residencias", value)}
      />

      <YesNoField
        label="Conseguiu identificar onde começou o incêndio?"
        value={origem}
        onChange={(value) => handleChange("origem", value)}
      />
      {origem && (
        <CustomTextField
          label="Onde começou?"
          name="origemText"
          value={origemText}
          onChange={handleChange}
        />
      )}

      <YesNoField
        label="Consegue ir para a estrada ou outro lugar onde possamos encontrá-lo facilmente?"
        value={irEstrada}
        onChange={(value) => handleChange("irEstrada", value)}
      />
      <AlertMessage severity="warning" title="Informe ao Solicitante:">
        {irEstrada
          ? "OK, leve o celular contigo. Vamos enviar uma equipe o quanto antes"
          : "OK, permaneça em local seguro e não tente combater o incêndio. Vamos enviar uma equipe o quanto antes"}
      </AlertMessage>

      <InputCopy field="Narrativa" value={narrativa} />
    </Grid>
  );
};

export default Formulario;
