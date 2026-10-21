"use client";

import { useState } from "react";
import {
  ArrowRight, Search, ShoppingBag, Heart, UserRound, Menu,
  Laptop, ShieldCheck, Truck, CreditCard, ChevronRight, Sparkles,
  Headphones, Smartphone, Monitor, Gamepad2, X
} from "lucide-react";

const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "HP", icon: Monitor },
  { name: "Lenovo", icon: Laptop },
  { name: "Dell", icon: Monitor },
  { name: "Phones", icon: Smartphone },
  { name: "Accessories", icon: Headphones },
  { name: "Gaming", icon: Gamepad2 }
];

const slides = [
  {
    eyebrow: "TECH THAT MOVES YOU",
    title: "Your next upgrade starts here.",
    copy: "Discover the devices that help you create, work, learn and do more.",
    action: "Explore the collection",
    tone: "violet"
  },
  {
    eyebrow: "FIND YOUR PERFECT FIT",
    title: "Power for every possibility.",
    copy: "From everyday essentials to powerful machines, your next device is waiting.",
    action: "Browse laptops",
    tone: "blue"
  },
  {
    eyebrow: "SHOP YOUR WAY",
    title: "Flexible ways to own your tech.",
    copy: "Choose to pay now, save towards your purchase, or explore eligible Klump plans.",
    action: "How shopping works",
    tone: "orange"
  }
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const current = slides[slide];

  return (
    <main>
      <div className="announcement">
        WELCOME TO VOYAGE TECH <span>•</span> Smarter shopping for your next upgrade
      </div>

      <header className="site-header">
        <button
          className="icon-button mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <a className="brand" href="/" aria-label="Voyage Tech home">
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-name">VOYAGE<span>TECH</span></span>
        </a>

        <form className="search-box" onSubmit={(event) => event.preventDefault()}>
          <Search size={19} />
          <input
            aria-label="Search products"
            placeholder="Search laptops, brands and gadgets..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          {search && (
            <button type="button" onClick={() => setSearch("")} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
        </form>

        <nav className="header-actions" aria-label="Shopping">
          <a className="header-action" href="/account"><UserRound size={20} /><span>Account</span></a>
          <a className="header-action" href="/wishlist"><Heart size={20} /><span>Wishlist</span></a>
          <a className="cart-action" href="/cart"><ShoppingBag size={19} /><span>Cart</span><b>0</b></a>
        </nav>
      </header>

      {menuOpen && (
        <div className="mobile-drawer">
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={20} /></button>
          <a href="#categories" onClick={() => setMenuOpen(false)}>Shop categories</a>
          <a href="/account">My account</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/cart">Shopping cart</a>
        </div>
      )}

      <nav className="category-nav" aria-label="Product categories">
        <a className="category-nav-active" href="#categories">All products</a>
        {categories.slice(1, 5).map((category) => (
          <a key={category.name} href="#categories">{category.name}</a>
        ))}
        <a href="#how-it-works">Save to Buy</a>
        <a href="#how-it-works">Flexible payment</a>
      </nav>

      <section className={"hero hero-" + current.tone} aria-label="Featured promotions">
        <div className="hero-copy" key={current.title}>
          <div className="eyebrow"><Sparkles size={14} /> {current.eyebrow}</div>
          <h1>{current.title}</h1>
          <p>{current.copy}</p>
          <a className="primary-button" href="#categories">
            {current.action} <ArrowRight size={17} />
          </a>
          <div className="hero-pagination">
            <button onClick={() => setSlide((slide + 2) % 3)} aria-label="Previous promotion">←</button>
            {slides.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setSlide(index)}
                className={slide === index ? "pagination-dot active" : "pagination-dot"}
                aria-label={"Show promotion " + (index + 1)}
              />
            ))}
            <button onClick={() => setSlide((slide + 1) % 3)} aria-label="Next promotion">→</button>
            <span>{String(slide + 1).padStart(2, "0")} / 03</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="laptop-illustration">
            <div className="laptop-screen">
              <span>V.</span>
              <small>MOVE FORWARD</small>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="floating-chip chip-top"><ShieldCheck size={16} /> Shopping made clear</div>
          <div className="floating-chip chip-bottom"><Sparkles size={15} /> Your next upgrade</div>
        </div>
      </section>

      <section className="benefit-strip">
        <div><ShieldCheck size={21} /><span><b>Secure shopping</b><small>Protected checkout journey</small></span></div>
        <div><CreditCard size={21} /><span><b>Flexible payment</b><small>Pay now, Save to Buy or Klump</small></span></div>
        <div><Truck size={21} /><span><b>Order updates</b><small>Stay informed as you shop</small></span></div>
      </section>

      <section className="section categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="section-kicker">FIND YOUR NEXT DEVICE</span>
            <h2>Shop by category</h2>
            <p>Start with what you are looking for.</p>
          </div>
          <a href="#catalogue" className="text-link">View all <ArrowRight size={16} /></a>
        </div>
        <div className="category-rail">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <a className="category-card" href="#catalogue" key={category.name}>
                <span className={"category-icon category-icon-" + index}><Icon size={25} /></span>
                <span className="category-name">{category.name}</span>
                <ChevronRight className="category-arrow" size={16} />
              </a>
            );
          })}
        </div>
      </section>

      <section className="section catalogue-section" id="catalogue">
        <div className="section-heading">
          <div>
            <span className="section-kicker">THE VOYAGE COLLECTION</span>
            <h2>{search ? "Search products" : "Explore the collection"}</h2>
            <p>Our verified product catalogue will be connected in the next stage.</p>
          </div>
        </div>
        <div className="catalogue-empty">
          <div className="empty-icon"><ShoppingBag size={28} /></div>
          <h3>{search ? "Product search is not connected yet" : "Your product catalogue comes next"}</h3>
          <p>We'll import authorised Voyage Tech products, descriptions, photos and verified prices. No invented inventory will be shown as real stock.</p>
          {search && <button className="secondary-button" onClick={() => setSearch("")}>Clear search</button>}
        </div>
      </section>

      <section className="payment-section" id="how-it-works">
        <div className="payment-copy">
          <span className="section-kicker light-kicker">MORE WAYS TO SHOP</span>
          <h2>Your device.<br />Your way to pay.</h2>
          <p>Choose an available payment option at checkout. Orders will only be fulfilled after the required payment or financing approval is verified.</p>
        </div>
        <div className="payment-options">
          <article><span className="payment-number">01</span><div><h3>Pay now</h3><p>Transfer to the business account and submit your proof of payment for confirmation.</p></div><ArrowRight size={18} /></article>
          <article><span className="payment-number">02</span><div><h3>Save to Buy</h3><p>Start with a 30% deposit and complete your weekly or monthly savings plan before dispatch.</p></div><ArrowRight size={18} /></article>
          <article><span className="payment-number">03</span><div><h3>Buy now, pay later</h3><p>Apply through Klump, subject to eligibility and approval.</p></div><ArrowRight size={18} /></article>
        </div>
      </section>

      <section className="newsletter">
        <div>
          <span className="section-kicker">STAY IN THE LOOP</span>
          <h2>Good tech. Better decisions.</h2>
          <p>Product launches, useful updates and store announcements in one place.</p>
        </div>
        <a className="secondary-button" href="#how-it-works">Explore payment options <ArrowRight size={16} /></a>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-name">VOYAGE<span>TECH</span></span>
        </a>
        <p>Technology for your next move.</p>
        <div className="footer-links"><a href="#categories">Shop</a><a href="#how-it-works">Payment options</a><a href="/account">My account</a></div>
        <small>© {new Date().getFullYear()} Voyage Tech. Product catalogue and store details will be connected during setup.</small>
      </footer>
    </main>
  );
            }
              
