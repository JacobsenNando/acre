<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";
</script>

<Accordion.Root class="w-9/12">
  <Accordion.Item value="item-1">
    <Accordion.Trigger class="text-xl"
      >Quanto tempo vai demorar o tratamento?</Accordion.Trigger
    >
    <Accordion.Content class="text-xl"
      >Não há um tempo estipulado, visto a complexidade do tratamento
      psicológico, mas uma das características da minha abordagem é tentar
      resolver a situação o mais rápido possível!</Accordion.Content
    >
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger class="text-xl"
      >Como é feito o atendimento?</Accordion.Trigger
    >
    <Accordion.Content class="text-xl">
      Online, usando a plataforma do google meet, logo vou precisar que você
      tenha um ambiente com privacidade uma internet razoável e um fone de
      ouvido ajuda.
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-3">
    <Accordion.Trigger class="text-xl"
      >Quantas sessões por mês?</Accordion.Trigger
    >
    <Accordion.Content class="text-xl">
      O ideal seria 4 sessões ao mês, uma por semana. Mas é possível adaptar
      para 2 sessões mensais.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
