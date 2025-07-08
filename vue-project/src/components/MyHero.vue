<template>
    <section class="hero min-h-screen relative overflow-hidden flex items-center justify-center">
        <div class="background-effects">
            <div class="red-glow"></div>
            <div class="red-glow-2"></div>
            <div class="red-glow-3"></div>
        </div>

        <div class="particles">
            <div class="particle" style="left: 5%; animation-delay: 0s;"></div>
            <div class="particle" style="left: 15%; animation-delay: 2s;"></div>
            <div class="particle" style="left: 25%; animation-delay: 4s;"></div>
            <div class="particle" style="left: 35%; animation-delay: 1s;"></div>
            <div class="particle" style="left: 45%; animation-delay: 3s;"></div>
            <div class="particle" style="left: 55%; animation-delay: 5s;"></div>
            <div class="particle" style="left: 65%; animation-delay: 0.5s;"></div>
            <div class="particle" style="left: 75%; animation-delay: 2.5s;"></div>
            <div class="particle" style="left: 85%; animation-delay: 4.5s;"></div>
            <div class="particle" style="left: 95%; animation-delay: 1.5s;"></div>
        </div>

        <div class="geometric-shapes">
            <div class="shape circle-1"></div>
            <div class="shape circle-2"></div>
            <div class="shape triangle-1"></div>
            <div class="shape square-1"></div>
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-center gap-16">
                <div class="profile-section animate-slide-in-left">
                    <div class="profile-container">
                        <div class="profile-glow"></div>
                        <div class="profile-image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNXrMvkmmPO-mBpxmmVefxe2T0QQ8vrZYtoQ&s"
                                alt="Yafa Nanda Putra - Software Engineer"
                                class="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover">
                        </div>
                    </div>
                </div>

                <div class="content-section lg:w-1/2 text-center lg:text-left">
                    <div class="animate-slide-in-right" style="animation-delay: 200ms;">
                        <h2 class="text-2xl lg:text-3xl text-red-400 mb-4 font-medium">
                            Hey I'm <span class="text-white font-bold">Yafa</span>
                        </h2>
                        <h1 class="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            I'm a <span class="gradient-text" id="animated-job-title"></span>
                        </h1>
                    </div>

                    <div class="animate-slide-in-right" style="animation-delay: 400ms;">
                        <p class="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                            Software Engineer yang bersemangat dalam pengembangan web modern,
                            mobile applications, dan teknologi cloud. Menciptakan solusi digital
                            yang inovatif dan user-friendly.
                        </p>
                    </div>

                    <div class="animate-slide-in-right social-links mb-8" style="animation-delay: 600ms;">
                        <a href="#" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" class="social-link">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>

                    <div class="animate-slide-in-right" style="animation-delay: 800ms;">
                        <a href="#contact" class="hire-button">
                            Hire me
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll-indicator">
            <div class="scroll-wheel">
                <div class="scroll-dot"></div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeView', // Nama komponen Vue
    data() {
        return {
            typingTimeout: null, // Untuk menyimpan ID timeout, diinisialisasi di data
            jobTitles: ["SOFTWARE ENGINEER", "WEB DEVELOPER", "MOBILE DEVELOPER", "CLOUD SPECIALIST"],
            titleIndex: 0,
            charIndex: 0,
            isDeleting: false
        };
    },
    mounted() {
        // Memulai efek typing saat komponen di-mount ke DOM
        this.typeWriter();
    },
    beforeUnmount() {
        // Membersihkan timer saat komponen akan dihancurkan
        // Ini penting untuk mencegah memory leak, terutama jika komponen di-mount/unmount berulang kali
        if (this.typingTimeout) {
            clearTimeout(this.typingTimeout);
        }
    },
    methods: {
        typeWriter() {
            const jobTitleElement = document.getElementById('animated-job-title');
            if (!jobTitleElement) return; // Pastikan elemen ada sebelum melanjutkan

            const currentTitle = this.jobTitles[this.titleIndex];

            if (this.isDeleting) {
                // Menghapus karakter satu per satu
                jobTitleElement.textContent = currentTitle.substring(0, this.charIndex - 1);
                this.charIndex--;
            } else {
                // Mengetik karakter satu per satu
                jobTitleElement.textContent = currentTitle.substring(0, this.charIndex + 1);
                this.charIndex++;
            }

            // Kecepatan ketik dasar (dalam milidetik)
            let typeSpeed = 150; // Kecepatan mengetik

            // Kecepatan menghapus teks
            if (this.isDeleting) {
                typeSpeed = 75; // Lebih cepat saat menghapus
            }

            // Jeda setelah selesai mengetik satu kata
            if (!this.isDeleting && this.charIndex === currentTitle.length) {
                typeSpeed = 2000; // Jeda lebih panjang sebelum mulai menghapus
                this.isDeleting = true;
            }
            // Jeda setelah selesai menghapus satu kata
            else if (this.isDeleting && this.charIndex === 0) {
                this.isDeleting = false;
                this.titleIndex++;
                typeSpeed = 1000; // Jeda lebih panjang sebelum mengetik judul berikutnya
                if (this.titleIndex === this.jobTitles.length) {
                    this.titleIndex = 0; // Ulangi dari awal
                }
            }

            // Menggunakan 'this.typingTimeout' agar ESLint tidak mengeluh dan untuk cleanup
            this.typingTimeout = setTimeout(this.typeWriter, typeSpeed);
        }
    }
};
</script>

<style>
    /* Base Styles */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Catatan: Untuk proyek Vue dengan Tailwind, 'body' styles ini mungkin perlu diletakkan
       di file CSS global (misal: index.css atau main.css) atau di layer base Tailwind
       agar diterapkan ke seluruh aplikasi. */
    body {
        font-family: 'Arial', sans-serif;
        overflow-x: hidden;
        background: #0a0a0a;
        color: white; /* Ensure text is visible */
    }

    .hero {
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Background Effects */
    .background-effects {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none; /* Allows clicks to pass through */
    }

    .red-glow {
        position: absolute;
        top: 20%;
        left: 20%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        animation: pulse 4s ease-in-out infinite alternate;
        filter: blur(80px); /* Soften the glow */
    }

    .red-glow-2 {
        position: absolute;
        top: 60%;
        right: 10%;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%);
        border-radius: 50%;
        animation: pulse 6s ease-in-out infinite alternate-reverse;
        filter: blur(60px);
    }

    .red-glow-3 {
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.15) 0%, transparent 70%);
        border-radius: 50%;
        animation: pulse 5s ease-in-out infinite alternate;
        filter: blur(50px);
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 0.3;
        }
        100% {
            transform: scale(1.2);
            opacity: 0.6;
        }
    }

    /* Particles */
    .particles {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    }

    .particle {
        position: absolute;
        width: 3px;
        height: 3px;
        background: rgba(255, 107, 107, 0.8);
        border-radius: 50%;
        animation: particleFloat 15s infinite linear;
    }

    .particle:nth-child(odd) {
        background: rgba(255, 255, 255, 0.6);
        width: 2px;
        height: 2px;
    }

    @keyframes particleFloat {
        0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(200px);
            opacity: 0;
        }
    }

    /* Geometric Shapes */
    .geometric-shapes {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    }

    .shape {
        position: absolute;
        opacity: 0.1;
        animation: shapeFloat 20s infinite linear;
    }

    .circle-1 {
        top: 15%;
        left: 10%;
        width: 150px;
        height: 150px;
        border: 2px solid #ff6b6b;
        border-radius: 50%;
        animation-delay: 0s;
    }

    .circle-2 {
        top: 70%;
        right: 15%;
        width: 100px;
        height: 100px;
        border: 2px solid #ff6b6b;
        border-radius: 50%;
        animation-delay: 5s;
    }

    .triangle-1 {
        top: 40%;
        left: 80%;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 52px solid rgba(255, 107, 107, 0.3);
        animation-delay: 10s;
    }

    .square-1 {
        top: 80%;
        left: 20%;
        width: 80px;
        height: 80px;
        border: 2px solid rgba(255, 107, 107, 0.3);
        transform: rotate(45deg);
        animation-delay: 15s;
    }

    @keyframes shapeFloat {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(-20px) rotate(360deg);
        }
    }

    /* Profile Section */
    .profile-section {
        position: relative;
    }

    .profile-container {
        position: relative;
        display: inline-block;
    }

    .profile-glow {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        animation: profilePulse 3s ease-in-out infinite;
        filter: blur(30px);
    }

    .profile-image {
        position: relative;
        padding: 8px;
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        border-radius: 50%;
        z-index: 2;
    }

    .profile-image::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e, #ff6b6b);
        border-radius: 50%;
        z-index: -1;
        animation: rotate 4s linear infinite;
    }

    @keyframes profilePulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.3;
        }
        50% {
            transform: scale(1.1);
            opacity: 0.6;
        }
    }

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* Content Section */
    .content-section {
        max-width: 600px;
    }

    .gradient-text {
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e, #ffb3b3);
        background-size: 200% 200%;
        animation: gradientShift 3s ease infinite;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    @keyframes gradientShift {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    /* Social Links */
    .social-links {
        display: flex;
        gap: 1rem;
        justify-content: center; /* Center social links on smaller screens */
        margin-top: 1.5rem; /* Add some space */
    }

    .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background: rgba(255, 107, 107, 0.1);
        border: 2px solid rgba(255, 107, 107, 0.3);
        border-radius: 50%;
        color: #ff6b6b;
        text-decoration: none;
        transition: all 0.3s ease;
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2); /* Subtle shadow */
    }

    .social-link:hover {
        background: rgba(255, 107, 107, 0.2);
        border-color: #ff6b6b;
        transform: translateY(-5px) scale(1.05); /* More pronounced hover */
        box-shadow: 0 12px 25px rgba(255, 107, 107, 0.3);
    }

    /* Hire Button */
    .hire-button {
        display: inline-block;
        padding: 15px 40px;
        background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
        color: white;
        text-decoration: none;
        border-radius: 50px;
        font-weight: bold;
        font-size: 1.1rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
        margin-top: 2rem; /* Add space above button */
    }

    .hire-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.5s;
    }

    .hire-button:hover::before {
        left: 100%;
    }

    .hire-button:hover {
        transform: translateY(-5px) scale(1.02); /* More pronounced hover */
        box-shadow: 0 18px 40px rgba(255, 107, 107, 0.5);
    }

    /* Scroll Indicator */
    .scroll-indicator {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        animation: bounce 2s infinite;
        z-index: 10; /* Ensure it's above other effects */
    }

    .scroll-wheel {
        width: 30px;
        height: 50px;
        border: 2px solid rgba(255, 107, 107, 0.6);
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding-top: 8px;
        position: relative; /* For the dot */
    }

    .scroll-dot {
        width: 4px;
        height: 8px;
        background: #ff6b6b;
        border-radius: 4px;
        animation: scrollDot 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
        }
        40% {
            transform: translateX(-50%) translateY(-10px);
        }
        60% {
            transform: translateX(-50%) translateY(-5px);
        }
    }

    @keyframes scrollDot {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(20px);
        }
    }

    /* Initial Load Animations */
    .animate-slide-in-left {
        animation: slideInLeft 1s ease-out forwards;
        opacity: 0;
    }

    .animate-slide-in-right {
        animation: slideInRight 1s ease-out forwards;
        opacity: 0;
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    /* Responsive Design */
    @media (max-width: 1024px) {
        .hero {
            flex-direction: column;
            text-align: center;
            padding: 4rem 1rem; /* Adjust padding for tablet */
        }

        .content-section {
            text-align: center; /* Ensure text alignment for smaller screens */
        }

        .social-links {
            justify-content: center;
        }

        .profile-section {
            margin-bottom: 3rem; /* Add space between image and text */
        }

        .red-glow {
            width: 400px;
            height: 400px;
            filter: blur(60px);
        }
        .red-glow-2 {
            width: 300px;
            height: 300px;
            filter: blur(40px);
        }
        .red-glow-3 {
            width: 200px;
            height: 200px;
            filter: blur(30px);
        }
    }

    @media (max-width: 768px) {
        .hero {
            padding: 2rem 1rem;
        }

        .profile-image img {
            width: 250px; /* Slightly smaller on medium screens */
            height: 250px;
        }

        .content-section h1 {
            font-size: 2.5rem; /* Smaller for mobile */
        }

        .content-section h2 {
            font-size: 1.8rem;
        }

        .content-section p {
            font-size: 1rem;
        }

        .red-glow {
            width: 300px;
            height: 300px;
        }
    }

    @media (max-width: 480px) {
        .profile-image img {
            width: 200px; /* Even smaller for very small screens */
            height: 200px;
        }
        .content-section h1 {
            font-size: 2rem;
        }
        .content-section h2 {
            font-size: 1.5rem;
        }
        .content-section p {
            font-size: 0.9rem;
        }
        .hire-button {
            padding: 12px 30px;
            font-size: 1rem;
        }
        .social-link {
            width: 45px;
            height: 45px;
        }
    }
</style>
