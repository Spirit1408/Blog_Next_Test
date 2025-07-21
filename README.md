# Mini Blog - Multilingual Next.js Blog

A multilingual mini-blog built with Next.js 15 and modern web technologies. The project demonstrates the use of Server-Side Rendering (SSR), Static Site Generation (SSG), and internationalization (i18n).

## 🚀 Demo

[Live project version on Vercel](https://your-blog-url.vercel.app) *(will be added after deployment)*

## ✨ Features

- **Multilingual**: Support for English and Ukrainian languages with prefix routing (`/en`, `/uk`)
- **SSR**: Home page uses Server-Side Rendering to fetch current data
- **SSG**: Post pages are generated statically at build time for maximum performance
- **Modern UI**: Clean and responsive design using CSS Modules
- **Error Handling**: Custom 404 and error handling pages
- **Loading Indicators**: Smooth transitions between pages
- **Responsive Design**: Correct display on all devices

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: CSS Modules
- **API**: JSONPlaceholder for data fetching
- **Deployment**: Vercel
- **Version Control**: Git

## 📁 Project Structure

```
├── app/
│   ├── [locale]/                 # Localized routes
│   │   ├── about/               # Static "About" page
│   │   ├── posts/[id]/          # Dynamic post pages (SSG)
│   │   ├── layout.js            # Layout for localized pages
│   │   ├── page.js              # Home page (SSR)
│   │   ├── loading.js           # Loading indicator
│   │   ├── error.js             # Error handling page
│   │   └── not-found.js         # Custom 404 page
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout
│   └── page.js                  # Redirect to /en
├── components/
│   ├── Header/                  # Header component with navigation
│   └── Footer/                  # Footer component
├── lib/
│   └── translations.js          # Translation and API utilities
├── locales/
│   ├── en.json                  # English translations
│   └── uk.json                  # Ukrainian translations
└── public/                      # Static files
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mini-blog.git
   cd mini-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Build and Deploy

### Local Build

```bash
npm run build
npm start
```

### Deploy to Vercel

1. **Connect repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

2. **Automatic deployment**
   - Every push to main branch automatically triggers deployment
   - Preview deployments are created for pull requests

## 🌐 Multilingual Support

The project supports two languages:

- **English** (`/en`): Default language
- **Ukrainian** (`/uk`): Alternative language

### Adding a new language

1. Create a translation file in the `locales/` folder (e.g., `fr.json`)
2. Add the new locale to `generateStaticParams()` functions in layout files
3. Update the language switcher in the Header component

## 📊 Performance

- **SSG**: Post pages are generated statically for fast loading
- **SSR**: Home page is server-rendered for current data
- **Code Splitting**: Automatic code splitting by Next.js
- **Image Optimization**: Built-in Next.js image optimization

## 🧪 Testing

```bash
# Run linter
npm run lint

# Check build
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 📝 License

This project is distributed under the MIT License. See [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the excellent framework
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for test data
- [Vercel](https://vercel.com/) for free hosting

---

⭐ Star this project if it was helpful!
