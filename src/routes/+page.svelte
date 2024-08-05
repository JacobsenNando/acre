<script lang="ts">
	import imagem from '$lib/components/img/3W2A0213.jpg';
	import imagem2 from '$lib/components/img/3W2A0234.jpg';
</script>

<div class=" flex min-h-[100dvh] flex-col">
	<!-- <header class="flex h-14 items-center px-4">
		<nav class="ml-auto flex gap-4">
			<a
				href="https://wa.me/5568999236300?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20atendimento."
				>Whastapp</a
			>
		</nav>
	</header> -->
	<main class="flex flex-col">
		<!-- Apresentação -->
		<section class="flex flex-col items-center space-y-4 bg-[#030712] md:flex-row md:space-y-0">
			<div class="flex">
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
			</div>
		</section>
		<section class="w-full bg-[#000000] py-8">
			<div class="flex flex-row-reverse">
				<div class="space-y-2 md:w-1/2">
					<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
						Quem é Hanrry Luís Malaquias e Silva?
					</h2>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4">
						Hanrry Luís Malaquias e Silva é um psicólogo dedicado, com vasta experiência em ajudar
						indivíduos a alcançar o equilíbrio emocional e o bem-estar. Com uma abordagem acolhedora
						e profissional, ele está comprometido em apoiar seus pacientes na jornada de
						autoconhecimento e crescimento pessoal.
					</p>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4">
						Formado em Psicologia e com especializações em diversas áreas terapêuticas, Hanrry tem
						trabalhado com diferentes públicos, incluindo adultos, casais, famílias, crianças e
						adolescentes. Ele acredita que cada indivíduo é único e, por isso, adapta suas técnicas
						e métodos para atender às necessidades específicas de cada paciente.
					</p>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4">
						Além das sessões presenciais, Hanrry também oferece terapia online, proporcionando
						conforto e flexibilidade para aqueles que não podem comparecer ao consultório. Sua
						missão é ajudar as pessoas a desenvolverem habilidades de enfrentamento, melhorar seus
						relacionamentos e resgatar a autoestima, promovendo uma vida mais saudável e
						equilibrada.
					</p>
					<p class="mt-3 text-xl text-gray-600 sm:mt-4">
						Para os brasileiros que vivem no exterior, Hanrry oferece um espaço de acolhimento e
						suporte emocional, ajudando a tratar as feridas emocionais e a superar os desafios de
						viver longe de casa.
					</p>
				</div>
				<div class="md:w-1/2">
					<img
						src={imagem2}
						width="550"
						height="550"
						alt="Hanrry Luís Malaquias e Silva"
						class="mx-auto aspect-square overflow-hidden rounded-xl object-cover p-10 sm:w-full"
					/>
				</div>
			</div>
		</section>

		<!-- Tipos de Atendimentos -->
		<section class="bg w-full bg-[#265973]">
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
