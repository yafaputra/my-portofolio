<template>
  <div class="app">
    <!-- Navigation -->
    <nav>
      <div class="nav-container">
        <a href="#home" class="logo">{{ portfolioData.name }}</a>
        <ul class="nav-links">
          <li><a @click="scrollToSection('home')">Home</a></li>
          <li><a @click="scrollToSection('about')">About</a></li>
          <li><a @click="scrollToSection('skills')">Skills</a></li>
          <li><a @click="scrollToSection('projects')">Projects</a></li>
          <li><a @click="scrollToSection('contact')">Contact</a></li>
        </ul>
        <div class="mobile-menu" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 ref="heroTitle">{{ portfolioData.name }}</h1>
          <h2 ref="heroSubtitle">{{ portfolioData.title }}</h2>
          <p ref="heroDescription">{{ portfolioData.description }}</p>
          <a href="#contact" class="cta-button" ref="heroButton" @click="scrollToSection('contact')">
            Mari Berkolaborasi
          </a>
        </div>
      </div>

      <!-- Floating Elements -->
      <div class="floating-element" style="top: 20%; left: 10%; font-size: 2rem;">💻</div>
      <div class="floating-element" style="top: 60%; right: 10%; font-size: 2rem;">🚀</div>
      <div class="floating-element" style="bottom: 20%; left: 20%; font-size: 2rem;">⚡</div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="fade-in">Tentang Saya</h2>
        <div class="about-content">
          <div class="about-image slide-in-left">
            <div class="profile-img" style="background: linear-gradient(45deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-size: 4rem;">
              👨‍💻
            </div>
          </div>
          <div class="about-text slide-in-right">
            <p>{{ portfolioData.about }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="fade-in">Keahlian</h2>
        <div class="skills-grid">
          <div v-for="skill in portfolioData.skills" :key="skill.name" class="skill-card fade-in">
            <div class="skill-icon">{{ skill.icon }}</div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="fade-in">Proyek</h2>
        <div class="projects-grid">
          <div v-for="project in portfolioData.projects" :key="project.id" class="project-card fade-in">
            <div class="project-image">
              {{ project.icon }}
            </div>
            <div class="project-content">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="project-links">
                <a href="#" class="project-link">Live Demo</a>
                <a href="#" class="project-link">Source Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="fade-in">Hubungi Saya</h2>
        <div class="contact-content">
          <div class="contact-info slide-in-left">
            <h3>Mari Berkolaborasi!</h3>
            <p>Saya selalu terbuka untuk diskusi proyek baru dan peluang kolaborasi yang menarik.</p>
            <div class="contact-item">
              <i>📧</i>
              <span>{{ portfolioData.contact.email }}</span>
            </div>
            <div class="contact-item">
              <i>📱</i>
              <span>{{ portfolioData.contact.phone }}</span>
            </div>
            <div class="contact-item">
              <i>📍</i>
              <span>{{ portfolioData.contact.location }}</span>
            </div>
          </div>

          <form class="contact-form slide-in-right" @submit.prevent="submitForm">
            <div class="form-group">
              <input type="text" v-model="form.name" placeholder="Nama Lengkap" required>
            </div>
            <div class="form-group">
              <input type="email" v-model="form.email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="text" v-model="form.subject" placeholder="Subjek" required>
            </div>
            <div class="form-group">
              <textarea v-model="form.message" rows="5" placeholder="Pesan" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="social-links">
          <a href="#" class="social-link">📧</a>
          <a href="#" class="social-link">💼</a>
          <a href="#" class="social-link">📱</a>
          <a href="#" class="social-link">🐙</a>
        </div>
        <p>&copy; 2025 {{ portfolioData.name }}. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Portfolio',
  setup() {
    // Reactive data
    const portfolioData = ref({
      name: "John Doe",
      title: "Full Stack Developer",
      description: "Passionate developer yang suka menciptakan solusi digital inovatif dengan teknologi terdepan.",
      about: "Saya adalah seorang Full Stack Developer dengan pengalaman 3+ tahun dalam membangun aplikasi web modern. Saya memiliki keahlian dalam JavaScript, Vue.js, React, Node.js, dan berbagai teknologi web lainnya. Saya senang belajar teknologi baru dan menerapkannya dalam proyek-proyek yang menantang.",
      skills: [
        {
          name: "Frontend Development",
          icon: "🎨",
          description: "Vue.js, React, HTML5, CSS3, JavaScript ES6+",
          level: 90
        },
        {
          name: "Backend Development",
          icon: "⚙️",
          description: "Node.js, Express.js, Python, PHP",
          level: 85
        },
        {
          name: "Database",
          icon: "🗄️",
          description: "MongoDB, MySQL, PostgreSQL, Redis",
          level: 80
        },
        {
          name: "DevOps & Tools",
          icon: "🚀",
          description: "Docker, AWS, Git, Linux, CI/CD",
          level: 75
        }
      ],
      projects: [
        {
          id: 1,
          name: "E-Commerce Platform",
          description: "Platform e-commerce lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
          icon: "🛒",
          technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"]
        },
        {
          id: 2,
          name: "Task Management App",
          description: "Aplikasi manajemen tugas dengan fitur kolaborasi tim dan tracking progress real-time.",
          icon: "📋",
          technologies: ["React", "Firebase", "Material-UI", "Socket.io"]
        },
        {
          id: 3,
          name: "Weather Dashboard",
          description: "Dashboard cuaca interaktif dengan visualisasi data dan prediksi cuaca 7 hari.",
          icon: "🌤️",
          technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"]
        }
      ],
      contact: {
        email: "john.doe@example.com",
        phone: "+62 123 456 7890",
        location: "Jakarta, Indonesia"
      }
    })

    const form = ref({
      name: "",
      email: "",
      subject: "",
      message: ""
    })

    // Template refs
    const heroTitle = ref(null)
    const heroSubtitle = ref(null)
    const heroDescription = ref(null)
    const heroButton = ref(null)

    // Methods
    const initAnimations = () => {
      // Check if GSAP is available
      if (typeof gsap !== 'undefined') {
        // Animate hero section
        gsap.timeline()
          .to(heroTitle.value, { opacity: 1, y: 0, duration: 1, delay: 0.5 })
          .to(heroSubtitle.value, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
          .to(heroDescription.value, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
          .to(heroButton.value, { opacity: 1, y: 0, duration: 1, delay: 0.2 })
      }
    }

    const setupScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el)
      })
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    const toggleMobileMenu = () => {
      const navLinks = document.querySelector('.nav-links')
      if (navLinks) {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex'
      }
    }

    const submitForm = () => {
      if (form.value.name && form.value.email && form.value.subject && form.value.message) {
        alert('Terima kasih! Pesan Anda telah dikirim.')
        form.value = {
          name: "",
          email: "",
          subject: "",
          message: ""
        }
      } else {
        alert('Mohon lengkapi semua field yang diperlukan.')
      }
    }

    // Lifecycle
    onMounted(() => {
      initAnimations()
      setupScrollAnimations()
    })

    return {
      portfolioData,
      form,
      heroTitle,
      heroSubtitle,
      heroDescription,
      heroButton,
      scrollToSection,
      toggleMobileMenu,
      submitForm
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Navigation */
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: #667eea;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-links a:hover {
  color: #667eea;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu span {
  width: 25px;
  height: 3px;
  background: #333;
  margin: 3px 0;
  transition: 0.3s;
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
  padding: 80px 0;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  opacity: 0;
  transform: translateY(50px);
}

.hero-content h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(50px);
}

.hero-content p {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0;
  transform: translateY(50px);
}

.cta-button {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
}

/* Floating Elements */
.floating-element {
  position: absolute;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Sections */
.section {
  padding: 80px 0;
  position: relative;
}

.section:nth-child(even) {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: white;
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
}

.about-image {
  text-align: center;
}

.profile-img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.about-text {
  color: white;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.skill-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.skill-card:hover {
  transform: translateY(-10px);
}

.skill-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.skill-card h3 {
  color: white;
  margin-bottom: 1rem;
}

.skill-card p {
  color: rgba(255, 255, 255, 0.8);
}

.skill-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  margin-top: 1rem;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  border-radius: 4px;
  transition: width 2s ease;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 200px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: white;
  margin-bottom: 1rem;
}

.project-content p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  color: #ff6b6b;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #ffa500;
}

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.contact-info {
  color: white;
}

.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.contact-item i {
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #ff6b6b;
}

.contact-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.submit-btn {
  background: linear-gradient(45deg, #ff6b6b, #ffa500);
  color: white;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  text-align: center;
  padding: 2rem 0;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #ff6b6b;
  transform: translateY(-3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-menu {
    display: flex;
  }

  .hero-content h1 {
    font-size: 2.5rem;
  }

  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.6s ease;
}

.slide-in-left.visible {
  opacity: 1;
  transform: translateX(0);
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  transition: all 0.6s ease;
}

.slide-in-right.visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
