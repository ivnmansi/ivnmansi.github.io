<script setup lang="ts">
    import { ref } from 'vue';

    import Drawer from 'primevue/drawer';
    import Button from 'primevue/button';

    import Github from '@primeicons/vue/github';
    import Linkedin from '@primeicons/vue/linkedin';
    import Bars from '@primeicons/vue/bars';
    import Home from '@primeicons/vue/home';
    import AddressBook from '@primeicons/vue/address-book';
    import Desktop from '@primeicons/vue/desktop';
    import Briefcase from '@primeicons/vue/briefcase';

    const drawerVisible = ref(false);

    const menuItems = ref([
        { label: 'Main', icon: Home, to: '/' },
        { label: 'About', icon: AddressBook, to: '/about' },
        { label: 'Skills', icon: Desktop, to: '/skills' },
        { label: 'Projects', icon: Briefcase, to: '/projects' },
    ]);

</script>

<template>
  <nav class="flex h-16 w-full items-center justify-between border-b border-surface-800 px-6">

    <div class="logo text-xl font-bold minecraft">
        <router-link to="/"">
          > IVNMANSI <span class="blink">_</span>
        </router-link>
    </div>


    <div class="hidden items-center gap-6 lg:flex minecraft">
        <div v-for="item in menuItems" :key="item.label">
            <router-link :to="item.to">
                <Button
                    severity="secondary"
                    variant="outlined"
                    class="in-page-button"
                >
                    {{ item.label }}( )
                </Button>
            </router-link>
        </div>



        <Button iconOnly rounded class="social-link"
            as="a"
            aria-label="GitHub"
            severity="secondary"
            variant="outlined"
            href="https://github.com/ivnmansi"
            target="_blank"
            rel="noopener noreferrer"
        >
                <Github />
        </Button>

        <Button iconOnly rounded class="social-link"
            as="a"
            aria-label="LinkedIn"
            severity="secondary"
            variant="outlined"
            href="https://www.linkedin.com/in/ivnmansi"
            target="_blank"
            rel="noopener noreferrer"
        >
                <Linkedin />
        </Button>
    </div>


      <!-- Mobile menu button -->
    <Button iconOnly
        severity="secondary"
        variant="outlined"
        class="lg:!hidden"
        @click="drawerVisible = !drawerVisible"
    >
        <Bars/>
    </Button>

    

    <Drawer v-model:visible="drawerVisible" position="right" class="bg">
            <ul class="list-none p-3 m-0 minecraft">
                <li v-for="item in menuItems" :key="item.label">
                    <router-link :to="item.to" @click.native="drawerVisible = false">
                        <span class="flex items-center gap-2 border-b border-surface-800 hover:bg-surface-800 p-2">
                            <span v-if="item.icon" class="text-lg">
                                <component :is="item.icon" />
                            </span>
                            {{ item.label }}( )
                        </span>
                    </router-link>
                </li>
            </ul>

            <div class="flex justify-center gap-4 p-3">
                <Button iconOnly rounded class="social-link"
                    as="a"
                    aria-label="GitHub"
                    severity="secondary"
                    variant="outlined"
                    href="https://github.com/ivnmansi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Github />
                </Button>

                <Button iconOnly rounded class="social-link"
                    as="a"
                    aria-label="LinkedIn"
                    severity="secondary"
                    variant="outlined"
                    href="https://www.linkedin.com/in/ivnmansi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Linkedin />
                </Button>
            </div>
  </Drawer>
  
  </nav>
</template>

<style scoped>
    * {
        transition: cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s!important;
    }

    .logo {
        color: transparent;
        background: linear-gradient(white, white);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .logo:hover {
        background: linear-gradient(to right, var(--p-teal-400), var(--p-purple-400), var(--p-pink-400), var(--p-orange-400), var(--p-yellow-400));
        background-size: 400% 400%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.5rem;
        animation: rainbow-text 4s infinite;
    }

    .blink {
        animation: blink 1s infinite;
        font-weight: bold;
    }

    @keyframes blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
    }

    @keyframes rainbow-text {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }

    .in-page-button {
        padding: 0.25rem 2rem;
    }

    .in-page-button:hover, .social-link:hover {
        transform: translateY(-2px);

        border-color: var(--p-teal-900)!important;
        color: var(--p-teal-400)!important;
    }
</style>
