import React from 'react'

function Header({auth, setAuth}) {
  return (
    <div>
      <header>
        <h2>Grofers</h2>
        <nav>
        {auth?<button>Sign Out</button>:<ul><li><button>Sign In</button></li><li><button>Log In</button></li></ul>}
        </nav>
      </header>
    </div>
  )
}

export default Header
