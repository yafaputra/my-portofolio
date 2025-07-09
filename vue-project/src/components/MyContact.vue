<script setup>

const socialLinks = [
  {
    name: 'GitHub',
    url: '#',
    icon: 'M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z',
    color: '#333'
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: '#0077B5'
  },
  {
    name: 'Twitter',
    url: '#',
    icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
    color: '#1DA1F2'
  }
];

const contactInfo = [
  {
    icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    title: 'Email',
    value: 'emailanda@example.com',
    link: 'mailto:emailanda@example.com'
  },
  {
    icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
    title: 'Phone',
    value: '+62 123 456 789',
    link: 'tel:+62123456789'
  },
  {
    icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z M15 10a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'Location',
    value: 'Yogyakarta, Indonesia',
    link: '#'
  }
];
</script>

<template>
  <footer id="kontak" class="py-20 relative overflow-hidden">
    <!-- Background with effects similar to skills section -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <!-- Background Effects -->
      <div class="background-effects">
        <div class="blue-glow"></div>
        <div class="blue-glow-2"></div>
        <div class="blue-glow-3"></div>
      </div>

      <!-- Particles -->
      <div class="particles">
        <div v-for="i in 15" :key="i" class="particle"
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
        <div class="shape hexagon-1"></div>
      </div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Section Title -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Hubungi <span class="text-blue-400">Saya</span>
        </h2>
        <div class="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Jangan ragu untuk terhubung dengan saya. Mari berdiskusi tentang proyek atau kolaborasi yang menarik!
        </p>
      </div>

      <!-- Contact Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div
          v-for="(contact, index) in contactInfo"
          :key="contact.title"
          class="contact-card group"
          :style="{ 'animation-delay': `${index * 0.2}s` }"
        >
          <div class="contact-glow"></div>
          <div class="contact-content">
            <div class="contact-icon">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="contact.icon"></path>
              </svg>
            </div>
            <h3 class="contact-title">{{ contact.title }}</h3>
            <a :href="contact.link" class="contact-value">{{ contact.value }}</a>
          </div>
        </div>
      </div>

      <!-- Main CTA Button -->
      <div class="text-center mb-16">
        <a
          href="mailto:emailanda@example.com"
          class="cta-button group"
        >
          <span class="cta-text">Kirim Email</span>
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
          </svg>
        </a>
      </div>

      <!-- Social Links -->
      <div class="flex justify-center space-x-8 mb-12">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.url"
          target="_blank"
          class="social-link group"
          :title="social.name"
        >
          <div class="social-icon">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path :d="social.icon"></path>
            </svg>
          </div>
          <span class="social-tooltip">{{ social.name }}</span>
        </a>
      </div>

      <!-- Footer Text -->
      <div class="text-center">
        <p class="text-gray-400 text-sm">
          &copy; {{ new Date().getFullYear() }} Nama Mahasiswa.
          <span class="text-blue-400">Dibuat dengan ❤️</span> menggunakan Vue.js & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Section Background */
#kontak {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 100%);
  color: white;
  position: relative;
}

/* Background Effects - Blue theme */
.background-effects {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.blue-glow {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite alternate;
  filter: blur(80px);
}

.blue-glow-2 {
  position: absolute;
  top: 60%;
  right: 10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 6s ease-in-out infinite alternate-reverse;
  filter: blur(60px);
}

.blue-glow-3 {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%);
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
  background: rgba(59, 130, 246, 0.8);
  border-radius: 50%;
  animation: particleFloat 15s infinite linear;
}

.particle:nth-child(odd) {
  background: rgba(255, 255, 255, 0.6);
  width: 2px;
  height: 2px;
}

.particle:nth-child(3n) {
  background: rgba(59, 130, 246, 0.4);
  width: 4px;
  height: 4px;
  animation-duration: 20s;
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
  width: 120px;
  height: 120px;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  animation-delay: 0s;
}

.circle-2 {
  top: 70%;
  right: 15%;
  width: 80px;
  height: 80px;
  border: 2px solid #3b82f6;
  border-radius: 50%;
  animation-delay: 5s;
}

.triangle-1 {
  top: 40%;
  left: 85%;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 43px solid rgba(59, 130, 246, 0.3);
  animation-delay: 10s;
}

.square-1 {
  top: 25%;
  right: 25%;
  width: 60px;
  height: 60px;
  border: 2px solid rgba(59, 130, 246, 0.3);
  transform: rotate(45deg);
  animation-delay: 15s;
}

.hexagon-1 {
  top: 80%;
  left: 70%;
  width: 40px;
  height: 70px;
  background: rgba(59, 130, 246, 0.2);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation-delay: 8s;
}

@keyframes shapeFloat {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  100% {
    transform: translateY(-20px) rotate(360deg);
  }
}

/* Contact Cards */
.contact-card {
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
  text-align: center;
}

.contact-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  opacity: 0.1;
  animation: cardGlow 6s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 1;
}

.contact-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 15px 40px rgba(59, 130, 246, 0.2);
}

.contact-card:hover .contact-glow {
  opacity: 0.3;
}

.contact-content {
  position: relative;
  z-index: 2;
}

.contact-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
}

.contact-card:hover .contact-icon {
  transform: scale(1.1);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
}

.contact-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
}

.contact-value {
  color: #60a5fa;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-value:hover {
  color: #3b82f6;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
}

.cta-text {
  position: relative;
  z-index: 2;
}

.cta-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.cta-button:hover .cta-icon {
  transform: rotate(45deg);
}

/* Social Links */
.social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  color: #9ca3af;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.social-link:hover {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(59, 130, 246, 0.3);
}

.social-icon {
  transition: transform 0.3s ease;
}

.social-link:hover .social-icon {
  transform: scale(1.2);
}

.social-tooltip {
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 5px solid transparent;
  border-top-color: rgba(0, 0, 0, 0.8);
}

.social-link:hover .social-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(-5px);
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

@keyframes cardGlow {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.1);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-card {
    padding: 1.5rem;
  }

  .contact-icon {
    width: 50px;
    height: 50px;
  }

  .cta-button {
    padding: 0.8rem 1.5rem;
  }

  .social-link {
    width: 45px;
    height: 45px;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1.25rem;
  }

  .contact-icon {
    width: 45px;
    height: 45px;
  }

  .social-link {
    width: 40px;
    height: 40px;
  }

  .cta-button {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>
