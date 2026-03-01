<div align="center">

# 🌸 Abhiruchi Maurya — Portfolio

### Anime-Themed Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-abhiruchimaurya.github.io-ff006e?style=for-the-badge&logo=github-pages&logoColor=white)](https://abhiruchimaurya.github.io/)
[![Vue 3](https://img.shields.io/badge/Vue-3.4.21-42b883?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![HTML5](https://img.shields.io/badge/HTML5-Single%20File-e34f26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Animations-1572b6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-ffd700?style=for-the-badge)](LICENSE)

*An immersive, anime-cyberpunk themed personal portfolio — built with Vue 3 (CDN), pure CSS animations, and zero paid or third-party UI libraries.*

---

</div>

## ✨ Overview

This is the source code for **Abhiruchi Maurya's** personal developer portfolio — a Frontend Web Developer with 7+ years of experience based in **Bengaluru, India**. The portfolio features a dark anime-cyberpunk aesthetic with neon accents, sakura petal animations, and smooth scroll-triggered reveals.

The entire site is a **single `index.html` file** — no build tools, no bundlers, no paid libraries — designed to deploy instantly via GitHub Pages.

---

## 🖥️ Live Preview

🔗 **[abhiruchimaurya.github.io](https://abhiruchimaurya.github.io/)**

---

## 🎨 Design & Theme

The portfolio follows a **dark anime-cyberpunk** aesthetic direction:

| Design Element | Details |
|---|---|
| **Color Palette** | Deep void (`#04040e`) with neon cyan (`#00e5ff`), sakura pink (`#ffb7c5`), and gold (`#ffd700`) accents |
| **Typography** | `Cinzel Decorative` (headings) · `Orbitron` (UI labels) · `Nunito` (body text) |
| **Background** | Animated grid lines + floating radial glow orbs |
| **Signature Effect** | 16 randomly-placed CSS-only falling sakura 🌸 petals |
| **Cards** | Glassmorphism panels with gradient top borders and hover glow |
| **Buttons** | Slide-fill animation on hover (no JS required) |

---

## 🗂️ Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Animated rotating gradient ring, name, role, XP badge, CTA buttons |
| 2 | **About** | Bio, avatar frame, open-to-work badge, personal identity tags |
| 3 | **Skills** | 15-card grid with scroll-triggered animated progress bars |
| 4 | **Experience** | Alternating vertical timeline with glowing dots, tech chips & projects |
| 5 | **Volunteer** | 8 community contribution cards |
| 6 | **Education** | Stacked cards with institution links |
| 7 | **Hobbies & Interests** | Pill chips with hover glow effects |
| 8 | **Contact** | Email, location, social links + availability panel |

---

## ⚙️ Tech Stack

> **Zero paid or licensed dependencies.** Everything used is open-source or free.

| Technology | Version / Source | Purpose |
|---|---|---|
| **Vue 3** | `3.4.21` via cdnjs (MIT) | Reactive UI, data binding, component logic |
| **HTML5** | Native | Semantic markup, single-file structure |
| **CSS3** | Native | All animations, transitions, layout (Grid & Flexbox) |
| **JavaScript (ES6+)** | Native | IntersectionObserver, scroll tracking, state management |
| **Google Fonts** | Free | `Cinzel Decorative`, `Orbitron`, `Nunito` |

**No npm, no Webpack, no Vite, no paid UI kits.** The file opens directly in any browser.

---

## 🚀 Features

### Animations & Motion
- **Loader** — Dual counter-rotating rings with a sword emoji center
- **Sakura rain** — 16 CSS-only falling petal animations with random size, speed & delay
- **Scroll reveals** — All sections fade + slide up when entering the viewport (via `IntersectionObserver`)
- **Skill bars** — Animated `scaleX` progress bars triggered on scroll
- **Hero ring** — Dual gradient rings spinning at different speeds and directions
- **Grid background** — Slow-moving perspective grid with coloured glow orbs
- **Hover states** — Slide-fill buttons, glow borders, lift cards, rotating social icons

### Navigation
- Fixed navbar with backdrop blur
- Active section highlighting (auto-updates on scroll)
- Animated underline on hover/active links
- Mobile hamburger menu with animated open/close states

### Responsive Design
- Fluid `clamp()` typography scaling
- CSS Grid auto-fill for skills and volunteer cards
- Timeline collapses to single-column on mobile
- About section stacks vertically on small screens

### Performance
- Single HTML file — no network waterfalls from bundled JS
- `IntersectionObserver` used instead of scroll event listeners
- Observers cleaned up on component unmount (`onUnmounted`)
- Fonts loaded with `rel="preconnect"` for faster rendering

---

## 📁 Project Structure

```
abhiruchimaurya.github.io/
│
├── index.html          # Entire portfolio — HTML + CSS + Vue 3 JS
├── data.js             # Original AngularJS data source (reference only)
└── README.md           # This file
```

All portfolio data (experience, skills, education, volunteer, etc.) is declared directly inside the Vue `setup()` function in `index.html`, sourced from `data.js`.

---

## 💼 Experience Data

| Role | Company | Period |
|---|---|---|
| Technology Lead (Onsite) | Infosys Limited | 2024 – Present |
| Technology Analyst | Infosys Limited | 2020 – 2024 |
| Software Engineer | Iglulabs Pvt Ltd | 2019 – 2020 |
| Software Engineer | Sing Sys Software Pvt Ltd | 2017 – 2019 |

**Key Projects:** COVID Tools · Campus Conference Center · Workplace Web · CircorSmart · Alum-n-i Web App · OAKS ERP · Tapow

---

## 🛠️ Running Locally

No installation or build step required.

**Option 1 — Open directly:**
```bash
# Clone the repository
git clone https://github.com/AbhiruchiMaurya/abhiruchimaurya.github.io.git

# Open in browser
open index.html
# or on Windows:
start index.html
```

**Option 2 — Local dev server (optional, for live reload):**
```bash
# Using Python
python -m http.server 8080

# Using Node.js (npx)
npx serve .

# Then visit: http://localhost:8080
```

> **Note:** The site requires an internet connection on first load to fetch Vue 3 from cdnjs and fonts from Google Fonts.

---

## 🌐 Deployment

This site is deployed via **GitHub Pages** from the `main` branch root directory.

To deploy your own fork:
1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Go to **Settings → Pages → Source → Deploy from branch (`main` / root)**
4. Your site will be live at `https://yourusername.github.io`

---

## 🎨 Customisation

All content lives inside the Vue `setup()` function in `index.html`. To personalise:

```js
// Update bio
const aboutMe = "Your bio here...";

// Update skills array
const skills = ref([
  { name: 'Vue.js', icon: '💚', level: 95, on: false },
  // ...
]);

// Update experience timeline
const experiences = [
  {
    designation: 'Your Role',
    company:     'Your Company',
    period:      '2022 – Present',
    tech:        ['Vue.js', 'TypeScript'],
    projects:    [{ name: 'Project Name', tech: 'Vue.js', link: 'https://...' }],
  },
  // ...
];
```

CSS design tokens (colours, spacing, radius) are all in `:root` variables at the top of the `<style>` block for easy theming.

---

## 📬 Contact

| Platform | Link |
|---|---|
| 🌐 Portfolio | [abhiruchimaurya.github.io](https://abhiruchimaurya.github.io/) |
| 💼 LinkedIn | [abhiruchi-maurya-365b5377](https://www.linkedin.com/in/abhiruchi-maurya-365b5377/) |
| 🐙 GitHub | [@AbhiruchiMaurya](https://github.com/AbhiruchiMaurya) |
| 🐦 Twitter | [@abhiruchimaurya](https://twitter.com/abhiruchimaurya) |
| ✈️ Telegram | [@inaba10](https://msng.link/o/?@inaba10=tg) |
| ✉️ Email | abhiruchimaurya10@gmail.com |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).  
Feel free to fork, adapt, and build your own version — just give credit where due. 🌸

---

<div align="center">

Made with ❤️ & 🌸 by **Abhiruchi Maurya**  
*Bengaluru, India*

</div>
