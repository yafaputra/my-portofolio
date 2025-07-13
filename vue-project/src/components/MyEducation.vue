<template>
  <section id="pendidikan" class="relative h-auto py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating shapes -->
      <div class="absolute top-[15%] left-[10%] w-[100px] h-[100px] rounded-full border-2 border-emerald-500/10 opacity-30 animate-shape-float"></div>
      <div class="absolute top-[70%] right-[15%] w-[70px] h-[70px] rounded-full border-2 border-teal-500/10 opacity-30 animate-shape-float-5s"></div>
      <div class="absolute top-[40%] left-[80%] w-0 h-0 border-l-[20px] border-r-[20px] border-b-[34px] border-l-transparent border-r-transparent border-b-emerald-500/20 opacity-20 animate-shape-float-10s"></div>
      <div class="absolute top-[80%] left-[20%] w-[60px] h-[60px] border-2 border-teal-500/20 opacity-20 rotate-45 animate-shape-float-15s"></div>

      <!-- Small floating code icons -->
      <div class="absolute top-[10%] left-[5%] text-emerald-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 0s;">
        &lt;/&gt;
      </div>
      <div class="absolute top-[25%] right-[10%] text-teal-400/10 font-mono text-xl animate-bounce" style="animation-delay: 1s;">
        { }
      </div>
      <div class="absolute bottom-[15%] left-[15%] text-emerald-400/10 font-mono text-xl animate-bounce" style="animation-delay: 2s;">
        &lt;/&gt;
      </div>
      <div class="absolute bottom-[30%] right-[5%] text-teal-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 3s;">
        { }
      </div>
      <div class="absolute top-[5%] right-[20%] text-emerald-400/10 font-mono text-xl animate-bounce" style="animation-delay: 4s;">
        &lt;/&gt;
      </div>
      <div class="absolute bottom-[20%] left-[25%] text-teal-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 5s;">
        { }
      </div>
      <div class="absolute top-[60%] left-[5%] text-emerald-400/10 font-mono text-2xl animate-bounce" style="animation-delay: 6s;">
        [ ]
      </div>
      <div class="absolute top-[30%] left-[30%] text-teal-400/10 font-mono text-xl animate-bounce" style="animation-delay: 7s;">
        ( )
      </div>

      <!-- Gradient lines -->
      <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent animate-pulse-3s"></div>
      <div class="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-teal-400/20 to-transparent animate-pulse-4s"></div>
    </div>

    <!-- Glowing circles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/5 left-1/5 w-[400px] h-[400px] rounded-full bg-gradient-radial from-emerald-500/30 to-transparent opacity-30 blur-3xl animate-pulse-4s"></div>
      <div class="absolute top-3/5 right-1/10 w-[300px] h-[300px] rounded-full bg-gradient-radial from-teal-500/20 to-transparent opacity-20 blur-2xl animate-pulse-6s-reverse"></div>
      <div class="absolute bottom-1/10 left-1/2 transform -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-radial from-emerald-500/15 to-transparent opacity-15 blur-xl animate-pulse-5s"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <SectionTitle
        title="Riwayat"
        highlight="Pendidikan"
        subtitle="Perjalanan pendidikan yang membentuk fondasi kuat dalam bidang teknologi informasi"
      />

      <div class="hidden md:block relative max-w-4xl mx-auto">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"></div>

        <div v-for="(edu, index) in educationHistory" :key="edu.id"
             class="relative mb-12 last:mb-0">
          <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-white z-10 shadow-lg">
            <div class="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-75"></div>
          </div>

          <div class="flex items-center justify-between w-full">
            <div v-if="index % 2 === 0" class="w-full flex">
              <div class="w-1/2 pr-12">
                <div class="bg-gray-800/50 backdrop-blur-sm border border-teal-400/30 rounded-xl p-8 shadow-lg hover:border-teal-400/50 hover:shadow-teal-400/10 transition-all group">
                  <div class="relative">
                    <div class="absolute -top-2 -right-2 text-emerald-400/30 font-mono text-xl animate-spin-slow">
                      &lt;/&gt;
                    </div>
                    <div class="text-right">
                      <span class="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {{ edu.period }}
                      </span>
                      <h3 class="text-2xl font-bold text-white mb-3">
                        {{ edu.institution }}
                      </h3>
                      <p class="text-gray-300 text-lg">
                        {{ edu.major }}
                      </p>
                    </div>
                    <div class="absolute -bottom-2 -left-2 text-teal-400/30 font-mono text-xl animate-float-4s">
                      { }
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-1/2"></div>
            </div>

            <div v-else class="w-full flex">
              <div class="w-1/2"></div>
              <div class="w-1/2 pl-12">
                <div class="bg-gray-800/50 backdrop-blur-sm border border-teal-400/30 rounded-xl p-8 shadow-lg hover:border-teal-400/50 hover:shadow-teal-400/10 transition-all group">
                  <div class="relative">
                    <div class="absolute -top-2 -left-2 text-emerald-400/30 font-mono text-xl animate-spin-slow">
                      [ ]
                    </div>
                    <div class="text-left">
                      <span class="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {{ edu.period }}
                      </span>
                      <h3 class="text-2xl font-bold text-white mb-3">
                        {{ edu.institution }}
                      </h3>
                      <p class="text-gray-300 text-lg">
                        {{ edu.major }}
                      </p>
                    </div>
                    <div class="absolute -bottom-2 -right-2 text-teal-400/30 font-mono text-xl animate-float-5s">
                      ( )
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:hidden">
        <div class="relative">
          <div class="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-teal-400 to-teal-600 rounded-full"></div>

          <div v-for="edu in educationHistory" :key="edu.id + '-mobile'"
               class="relative mb-8 last:mb-0 pl-20">
            <div class="absolute left-6 top-6 w-6 h-6 bg-teal-400 rounded-full border-4 border-white z-10 shadow-lg">
              <div class="absolute inset-0 bg-teal-400 rounded-full animate-ping opacity-75"></div>
            </div>

            <div class="bg-gray-800/50 backdrop-blur-sm border border-teal-400/30 rounded-xl p-6 shadow-lg hover:border-teal-400/50 transition-all group">
              <div class="relative">
                <div class="absolute -top-2 -right-2 text-emerald-400/30 font-mono text-lg">
                  &lt;/&gt;
                </div>
                <span class="inline-block bg-gradient-to-r from-emerald-400 to-teal-400 text-white px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {{ edu.period }}
                </span>
                <h3 class="text-xl font-bold text-white mb-2">
                  {{ edu.institution }}
                </h3>
                <p class="text-gray-300">
                  {{ edu.major }}
                </p>
                <div class="absolute -bottom-2 -left-2 text-teal-400/30 font-mono text-lg">
                  { }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const educationHistory = ref([])

const API_URL = import.meta.env.PROD
  ? '/api/education'
  : 'http://localhost:3000/api/education'

onMounted(async () => {
  try {
    const response = await axios.get(API_URL)
    educationHistory.value = response.data
  } catch (error) {
    console.error('Gagal mengambil data pendidikan:', error)
  }
})
</script>

<style scoped>
@keyframes shapeFloat {
    0% {
        transform: translateY(0) rotate(0deg);
    }
    100% {
        transform: translateY(-20px) rotate(360deg);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

@keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
}

@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.animate-shape-float {
    animation: shapeFloat 20s infinite linear;
}

.animate-shape-float-5s {
    animation: shapeFloat 20s infinite linear 5s;
}

.animate-shape-float-10s {
    animation: shapeFloat 20s infinite linear 10s;
}

.animate-shape-float-15s {
    animation: shapeFloat 20s infinite linear 15s;
}

.animate-float-4s {
    animation: float 4s ease-in-out infinite;
}

.animate-float-5s {
    animation: float 5s ease-in-out infinite;
}

.animate-pulse-3s {
    animation: pulse 3s ease-in-out infinite;
}

.animate-pulse-4s {
    animation: pulse 4s ease-in-out infinite alternate;
}

.animate-pulse-5s {
    animation: pulse 5s ease-in-out infinite alternate;
}

.animate-pulse-6s-reverse {
    animation: pulse 6s ease-in-out infinite alternate-reverse;
}

.animate-spin-slow {
    animation: spin 8s linear infinite;
}

.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
}
</style>






// backend/index.js
const express = require('express');
const cors = require('cors');
const { sql } = require('@vercel/postgres');
const { educationHistory, skills, projects } = require('./data'); // opsional kalau pakai data lokal juga

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===== API pakai database
app.get('/api/education', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data pendidikan' });
  }
});

app.get('/api/skills', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data skill' });
  }
});

app.get('/api/projects', async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Gagal mengambil data proyek' });
  }
});

// ===== API pakai data lokal (jika PostgreSQL belum dipakai)
app.get('/api/fake/education', (req, res) => res.json(educationHistory));
app.get('/api/fake/skills', (req, res) => res.json(skills));
app.get('/api/fake/projects', (req, res) => res.json(projects));

// Untuk Vercel: jangan pakai app.listen
module.exports = app;
// backend/data.js
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

// backend/data.js
const skills = [
  {
    name: 'Vue.js',
    level: 95,
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    color: '#4FC08D'
  },
  {
    name: 'JavaScript',
    level: 90,
    category: 'Programming',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    color: '#F7DF1E'
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    category: 'Styling',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVklzfGsO-6hPFSuutVa0ingPtO5KZgg2vA-irnqZosRmpp4HHc12Ir-taFq3oO4ujPo&usqp=CAU',
    color: '#06B6D4'
  },
  {
    name: 'Node.js',
    level: 75,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  {
    name: 'Express.js',
    level: 70,
    category: 'Backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    color: '#000000'
  },
  {
    name: 'PostgreSQL',
    level: 80,
    category: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#336791'
  },
  {
    name: 'Git & GitHub',
    level: 88,
    category: 'Version Control',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    color: '#F05032'
  },
  {
    name: 'HTML5 & CSS3',
    level: 95,
    category: 'Frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    color: '#E34F26'
  }
];

const categories = ['Frontend', 'Backend', 'Database', 'Programming', 'Styling', 'Version Control'];

// ... (your existing educationHistory and projects data)

const projects = [
  {
    title: 'Figma Toko Online (Pick Up)',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Desain UI/UX untuk platform e-commerce dengan sistem pick-up yang memudahkan pelanggan mengambil barang langsung dari toko.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Mobile First'],
    link: '#',
    category: 'Design',
    status: 'Completed'
  },
  {
    title: 'Web Sport Venue Booking',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Platform web untuk booking lapangan olahraga dengan fitur real-time availability, payment gateway, dan management system.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Payment Gateway'],
    link: '#',
    category: 'Web Development',
    status: 'In Progress'
  },
  {
    title: 'Rangkaian Mikrokontroler IoT',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Sistem monitoring dan kontrol berbasis Arduino/ESP32 dengan integrasi sensor, actuator, dan komunikasi wireless.',
    tech: ['Arduino', 'ESP32', 'IoT', 'Sensors', 'C++'],
    link: '#',
    category: 'Hardware',
    status: 'Completed'
  }
];

// Single export statement
module.exports = { educationHistory, skills, projects };
