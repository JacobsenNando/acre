<script>
  import { Motion, AnimateSharedLayout } from "svelte-motion";
  import { TwitterLogo } from "svelte-radix";
  const tabs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Sobre",
      href: "#sobre",
    },
    {
      title: "Serviços",
      href: "#atendimentos",
    },
    {
      title: "Contatos",
      href: "#contatos",
    },
  ];
  let activeIdx = 0;
</script>

<div class="relative flex flex-wrap items-center justify-center">
  <AnimateSharedLayout>
    {#each tabs as item, i}
      <a
        href={item.href}
        class="group relative z-[1] rounded-full px-4 py-2 {activeIdx === i
          ? 'z-0'
          : ''} "
        on:click={() => {
          activeIdx = i;
        }}
      >
        {#if activeIdx === i}
          <Motion
            layoutId="clicked-btn"
            transition={{ duration: 0.2 }}
            let:motion
          >
            <div
              use:motion
              class="absolute inset-0 rounded-full bg-white"
            ></div>
          </Motion>
        {/if}
        <span
          class="relative text-sm block font-medium duration-200 {activeIdx ===
          i
            ? 'text-black delay-100'
            : 'text-white'}"
        >
          {item.title}
        </span>
      </a>
    {/each}
  </AnimateSharedLayout>
</div>
