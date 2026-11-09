import React from "react";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { company } from "../data";

const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Brands", path: "/brands" },
  { label: "Business", path: "/business" },
  { label: "Compliance", path: "/compliance" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
  { label: "Terms", path: "/terms" },
  { label: "Privacy", path: "/privacy-policy" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/*      <div className="top">
        <div className="wrap topin">
          <span><MapPin size={14} />{company.address}</span>
          <a href={`tel:${company.phone}`}><Phone size={14} />{company.phone}</a>
          <a href={`mailto:${company.email}`}><Mail size={14} />{company.email}</a>
        </div>
      </div>*/}

      <header>
        <div className="wrap navrow">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img src="/images/esco-logo.png" alt="Esco Trade logo" />
            <span>
              <b>{company.name}</b>
              <small>A Bangladesh Private Limited Company</small>
            </span>
          </Link>

          <button
            className="toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

          <nav className={menuOpen ? "show" : ""}>
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <div className="wrap foot">
          <div className="footbrand">
            <div className="logo white">
              <img src="/images/esco-logo.png" alt="Esco Trade logo" />
              <span>
                <b>{company.name}</b>
                <small>A Bangladesh Private Limited Company</small>
              </span>
            </div>
            <p>Building practical digital trade, commodity and technology solutions in Bangladesh.</p>
          </div>

          <div className="contacts">
            <div>
              <MapPin />
              <span><b>Registered Office</b>{company.address}</span>
            </div>
            <a href={`tel:${company.phone}`}><Phone />{company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail />{company.email}</a>
          </div>
        </div>
        <div className="wrap copy">
          © {new Date().getFullYear()} {company.name} All rights reserved.
        </div>
      </footer>
    </>
  );
}
