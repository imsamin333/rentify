# Rentify 🏠

A full-stack rental listing web application built with React, Redux Toolkit, and Appwrite.

## Features

- Browse rental listings with images
- Create, update and delete your own listings
- User authentication (signup, login, logout)
- Protected routes for authenticated users
- Responsive design with mobile hamburger menu
- Image upload and management

## Tech Stack

- **Frontend**: React, React Router, Redux Toolkit, React Hook Form
- **Backend**: Appwrite (Database, Storage, Authentication)
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites

- Node.js
- Appwrite account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rentify.git
cd rentify
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_APPWRITE_URL=your_appwrite_url
VITE_PROJECT_ID=your_project_id
VITE_DATABASE_ID=your_database_id
VITE_COLLECTION_ID=your_collection_id
VITE_BUCKET_ID=your_bucket_id
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── appwrite/
│   ├── auth.js        # Authentication service
│   └── config.js      # Database and storage service
├── components/
│   ├── Input.jsx
│   ├── ListingCard.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── CreateListing.jsx
│   ├── UpdateListing.jsx
│   └── ProtectLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── LogInPage.jsx
│   ├── SignUpPage.jsx
│   ├── CreateListingPage.jsx
│   ├── EditListing.jsx
│   └── MyListings.jsx
└── store/
    ├── store.js
    ├── authSlice.js
    ├── authThunk.js
    ├── listingSlice.js
    └── listingThunk.js
```

## Environment Variables

| Variable | Description |
|---|---|
| `VITE_APPWRITE_URL` | Appwrite API endpoint |
| `VITE_PROJECT_ID` | Appwrite project ID |
| `VITE_DATABASE_ID` | Appwrite database ID |
| `VITE_COLLECTION_ID` | Appwrite collection ID |
| `VITE_BUCKET_ID` | Appwrite storage bucket ID |

## License

MIT
