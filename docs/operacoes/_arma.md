---
sidebar_position: 8
---
# Ferimento por arma de fogo ou arma branca

```mermaid
graph TD;
   verificar_agressor[Agressor está no local?] --> |Sim| manter_distancia(Para sua segurança\nmantenha distância e\naguarde a chegada do socorro)
   manter_distancia --> informar_policia(Informar a equipe policial):::atendente
   manter_distancia --> informar_bombeiro(Informar a equipe dos bombeiros):::atendente
   verificar_agressor --> |Não| aproximar_vitima[Se aproxime da pessoa\nferida, por favor]
   aproximar_vitima --> verificar_sangramento[A pessoa está com sangramento?]
   verificar_sangramento --> |Sim| conter_hemorragia[Pegue um pano, toalha ou camisa\nlimpa e aperte o ferimento]
   conter_hemorragia --> verificar_respiracao[A pessoa está com dificuldade de respirar?]
   verificar_sangramento --> verificar_respiracao
   verificar_respiracao --> |Sim| posicionar_lateralmente[Deite-o de lado para a esquerda]
   verificar_respiracao --> |Não| nao_movimentar[Não movimente o paciente\nAguarde a chegada da viatura\nSe necessário ligue novamente]
   posicionar_lateralmente --> nao_movimentar

   

   classDef atendente fill:#d66, color:#fff

```


<!-- # Ferimento por arma de fogo ou arma branca

## Considerações gerais

i) Interrompa a ligação somente após a chegada da viatura no local ou a melhora do paciente, oferecendo continuamente as orientações;
   - Acione apoio policial nas causas externas que existam agressores (PAF, PAB ou agressão física).

## Orientações ao solicitante

a) “O agressor está no local?”;
   - Se sim ou se não sabe: “Mantenha distância.” ou “Fique longe.”;
   - Se não: “Se aproxime do paciente” ou “Chegue perto do paciente.”;

b) “Tem algum sangramento maior?”;
   - Se sim: “Pegue um pano ou toalha ou camisa limpa e aperte o ferimento para evitar sangramento excessivo.”;
   - “Não movimente o paciente.”;

c) Se o paciente estiver com dificuldade de respirar: “Deite-o do lado esquerdo.”;

d) Finalizar a ligação com: “Senhor(a), deixe o paciente desse jeito e aguarde a chegada da viatura. Se necessário ligue novamente.” -->
