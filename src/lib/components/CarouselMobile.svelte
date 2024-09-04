<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";
  import Solo from "$lib/components/img/Solo.webp";
  import Online from "$lib/components/img/Online.webp";
  import Food from "$lib/components/img/Food.webp";

  let api: CarouselAPI;
  let current = 0;
  let count = 0;
  let tratamentos = [
    {
      title: "Atendimento Individual",
      description:
        "Sessões de terapia focadas no desenvolvimento pessoal, autoconhecimento e superação de dificuldades emocionais.",
      image: Solo,
    },
    {
      title: "Terapia Online",
      description:
        "Sessões de terapia via internet, proporcionando conforto e flexibilidade para atender às suas necessidades.",
      image: Online,
    },
    {
      title: "Transtornos Alimentares",
      description:
        "Sessões de terapia para famílias, trabalhando juntos para superar desafios e promover um ambiente saudável.",
      image: Food,
    },
    {
      title: "Atendimento para Adolescentes",
      description:
        "Terapia especializada para ajudar jovens a lidar com questões emocionais, comportamentais e desenvolvimento pessoal",
      image: Solo,
    },
    {
      title: "Terapia Online",
      description:
        "Sessões de terapia via internet, proporcionando conforto e flexibilidade para atender às suas necessidades.",
      image: Online,
    },
    {
      title: "Transtornos Alimentares",
      description:
        "Sessões de terapia para famílias, trabalhando juntos para superar desafios e promover um ambiente saudável.",
      image: Food,
    },
    {
      title: "Atendimento para Crianças e Adolescentes",
      description:
        "Terapia especializada para ajudar jovens a lidar com questões emocionais, comportamentais e desenvolvimento pessoal",
      image: Solo,
    },
  ];

  $: if (api) {
    count = api.scrollSnapList().length;
    current = api.selectedScrollSnap() + 1;

    api.on("select", () => {
      current = api.selectedScrollSnap() + 1;
    });
  }
  const plugin = Autoplay({ delay: 2300, stopOnInteraction: true });
</script>

<div>
  <Carousel.Root
    bind:api
    plugins={[plugin]}
    class="w-full max-w-xs"
    on:mousenter={plugin.stop}
    on:mouseleave={plugin.reset}
  >
    <Carousel.Content>
      {#each tratamentos as tratamento}
        <Carousel.Item>
          <Card.Root class="h-[34rem]">
            <Card.Content class="flex flex-col ">
              <div class="flex-col flex w-full">
                <a
                  href="https://wa.me/5568999236300?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento!"
                >
                  <img
                    src={tratamento.image}
                    alt={tratamento.title}
                    class="w-full"
                  />
                </a>
                <h2 class="text-4xl font-semibold">{tratamento.title}</h2>
              </div>
              <p>{tratamento.description}</p></Card.Content
            >
          </Card.Root>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
  <div class="text-muted-foreground py-2 text-center text-sm">
    {current} de {count}
  </div>
</div>
