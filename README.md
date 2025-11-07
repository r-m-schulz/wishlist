# Christmas Wishlist 🎄

A beautiful, modern Christmas wishlist web app with smooth animations and a theme toggle between professional and festive Christmas colors.

## Features

- ✨ Smooth scroll animations
- 🎨 Professional/Christmas theme toggle
- 📱 Fully responsive design
- 🎯 Modern, minimalistic UI
- 🎁 Gift items with images and purchase links
- 😄 Fun joke section
- 📧 Contact section

## Local Development

### Option 1: Simple HTTP Server (Python)

If you have Python installed:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open your browser and visit: `http://localhost:8000`

### Option 2: Node.js HTTP Server

If you have Node.js installed:

```bash
npx http-server -p 8000
```

Then open your browser and visit: `http://localhost:8000`

### Option 3: VS Code Live Server

If you're using VS Code, install the "Live Server" extension and click "Go Live" in the status bar.

## Deployment to GitHub Pages

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Christmas wishlist app"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `christmas-wishlist`)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

### Step 5: Access Your Live Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

It may take a few minutes for the site to be live after enabling GitHub Pages.

## Customization

### Adding or Editing Gift Items

**Easy way:** Simply edit the `gifts.js` file! All gifts, images, and links are stored in one easy-to-edit JavaScript array.

Open `gifts.js` and modify the `gifts` array. Each gift needs:
- `title`: The name of the gift
- `description`: A description of the gift
- `image`: URL to an image (can be from Unsplash, your own hosting, etc.)
- `links`: Array of objects with `text` and `url` for purchase links

**Example:**
```javascript
{
    title: "Smart Watch",
    description: "A modern smartwatch to help track fitness goals.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    links: [
        { text: "View on Amazon", url: "https://www.amazon.com/s?k=smartwatch" },
        { text: "View on Best Buy", url: "https://www.bestbuy.com/site/searchpage.jsp?st=smartwatch" }
    ]
}
```

Just add or remove items from the array - the page will automatically update!

### Changing Colors

Edit `styles.css` and modify the CSS variables in the `:root` selector for professional theme, or in `body.christmas-theme` for Christmas theme.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

---

Made with ❤️ for the holidays

