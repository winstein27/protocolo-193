---
sidebar_position: 14
---

# Acidente com veículo de transporte de produtos perigosos

```mermaid
graph TD;
    inicio[O socorro está a caminho.\nPrecisamos que nos auxilie com algumas informações] --> avaliacao_distancia_1[Há chamas nos tanques?]
    avaliacao_distancia_1 --> |Sim| determinar_distancia_1[O isolamento deverá ser de 1600 metros de raio]
    avaliacao_distancia_1 --> |Não| avaliacao_distancia_2[Há algum vazamento no tanque?]
    avaliacao_distancia_2 --> |Sim| avaliacao_distancia_3[O vazamento é pequeno ou grande?]
    avaliacao_distancia_3 --> |Pequeno| avaliacao_distancia_4[Consegue identificar se é transporte de explosivos?]
    avaliacao_distancia_2 --> |Não| avaliacao_distancia_4
    avaliacao_distancia_3 --> |Grande| determinar_distancia_2[O isolamento deverá ser de 800 metros de raio]
    avaliacao_distancia_4 --> |Sim| determinar_distancia_3[O isolamento deverá ser de 300 metros de raio]
    avaliacao_distancia_4 --> |Não| determinar_distancia_4[O isolamento deverá ser de 100 metros de raio]
    determinar_distancia_1 --> orientacao_chamas[Afaste do local cigarros, isqueiros ou algo que possa produzir chamas]
    determinar_distancia_2 --> orientacao_chamas
    determinar_distancia_3 --> orientacao_chamas
    determinar_distancia_4 --> orientacao_chamas
    orientacao_chamas --> orientacao_afastamento[Saia e peça que todos saiam pra fora da área isolada\nSó retire as pessoas se conseguir fazer\nsem risco para você]
    orientacao_afastamento --> aguardar_isolamento(Aguardar que o solicitante esteja em área segura):::atendente
    aguardar_isolamento --> pergunta_cor[Está vendo gases coloridos? Se sim, qual cor?]
    pergunta_cor --> pergunta_som[Está ouvindo barulho de vazamento em tanques e cilindros?]
    pergunta_som --> pergunta_cheiro[Sente algum cheiro estranho? Descreva-o]
    pergunta_cheiro --> pergunta_animais[Há animais mortos próximo dos veículos?]
    pergunta_animais --> pergunta_vegetacao[Há vegetação queimada próximo dos veículos?]
    pergunta_vegetacao --> pergunta_material[Você sabe qual o tipo de produto envolvido?]
    pergunta_material --> pergunta_placa[Existe uma placa de cor laranja com um\nnúmero de 4 dígitos? Você consegue\nler esse número?]
    pergunta_placa --> pergunta_placa2[Existem outras placas coloridas quadradas? Você consegue ver as cores de fundo dessas placas?]

    classDef atendente fill:#d66, color:#fff

```
<!-- 
## Considerações iniciais

i) Oriente a sinalizar o local do acidente a uma distância mínima de 100 metros, mas caso consiga identificar como sendo um transporte de “explosivos”, aumente o isolamento em 300 metros;
ii) Atentar para que não acendam cigarros, isqueiros ou algo que possa produzir chamas nas proximidades.

## Orientações gerais

i) “Afaste-se imediatamente do veículo principalmente se no local você observar: gases coloridos ou barulho de vazamento em tanques e cilindros; animais mortos próximo dos caminhões; vegetação próxima aos tanques queimada (tendo como parâmetro a vegetação do local); e cheiros estranhos”;
ii) “Você sabe qual o tipo de produto envolvido? Existe uma placa de cor laranja com um número de 4 dígitos? Você consegue ler esse número?
iii) Existem outras placas coloridas quadradas? Você consegue ver as cores de fundo dessas placas?
iv) Pequenos vazamentos de líquidos ou cargas sólidas (pós ou grãos): “É preciso que você se afaste pelo menos 100 metros do local”;
v) Grandes vazamentos de líquidos ou gases em geral: “É preciso que você se afaste pelo menos 800 metros do local”;
vi) Chamas em tanques (sendo ou não tanque combustível poderá explodir): “É preciso que se afaste pelo menos 1600 metros nos casos de tanques de combustíveis (líquidos ou gases inflamáveis)”;
vii) Vítimas caídas: “Só retire as pessoas se conseguir fazer sem risco para você. -->
