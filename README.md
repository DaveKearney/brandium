# Brandium.ai

Brandium.ai is a comprehensive digital marketing platform that helps businesses build and manage their brand, analyze market trends, and create engaging content across multiple channels.

## Features

- **Brand Foundation**: Develop your mission, vision, and brand values
- **Market Research**: Analyze competitors and identify opportunities
- **Visual Identity**: Capture or generate your brand's visual elements
- **Content Generation**: Create content for social media, blogs, and more
- **AI-Powered Analysis**: Get insights and recommendations for your marketing efforts

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/brandium.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

To deploy to GitHub Pages:

```bash
npm run build
npm run export
# Then push the 'out' directory to your gh-pages branch
```

### AWS Deployment

This application can be deployed to AWS using Amplify, S3/CloudFront, or Elastic Beanstalk. Refer to the documentation for specific deployment instructions.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives
- **Styling**: Tailwind CSS, CSS Modules
- **State Management**: React Context API
- **Authentication**: Clerk
- **Payments**: Stripe
- **Deployment**: GitHub Pages, AWS (S3, CloudFront, Amplify)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Clerk](https://clerk.dev/)
- [Stripe](https://stripe.com/)