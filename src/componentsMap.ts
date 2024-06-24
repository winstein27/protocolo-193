import CapturaInsetoEmergencial from "./components/cbmdf/naturezas/captura_inseto/Emergencial";
import CapturaInsetoNaoEmergencial from "./components/cbmdf/naturezas/captura_inseto/NaoEmergencial";
import OVACEEmergencial from "./components/cbmdf/naturezas/ovace/Emergencial";
import Emergencial from "./components/cbmdf/naturezas/suicidio/Emergencial";

// Componentes correspondentes às tags
const emergenciais = {
  // vitimas: Vitimas,
  captura_inseto: CapturaInsetoEmergencial,
  // colisao_veiculo: ColisaoVeiculo,
  // incendio_vegetacao: IncendioVegetacao,
  ovace: OVACEEmergencial,
  suicidio: Emergencial,

  // afogamento: Afogamento,
  // incendio_edificacao: IncendioEdificacao,
  // incendio_residencia: IncendioResidencia,
  // incendio_veiculo: IncendioVeiculo,
  // pcr: ParadaCardiorrespiratoria,
  // queda_propria_altura: QuedaPropriaAltura,
  // queimadura: Queimadura,
  // vazamento_gas: VazamentoGas,
  // produto_perigoso: ProdutoPerigoso,
  // arma_fogo: ArmaFogo,
  // arma_branca: ArmaBranca,
  // animal_abandonado: AnimalAbandonado,
  // tentativa_suicidio: TentativaSuicidio,
  // suicidio_consumado: SuicidioConsumado
};

const naoEmergenciais = {
  captura_inseto: CapturaInsetoNaoEmergencial,
};

export { emergenciais, naoEmergenciais };
