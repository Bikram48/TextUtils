import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
            <div className="container-fluid">
                <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="#">TextUtils</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="#">Home</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch"  onClick={props.click} id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
        </nav>
    </div> 
  )
}
