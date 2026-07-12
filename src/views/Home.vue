<script setup lang="ts">
import OutlineBadge from '@/components/OutlineBadge.vue'
</script>

<template>
  <section class="hero">
    <div class="hero-copy">
      <h1>Iván Mansilla</h1>
      <p class="intro">4th year <strong>Computer Engineering</strong> student based in Chile</p>
      <div class="hero-actions">
        <RouterLink to="/about" class="primary-action">About me <font-awesome-icon icon="fa-solid fa-arrow-right" /></RouterLink>
        <a href="https://github.com/ivnmansi" target="_blank" rel="noreferrer" class="secondary-action"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</a>
      </div>
    
    </div>
    <div class="portrait-wrap">
      <div class="orbit orbit-large"></div>
      <div class="orbit orbit-small"></div>
      <span class="spark spark-one"></span>
      <span class="spark spark-two"></span>
      <span class="spark spark-three"></span>
      <div class="portrait-card"><img src="/yveltal.png" alt="Yveltal" /></div>
    </div>
  </section>
</template>

<style scoped>
.hero { 
    align-items: center;
    display: grid; gap: 3rem;
    grid-template-columns: 1.22fr .78fr;
    min-height: calc(100vh - 11rem);
    padding: 3rem 0;
}

h1 {
    font-size: clamp(3.1rem, 6vw, 5.7rem);
    font-weight: 800;
    letter-spacing: -.075em;
    line-height: .98;
    margin: 1rem 0 1.5rem;
    max-width: 48rem;
}

h1 em {
    color: var(--red-400);
    font-style: normal;
}

.intro {
    color: var(--muted);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 39rem;
}
.intro strong { color: var(--text); }

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 2.25rem 0;
}
.primary-action, .secondary-action {
    align-items: center;
    border-radius: .7rem;
    display: inline-flex;
    font-size: .9rem;
    font-weight: 700;
    gap: .65rem;
    padding: .84rem 1.1rem;
    transition: all .2s ease;
}
.primary-action { background: var(--red-400); box-shadow: 0 12px 28px var(--glow); color: #190b0d; }
.primary-action:hover { background: #ff7777; color: #190b0d; transform: translateY(-2px); }
.secondary-action { border: 1px solid var(--line); color: var(--text); }.secondary-action:hover { border-color: var(--muted); color: white; }


.portrait-wrap { display: grid; min-height: 28rem; place-items: center; position: relative; }

.orbit { border: 1px solid rgba(251, 93, 93, .24); border-radius: 50%; position: absolute; }
.orbit::after { background: var(--red-400); border-radius: 50%; box-shadow: 0 0 14px var(--red-400); content: ''; height: .38rem; left: 12%; position: absolute; top: 10%; width: .38rem; }
.orbit-large { animation: rotate 16s linear infinite; height: 23rem; width: 29rem; }
.orbit-small { animation: rotate-reverse 11s linear infinite; border-color: rgba(255, 255, 255, .08); height: 17rem; width: 25rem; }
.orbit-small::after { background: #ffd1d1; box-shadow: 0 0 12px #ffd1d1; left: auto; right: 13%; top: 79%; }
.spark { animation: twinkle 2.8s ease-in-out infinite; background: var(--red-400); border-radius: 50%; box-shadow: 0 0 16px var(--red-400); height: .28rem; position: absolute; width: .28rem; z-index: 2; }
.spark-one { animation-delay: -.4s; left: 11%; top: 23%; }.spark-two { animation-delay: -1.3s; right: 10%; top: 28%; }.spark-three { animation-delay: -2.1s; bottom: 18%; right: 19%; }

.portrait-card { animation: float 4.5s ease-in-out infinite; position: relative; width: min(22rem, 70vw); z-index: 1; filter: drop-shadow(0 12px 28px var(--glow)); }


.portrait-card img { height: 100%; object-fit: contain; position: relative; transform: scale(1.04); width: 100%; }

@keyframes float { 0%, 100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-14px) rotate(1deg); } }
@keyframes rotate { to { transform: rotate(360deg); } }
@keyframes rotate-reverse { to { transform: rotate(-360deg); } }
@keyframes twinkle { 0%, 100% { opacity: .2; transform: scale(.7); } 50% { opacity: 1; transform: scale(1.5); } }

@media (prefers-reduced-motion: reduce) { .portrait-card, .orbit, .spark { animation: none; } }

@media (max-width: 991px) {
    .hero { grid-template-columns: 1fr; text-align: center; }
    .hero-copy { align-items: center; display: flex; flex-direction: column; }.portrait-wrap { margin-top: 1rem; min-height: 25rem; } }
@media (max-width: 575px) {
    .hero { padding-top: 1rem; }
    .hero-actions { justify-content: center; }
    .portrait-card { height: 23rem; width: 17rem; }}
</style>
