---
sidebar_position: 13
---

# Acidente automobilístico

```mermaid
graph TD;
    inicio[O socorro está a caminho] --> orientacao_evitar_curiosos[Evite que curiosos se aproximem ou toquem nas vítimas ou nos veículos]
    orientacao_evitar_curiosos --> avaliacao_distancia_1[Há fios ou postes caídos?]
    avaliacao_distancia_1 --> |Sim| determinar_distancia_1[Mantenha distância de pelo menos 15 metros do local]
    determinar_distancia_1 --> avaliacao_distancia_2[Vocês estão em uma via urbana ou rodovia?]
    avaliacao_distancia_2 --> |Via Urbana| orientacao_sinalizacao_1[Posicione o triângulo a pelo menos 50 passos longos de distância]
    avaliacao_distancia_2 --> |Rodovia| orientacao_sinalizacao_2[Posicione o triângulo a pelo menos 80 passos longos de distância]
    orientacao_sinalizacao_1 --> orientacao_veiculo[O veículo está em chamas ou fumaça?]
    orientacao_sinalizacao_2 --> orientacao_veiculo[O veículo está em chamas ou fumaça?]
    orientacao_veiculo --> |Sim| orientacao_sair[Abra a porta e salte para fora do veículo de uma vez só.\nMantenha os pés juntos ao pousar no chão.]
    orientacao_veiculo --> |Não| orientacao_permanecer[Fique dentro do veículo e mantenha as mãos e os pés juntos ao corpo.\nNão desça do carro.]
    orientacao_sair --> orientacao_nao_tocar[Não toque em nada metálico do veículo]
    orientacao_nao_tocar --> orientacao_afastar[Pule para longe do veículo mantendo os pés juntos.\nDepois, efetue pulos curtos para longe do carro.]
    orientacao_permanecer --> contato_CEB[Estamos efetuando contato com a CEB para desligar a energia]

    orientacao_evitar_curiosos --> orientacao_desligar[Desligue o veículo e puxe o freio de mão, se possível]
    orientacao_desligar --> orientacao_nao_retirar[Não retire o capacete da vítima, se for um motociclista]
    orientacao_nao_retirar --> aguardar_isolamento(Aguardar que o solicitante esteja em área segura):::atendente

    classDef atendente fill:#d66, color:#fff
```

<!-- ## Considerações iniciais

i) Oriente a ficar fora da pista e sinalize com o triângulo do veículo, galhos ou outros objetos na pista para sinalizar o trânsito. Nas vias urbanas a uma distância mínima de 50 passos longos do acidente e em rodovias a uma distância mínima de 80 passos longos do acidente;
ii) “Evite que curiosos se aproximem ou toquem nas vítimas ou nos veículos.”;
iii) Havendo possibilidade, mande desligar o veículo e puxar o freio de mão;
iv) Em caso de motociclista, oriente a não retirar o capacete da vítima!

## Acidente envolvendo Queda de Fio ou Poste de Eletricidade

a) “Os fios podem estar energizados. Não tente movê-los”;
b) “O chão deve estar energizado e você pode tomar um choque”;
c) “Afaste todas as pessoas de perto. Mantenha distância de pelo menos 15m do local”;
d) Fiação elétrica caída sobre veículo com pessoas no interior;
e) Caso o veículo não esteja em chamas/fumaça:
   - “Fique dentro do veículo e mantenha as mãos e os pés juntos ao corpo, estamos efetuando contato com a CEB para desligar a energia.”
   - “O chão deve estar energizado e você pode tomar um choque. Não desça do carro.”
f) “Caso o veículo esteja incendiando ou com fumaça:
   - “Não toque em nada metálico do veículo.”
   - “Abra a porta e salte para fora do veículo de uma vez só. Mas você tem que saltar e cair com os pés juntos.”
g) Não toque o carro quando os pés entrarem em contato com o solo.
h) Depois, efetue pulos curtos, mantendo os pés juntos. Mova-se desta forma para longe do carro para pelo menos 10 metros de distância”. -->
