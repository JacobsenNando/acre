<script>
  import { Instagram } from "lucide-svelte";
  import { Youtube } from "lucide-svelte";
  import { Linkedin } from "lucide-svelte";
  import logo from "$lib/components/img/LogoSolo.webp";
  import WordsFadeIn from "./ui/animation/WordsFadeIn.svelte";
</script>

<div class="flex items-center justify-evenly p-4 border">
  <span class="text-sm text-muted-foreground w-1/3"
    >© 2024 Hanrry Luís. Todos direitos reservados.</span
  >

  <div class="flex flex-row items-center gap-2">
    <img src={logo} alt="" loading="lazy" class="select-none ml-5 w-10" />
    <WordsFadeIn class="font-thin text-lg" words="HANRRY LUÍS" />
  </div>

  <div class="flex space-x-4 w-1/3 justify-end">
    <button type="button">
      <a
        href="https://www.instagram.com/psihanrryluis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram /></a
      >
    </button>
    <button type="button">
      <a
        href="https://www.instagram.com/psihanrryluis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin /></a
      >
    </button>
    <button type="button">
      <a
        href="https://www.instagram.com/psihanrryluis/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube /></a
      >
    </button>
  </div>
</div>
