<script>
  import { Instagram } from "lucide-svelte";
  import { Youtube } from "lucide-svelte";
  import { Linkedin } from "lucide-svelte";
  import logo from "$lib/components/img/LogoSolo.webp";
  import WordsFadeIn from "./ui/animation/WordsFadeIn.svelte";
</script>

<div class="flex items-center flex-col-reverse justify-evenly p-4 w-full">
  <div class="flex flex-col w-full justify-center items-center">
    <span class="text-sm text-muted-foreground flex justify-center"
      >© 2024 Hanrry Luís. Todos direitos reservados.</span
    >
    <span class="md:hidden">CRP 24/04229 </span>
  </div>

  <div class="md:flex hidden justify-evenly items-center w-full">
    <!-- <div class="flex flex-row items-center gap-2">
      <img src={logo} alt="" loading="lazy" class="select-none md:ml-5 w-10" />
      <WordsFadeIn class="font-thin text-lg" words="HANRRY LUÍS" />
    </div> -->

    <div class="flex space-x-4 w-full justify-end">
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
          href="https://youtube.com/@psihanrryluis1?si=Yp7FyCv_TyMtcKh1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube /></a
        >
      </button>
    </div>
  </div>
</div>
