import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid-three-cols">
          {services.map((currElement, index) => {
            const { provider, price, service, description } = currElement;
            return (
              <div className="card" key={index}>
                <div className="card-image">
                  <img
                    src="/images/design.png"
                    alt="services image"
                    width="150"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h1>{service}</h1>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
