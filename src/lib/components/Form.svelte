<script lang="ts">
	import { enhance } from '$app/forms';
	import { Separator } from '$lib/components/ui/separator';
</script>

<form action="?/enviarEmail" use:enhance method="post" class="flex w-full justify-center gap-5">
	<div class="flex w-1/3 flex-col gap-3 p-5">
		<label class="flex flex-col gap-2">
			<span>Nome Completo:</span>
			<input
				required
				class="input rounded-lg px-3"
				type="text"
				name="nome"
				placeholder="ex. John da Silva"
			/>
		</label>

		<label class="flex flex-col gap-2">
			<span>Telefone:</span>
			<input
				required
				class="input rounded-lg px-3"
				type="tel"
				name="telefone"
				placeholder="ex. (51) 1234-5678"
			/>
		</label>

		<label class="flex flex-col gap-2">
			<span>Mensagem:</span>
			<textarea
				required
				class="textarea rounded-lg"
				rows="5"
				name="mensagem"
				placeholder="Conte-me o motivo de seu contato!"
			/>
		</label>

		<button type="submit" class=" w-[95%] self-center font-semibold uppercase">
			Solicitar Contato
		</button>
	</div>
	<div class="flex flex-col items-center justify-center gap-2 overflow-hidden">
		<Separator orientation="vertical" class="h-1/4" />
		<h2 class="h-1/4 text-xl font-bold tracking-tight">OU</h2>
		<Separator orientation="vertical" class="h-1/4" />
	</div>
	<div class="w-1/3">
		<h1>ZAP_ZAP</h1>
	</div>
</form>
