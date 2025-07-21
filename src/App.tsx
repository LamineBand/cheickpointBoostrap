//import React from 'react';
import { useState } from "react";
import "./styles/custom.css";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const items = [
    {
      title: "Mystères du Japon : Entre Tradition et Modernité",
      content: `Explorez le Japon en visitant Tokyo, Kyoto et Nara. Découvrez les contrastes entre la technologie futuriste et les temples ancestraux.`,
    },
    {
      title: "Aventure en Namibie : Déserts et Faune Sauvage",
      content: `Partez à la découverte des dunes rouges de Sossusvlei, observez les animaux du parc d'Etosha et explorez la mystérieuse côte des Squelettes.`,
    },
    {
      title: "Les Merveilles de la Patagonie : Entre Glaciers et Sommets",
      content: `Traversez l'Argentine et le Chili à la découverte des montagnes du Fitz Roy, des glaciers impressionnants et des fjords sauvages.`,
    },
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Lamine Travel
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvas"
            aria-controls="navbarOffcanvas"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-none d-lg-block  ms-auto">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="#home">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#destinations">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#voyages">
                  Circuits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Desktop Menu 
          <div className="collapse navbar-collapse d-block">
            ssss
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link " href="#home">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#destinations">
                  Destinations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#voyages">
                  Circuits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          */}
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        style={{ maxWidth: "250px" }}
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="navbarOffcanvas"
        aria-labelledby="navbarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="navbarOffcanvasLabel">
            Lamine Travel
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <i className="fas fa-home me-2"></i>Accueil
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#destinations">
                <i className="fas fa-map-marker-alt me-2"></i>Destinations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#voyages">
                <i className="fas fa-route me-2"></i>Circuits
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <i className="fas fa-envelope me-2"></i>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Explorez le monde, vivez l'extraordinaire !
            </h1>
            <p className="hero-subtitle">
              Partez à l'aventure avec notre agence et transformez vos rêves de
              voyage en réalité. Des voyages inoubliables, des souvenirs
              éternels.
            </p>
            <button className="btn btn-primary hero-btn">
              <i className="fas fa-calendar-check me-2"></i>
              Je réserve mon voyage
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="section-padding bg-light-custom">
        <div className="container">
          <h2 className="section-title">Destinations de Rêve</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card destination-card animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/15241887/pexels-photo-15241887.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coucher de soleil à Santorini"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                    Santorin, Grèce
                  </h3>
                  <p className="card-text">
                    Découvrez l'île de Santorin avec ses maisons blanches aux
                    dômes bleus surplombant la mer Égée. Un cadre idyllique pour
                    un voyage romantique et ensoleillé.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-2">Romantique</span>
                    <span className="badge bg-secondary">Plage</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card destination-card animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="Kyoto, Japon"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                    Kyoto, Japon
                  </h3>
                  <p className="card-text">
                    Plongez dans l'histoire et la sérénité de Kyoto, où temples
                    traditionnels et cerisiers en fleurs créent une atmosphère
                    unique entre culture et nature.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-2">Culture</span>
                    <span className="badge bg-secondary">Tradition</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card destination-card animate-fade-in">
                <img
                  src="https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="Bali, Indonésie"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    <i className="fas fa-map-marker-alt me-2 text-danger"></i>
                    Bali, Indonésie
                  </h3>
                  <p className="card-text">
                    Entre plages paradisiaques, rizières en terrasse et temples
                    mystiques, Bali est une invitation à l'évasion et à la
                    découverte spirituelle.
                  </p>
                  <div className="mt-3">
                    <span className="badge bg-primary me-2">Spirituel</span>
                    <span className="badge bg-secondary">Nature</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voyages Section */}
      <section id="voyages" className="section-padding">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Nos Circuits Exceptionnels
          </h2>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "15px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                    overflow: "hidden",
                    transition: "box-shadow 0.3s",
                  }}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-100"
                    style={{
                      backgroundColor:
                        openIndex === index ? "#e9ecef" : "#f8f9fa",
                      padding: "15px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      outline: "none",
                    }}
                  >
                    {item.title}
                  </button>
                  {openIndex === index && (
                    <div
                      style={{
                        padding: "15px 20px",
                        backgroundColor: "#fff",
                        fontSize: "15px",
                        lineHeight: "1.6",
                        borderTop: "1px solid #ddd",
                      }}
                    >
                      {item.content}
                      <div className="mt-3">
                        <a href="#" className="btn btn-outline-primary btn-sm">
                          Voir les détails
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-light-custom ">
        <div className="container ms-md-5">
          <h2 className="section-title me-md-5">Contactez-Nous</h2>
          <div className="contact-form">
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nom" className="form-label">
                    <i className="fas fa-user me-2"></i>Votre Nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    placeholder="Entrez votre nom"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope me-2"></i>Votre Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="destination" className="form-label">
                  <i className="fas fa-map-marker-alt me-2"></i>Destination
                  d'intérêt
                </label>
                <select className="form-control" id="destination">
                  <option value="">Choisissez une destination</option>
                  <option value="japon">Japon</option>
                  <option value="grece">Grèce</option>
                  <option value="bali">Bali</option>
                  <option value="namibie">Namibie</option>
                  <option value="patagonie">Patagonie</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  <i className="fas fa-comment me-2"></i>Votre Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={5}
                  placeholder="Décrivez-nous votre voyage de rêve..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <i className="fas fa-paper-plane me-2"></i>
                Envoyer le Message
              </button>
            </form>

            <div className="text-center mt-4">
              <small className="text-muted">
                <i className="fas fa-lock me-1"></i>
                Vos données personnelles sont protégées et ne seront jamais
                partagées.
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h5 className="mb-2">{/**Lamine Travel */}</h5>
              <p className="mb-0 text-light">
                {/** Votre partenaire pour des voyages d'exception depuis 2020 */}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links">
                <a href="#" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <hr
            className="my-4"
            style={{ borderColor: "rgba(255,255,255,0.2)" }}
          />
          <div className="text-center">
            <p className="mb-0">
              &copy; 2025 Lamine Travel. Tous droits réservés.
              <br />
              <a href="#" className="text-white-50 ms-2">
                Conçu par Bandaogo Lamine
              </a>{" "}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
