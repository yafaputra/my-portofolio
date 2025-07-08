<script setup>
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
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
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
</script>

<template>
  <section id="skill" class="py-20 relative overflow-hidden">
    <!-- Simplified Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <!-- Background Effects -->
      <div class="background-effects">
        <div class="red-glow"></div>
        <div class="red-glow-2"></div>
        <div class="red-glow-3"></div>
      </div>

      <!-- Particles -->
      <div class="particles">
        <div v-for="i in 10" :key="i" class="particle"
             :style="{
               left: `${Math.random() * 100}%`,
               animationDelay: `${Math.random() * 5}s`
             }"></div>
      </div>

      <!-- Geometric Shapes -->
      <div class="geometric-shapes">
        <div class="shape circle-1"></div>
        <div class="shape circle-2"></div>
        <div class="shape triangle-1"></div>
        <div class="shape square-1"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="text-red-400">Skills</span>
        </h2>
        <div class="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Technologies and tools I master to create modern and high-performance web applications
        </p>
      </div>

      <!-- Category Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <div v-for="category in categories" :key="category"
             class="category-pill">
          {{ category }}
        </div>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="skill.name"
          class="skill-card group"
          :style="{ 'animation-delay': `${index * 0.15}s` }"
        >
          <!-- Glow Effect -->
          <div class="skill-glow" :style="{ 'background-color': skill.color }"></div>

          <!-- Card Content -->
          <div class="skill-content">
            <!-- Skill Icon -->
            <div class="skill-icon-container">
              <div class="skill-icon">
                <img :src="skill.icon" :alt="skill.name" class="skill-icon-image" />
              </div>
            </div>

            <!-- Skill Info -->
            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-category">{{ skill.category }}</p>
            </div>

            <!-- Circular Progress -->
            <div class="circular-progress">
              <svg class="progress-ring" width="80" height="80">
                <circle class="progress-ring-background" cx="40" cy="40" r="35" />
                <circle class="progress-ring-progress" cx="40" cy="40" r="35"
                        :style="{ 'stroke-dasharray': `${2 * Math.PI * 35}`, 'stroke-dashoffset': `${2 * Math.PI * 35 * (1 - skill.level / 100)}`, 'stroke': skill.color }" />
              </svg>
              <div class="progress-text">{{ skill.level }}%</div>
            </div>

            <!-- Skill Level Bar -->
            <div class="skill-level-bar">
              <div class="skill-level-fill" :style="{ width: `${skill.level}%`, 'background-color': skill.color }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Section Background */
#skill {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%);
  color: white;
  position: relative;
}

/* Background Effects */
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

@keyframes shapeFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}

/* Category Pills */
.category-pill {
  padding: 0.5rem 1.5rem;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #ff6b6b;
  transition: all 0.3s ease;
  cursor: pointer;
  backdrop-filter: blur(10px);
}

.category-pill:hover {
  background: rgba(255, 107, 107, 0.2);
  border-color: #ff6b6b;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
}

/* Skill Cards - Updated with new border effects */
.skill-card {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  animation: slideInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(60px);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.skill-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, currentColor 0%, transparent 70%);
  opacity: 0.1;
  animation: cardGlow 6s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 1;
}

.skill-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.skill-card:hover .skill-glow {
  opacity: 0.2;
}

.skill-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

/* Border effect on hover */
.skill-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(45deg,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover::before {
  opacity: 1;
}

@keyframes cardGlow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

/* Skill Icon */
.skill-icon-container {
  margin-bottom: 1.5rem;
}

.skill-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background: white;
  padding: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.skill-icon-image {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.skill-card:hover .skill-icon {
  transform: scale(1.1);
  box-shadow: 0 0 30px rgba(255, 107, 107, 0.5);
}

/* Skill Info */
.skill-info {
  margin-bottom: 1.5rem;
}

.skill-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
}

.skill-category {
  color: #ff6b6b;
  font-weight: 500;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Circular Progress */
.circular-progress {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.progress-ring {
  transform: rotate(-90deg);
}

.progress-ring-background {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 4;
}

.progress-ring-progress {
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s ease-in-out;
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
}

/* Skill Level Bar */
.skill-level-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin-top: 1rem;
}

.skill-level-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease-in-out;
  position: relative;
}

.skill-level-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* Animations */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .skill-card {
    padding: 1.5rem;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 768px) {
  .skill-card {
    padding: 1.25rem;
  }

  .skill-icon {
    width: 45px;
    height: 45px;
  }

  .skill-name {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .skill-card {
    padding: 1rem;
  }

  .skill-icon {
    width: 40px;
    height: 40px;
  }

  .skill-name {
    font-size: 1rem;
  }

  .category-pill {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
}
</style>
