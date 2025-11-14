# Portfolio Website - Static HTML/CSS/JS Version

A complete static portfolio website with HTML, CSS, and JavaScript only (no backend required).

## Features

- ✅ Fully responsive design with Bootstrap 5
- ✅ Smooth scrolling and animations
- ✅ Floating certification badges
- ✅ Contact form (frontend only - needs backend for submission)
- ✅ All pages: Home, About, Skills, Projects, Certifications, Achievements, Contact

## File Structure

```
portfolio-static/
├── index.html          # Home page
├── about.html
├── skills.html
├── projects.html
├── certifications.html
├── achievements.html
├── contact.html
├── css/
│   └── style.css      # All custom styles
├── js/
│   └── main.js        # JavaScript functionality
└── images/            # Place your images here
    ├── profile.png
    ├── hero-bg.png
    ├── favicon.png
    ├── resume.pdf
    ├── cert-oci.png
    ├── cert-azure.png
    ├── cert-redhat.png
    └── cert-aws.png
```

## Setup

1. **Copy your images** from the Django project:
   - Copy `portfolio/static/portfolio/images/*` to `portfolio-static/images/`

2. **Update links** in HTML files:
   - Update GitHub links in `projects.html`
   - Update social media links in all HTML files (footer section)
   - Update email address in contact form and footer

3. **Open in browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000`

## Deployment

This static site can be deployed to:
- **GitHub Pages** (Free)
- **Netlify** (Free)
- **Vercel** (Free)
- **Cloudflare Pages** (Free)
- Any static hosting service

## Notes

- Contact form shows success message but doesn't actually send emails (needs backend)
- All data is hardcoded in HTML files
- Images need to be placed in the `images/` folder
- Update all placeholder links (GitHub, LinkedIn, Email) with your actual links

