Here is the fully updated `README.md` file. You can delete everything currently in your `README.md` file and paste this exact code in its place:

```markdown
# SMG Investment Services - Website

This is the official website for SMG Investment Services, a trusted gold pawning service in Sri Lanka. Built with a premium, editorial-style design, it features smooth animations, interactive maps, and a seamless contact form.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SuchinthaHettiarachchi/smg-investment.git
   cd smg-investment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID="your_service_id"
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID="your_template_id"
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY="your_public_key"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Interactive Maps:** Embedded Google Maps with exact branch coordinates.
- **Seamless Contact Form:** Powered by EmailJS to send inquiries directly to the business email without a backend server.
- **Smooth Animations:** Premium scroll and word-by-word text animations using Framer Motion.
- **SEO Optimized:** Custom metadata and favicon integration.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

This project is continuously deployed on Vercel. Any push to the `main` branch will automatically trigger a new deployment.

- **Live URL:** [https://smginvestment.vercel.app/](https://smginvestment.vercel.app/)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

```text
smg-investment/
├── public/
│   └── images/           # WebP images and logos
├── src/
│   ├── app/              # Next.js App Router (layout, page, globals.css)
│   ├── components/
│   │   └── site/         # UI components (Navbar, Hero, Footer, etc.)
│   └── constants/
│       └── data.ts       # Site data (Branches, Services, Testimonials)
├── .env                  # Environment variables (EmailJS IDs)
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Credits

- **Designed and Developed by:** [K1](https://www.karalliyaddaone.com/)
- **Client:** SMG Investment Services
```