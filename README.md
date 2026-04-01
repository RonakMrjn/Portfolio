# Portfolio — [Your Name]
## UI/UX Designer · Frontend Developer · Graphic Designer

A clean, minimal portfolio website inspired by naomicreates.co.za.

---

## File Structure

```
portfolio/
├── index.html          ← Home page (hero + projects)
├── about.html          ← About Me page
├── projects.html       ← Full projects listing
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Animations, nav, scroll effects
├── assets/
│   └── images/         ← Add your project images here
└── README.md           ← This file
```

---

## How to Customise

### 1. Replace Your Name & Email
Search and replace `[Your Name]` and `youremail@email.com` across all HTML files.

### 2. Add Your Portrait (about.html)
Replace the `.portrait-ph` div with:
```html
<img class="portrait-img" src="assets/images/portrait.jpg" alt="Your Name">
```

### 3. Add Project Images
Replace `.img-ph` divs with real img tags:
```html
<img src="assets/images/your-project.jpg" alt="Project description">
```

### 4. Update Your Projects
Each `.project-card` block has tags, title, description, and a CTA link.
Alternate between `.project-card` and `.project-card reverse` for the alternating layout.

### 5. Hosting Options (all free)
- **Netlify**: Drag and drop the portfolio/ folder at netlify.com
- **GitHub Pages**: Push to GitHub, enable Pages in Settings
- **Vercel**: Import from GitHub at vercel.com

---

Built with HTML, CSS & JavaScript | Inspired by naomicreates.co.za
