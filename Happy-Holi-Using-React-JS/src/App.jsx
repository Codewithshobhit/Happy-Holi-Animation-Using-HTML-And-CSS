import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import { HoliColors } from "./Components/HoliColors.jsx"

// Defining a Higher-Order Component (HOC)
const funcTakeCompAsParam = (WrappedComponent) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <>
        <HoliColors />
        <WrappedComponent {...props} />
      </>
    );
  }
}

// eslint-disable-next-line react/prop-types
function HoliHomePage({ nickName, goodName }) {
  return (
    <div className='holihomepage'>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand text-white" href="#">
            <div className="log">Happy Holi By <b className='hue'>{nickName}</b></div>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="btn btn-light" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  More
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="myinfo">
        <h1 className="holi">Hey there!</h1>
        <h1>i am {goodName}</h1>
        <p className='mb-0'>Wishing you and your family a very colourful Holi<br />May you forget all your worries and enjoy this day to
          the fullest.</p>
        <h2 className="hue">Happy Holi!</h2>

        <a href="#" className="btn btn-danger mr-3 hue mx-2">contact</a>
        <a href="#" className="btn btn-light">Login</a>
      </div>

      <video src="./Happy_Holi_2024_By_CWS.mp4" autoPlay={true} muted loop></video>
    </div>
  )
}

// Apply the HOC to MyComponent
const MyResultComponent = funcTakeCompAsParam(HoliHomePage);

function App() {

  return (
    <>
      <MyResultComponent nickName={"Raja"} goodName={"Rudraprasad Mohapatra"} />
    </>
  )
}

export default App
