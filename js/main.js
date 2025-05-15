// 初始化粒子效果
document.addEventListener('DOMContentLoaded', function () {
  // 粒子效果配置
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#6e42e5'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#00d4ff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  })

  // 初始化AOS动画库
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  })

  // 导航栏滚动效果
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    if (window.scrollY > 50) {
      header.style.padding = '10px 0'
      header.style.background = 'rgba(5, 5, 16, 0.95)'
    } else {
      header.style.padding = '20px 0'
      header.style.background = 'rgba(10, 10, 26, 0.8)'
    }
  })

  // 平滑滚动到锚点
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')
      if (targetId === '#') return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        })
      }
    })
  })

  // 添加年份到页脚版权信息
  const currentYear = new Date().getFullYear()
  const footerYear = document.querySelector('.footer-bottom p')
  if (footerYear) {
    footerYear.innerHTML = footerYear.innerHTML.replace('2023', currentYear)
  }

  // 添加视差滚动效果
  window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY
    const heroSection = document.querySelector('.hero')
    if (heroSection) {
      heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px'
    }
  })

  // 添加原则卡片悬停效果
  const principleCards = document.querySelectorAll('.principle-card')
  principleCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-10px)'
      this.style.boxShadow = '0 0 20px rgba(110, 66, 229, 0.7)'
    })

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0)'
      this.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.2)'
    })
  })
})