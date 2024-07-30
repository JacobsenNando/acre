<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import '../app.css';
  </script>
   
   <ModeWatcher defaultMode={'dark'} />
  
<div class="flex h-full w-full flex-col">
	<slot />
</div>
