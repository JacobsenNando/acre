<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<ModeWatcher defaultMode={'dark'} />

<Navbar />

<Toaster position="bottom-left" richColors />

<div class="flex h-full w-full flex-col">
	<slot />
</div>
