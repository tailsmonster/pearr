import "./Home.css"

export default function HomePage() {
  const headliner = "PEAR is a user-friendly platform providing information to help NYC's low-income parents access free resources for their children."
  return <>
    <section id="bnr-section" class="bnr-section">
      <div id="bnr-text-div">
        <p id="bnr-text" class="bnr-text">{headliner}</p>
      </div>
    </section>
    <div class="wave-container"></div>
  </>;
}
