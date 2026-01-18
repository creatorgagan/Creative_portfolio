# Video Portfolio Website

A professional portfolio website for showcasing video content, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎥 Video portfolio gallery with filtering
- 📱 Fully responsive design
- 🎨 Modern, minimalist UI inspired by 1Plus1 Studio
- ⚡ Fast performance with Vite
- 🔍 SEO optimized
- 📺 YouTube integration
- 📧 Contact form functionality

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **Video Player**: React Player
- **Routing**: React Router
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd video-portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero/           # Hero section component
│   ├── VideoGallery/   # Video gallery component
│   ├── VideoPlayer/    # Video player modal
│   ├── About/          # About section
│   ├── Contact/        # Contact form
│   └── Navigation/     # Navigation component
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── data/               # Static data and configuration
├── styles/             # CSS and styling files
└── App.tsx             # Main application component
```

## Configuration

### Site Configuration

Update `src/data/siteConfig.ts` with your personal information:

- Personal details (name, tagline, bio)
- Contact information
- Social media links
- SEO settings

For detailed instructions on configuring your portfolio content, see the [Content Management Guide](./CONTENT_GUIDE.md).

### YouTube Integration

To integrate your YouTube channel:

1. Get a YouTube API key from [Google Cloud Console](https://console.developers.google.com/)
2. Copy `.env.example` to `.env`
3. Add your YouTube credentials:

```bash
VITE_YOUTUBE_API_KEY=your_api_key
VITE_YOUTUBE_CHANNEL_ID=your_channel_id
VITE_YOUTUBE_PLAYLIST_ID=your_playlist_id
```

See the [Content Management Guide](./CONTENT_GUIDE.md) for detailed setup instructions.

### Video Content

Add your video content in `src/data/sampleVideos.ts`. Each video should include:

- Title and description
- Thumbnail image URL
- Video URL (local or YouTube)
- Category and tags
- Featured status

The content management system provides utilities for:
- Filtering and searching videos
- Managing video metadata
- Organizing content by category
- Tracking video statistics

### Styling

The design system is configured in:
- `src/styles/index.css` - CSS custom properties and base styles
- `tailwind.config.js` - Tailwind CSS configuration

## Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

## Development Roadmap

This project follows a structured implementation plan:

1. ✅ Project Setup and Foundation
2. 🔄 Design System and Core Styling
3. 🔄 Navigation System
4. 🔄 Hero Section
5. 🔄 Video Gallery
6. 🔄 Video Player
7. 🔄 YouTube Integration
8. 🔄 About Section
9. 🔄 Contact Form
10. 🔄 Responsive Design
11. 🔄 SEO Implementation
12. 🔄 Performance Optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.