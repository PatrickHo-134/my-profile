import { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map" />
                  <h4>Location:</h4>
                  <p>Bexley North, Sydney, NSW 2207</p>
                </div>

                <div className="email">
                  <i className="icofont-envelope" />
                  <h4>Email:</h4>
                  <p>patrickho1304@gmail.com</p>
                </div>

                <div className="phone">
                  <i className="icofont-phone" />
                  <h4>Call:</h4>
                  <p>+61 410 978 468</p>
                </div>

                <div className="phone">
                  <i className="icofont-linkedin" />
                  <h4>LinkedIn:</h4>
                  <p>
                    <a href="https://www.linkedin.com/in/phat-vinh-ho-1304/">
                      Phat Vinh Ho
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
