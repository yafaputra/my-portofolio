<template>
  <section id="sertifikat" class="py-20 relative overflow-hidden">
    <!-- Background matching project section -->
    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <!-- Background Effects - Red theme -->
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
          My <span class="text-red-400">Certificates</span>
        </h2>
        <div class="w-24 h-1 bg-red-400 mx-auto mb-6"></div>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">
          Professional certifications and achievements that validate my skills and expertise
        </p>
      </div>

      <!-- Certificates Grid -->
      <div class="grid lg:grid-cols-2 gap-8 mt-12">
        <!-- Certificate Card 1 -->
        <div class="certificate-card group" style="animation-delay: 0ms;">
          <div class="certificate-content">
            <div class="certificate-image-container">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sertifikat Web Development"
                class="certificate-image"
                @click="showZoomed = !showZoomed"
              >
              <div class="certificate-overlay">
                <div class="certificate-badge">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Verified</span>
                </div>
                <div class="zoom-icon">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="certificate-info">
              <h3 class="certificate-title">Full Stack Web Development</h3>
              <div class="certificate-meta">
                <p class="certificate-issuer">Dikeluarkan oleh: <span class="text-red-400">Dicoding Indonesia</span></p>
                <p class="certificate-date">Tanggal: <span class="text-gray-300">15 Maret 2024</span></p>
              </div>
              <p class="certificate-description">
                Sertifikat komprehensif yang mencakup pengembangan aplikasi web full-stack menggunakan modern technologies seperti React, Node.js, dan database management.
              </p>

              <!-- Skills gained -->
              <div class="skills-gained">
                <span class="skill-tag">React.js</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">MongoDB</span>
              </div>

              <div class="certificate-actions">
                <a href="#" class="download-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download PDF
                </a>
                <a href="#" class="verify-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificate Card 2 -->
        <div class="certificate-card group" style="animation-delay: 200ms;">
          <div class="certificate-content">
            <div class="certificate-image-container">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Sertifikat UI/UX Design"
                class="certificate-image"
                @click="showZoomed = !showZoomed"
              >
              <div class="certificate-overlay">
                <div class="certificate-badge">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Verified</span>
                </div>
                <div class="zoom-icon">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="certificate-info">
              <h3 class="certificate-title">UI/UX Design Professional</h3>
              <div class="certificate-meta">
                <p class="certificate-issuer">Dikeluarkan oleh: <span class="text-red-400">Google Career Certificates</span></p>
                <p class="certificate-date">Tanggal: <span class="text-gray-300">22 Februari 2024</span></p>
              </div>
              <p class="certificate-description">
                Sertifikat profesional yang memvalidasi kemampuan dalam mendesain pengalaman pengguna yang intuitif dan interface yang menarik menggunakan design thinking methodology.
              </p>

              <!-- Skills gained -->
              <div class="skills-gained">
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Prototyping</span>
                <span class="skill-tag">User Research</span>
                <span class="skill-tag">Wireframing</span>
              </div>

              <div class="certificate-actions">
                <a href="#" class="download-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download PDF
                </a>
                <a href="#" class="verify-btn">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coming Soon Section -->
      <div class="mt-16 text-center">
        <div class="coming-soon-card">
          <div class="coming-soon-content">
            <div class="coming-soon-icon">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>
            <h3 class="coming-soon-title">More Achievements Coming Soon!</h3>
            <p class="coming-soon-description">
              Sedang dalam proses pengembangan kompetensi baru dan mengejar sertifikasi tambahan
            </p>
            <div class="coming-soon-list">
              <span class="upcoming-cert">AWS Cloud Practitioner</span>
              <span class="upcoming-cert">MongoDB Developer</span>
              <span class="upcoming-cert">React Advanced</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Zoom Modal -->
    <div v-if="showZoomed" class="zoom-modal" @click="showZoomed = false">
      <div class="zoom-content">
        <button class="close-btn" @click="showZoomed = false">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Certificate" class="zoomed-image">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
// State to control zoomed image modal


const showZoomed = ref(false);
</script>

<style scoped>
/* Background Effects - Same as project section */
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

/* Certificate Cards */
.certificate-card {
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 107, 0.2);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
  animation: fadeInUp 0.8s ease-out forwards;
  position: relative;
}

.certificate-card::before {
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

.certificate-card:hover::before {
  opacity: 1;
}

.certificate-card:hover {
  background: rgba(255, 107, 107, 0.15);
  transform: translateY(-10px) scale(1.01);
  box-shadow: 0 15px 40px rgba(255, 107, 107, 0.3);
}

.certificate-content {
  padding: 24px;
}

.certificate-image-container {
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 15px;
  margin-bottom: 20px;
  cursor: pointer;
}

.certificate-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.certificate-card:hover .certificate-image {
  transform: scale(1.05);
}

.certificate-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255, 107, 107, 0.8), rgba(255, 165, 165, 0.6));
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
}

.certificate-image-container:hover .certificate-overlay {
  opacity: 1;
}

.certificate-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.2);
  color: #22c55e;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(34, 197, 94, 0.3);
  backdrop-filter: blur(10px);
}

.zoom-icon {
  color: white;
  transition: transform 0.3s ease;
}

.zoom-icon:hover {
  transform: scale(1.2);
}

.certificate-info {
  color: white;
}

.certificate-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.3;
}

.certificate-meta {
  margin-bottom: 16px;
}

.certificate-issuer,
.certificate-date {
  color: #d1d5db;
  font-size: 0.9rem;
  margin-bottom: 4px;
}

.certificate-description {
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.skills-gained {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.skill-tag {
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

.skill-tag:hover {
  background: rgba(255, 107, 107, 0.25);
  transform: translateY(-2px);
}

.certificate-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.download-btn,
.verify-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.download-btn {
  background: rgba(255, 107, 107, 0.15);
  color: #ff6b6b;
  border: 1px solid rgba(255, 107, 107, 0.3);
}

.download-btn:hover {
  background: #ff6b6b;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
}

.verify-btn {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.verify-btn:hover {
  background: #22c55e;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(34, 197, 94, 0.4);
}

/* Coming Soon Card */
.coming-soon-card {
  background: rgba(255, 107, 107, 0.1);
  backdrop-filter: blur(10px);
  border: 2px dashed rgba(255, 107, 107, 0.3);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.coming-soon-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 107, 107, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.coming-soon-content {
  position: relative;
  z-index: 1;
}

.coming-soon-icon {
  color: #ff6b6b;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
}

.coming-soon-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
}

.coming-soon-description {
  color: #d1d5db;
  margin-bottom: 20px;
  line-height: 1.6;
}

.coming-soon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.upcoming-cert {
  background: rgba(255, 107, 107, 0.15);
  color: #ff6b6b;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 107, 107, 0.3);
  backdrop-filter: blur(10px);
}

/* Zoom Modal */
.zoom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.zoom-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.close-btn {
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 107, 107, 0.2);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.close-btn:hover {
  background: rgba(255, 107, 107, 0.4);
  transform: scale(1.1);
}

.zoomed-image {
  width: 100%;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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
  .certificate-content {
    padding: 20px;
  }

  .certificate-image-container {
    height: 200px;
  }

  .certificate-title {
    font-size: 1.3rem;
  }

  .certificate-actions {
    flex-direction: column;
  }

  .coming-soon-card {
    padding: 30px 20px;
  }

  .coming-soon-list {
    flex-direction: column;
    align-items: center;
  }

  .red-glow {
    width: 300px;
    height: 300px;
    filter: blur(40px);
  }
  .red-g low-2 {
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

