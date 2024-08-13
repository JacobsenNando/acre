<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	
</script>

<ModeWatcher defaultMode={'dark'} />

<Navbar />

<div class="flex h-full w-full flex-col">
	<slot />
</div>
