<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte";
	import { Toaster } from "$lib/components/ui/sonner";
	import { inject } from "@vercel/analytics";
</script>

<ModeWatcher defaultMode={"dark"} />
<Navbar />

<Toaster position="bottom-left" richColors />

<main class="flex flex-col bg-[#030712]">
	<slot />
</main>
