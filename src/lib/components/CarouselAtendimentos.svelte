<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import Event from "$lib/components/img/Event.svg";
  import Psico from "$lib/components/img/Psico.svg";
  import Sports from "$lib/components/img/Sports.svg";
  import Engine from "$lib/components/img/Engine.svg";
  import Ansiedade from "$lib/components/img/Ansiedade.svg";
  import Depressao from "$lib/components/img/Depressao.svg";
  import { Separator } from "$lib/components/ui/separator";
  let tratamentos = [
    {
      title: "Consulta Clinica",
      description:
        "Sessões de terapia focadas em tratamentos comprovados para diversas demandas emocionais e psicológicas.",
      image: Psico,
    },
    {
      title: "Serviço Organizacional",
      description:
        "Consultoria e intervenções psicológicas para melhorar o ambiente de trabalho e a performance das equipes.",
      image: Engine,
    },
    {
      title: "Psicologia Esportiva",
      description:
        "Aumento da performance através do fortalecimento mental, foco e controle emocional para atletas.",
      image: Sports,
    },
    {
      title: "Cursos e Palestras",
      description:
        "Programas de capacitação e palestras voltadas ao desenvolvimento pessoal e profissional.",
      image: Event,
    },
    {
      title: "Tratamento para Ansiedade",
      description:
        "Sessões focadas em reduzir sintomas de ansiedade, ajudando você a recuperar o controle emocional e a viver com mais tranquilidade.",
      image: Ansiedade,
    },
    {
      title: "Tratamento para Depressão",
      description:
        "Terapia especializada para lidar com a depressão, promovendo a recuperação do bem-estar e o resgate da autoestima.",
      image: Depressao,
    },
  ];

  const plugin = Autoplay({ delay: 2300, stopOnInteraction: true });
</script>

<Carousel.Root
  plugins={[plugin]}
  class="h-full w-full"
  on:mousenter={plugin.stop}
  on:mouseleave={plugin.reset}
>
  <Carousel.Content>
    {#each tratamentos as tratamento}
      <Carousel.Item class="basis-1/4 flex h-full">
        <Card.Root class="h-[36rem]">
          <Card.Content class="flex flex-col h-full p-0 ">
            <a
              href="https://wa.me/556892556435?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento!"
            >
              <img
                src={tratamento.image}
                alt={tratamento.title}
                class="rounded-t-xl bg-tr"
              />

              <div
                class="p-4 w-full flex h-full justify-start flex-col items-center text-center gap-5"
              >
                <h2
                  class="text-4xl font-semibold w-full flex flex-col items-center justify-center min-h-[5rem]"
                >
                  {tratamento.title}
                </h2>
                <Separator orientation="horizontal" class="flex w-9/12" />
                <p class="text-lg w-full">{tratamento.description}</p>
              </div>
            </a>
          </Card.Content>
        </Card.Root>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>
