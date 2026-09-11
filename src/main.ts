import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header>
    <h1>Mon démonstrateur</h1>
    <p>Petit site écrit en TypeScript + HTML</p>
  </header>

  <main>
    <section class="card">
      <h2>Démonstration</h2>

      <p>
        Cette page est hébergée gratuitement avec GitHub Pages.
      </p>

      <button id="counter">
        Cliquer ici
      </button>

      <p>
        Nombre de clics :
        <strong id="value">0</strong>
      </p>
    </section>
  </main>
`

let counter = 0

const button = document.querySelector<HTMLButtonElement>('#counter')!
const value = document.querySelector<HTMLSpanElement>('#value')!

button.addEventListener('click', () => {
  counter++
  value.textContent = counter.toString()
})