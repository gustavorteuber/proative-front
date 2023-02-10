<template>
  <nav
    class="bg-neutral-900 border-neutral-200 dark:border-neutral-600 dark:bg-neutral-900"
  >
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <span
        class="self-center text-xl font-semibold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >Proative</span
      >
      <button
        data-collapse-toggle="mega-menu-full"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:ring-neutral-600"
        aria-controls="mega-menu-full"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="mega-menu-full"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 mt-4 border border-neutral-100 rounded-lg bg-neutral-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-neutral-800 md:dark:bg-neutral-900 dark:border-neutral-700"
        >
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 dark:text-neutral-400 md:dark:hover:text-emerald-500 dark:hover:bg-neutral-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent dark:border-neutral-700"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <button
              id="mega-menu-full-dropdown-button"
              data-collapse-toggle="mega-menu-full-dropdown"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-neutral-700 rounded md:w-auto hover:bg-neutral-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-600 md:p-0 dark:text-neutral-400 md:dark:hover:text-emerald-500 dark:hover:bg-neutral-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent dark:border-neutral-700"
            >
              Sobre nós
              <svg
                class="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-neutral-700 rounded hover:bg-neutral-100 md:hover:bg-transparent md:hover:text-emerald-700 md:p-0 dark:text-neutral-400 md:dark:hover:text-emerald-500 dark:hover:bg-neutral-700 dark:hover:text-emerald-500 md:dark:hover:bg-transparent dark:border-neutral-700"
              >Entre em contato</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div
      id="mega-menu-full-dropdown"
      class="mt-1 border-neutral-200 shadow-sm bg-neutral-800 dark:border-neutral-600 rounded-3xl"
    >
      <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-neutral-900 dark:text-white sm:grid-cols-2 md:px-6"
      >
        <ul>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-900 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Gerenciamento online</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Gerencie sua empresa de maneira online e pratica.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Interação</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Fique mais proximos dos seus funcionarios.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Tenha controle!</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Saiba tudo o que está acontecendo nos bastidores de sua
                empresa.</span
              >
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Planejamento</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Planeje o mês da sua empresa com o nosso calendario mensal de
                atividades.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Segmentation</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700"
            >
              <div class="font-semibold">Marketing CRM</div>
              <span
                class="text-sm font-light text-neutral-500 dark:text-neutral-400"
                >Connect with third-party tools that you're already using.</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
