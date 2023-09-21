import { Link } from "react-router-dom"

export const Home = () => {
  return (
<div className='ContenedorPrincipal'>
<div className='Contenedor'>

<div className='Formulario'>
 <h1 className='Titulo'>Stay updated!</h1>

<p className='Paragraph'>Join 60,000+ product managers receiving monthly updates on:</p>
<ul className='Lista'>
<li>Product discovery and building what matters</li>
<li>Measuring to ensure updates are a success</li>
<li>And much more!</li>
</ul>

<form className='FormMail'>
  <label>Email address</label>
  <input type="email" name="email" value="ash@loremcompany.com"/>.
  <Link to={'/Submit'}><button>Subscribe to monthly newsletter</button></Link>
</form>

</div>

<div className='img'>
</div>

  </div>
</div>    

  )
}
