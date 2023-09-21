import { Link } from "react-router-dom"

export const Submit = () => {
  return (
    <div className='ContenedorPrimero'>
    <div className='ContenedorSubmit'>
        <div className="Card">
            <img className='imgCard' src="https://i.postimg.cc/QHWJS1mY/icon-success.jpg"></img>
             <h1 className="TituloCard">Thanks for subscribing!</h1>
            <p className="ParrafoCard">
A confirmation email has been sent to <b>ash@loremcompany.com.</b> 
Please open it and click the button inside to confirm your subscription.
</p>
  <Link to={'/'}> <button className="BotonCard">Dismiss message</button></Link>
        </div>
    </div>
    </div>
    
  )
}
