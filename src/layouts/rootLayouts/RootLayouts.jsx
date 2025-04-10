import { Link, Outlet } from 'react-router'
import './rootLayouts.css/'

const RootLayouts = () => {
    
  return (
    <div className='rootLayouts'>
      <header>
          <Link className='logo' to="/">
              <span>KAU Majors Assistant</span>
          </Link>
      </header>
      <main>
          <Outlet/>
      </main>
    </div>
  )
}

export default RootLayouts