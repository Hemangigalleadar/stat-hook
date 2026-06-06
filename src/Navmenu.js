

export default function Navmenu(props) {


  const handleClick = () => {
  console.log("Switch clicked");
  props.toggleMode();
};


  return (
   
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >

        <div className="container-fluid">

          <a className="navbar-brand" href="/Navbar1">
            {props.title}
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link active" href="/Textform">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>



            </ul>

            {/* Toggle Switch */}

            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >

              {/* <input
                className="form-check-input"  
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}

              /> */}

              <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              // onClick={props.toggleMode}
             onChange={handleClick}
/>



              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Dark Mode
              </label>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
}