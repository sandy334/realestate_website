# Mysuru Realty - Real Estate Website

A professional real estate website for a single-admin business in Mysuru, India. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

### Public Pages
- **Home**: Hero section, featured properties, property type cards, and why choose us section
- **Properties**: Browse all properties with Swiggy-style filter buttons (by type and status)
- **About**: Company information and services
- **Contact**: Contact form, contact information, and Google Maps embed
- **WhatsApp Floating Button**: Quick access to WhatsApp chat

### Admin Panel
- **Admin Login**: Secure login with environment variable credentials
- **Admin Dashboard**: Full CRUD operations for property management
  - Add new properties
  - Edit existing properties
  - Delete properties
  - View all properties in a table format
  - Data persists in localStorage

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Routing**: React Router DOM 7.13.0
- **Data Storage**: localStorage (no backend)
- **Initial Data**: JSON file

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   The `.env` file is already created with default credentials:
   - Username: `admin`
   - Password: `mysuru@2026`

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/`

## 📁 Project Structure

```
realestate_website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation bar
│   │   ├── Footer.jsx           # Footer with links and contact info
│   │   ├── WhatsAppButton.jsx   # Floating WhatsApp button
│   │   └── PropertyCard.jsx     # Property card component
│   ├── pages/
│   │   ├── Home.jsx             # Homepage
│   │   ├── Properties.jsx       # Properties listing with filters
│   │   ├── About.jsx            # About page
│   │   ├── Contact.jsx          # Contact page
│   │   ├── AdminLogin.jsx       # Admin login page
│   │   └── AdminDashboard.jsx   # Admin dashboard
│   ├── data/
│   │   └── properties.json      # Initial property data
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Tailwind CSS styles
├── .env                         # Environment variables
├── index.html                   # HTML template
└── package.json                 # Dependencies
```

## 🎨 Design Features

- **Mobile-first responsive design**
- **Modern gradient hero sections**
- **Smooth hover animations and transitions**
- **Card-based property listings**
- **Professional color scheme** (Primary: Red, Secondary: Green)
- **Clean and intuitive UI/UX**

## 🔐 Admin Access

1. Navigate to `/admin/login`
2. Enter credentials:
   - Username: `admin`
   - Password: `mysuru@2026`
3. Access the dashboard at `/admin/dashboard`

**Note**: Admin routes are hidden from the main navigation for security.

## 📊 Property Data Structure

Each property has the following fields:
```json
{
  "id": "unique-id",
  "title": "Property Title",
  "type": "Plot|House|Flat|Commercial",
  "price": "₹XX,XX,XXX",
  "location": "Area, Mysuru",
  "area": "XXXX sq.ft",
  "description": "Detailed description",
  "images": ["url1", "url2"],
  "status": "Available|Sold"
}
```

## 🌐 Contact Information

Update the following in the code to match your actual contact details:
- Phone: `+91 98765 43210` (in multiple components)
- WhatsApp: `919876543210` (in WhatsAppButton.jsx and PropertyCard.jsx)
- Email: `info@mysururealty.com`

## 🎯 Key Features Explained

### Property Filtering (Swiggy-style)
The Properties page features button-based filters similar to food ordering apps:
- Filter by property type (All, Plot, House, Flat, Commercial)
- Filter by status (All, Available, Sold)
- Active filter buttons are highlighted
- Real-time filtering with result count

### Data Persistence
- Initial data loaded from `src/data/properties.json`
- Admin changes saved to localStorage
- Public pages read from localStorage if available, otherwise use JSON
- No backend required

### Admin Security
- Credentials stored in environment variables
- Authentication state in localStorage
- Protected routes redirect to login if not authenticated
- Logout functionality clears authentication

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The build output will be in the `dist/` folder, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📝 Customization

1. **Colors**: Update the color variables in `src/index.css` under `@theme`
2. **Contact Info**: Search and replace phone numbers and email addresses
3. **Logo**: Replace the SVG icon in Navbar and Footer components
4. **Initial Properties**: Edit `src/data/properties.json`
5. **Admin Credentials**: Update `.env` file

## 🐛 Troubleshooting

- **Styles not loading**: Make sure Tailwind CSS v4 is properly installed
- **Properties not showing**: Check browser console and localStorage
- **Admin login not working**: Verify `.env` file exists and credentials match
- **Images not loading**: Ensure image URLs are valid and accessible

## 📄 License

This project is created for a single-admin real estate business in Mysuru.

## 🤝 Support

For any issues or questions, please contact the development team.

---

**Built with ❤️ for Mysuru Real Estate**
