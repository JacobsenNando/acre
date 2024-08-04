<script lang="ts">
	import imagem from '$lib/components/img/3W2A0213.jpg';
</script>

<div class=" flex-co flex min-h-[100dvh]">
	<!-- <header class="flex h-14 items-center px-4">
		<nav class="ml-auto flex gap-4"></nav>
	</header> -->
	<main class="flex flex-col space-y-8">
		<!-- Apresentação -->
		<section class="flex flex-col items-center space-y-4 bg-[#030712] md:flex-row md:space-y-0">
			<div class="space-y-2 md:w-1/2">
				<h1
					class="p-8 font-[#] text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
					style="color: rgb(204, 255, 255);"
				>
					Hanrry Luís Malaquias e Silva
				</h1>
				<p
					class="max-w-[600px] p-8 text-muted-foreground md:text-xl"
					style="color: rgb(204, 255, 255);"
				>
					Bem-vindo ao espaço de Hanrry Luís Malaquias e Silva, sou dedicado a ajudar você a
					encontrar o equilíbrio emocional e o bem-estar. Com uma abordagem acolhedora e
					profissional, estou aqui para apoiar sua jornada de autoconhecimento e crescimento
					pessoal.
				</p>
			</div>
			<div class="md:w-1/2">
				<img
					src={imagem}
					width="550"
					height="550"
					alt="Hanrry Luís Malaquias e Silva"
					class="mx-auto aspect-square overflow-hidden rounded-xl object-cover p-10 sm:w-full"
				/>
			</div>
		</section>

		<!-- Tipos de Atendimentos -->
		<section class="bg w-full bg-[#265973] py-8">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2
						class="text-3xl font-bold tracking-tight sm:text-4xl"
						style="color: rgb(204, 255, 255);"
					>
						Tipos de Atendimentos
					</h2>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4" style="color: rgb(204, 255, 255);">
						Conheça os diversos serviços de psicologia oferecidos para atender às suas necessidades
						específicas.
					</p>
				</div>
				<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div class="rounded-lg bg-white p-6 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold text-gray-600">Atendimento Individual</h3>
						<p class="text-gray-600">
							Sessões de terapia focadas no desenvolvimento pessoal, autoconhecimento e superação de
							dificuldades emocionais.
						</p>
					</div>
					<div class="rounded-lg bg-white p-6 text-gray-600 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold">Atendimento de Casal</h3>
						<p class="text-gray-600">
							Terapia para casais visando melhorar a comunicação, resolver conflitos e fortalecer o
							relacionamento.
						</p>
					</div>
					<div class="rounded-lg bg-white p-6 text-gray-600 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold">Atendimento Familiar</h3>
						<p class="text-gray-600">
							Sessões de terapia para famílias, trabalhando juntos para superar desafios e promover
							um ambiente saudável.
						</p>
					</div>
					<div class="rounded-lg bg-white p-6 text-gray-600 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold">Terapia Online</h3>
						<p class="text-gray-600">
							Sessões de terapia via internet, proporcionando conforto e flexibilidade para atender
							às suas necessidades.
						</p>
					</div>
					<div class="rounded-lg bg-white p-6 text-gray-600 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold">Atendimento para Crianças e Adolescentes</h3>
						<p class="text-gray-600">
							Terapia especializada para ajudar jovens a lidar com questões emocionais,
							comportamentais e desenvolvimento pessoal.
						</p>
					</div>
					<div class="rounded-lg bg-white p-6 text-gray-600 shadow-lg">
						<h3 class="mb-2 text-xl font-semibold">Orientação Profissional</h3>
						<p class="text-gray-600">
							Sessões focadas em ajudar na escolha e desenvolvimento de carreira, promovendo
							satisfação e realização profissional.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-8">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2
						class="text-3xl font-bold tracking-tight sm:text-4xl"
						style="color: rgb(204, 255, 255);"
					>
						Quem precisa de psicoterapia?
					</h2>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4" style="color: rgb(204, 255, 255);">
						Vamos começar desmistificando a ideia de que “terapia é para louco”. Esse é um mito que
						afasta muitas pessoas de buscar ajuda. A verdade é que todas as pessoas, em algum
						momento da vida, podem enfrentar disfunções de ansiedade ou dificuldades emocionais.
						Segundo a Organização Mundial da Saúde (OMS), 12% da população brasileira sofre com
						algum nível de ansiedade patológica, que pode inclusive levar ao afastamento do
						trabalho.
					</p>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4" style="color: rgb(204, 255, 255);">
						A psicoterapia é um processo terapêutico essencial para promover o bem-estar psicológico
						e emocional. É indicada para quem enfrenta desafios como problemas de relacionamento,
						ansiedade, depressão, estresse, entre outros. É acessível a pessoas de todas as idades,
						classes sociais e condições socioeconômicas, podendo ser realizada de forma individual
						ou em grupo.
					</p>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4" style="color: rgb(204, 255, 255);">
						Para os brasileiros que vivem no exterior, a terapia pode ser um espaço de acolhimento e
						cura, ajudando a tratar feridas emocionais e oferecendo suporte em momentos de
						dificuldade.
					</p>
				</div>
			</div>
		</section>
	</main>
</div>
