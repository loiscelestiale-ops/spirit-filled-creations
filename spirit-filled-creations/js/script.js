// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Close menu when a link is clicked
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Product filters
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// Order modal
const modal = document.getElementById('order-modal');
const modalClose = document.getElementById('modal-close');
const modalProductName = document.getElementById('modal-product-name');
const modalProductPrice = document.getElementById('modal-product-price');
const modalGoContact = document.getElementById('modal-go-contact');

document.querySelectorAll('.order-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.dataset.product;
    const price = btn.dataset.price;
    modalProductName.textContent = name;
    modalProductPrice.textContent = `₹${Number(price).toLocaleString('en-IN')}`;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
modalGoContact.addEventListener('click', closeModal);

// Contact form – opens email client with pre-filled message
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const product = document.getElementById('product').value;
  const message = document.getElementById('message').value.trim();

  // CHANGE THIS to your real email address
  const yourEmail = 'hello@yourdomain.com';

  const subject = encodeURIComponent(`Order / Enquiry from ${name}`);
  let body = `Name: ${name}\nContact: ${email}\n`;
  if (product) body += `Interested in: ${product}\n`;
  body += `\nMessage:\n${message}`;

  window.location.href = `mailto:${yourEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
