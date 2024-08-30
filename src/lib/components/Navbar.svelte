<script lang="ts">
	import Tabs from "$lib/components/ui/animation/AnimatedTabs.svelte";
	import logo from "$lib/components/img/LogoSolo.webp";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import WordsFadeIn from "./ui/animation/WordsFadeIn.svelte";

	let scrollY: number;
	let isMobile: boolean;

	function checkIfMobile() {
		isMobile = window.innerWidth <= 768; // Define o breakpoint para mobile
	}

	// Verifica se é mobile no momento da montagem do componente
	onMount(() => {
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		// Remove o event listener quando o componente for destruído
		return () => {
			window.removeEventListener("resize", checkIfMobile);
		};
	});
</script>

<svelte:window bind:scrollY />
{#if isMobile}
	<head
		class="flex w-full justify-center items-center py-2 border-y-0 fixed bg-background z-20 gap-32"
		>{#if scrollY > 600}
			<img
				src={logo}
				alt=""
				loading="lazy"
				class="select-none w-8"
				transition:fade={{ delay: 0, duration: 300 }}
			/>
		{/if}
		<Tabs />
	</head>
{:else}
	<head
		class="flex w-full justify-center items-center py-2 border-y-0 bg-gradient-to-b from-background from-0% to-transparent fixed z-20 gap-32"
	>
		<div class="w-1/3 justify-start items-center flex z-10 flex-row">
			{#if scrollY > 600 && scrollY <= 3128}
				<img
					src={logo}
					alt=""
					loading="lazy"
					class="select-none ml-5 w-10"
					transition:fade={{ delay: 0, duration: 300 }}
				/>
				<WordsFadeIn class="font-thin text-lg" words="HANRRY LUÍS" />
			{/if}
		</div>
		<div class="w-1/3">
			<Tabs />
		</div>
		<div class="w-1/3"></div>
	</head>
{/if}
