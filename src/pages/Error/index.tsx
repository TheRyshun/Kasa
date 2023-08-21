import { Link } from 'react-router-dom'
import './index.scss'

const Error = () => {
  return (
    <div className="error">
      <p className="code">404</p>
      <p className="alert">Oups! La page que  <br className="mobile-line-break" /> vous demandez n'existe pas.</p>
      <Link className="link" to="/">Retournez sur la page d'acceuil</Link>
    </div>
  )
}
export default Error