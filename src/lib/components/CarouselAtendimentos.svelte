<script lang="ts">
  import Autoplay from "embla-carousel-autoplay";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
	import CardContent from "./ui/card/card-content.svelte";
 
  const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>
 
<Carousel.Root
  plugins={[plugin]}
  class="w-full h-full"
  on:mousenter={plugin.stop}
  on:mouseleave={plugin.reset}
>
  <Carousel.Content>
    
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Atendimento Individual</span>
            </Card.Content>
            <Card.Content>
              Sessões de terapia focadas no desenvolvimento pessoal, autoconhecimento e superação de dificuldades emocionais.
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Atendimento de Casal</span>
            </Card.Content>
            <Card.Content>
              Terapia para casais visando melhorar a comunicação, resolver conflitos e fortalecer o relacionamento.
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Atendimento Familiar</span>
            </Card.Content>
            <Card.Content>
              Sessões de terapia para famílias, trabalhando juntos para superar desafios e promover um ambiente saudável.
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Terapia Online</span>
            </Card.Content>
            <Card.Content>
              Sessões de terapia via internet, proporcionando conforto e flexibilidade para atender às suas necessidades.
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Atendimento para Crianças e Adolescentes</span>
            </Card.Content>
            <Card.Content>
              Terapia especializada para ajudar jovens a lidar com questões emocionais, comportamentais e desenvolvimento pessoal
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
      <Carousel.Item class="basis-1/3">
        <div class="p-1">
          <Card.Root>
            <Card.Content
              class="flex aspect-square items-center justify-center p-6"
            >
              <span class="text-4xl font-semibold">Orientação Profissional</span>
            </Card.Content>
            <Card.Content>
              Sessões focadas em ajudar na escolha e desenvolvimento de carreira, promovendo satisfação e realização profissional.
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    
  </Carousel.Content>
  <Carousel.Previous />
  <Carousel.Next />
</Carousel.Root>