import "./Home.css"

const headliner = "PEAR is a user-friendly platform providing information to help NYC's low-income parents access free resources for their children."

export default function HomePage() {
  return <>
    <section id="home-bnr" class="home-bnr">
      <div class="home-spacer1"></div>
      <div id="bnr-content">
        <div id="bnr-text-div" class="bnr-p1">
          <p id="bnr-text" class="bnr-text">{headliner}</p>
        </div>
        <div id="bnr-pic-div" class="bnr-p2"></div>
      </div>
      <div class="home-spacer1"></div>
      <div id="home-waves-1"></div>
    </section>
    <section id="home-acc-buttons-section">
      <div id="login-signup-buttons">
      <div class="home-space2"></div>
      <button>SIGN UP</button>
      <button>LOGIN</button>
      <div class="home-spacer2"></div>

      </div>
    </section>
    {/* <div class="wave-container"></div> */}
  </>;
}
