<script lang="ts">
	import imagem from '$lib/components/img/3W2A0217.jpg';
</script>

<div class="flex min-h-[100dvh] flex-col">
	<header class="flex h-14 items-center px-4 lg:px-6">
		<nav class="ml-auto flex gap-4 sm:gap-6"></nav>
	</header>
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
								Hanrry Acriano da silva
							</h1>
							<p class="max-w-[600px] text-muted-foreground md:text-xl">
								Experiência com trataemnto de dinosauros pré contemporâneos e pós contemporâneos.
							</p>
						</div>
					</div>
					<img
						src={imagem}
						width="550"
						height="550"
						alt="Dr. Jane Doe"
						class="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
					/>
				</div>
			</div>
		</section>
		<section id="about" class="w-full bg-muted py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
					<div class="flex flex-col justify-center space-y-4">
						<div class="space-y-2">
							<div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About</div>
							<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
								Dedicated to Helping You Thrive
							</h2>
							<p
								class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
							>
								With over 15 years of experience, I'm passionate about helping individuals and
								families overcome challenges and achieve their goals. My approach is collaborative,
								evidence-based, and tailored to each client's unique needs.
							</p>
						</div>
					</div>
					<img
						src="/placeholder.svg"
						width="550"
						height="310"
						alt="About"
						class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
					/>
				</div>
			</div>
		</section>
		<section id="services" class="w-full py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Services</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Comprehensive Therapy Services
						</h2>
						<p
							class="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							I offer a range of therapy services to help you achieve your goals and improve your
							overall well-being.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					<div class="grid gap-1">
						<h3 class="text-xl font-bold">Individual Therapy</h3>
						<p class="text-muted-foreground">
							Explore personal challenges, develop coping strategies, and work towards positive
							change.
						</p>
					</div>
					<div class="grid gap-1">
						<h3 class="text-xl font-bold">Couples Counseling</h3>
						<p class="text-muted-foreground">
							Improve communication, resolve conflicts, and strengthen your relationship.
						</p>
					</div>
					<div class="grid gap-1">
						<h3 class="text-xl font-bold">Family Therapy</h3>
						<p class="text-muted-foreground">
							Address family dynamics, improve understanding, and promote healthy relationships.
						</p>
					</div>
					<div class="grid gap-1">
						<h3 class="text-xl font-bold">Grief Counseling</h3>
						<p class="text-muted-foreground">
							Navigate the grieving process and find ways to cope with loss.
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="contact" class="w-full bg-muted py-12 md:py-24 lg:py-32">
			<div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact</div>
					<h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
						Schedule an Appointment
					</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						Fill out the form below to schedule a consultation and start your journey towards
						personal growth and well-being.
					</p>
				</div>
				<div class="mx-auto w-full max-w-sm space-y-2">
					<form class="flex flex-col gap-2">
						<!-- <Input type="text" placeholder="Name" class="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" class="max-w-lg flex-1" />
                  <Textarea placeholder="Message" class="max-w-lg flex-1" />
                  <Button type="submit">Schedule Appointment</Button> -->
					</form>
				</div>
			</div>
		</section>
	</main>
	<footer
		class="flex w-full shrink-0 flex-col items-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6"
	>
		<p class="text-xs text-muted-foreground">&copy; 2024 Dr. Jane Doe. All rights reserved.</p>
		<nav class="flex gap-4 sm:ml-auto sm:gap-6"></nav>
	</footer>
</div>
