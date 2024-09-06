<script lang="ts">
  import { enhance } from "$app/forms";
  import { Separator } from "$lib/components/ui/separator";
  import zap from "$lib/components/img/whats.webp";
  import insta from "$lib/components/img/InstagramLogo.webp";
</script>

<form
  action="?/enviarEmail"
  use:enhance
  method="post"
  class="flex w-full gap-5 flex-col md:flex-row md:justify-evenly items-center"
>
  <div class="flex w-5/6 md:w-1/3 flex-col gap-3 p-5">
    <label class="flex flex-col gap-2">
      <span>Nome Completo:</span>
      <input
        required
        class="input rounded-lg px-3 border-2 border-gray-70"
        type="text"
        name="nome"
        placeholder="ex. John da Silva"
      />
    </label>

    <label class="flex flex-col gap-2">
      <span>Telefone:</span>
      <input
        required
        class="input rounded-lg px-3 border-2 border-gray-700"
        type="tel"
        name="telefone"
        placeholder="ex. (51) 1234-5678"
      />
    </label>

    <label class="flex flex-col gap-2">
      <span>Mensagem:</span>
      <textarea
        required
        class="textarea rounded-lg resize-none border-2 border-gray-700 px-3"
        rows="5"
        name="mensagem"
        placeholder="Conte-me o motivo de seu contato!"
      />
    </label>

    <button
      type="submit"
      class="rounded-lg self-center font-semibold uppercase border-2 border-gray-700 px-3"
    >
      Solicitar Consulta
    </button>
  </div>
  <div
    class="flex flex-row md:flex-col items-center rounded-lg justify-center gap-2 overflow-hidden w-full md:w-1/12"
  >
    <Separator orientation="horizontal" class="md:hidden flex w-2/6" />
    <Separator orientation="vertical" class=" md:flex h-1/4" />
    <h2
      class="h-1/4 justify-center items-center text-xl font-bold tracking-tight"
    >
      OU
    </h2>
    <Separator orientation="horizontal" class="md:hidden flex w-2/6" />
    <Separator orientation="vertical" class=" md:flex h-1/4" />
  </div>

  <div class="flex flex-col justify-around md:w-1/3">
    <h2
      class="flex justify-center itens-center text-xl font-bold tracking-tight"
    >
      Chame em uma rede social:
    </h2>
    <div class="flex flex-row">
      <div class=" flex flex-col md:flex-row justify-center items-center w-1/2">
        <button
          type="button"
          class="self-center mt-10 rounded-lg font-semibold uppercase px-1 flex justify-center flex-col items-center gap-2"
        >
          <img src={zap} alt="Whatsapp" class="md:w-3/6 w-2/6 z-0" />
          <a
            href="https://wa.me/5568992556435?text=Ol%C3%A1%2C%20vim%20pelo%20site!%0AGostaria%20de%20saber%20mais%20sobre%20as%20consultas."
            target="_blank"
            rel="noopener noreferrer"
            class="text-center border-2 border-gray-700 rounded-lg px-1 tracking-tight"
          >
            Chamar no Whatsapp
          </a>
        </button>
      </div>
      <div
        id="instagram"
        class="flex flex-col justify-center items-center w-1/2"
      >
        <button
          type="button"
          class="self-center mt-10 rounded-lg font-semibold uppercase px-1 flex justify-center flex-col items-center gap-2"
        >
          <img class="md:w-3/6 w-2/6 z-0" alt="insta" src={insta} />
          <a
            href="https://www.instagram.com/psihanrryluis/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-center border-2 border-gray-700 rounded-lg px-1 tracking-tight"
          >
            Chamar no Instagram
          </a>
        </button>
      </div>
    </div>
  </div>
</form>
