<template>
  <section id="pendidikan" class="py-20 relative overflow-hidden">
    <!-- Background dengan efek hero -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <!-- Hero Background Effects -->
      <div class="background-effects">
        <div class="red-glow"></div>
        <div class="red-glow-2"></div>
        <div class="red-glow-3"></div>
      </div>

      <!-- Particles -->
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

      <!-- Geometric Shapes -->
      <div class="geometric-shapes">
        <div class="shape circle-1"></div>
        <div class="shape circle-2"></div>
        <div class="shape triangle-1"></div>
        <div class="shape square-1"></div>
        <div class="shape hexagon-1"></div>
        <div class="shape hexagon-2"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Riwayat <span class="text-red-400">Pendidikan</span>
        </h2>
        <div class="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Perjalanan pendidikan yang membentuk fondasi kuat dalam bidang teknologi informasi
        </p>
      </div>

      <!-- Desktop Timeline -->
      <div class="hidden md:block relative max-w-4xl mx-auto">
        <!-- Timeline line -->
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>

        <!-- Timeline items -->
        <div v-for="(edu, index) in educationHistory" :key="edu.id"
             class="relative mb-12 last:mb-0">

          <!-- Timeline dot -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-400 rounded-full border-4 border-white z-10 shadow-lg">
            <div class="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
          </div>

          <!-- Content -->
          <div class="flex items-center justify-between w-full">
            <!-- Left side (even index) -->
            <div v-if="index % 2 === 0" class="w-full flex">
              <div class="w-1/2 pr-12">
                <div class="education-card">
                  <div class="text-right">
                    <span class="inline-block bg-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {{ edu.period }}
                    </span>
                    <h3 class="text-2xl font-bold text-white mb-3">
                      {{ edu.institution }}
                    </h3>
                    <p class="text-gray-300 text-lg">
                      {{ edu.major }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="w-1/2"></div>
            </div>

            <!-- Right side (odd index) -->
            <div v-else class="w-full flex">
              <div class="w-1/2"></div>
              <div class="w-1/2 pl-12">
                <div class="education-card">
                  <div class="text-left">
                    <span class="inline-block bg-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      {{ edu.period }}
                    </span>
                    <h3 class="text-2xl font-bold text-white mb-3">
                      {{ edu.institution }}
                    </h3>
                    <p class="text-gray-300 text-lg">
                      {{ edu.major }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Timeline -->
      <div class="md:hidden">
        <div class="relative">
          <div class="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>

          <div v-for="edu in educationHistory" :key="edu.id + '-mobile'"
               class="relative mb-12 last:mb-0 pl-20">

            <!-- Timeline dot -->
            <div class="absolute left-6 top-6 w-6 h-6 bg-red-400 rounded-full border-4 border-white z-10 shadow-lg">
              <div class="absolute inset-0 bg-red-400 rounded-full animate-ping opacity-75"></div>
            </div>

            <!-- Content -->
            <div class="education-card">
              <span class="inline-block bg-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                {{ edu.period }}
              </span>
              <h3 class="text-xl font-bold text-white mb-2">
                {{ edu.institution }}
              </h3>
              <p class="text-gray-300">
                {{ edu.major }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data pendidikan yang telah diperbarui
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2020 - 2023',
    institution: 'SMK Muhammadiyah Imogiri',
    major: 'Teknik Komputer dan Jaringan'
  },
  {
    id: 3,
    period: '2017 - 2020',
    institution: 'SMP Negeri 2 Sanden',
    major: 'Pendidikan Menengah Pertama'
  },
  {
    id: 4,
    period: '2011 - 2017',
    institution: 'SD Negeri Tirtomulyo',
    major: 'Pendidikan Dasar'
  }
];
</script>

<style scoped>
/* Hero Background Effects */
.background-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
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
  filter: blur(80px);
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

.hexagon-1 {
  top: 30%;
  right: 30%;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(255, 107, 107, 0.3);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation-delay: 7s;
}

.hexagon-2 {
  bottom: 25%;
  left: 15%;
  width: 40px;
  height: 40px;
  border: 2px solid rgba(255, 107, 107, 0.3);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation-delay: 12s;
}

@keyframes shapeFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}

/* Education Cards */
.education-card {
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 107, 107, 0.3);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.education-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 107, 0.1) 0%, transparent 70%);
  animation: cardGlow 6s ease-in-out infinite alternate;
  pointer-events: none;
}

.education-card:hover {
  background: rgba(255, 107, 107, 0.15);
  border-color: rgba(255, 107, 107, 0.5);
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(255, 107, 107, 0.3);
}

@keyframes cardGlow {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
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
  .red-glow {
    width: 300px;
    height: 300px;
    filter: blur(40px);
  }
  .red-glow-2 {
    width: 200px;
    height: 200px;
    filter: blur(30px);
  }
  .red-glow-3 {
    width: 150px;
    height: 150px;
    filter: blur(20px);
  }
}
</style>
