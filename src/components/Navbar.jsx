import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
            Nexus
        </div>
        <div className="nav-links">
            <li>Chains</li>
            <li>Features</li>
            <li>Security</li>
            <li>Developers</li>
            <li>Blog</li>
        </div>
        <div className="nav-btns">
            <a href="#">Log In</a>
            <button>
                Get Nexus
            </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
