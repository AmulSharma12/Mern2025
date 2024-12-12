import { Analytics } from "../components/Analytics/Analytics";

export const About = () => {
  return (
    <>
      {/* 1st section */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <h1>Why choose us?</h1>
            <div className="about-parapgraph">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                sit aperiam nulla, atque voluptatum suscipit eveniet! Voluptatem
                fugiat.
              </p>
            </div>

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
              src="/images/about.png"
              alt="home-image"
              width="500"
              height="400"
            ></img>
          </div>
        </div>
      </section>

      {/* 2nd section */}
      <Analytics />
    </>
  );
};
