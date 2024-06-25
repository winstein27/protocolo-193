import CapturaInsetoEmergencial from "./components/cbmdf/naturezas/captura_inseto/Emergencial";
import CapturaInsetoNaoEmergencial from "./components/cbmdf/naturezas/captura_inseto/NaoEmergencial";
import ColisaoVeiculoEmergencial from "./components/cbmdf/naturezas/colisao_veiculo/Emergencial";
import ColisaoVeiculoNaoEmergencial from "./components/cbmdf/naturezas/colisao_veiculo/NaoEmergencial";
import IncendioVegetacaoEmergencial from "./components/cbmdf/naturezas/incendio_vegetacao/Emergencial";
import IncendioVegetacaoNaoEmergencial from "./components/cbmdf/naturezas/incendio_vegetacao/NaoEmergencial";
import OVACEEmergencial from "./components/cbmdf/naturezas/ovace/Emergencial";
import SuicidioEmergencial from "./components/cbmdf/naturezas/suicidio/Emergencial";

// Componentes correspondentes às tags
const emergenciais = {
  // vitimas: Vitimas,
  captura_inseto: CapturaInsetoEmergencial,
  colisao_veiculo: ColisaoVeiculoEmergencial,
  incendio_vegetacao: IncendioVegetacaoEmergencial,
  ovace: OVACEEmergencial,
  suicidio: SuicidioEmergencial,

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
  colisao_veiculo: ColisaoVeiculoNaoEmergencial,
  incendio_vegetacao: IncendioVegetacaoNaoEmergencial,
};

export { emergenciais, naoEmergenciais };
