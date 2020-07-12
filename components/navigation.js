import Link from 'next/link'

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/formulario">
                <a className="nav-link">Ingresar</a>
              </Link>

            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navigation