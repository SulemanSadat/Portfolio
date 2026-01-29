import React from "react";
import "../styles/Pricing.css";

const plans = [
  {
    name: "Launch",
    desc: "Perfect for freelancers & personal brands.",
    price: "$199",
    unit: "starting",
    cta: "Get started",
    featured: false,
    features: [
      "1-page responsive landing",
      "Basic SEO setup",
      "Basic Security",
      "CMS setup",
      "Website only",
      "Contact form",
      "2 revision round",
      "Delivery: 1–3 weeks",
    ],
  },
  {
    name: "Growth",
    desc: "Best for small businesses that want a polished presence.",
    price: "$599",
     discount: "-45% OFF",
    unit: "starting",
    cta: "Get started",
    featured: true,
    badge: "Most popular",
    features: [
      "Up to 5 pages",
      "Domain + Hosting",
      "Website & App",
      "Mobile-Friendly UI",
      "Custom pages & components",
      "Performance & SEO",
      "3 revision rounds",
      "Delivery: 2–4 weeks",
    ],
  },
  {
    name: "Custom Pro",
    desc: "For serious projects with custom requirements.",
    price: "$1499",
    unit: "starting",
    cta: "Request Custom Quote",
    featured: false,
    features: [
      "Custom pages & components",
      "Domain + Hosting",
      "Website & App",
      "Telegram Chatbot",
      "Advanced animations / interactions",
      "API integrations + auth",
      "Best-practice architecture",
      "Hosting management",
      "Support & Revisions",
     

    ],
  },
];

export default function Pricing() {
  return (
    <main className="p2" id="pricing"   >
      <section className="p2__hero" >
        <div className="p2__container">
          <span className="p2__pill">Pricing</span>

          <h1 className="p2__title">
          Software solutions optimized for <span className="p2__titleAccent">your business</span>
          </h1>

          <p className="p2__subtitle">
           Web & app development packages. Clear scope. Fast delivery. Clean code.
          </p>
        </div>
      </section>

      <section className="p2__plans">
        <div className="p2__container">
            
          <div className="p2__grid">
            
            {plans.map((p) => (
              <article
                key={p.name}
                className={`p2__card ${p.featured ? "p2__card--featured" : ""}`}
              >
                 {p.discount && (
                <div className="p2__discount">{p.discount}</div>
            )}
                {p.badge ? <div className="p2__badge">{p.badge}</div> : null}

                <header className="p2__cardHeader">
                  <h3 className="p2__planName">{p.name}</h3>
                  <p className="p2__planDesc">{p.desc}</p>
                </header>
                

                <div className="p2__priceRow">
                  <div className="p2__price">{p.price}</div>
                  <div className="p2__priceUnit">{p.unit}</div>
                </div>

                <a
                  className={`p2__btn ${p.featured ? "p2__btn--primary" : "p2__btn--dark"}`}
                  href={p.name === "Enterprise" ? "mailto:sadat.fullstack@gmail.com" : "#contact"}
                >
                  {p.cta}
                </a>

                <div className="p2__divider" />

                <div className="p2__included">What included:</div>

                <ul className="p2__list">
                  {p.features.map((f) => (
                    <li key={f} className="p2__item">
                      <span className="p2__check" aria-hidden="true">✓</span>
                      <span className="p2__itemText">{f}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="p2__fineprint" id="contact">
            <p> 
              ✓ 100% satisfaction guaranteed | Built with modern technologies | Final pricing depends on scope & business needs
            </p>
            <a className="p2__link" href="mailto:youremail@example.com">
                Contact me for custom quotes or questions.
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
