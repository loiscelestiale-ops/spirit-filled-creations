# Spirit-Filled Creations — Website

A complete, ready-to-host website for selling handmade **paintings**, **key chains**, and **fridge magnets**, built around **Exodus 35:31**.

---

## What’s included

- Beautiful single-page website (mobile-friendly)
- Hero section with Exodus 35:31
- Shop with 9 sample products (3 categories) + filter buttons
- Inspiration section explaining the verse
- About the artist
- Contact / order form (opens email)
- Order modal when “Order” is clicked
- Clean, warm design suitable for handmade art

---

## How to customize (important)

### 1. Replace placeholder contact details
Open these files and change the example values:

| What              | File              | Look for                          |
|-------------------|-------------------|-----------------------------------|
| WhatsApp number   | `index.html`      | `91XXXXXXXXXX`                    |
| Email address     | `index.html` + `js/script.js` | `hello@yourdomain.com`     |
| Instagram handle  | `index.html`      | `@yourhandle`                     |

### 2. Update product names, prices & descriptions
Edit the product cards inside `index.html` (search for `product-card`).  
Also update the dropdown options in the contact form so they match.

### 3. Add your real product photos
1. Put your images in the `images/` folder (e.g. `images/golden-hour.jpg`).
2. In `index.html`, replace each placeholder like this:

```html
<!-- Before (placeholder) -->
<div class="placeholder-img painting-1">
  <span>Painting</span>
</div>

<!-- After (real image) -->
<img src="images/golden-hour.jpg" alt="Golden Hour Landscape" />
```

### 4. Change the site name / brand
Search for “Spirit-Filled Creations” in `index.html` and replace with your preferred name.

### 5. Colors (optional)
Edit the CSS variables at the top of `css/styles.css` (`:root { ... }`).

---

## How to host it for free

### Option A — Netlify (easiest)
1. Go to [https://netlify.com](https://netlify.com) and sign up.
2. Drag and drop the entire `spirit-filled-creations` folder onto the Netlify dashboard.
3. Your site will be live in seconds. You can later add a custom domain.

### Option B — Vercel
1. Go to [https://vercel.com](https://vercel.com).
2. Import the folder or connect a GitHub repo.
3. Deploy.

### Option C — GitHub Pages
1. Create a new GitHub repository.
2. Upload all the files.
3. Go to Settings → Pages → set source to the main branch.
4. Your site will be at `https://yourusername.github.io/repo-name`.

### Option D — Any web host
Upload the whole folder via FTP or the host’s file manager. Point the domain to the folder containing `index.html`.

---

## Next steps you may want later

- Connect a real payment system (Razorpay, Stripe, PayPal)
- Add a proper cart + checkout
- Connect the form to Formspree, Netlify Forms, or WhatsApp Business API
- Add more products or a blog section

---

Made with care so you can share your Spirit-filled creations with the world.
