<script setup>

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
</script>

<template>
  <section id="proyek" class="py-20 relative overflow-hidden">
    <!-- Updated Background to match skills section -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <!-- Background Effects - Updated to red theme -->
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
      <!-- Updated Section Title to match skills section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="text-red-400">Projects</span>
        </h2>
        <div class="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Featured projects that showcase my skills and experience in various technologies
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card group"
          :style="{ 'animation-delay': `${index * 200}ms` }"
        >
          <!-- Project Image -->
          <div class="project-image-container">
            <img
              :src="project.image"
              :alt="project.title"
              class="project-image"
            >
            <div class="project-overlay">
              <div class="project-status" :class="project.status === 'Completed' ? 'status-completed' : 'status-progress'">
                {{ project.status }}
              </div>
              <div class="project-category">{{ project.category }}</div>
            </div>
          </div>

          <!-- Project Content -->
          <div class="project-content">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>

            <!-- Tech Stack -->
            <div class="tech-stack">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Project Link -->
            <div class="project-actions">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <span>Lihat Detail</span>
                <svg class="link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Background Effects - Updated to red theme */
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

/* Geometric Shapes - Updated to red theme */
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

.project-card {
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 107, 0.2); /* Border lebih tipis */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 0.8s ease-out forwards;
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg,
    rgba(255, 107, 107, 0.4) 0%,
    rgba(255, 107, 107, 0.2) 50%,
    rgba(255, 107, 107, 0.4) 100%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover::before {
  opacity: 1;
}

.project-card:hover {
  background: rgba(255, 107, 107, 0.15);
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 15px 40px rgba(255, 107, 107, 0.3);
}

.project-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  transform-origin: center center;
}

.project-card:hover .project-image {
  transform: scale(1.05); /* Scale lebih kecil agar smooth */
}


.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 107, 0.8), rgba(255, 165, 165, 0.6));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-status {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-completed {
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.status-progress {
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  border: 1px solid rgba(251, 191, 36, 0.3);
}

.project-category {
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.project-content {
  padding: 24px;
}

.project-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.3;
}

.project-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tech-tag {
  background: rgba(255, 107, 107, 0.15);
  color: #ff6b6b;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.tech-tag:hover {
  background: rgba(255, 107, 107, 0.25);
  transform: translateY(-2px);
  color: #ff6b6b;
}

.project-actions {
  display: flex;
  justify-content: flex-end;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ff6b6b;
  font-weight: 600;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  background: rgba(255, 107, 107, 0.15);
  border: 1px solid rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.project-link:hover {
  background: #ff6b6b;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
}

.link-arrow {
  transition: transform 0.3s ease;
}

.project-link:hover .link-arrow {
  transform: translate(3px, -3px);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-card {
    margin-bottom: 2rem;
  }

  .project-image-container {
    height: 220px;
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
  .project-image-container {
    height: 200px;
  }

  .project-content {
    padding: 20px;
  }

  .project-title {
    font-size: 1.2rem;
  }

  .project-description {
    font-size: 0.9rem;
  }

  .tech-stack {
    gap: 6px;
  }

  .tech-tag {
    font-size: 0.75rem;
    padding: 4px 8px;
  }

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

@media (max-width: 480px) {
  .project-card {
    border-radius: 15px;
  }

  .project-image-container {
    height: 180px;
  }

  .project-content {
    padding: 16px;
  }

  .project-title {
    font-size: 1.1rem;
  }

  .project-overlay {
    padding: 15px;
  }

  .project-link {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}
</style>
