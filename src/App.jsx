import './App.css'

function App() {

  return (
    <div className="App">

      <nav>
        <h3>Your shop</h3>
        <img src="./src/assets/logo.svg" alt="logo" srcset="./src/assets/logo.svg" />
        <ul>
          <li>Phones</li>
          <li>TVs</li>
          <li>Laptops</li>
          <li>Desktop</li>
        </ul>
        <div className="user-nav">
          <img className="shop-bag" src="./src/assets/shop-bag.svg" alt="" srcset="" />
          <img src="./src/assets/user-logo.svg" alt="" srcset="" />
        </div>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="search"/>
        <button>Find</button>
      </div>
      <article className="landing-card">
        <div className="landing-info">
          <h1>Your TV</h1>
          <h2>awaits</h2>

          <p>
            Great deals on some of your favorite electronics, including
            the latest versions.
          </p>

          <button>Shop now</button>
        </div>
      </article>
    </div>
  )
}

export default App
