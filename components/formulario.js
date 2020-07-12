import { render } from "react-dom"
const axios=require('axios')
const pizzaClick = async () => {
    var a = document.getElementById("name").value
    var data = { name: a }
    const res = await axios.post('http://localhost:5000/insertar', data);
}
const Form = () => {
  
    return (  
          
        <div className="w-25 p-3" >
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre de la persona</label>
                <input id="name" className="form-control" id="name" />
            </div>
            <button className="btn btn-primary" onClick={pizzaClick}>Submit</button>
        </div>

    )
}

export default Form