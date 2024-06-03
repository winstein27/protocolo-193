import { CheckboxGroup } from "@site/src/components/structure";

export const Agencias = () => {
  const options = [
    { value: "bombeiro", label: "Corpo de Bombeiros", checked: true },
    { value: "policia_militar", label: "Polícia Militar" },
    { value: "samu", label: "SAMU" },
    { value: "policia_civil", label: "Polícia Civil" },
    { value: "transito_urbano", label: "DETRAN" },
    { value: "transito_rodovia_estadual", label: "DER" },
    { value: "transito_rodovia_federal", label: "PRF" },
    { value: "outros", label: "Outros" },
  ];

  return (
    <CheckboxGroup
      options={options}
      legend="Quais Agências atuarão nessa ocorrência?"
    />
  );
};
