import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>


export function FirstComponent(props){
    const[name, setName] = useState("")
    return (
    <div style={{margin: 20}}>
      <input className="form-control" type="text" value={name}
      onChange={(e) => setName(e.target.value)}
      > 
      </input>
      <p style={{fontSize: 20}}>Hello, {name}</p>
      <input className="btn btn-primary" type="button" value="przycisk" onClick={(d) => setName("")}></input>
      <p>{props.param1}</p>
    </div>
  )
}
