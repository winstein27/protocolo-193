import AlertMessage from "./AlertMessage";

interface Props {
  message?: string;
}

const EmConstrucao = (props: Props) => {
  return (
    <AlertMessage
      severity="warning"
      title="Aba em Construção"
      message={props.message}
    />
  );
};

export default EmConstrucao;
