<script lang="ts">
	import CarouselAtendimentos from "$lib/components/CarouselAtendimentos.svelte";
	import imagem from "$lib/components/img/3W2A0213.webp";
	import imagem2 from "$lib/components/img/3W2A0234.webp";
	import Psico from "$lib/components/img/Psico.webp";
	import Form from "$lib/components/Form.svelte";
	import logo from "$lib/components/img/LogoSolo.webp";
	import type { PageData, ActionData } from "./$types";
	import { toast } from "svelte-sonner";
	import WordsFadeIn from "$lib/components/ui/animation/WordsFadeIn.svelte";
	import Quest from "$lib/components/Quest.svelte";
	import Footer from "$lib/components/Footer.svelte";
	let scrollY = 0;
	// export let data: PageData;
	export let form: ActionData;

	$: {
		if (form?.status === 200) {
			toast.success("Solicitação de contato enviada");
		} else if (form?.status === 500) {
			toast.error("Algo deu errado!");
		}
	}
</script>

<svelte:window bind:scrollY />

<!-- <h1 class="fixed right-40 top-40 z-20 bg-white text-5xl text-black">
	{scrollY}
</h1> -->

<!-- Apresentação -->
<section
	class="flex w-full items-center justify-evenly bg-[#265973] bg-gradient-to-b from-background from-40% to-transparent py-0 md:py-8"
>
	<div class="flex w-1/3 flex-col items-center justify-center">
		<div class="flex flex-col justify-center items-center gap-5">
			<img src={logo} alt="Logo" class="w-5/6" />

			<WordsFadeIn class="font-thin text-8xl" words="HANRRY LUÍS" />
		</div>

		<blockquote class="mt-10 border-l-2 pl-6 italic">
			<WordsFadeIn
				class="text-xl"
				words="Bem-vindo ao espaço de Hanrry Luís Malaquias e Silva, sou dedicado a ajudar você a
				encontrar o equilíbrio emocional e o bem-estar. Com uma abordagem acolhedora e profissional,
				estou aqui para apoiar sua jornada de autoconhecimento e crescimento pessoal."
			/>
		</blockquote>
	</div>
	<div class="flex w-1/3 justify-center py-8">
		<img src={imagem} width="560" alt="Hanrry Luís" class="rounded-xl" />
	</div>
</section>
<!-- Sobre -->
<section
	id="sobre"
	class="flex w-full flex-row-reverse items-center justify-around bg-[#265973] bg-gradient-to-t from-background from-0% to-transparent py-8"
>
	<div class="flex w-1/3 flex-col">
		<h1 class="text-6xl font-bold tracking-tight">Quem é Hanrry?</h1>

		<p class="mt-3 text-xl">
			Hanrry Luís Malaquias e Silva é um psicólogo dedicado, com vasta
			experiência em ajudar indivíduos a alcançar o equilíbrio emocional e o
			bem-estar. Com uma abordagem acolhedora e profissional, ele está
			comprometido em apoiar seus pacientes na jornada de autoconhecimento e
			crescimento pessoal.
		</p>
		<p class="mt-3 text-xl">
			Formado em Psicologia e com especializações em diversas áreas
			terapêuticas, Hanrry tem trabalhado com diferentes públicos, incluindo
			adultos e adolescentes. Ele acredita que cada indivíduo é único e, por
			isso, adapta suas técnicas e métodos para atender às necessidades
			específicas de cada paciente.
		</p>
		<p class="mt-3 text-xl">
			Além das sessões presenciais, Hanrry também oferece terapia online,
			proporcionando conforto e flexibilidade para aqueles que não podem
			comparecer ao consultório. Sua missão é ajudar as pessoas a desenvolverem
			habilidades de enfrentamento, melhorar seus relacionamentos e resgatar a
			autoestima, promovendo uma vida mais saudável e equilibrada.
		</p>
		<p class="mt-3 text-xl">
			Para os brasileiros que vivem no exterior, Hanrry oferece um espaço de
			acolhimento e suporte emocional, ajudando a tratar as feridas emocionais e
			a superar os desafios de viver longe de casa.
		</p>
	</div>
	<div class="flex w-1/3 justify-center">
		<img
			src={imagem2}
			width="550"
			height="550"
			alt="Hanrry Luís Malaquias e Silva"
			class="rounded-xl"
		/>
	</div>
</section>
<!-- Quem precisa de psicoterapia? -->
<section class="flex w-full flex-row items-center justify-around">
	<div class="flex w-1/3 flex-col p-10">
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
			Quem precisa de psicoterapia?
		</h2>
		<p class="mt-3 text-xl sm:mt-4">
			Vamos começar desmistificando a ideia de que “terapia é para louco”. Esse
			é um mito que afasta muitas pessoas de buscar ajuda. A verdade é que todas
			as pessoas, em algum momento da vida, podem enfrentar disfunções de
			ansiedade ou dificuldades emocionais. SegFechar a Organização Mundial da
			Saúde (OMS), 12% da população brasileira sofre com algum nível de
			ansiedade patológica, que pode inclusive levar ao afastamento do trabalho.
		</p>
		<p class="mt-3 text-xl sm:mt-4">
			A psicoterapia é um processo terapêutico essencial para promover o
			bem-estar psicológico e emocional. É indicada para quem enfrenta desafios
			como problemas de relacionamento, ansiedade, depressão, estresse, entre
			outros. É acessível a pessoas de todas as idades, classes sociais e
			condições socioeconômicas, podendo ser realizada de forma individual ou em
			grupo.
		</p>
		<p class="mt-3 text-xl sm:mt-4">
			Para os brasileiros que vivem no exterior, a terapia pode ser um espaço de
			acolhimento e cura, ajudando a tratar feridas emocionais e oferecendo
			suporte em momentos de dificuldade.
		</p>
	</div>
	<div class="flex w-1/3 justify-center">
		<img src={Psico} width="550" height="550" alt="psico" />
	</div>
</section>
<!-- Atendimentos -->

<section
	id="atendimentos"
	class="w-full bg-[#265973] bg-gradient-to-b from-background from-5%% to-transparent pb-20 pt-16"
>
	<div class="mx-auto max-w-7xl px-4">
		<div class="mb-12 h-full text-center">
			<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
				Tipos de Atendimentos
			</h2>

			<p class="mt-3 text-xl">
				Conheça os diversos serviços de psicologia oferecidos para atender às
				suas necessidades específicas.
			</p>
		</div>
		<div class="h-full w-full">
			<CarouselAtendimentos />
		</div>
	</div>
</section>
<!--Form-->
<section
	id="contatos"
	class="bg-[#265973] bg-gradient-to-t from-background from-5%% to-transparent flex w-full flex-col items-center pb-20"
>
	<h2 class="mb-5 text-3xl font-bold tracking-tight">Agende uma consulta</h2>
	<Form />
	<h2 class="mb-5 text-3xl font-bold tracking-tight mt-5">
		Perguntas frequentes
	</h2>
	<Quest />
</section>

<Footer />
