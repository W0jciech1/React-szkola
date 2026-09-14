import { useState } from 'react'

function App() {
  const warsztaty = [
    'Wprowadzenie do C#',
    'Front-end w React',
    'Bazy danych SQL',
    'Grafika 3D w Blenderze'
  ]

  const [imieNazwisko, setImieNazwisko] = useState('')
  const [numerWarsztatu, setNumerWarsztatu] = useState('')

  function zapiszNaWarsztat() {
    const numer = Number(numerWarsztatu)

    if (numer >= 1 && numer <= warsztaty.length) {
      console.log(
        `Zapis: ${imieNazwisko}, warsztat: ${warsztaty[numer - 1]}`
      )
    } else {
      console.log('Nieprawidłowy numer warsztatu')
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Dostępne warsztaty: {warsztaty.length}</h2>

      <ol>
        {warsztaty.map((warsztat, index) => (
          <li key={index}>{warsztat}</li>
        ))}
      </ol>

      <form>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>

          <input
            type="text"
            id="imieNazwisko"
            className="form-control"
            value={imieNazwisko}
            onChange={(e) => setImieNazwisko(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerWarsztatu" className="form-label">
            Numer warsztatu:
          </label>

          <input
            type="number"
            id="numerWarsztatu"
            className="form-control"
            value={numerWarsztatu}
            onChange={(e) => setNumerWarsztatu(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={zapiszNaWarsztat}
        >
          Zapisz
        </button>
      </form>
    </div>
  )
}

export default App
