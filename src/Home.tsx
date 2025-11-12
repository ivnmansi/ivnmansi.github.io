import LastPlayed from './lastPlayed'

export default function Home() {
  return (
    <>
      <div className="card">
        <h1 className="text-gradient">Iván Mansilla</h1>
        <h2 className="subtitle">
          <span className="typing">Estudiante de Ingenieria Civil en Computación</span><span className='caret'>_</span>
        </h2>
        <div className='links'>
          <i className="fa-solid fa-file-pdf"></i>
          <a href="mailto:ivan.mansillacor@gmail.com" target="_blank" rel="noreferrer">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="https://github.com/ivnmansi" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="card">
        <LastPlayed />
      </div>
    </>
  )
}