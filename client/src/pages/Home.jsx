export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <h1>Welcome to Deep Matrix Hub!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat, possimus ut explicabo officia culpa corporis fugit sed
                dolore assumenda eveniet a.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn more!</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="home-image"
                width="500"
                height="400"
              ></img>
            </div>
          </div>
        </section>
        {/* 2nd section */}
        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>100+</h2>
              <p>Dummy Data</p>
            </div>
            <div className="div1">
              <h2>100+</h2>
              <p>Dummy Data</p>
            </div>
            <div className="div1">
              <h2>100+</h2>
              <p>Dummy Data</p>
            </div>
            <div className="div1">
              <h2>100+</h2>
              <p>Dummy Data</p>
            </div>
          </div>
        </section>
        {/* 3rd section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-image">
              <img
                src="/images/design.png"
                alt="home-image"
                width="500"
                height="400"
              ></img>
            </div>
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat, possimus ut explicabo officia culpa corporis fugit sed
                dolore assumenda eveniet a.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/service">
                  <button className="btn secondary-btn">Learn more!</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
