# White Glove Golf Trip

A luxury golf travel concierge platform built with Next.js, Firebase, and OpenAI.

## Tech Stack

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **AI Integration**: OpenAI API for trip planning
- **Analytics**: Google Analytics and Hotjar
- **Scheduling**: Calendly

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=

   # OpenAI Configuration
   OPENAI_API_KEY=

   # Calendly Configuration
   NEXT_PUBLIC_CALENDLY_URL=

   # Hotjar Configuration
   NEXT_PUBLIC_HOTJAR_ID=
   NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION=
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions and configurations
- `/src/styles` - Global styles and Tailwind configuration
- `/public` - Static assets

## Features

- Luxury golf trip planning and booking
- AI-powered trip recommendations
- Blog with golf travel tips and destination guides
- Customer testimonials and reviews
- Contact and scheduling system
- Responsive design for all devices

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is proprietary and confidential.
