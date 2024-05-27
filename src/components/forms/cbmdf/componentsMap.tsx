import { CapturaInseto } from "./naturezas/captura_inseto";
import { ColisaoVeiculo } from "./naturezas/colisao_veiculo";
import { IncendioVegetacao } from "./naturezas/incendio_vegetacao";
import Ovace from "./naturezas/ovace";
import Vitimas from "./naturezas/vitimas";
import Suicidio from "./naturezas/suicidio";

// Componentes correspondentes às tags

export const ComponentsMap = {
  vitimas: Vitimas,
  captura_inseto: CapturaInseto,
  colisao_veiculo: ColisaoVeiculo,
  incendio_vegetacao: IncendioVegetacao,
  ovace: Ovace,
  suicidio: Suicidio,

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
