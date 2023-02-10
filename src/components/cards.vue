<script>
import { useDark, useToggle } from "@vueuse/core";

export default {
  setup() {
    const isDark = useDark();
    const toggle = useToggle(isDark);

    return {
      isDark,
      toggle,
    };
  },
  methods: {
    colorCard() {
      if (this.isDark == true) {
        return "max-w-sm border border-emerald-500 rounded-lg shadow bg-neutral-800 m-5";
      } else {
        return "max-w-sm bg-white border border-gray-200 rounded-lg shadow m-5";
      }
    },
    ColorTitle() {
      if (this.isDark == true) {
        return "mb-2 text-2xl font-bold tracking-tight text-emerald-500";
      } else {
        return "mb-2 text-2xl font-bold tracking-tight text-emerald-500";
      }
    },
    ColorSubtitle() {
      if (this.isDark == true) {
        return "mb-3 font-normal text-gray-400";
      } else {
        return "mb-3 font-normal text-gray-700";
      }
    },
    ColorButton() {
      if (this.isDark == true) {
        return "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-emerald-500 border border-emerald-500 bg-neutral-900 rounded-lg hover:bg-neutral-800 focus:ring-4 focus:outline-none bg-neutral-900";
      } else {
        return "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-emerald-500 border border-emerald-500 bg-white rounded-lg hover:bg-white focus:ring-4 focus:outline-none bg-neutral-900";
      }
    },
  },
};
</script>
<template>
  <div class="flex justify-center mt-20">
    <div :class="colorCard()">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 :class="ColorTitle()">Plano Free</h5>
        </a>
        <p :class="ColorSubtitle()">
          Aqui temos o Plano Free, no qual apresentamos uma demonstração da
          plataforma.
        </p>
        <a href="#" :class="ColorButton()">
          Conheça mais!
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div :class="colorCard()">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 :class="ColorTitle()">Plano Pro</h5>
        </a>
        <p :class="ColorSubtitle()">
          Aqui temos o Plano Pro, no qual é perfeito para quem está iniciando no
          gerenciamento empresarial.
        </p>
        <a href="#" :class="ColorButton()">
          Conheça mais!
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    <div :class="colorCard()">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 :class="ColorTitle()">Plano Premium</h5>
        </a>
        <p :class="ColorSubtitle()">
          Aqui temos o Plano Premium, no qual está desbloqueado todas as
          funcionalidades e tudo o que o Proative tem a oferecer.
        </p>
        <a
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          Conheça mais!
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style>
colorCard {
  transition: background-color 0.5s ease;
}
</style>
