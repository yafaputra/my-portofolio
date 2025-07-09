<template>
    <header class="glass-effect animated-bg shadow-2xl sticky top-0 z-50 transition-all duration-300 border-b border-gray-700/30">
        <nav class="container mx-auto px-6 py-6">
            <div class="flex justify-between items-center">
                <div class="flex items-center group cursor-pointer relative">
                    <div class="text-3xl font-bold tracking-tight relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <span class="relative inline-block">
                            <span class="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent hover:from-red-300 hover:to-orange-400 transition-all duration-300 transform group-hover:scale-105">
                                Yafa
                            </span>
                            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-500"></span>
                        </span>

                        <span class="text-white ml-3 relative inline-block font-light">
                            Putra
                            <span class="absolute -top-2 -right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </span>
                    </div>

                    <div class="ml-4 flex flex-col space-y-1">
                        <div class="h-0.5 w-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full transform group-hover:w-10 transition-all duration-300"></div>
                        <div class="h-0.5 w-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transform group-hover:w-8 transition-all duration-300 delay-100"></div>
                    </div>
                </div>

                <ul class="hidden md:flex **space-x-8** items-center absolute left-1/2 transform -translate-x-1/2">
                    <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.link"
                           class="nav-link relative text-gray-300 hover:text-white font-medium transition-colors duration-300 px-5 py-3 rounded-xl">
                            <span class="relative z-10">{{ item.text }}</span>
                            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
                        </a>
                    </li>
                </ul>

                <div class="hidden md:block">
                    <a href="#kontak"
                       class="contact-btn relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 overflow-hidden group transform hover:scale-105">
                        <span class="relative z-10 font-semibold">Kontak</span>
                        <svg class="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                        <span class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                        <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></span>
                    </a>
                </div>

                <button @click="toggleMobileMenu" class="md:hidden p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 glass-effect group">
                    <svg class="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div v-show="mobileMenuOpen" class="md:hidden mt-6 pb-4 border-t border-gray-700/50 animate-fade-in">
                <ul class="**space-y-3** pt-4"> <li v-for="(item, index) in navItems" :key="index">
                        <a :href="item.link"
                           @click="closeMobileMenu"
                           class="mobile-nav-link flex items-center space-x-3 text-gray-300 hover:text-white font-medium py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-red-500/10 hover:to-orange-500/10 transition-all duration-300 group border border-transparent hover:border-red-500/20">
                            <span class="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span>{{ item.text }}</span>
                            <span class="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </span>
                        </a>
                    </li>
                    <li class="pt-3">
                        <a href="#kontak"
                           @click="closeMobileMenu"
                           class="mobile-contact-btn flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white py-4 px-6 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 group overflow-hidden transform hover:scale-105">
                            <span class="font-semibold relative z-10">Kontak</span>
                            <svg class="w-4 h-4 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                            </svg>
                            <span class="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'MainNavbar',
    setup() {
        const mobileMenuOpen = ref(false);
        const navItems = ref([
            { text: 'Home', link: 'myhero' }, // Changed from 'Profil' to 'Home'
            { text: 'Pendidikan', link: '/pendidikan' },
            { text: 'Skill', link: '/myskills' },
            { text: 'Proyek', link: '/myrojects' },
            { text: 'Kontak', link: '/mycontact' }
        ]);

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const closeMobileMenu = () => {
            mobileMenuOpen.value = false;
        };

        return {
            mobileMenuOpen,
            navItems,
            toggleMobileMenu,
            closeMobileMenu
        };
    }
};
</script>

<style scoped>
/* Pastikan Tailwind CSS sudah terintegrasi dan berfungsi di proyek Vue Anda. */

.animated-bg {
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
}

.glass-effect {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.85);
    border-color: rgba(255, 107, 107, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

/* Brand Name Line Transition */
.group:hover .h-0.5 {
    width: 3rem;
    background: linear-gradient(to right, #ff6b6b, #ff8e8e);
}

/* Nav Link Styling (Sederhana tapi Bagus) */
.nav-link {
    transition: all 0.3s ease;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    display: inline-block;
    position: relative;
}

.nav-link::before {
    content: none;
}

.nav-link:hover {
    color: #ff6b6b;
    transform: translateY(-2px);
}

/* Underline effect for nav links */
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0.25rem;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #ff6b6b, #ff8e8e);
    transition: all 0.3s ease;
    transform: translateX(-50%);
}

.nav-link:hover::after {
    width: 80%;
}

/* Contact Button */
.contact-btn {
    box-shadow: 0 8px 20px rgba(239, 68, 68, 0.3);
    border: 1px solid transparent;
}

.contact-btn:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 30px rgba(239, 68, 68, 0.5);
    border-color: rgba(255, 255, 255, 0.2);
}

/* Mobile Nav Link Indicator */
.mobile-nav-link {
    transition: all 0.3s ease;
}

.mobile-nav-link span:first-child {
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
}

.mobile-nav-link:hover span:first-child {
    opacity: 1;
    transform: translateX(0);
}


@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(-15px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.5s ease-out;
}

/* Smooth scrolling */
html {
    scroll-behavior: smooth;
}

/* Hover effects for mobile - simplified */
@media (hover: none) {
    .nav-link:hover {
        background: none;
        transform: none;
        color: inherit;
    }
    .nav-link::before {
        content: none !important;
    }
    .nav-link::after {
        display: none;
    }
    .contact-btn:hover,
    .mobile-contact-btn:hover {
        transform: none;
        box-shadow: none;
    }
    .group:hover .h-0.5 {
        width: 2rem;
        background: #ef4444;
    }
    .mobile-nav-link:hover span:first-child {
        opacity: 0;
        transform: none;
    }
    .mobile-nav-link:hover {
        background: none !important;
        border: 1px solid transparent !important;
        color: inherit !important;




    }
}
</style>

