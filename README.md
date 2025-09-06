# Ecom - Modern E-Commerce Platform

A modern, decentralized e-commerce platform built with Next.js 14, TypeScript, Tailwind CSS, and Web3 integration. This project showcases a premium e-commerce experience with blockchain technology.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix primitives for accessible components
- **Animations**: Framer Motion for smooth micro-interactions and page transitions
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile
- **Dark Mode**: Built-in dark mode support with system preference detection
- **Web3 Integration**: Blockchain-powered transactions and smart contracts
- **Performance**: Optimized with next/image, lazy loading, and SEO metadata
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Testing**: Jest and React Testing Library for unit tests

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Testing**: Jest + React Testing Library
- **Blockchain**: Ethers.js for Web3 integration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── products/         # Products pages
├── components/           # Reusable components
│   ├── ui/              # Base UI components (shadcn/ui)
│   ├── layout/          # Layout components (header, footer)
│   ├── sections/        # Page sections
│   ├── products/        # Product-specific components
│   └── forms/          # Form components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
├── types/              # TypeScript type definitions
└── utils/              # Helper functions
```

## 🎨 Design System

### Colors
- **Primary**: Brand blue (#0ea5e9) with gradient variations
- **Secondary**: Neutral grays with dark mode support
- **Accent**: Success green, warning orange, error red
- **Background**: Light/dark theme support

### Typography
- **Font**: Inter (primary), Cal Sans (display)
- **Scale**: Responsive typography with proper line heights
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- **Base**: 4px grid system
- **Scale**: 0.25rem to 4rem (0.25x to 4x)
- **Responsive**: Mobile-first approach

### Components
- **Buttons**: Multiple variants (default, brand, gradient, outline)
- **Cards**: Consistent shadow and hover effects
- **Forms**: Accessible inputs with validation states
- **Navigation**: Sticky header with smooth scrolling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
   git clone <repository-url>
   cd ecommerce-web3
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run type-check` - Run TypeScript type checking

## 🧪 Testing

The project includes comprehensive testing setup with Jest and React Testing Library.

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm test -- --coverage
```

### Test Structure
- **Unit Tests**: Component testing with user interactions
- **Accessibility Tests**: ARIA labels and keyboard navigation
- **Visual Tests**: Component rendering and styling

## 🎯 Performance

The application is optimized for performance with:

- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized bundle size with tree shaking
- **SEO**: Meta tags, structured data, and sitemap generation
- **Lighthouse Score**: Target 90+ across all metrics

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

### Tailwind Configuration
The Tailwind config includes:
- Custom color palette
- Extended spacing scale
- Custom animations
- Dark mode support

### TypeScript Configuration
Strict TypeScript configuration with:
- Path mapping for clean imports
- Strict type checking
- Next.js specific optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow the existing component structure
- Write tests for new components
- Use conventional commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Icon library

## 📞 Support

For support, email support@ecom.com or join our Discord community.

---

Built with ❤️ by the Ecom Team