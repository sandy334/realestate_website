# Admin Quick Reference Guide

## 🔑 Login Credentials

- **URL**: http://localhost:5173/admin/login
- **Username**: `admin`
- **Password**: `mysuru@2026`

## 📋 Dashboard Features

### Adding a New Property

1. Click the **"+ Add New Property"** button
2. Fill in all required fields:
   - **Title**: Property name (e.g., "Spacious 3BHK Villa in Vijayanagar")
   - **Type**: Select from dropdown (Plot, House, Flat, Commercial)
   - **Price**: Enter in format ₹XX,XX,XXX
   - **Location**: Area name, Mysuru (e.g., "Vijayanagar, Mysuru")
   - **Area**: Size in sq.ft (e.g., "1800 sq.ft")
   - **Status**: Available or Sold
   - **Description**: Detailed property description
   - **Image URLs**: Comma-separated image URLs
3. Click **"Add Property"** button
4. Property will appear in the list immediately

### Editing a Property

1. Find the property in the table
2. Click the **"Edit"** button in the Actions column
3. Modify the fields as needed
4. Click **"Update Property"** button
5. Changes are saved immediately

### Deleting a Property

1. Find the property in the table
2. Click the **"Delete"** button in the Actions column
3. Confirm the deletion in the popup
4. Property is removed immediately

### Viewing All Properties

- The dashboard shows all properties in a table format
- Each row displays:
  - Property image and title
  - Type badge (color-coded)
  - Price
  - Location
  - Status badge (Available/Sold)
  - Action buttons (Edit/Delete)

## 💾 Data Storage

- All changes are saved to **localStorage** in your browser
- Data persists even after closing the browser
- To reset to original data, clear browser localStorage:
  1. Open browser DevTools (F12)
  2. Go to Application > Local Storage
  3. Delete the "properties" key
  4. Refresh the page

## 🖼️ Image URLs

For property images, you can use:
- **Unsplash**: https://unsplash.com/
  - Example: `https://images.unsplash.com/photo-XXXXXX?w=800`
- **Your own hosted images**
- **Any publicly accessible image URL**

**Format**: Separate multiple URLs with commas
```
https://example.com/image1.jpg, https://example.com/image2.jpg
```

## 🎨 Property Type Color Codes

- **Plot**: Blue badge
- **House**: Green badge
- **Flat**: Purple badge
- **Commercial**: Orange badge

## 🔒 Security Notes

- Admin login is required to access the dashboard
- The admin route is hidden from public navigation
- Only one admin account is supported
- To change credentials, edit the `.env` file:
  ```
  VITE_ADMIN_USERNAME=your_username
  VITE_ADMIN_PASSWORD=your_password
  ```

## 📱 Testing Your Changes

After adding/editing properties:
1. Open a new browser tab
2. Go to http://localhost:5173/
3. Check the homepage for featured properties
4. Go to Properties page to see all listings
5. Verify filters work correctly

## 🚨 Common Issues

### Properties not showing on public pages
- Make sure status is set to "Available" for featured properties
- Check that image URLs are valid
- Refresh the page

### Can't login to admin
- Verify credentials match the `.env` file
- Clear browser cache and try again

### Changes not saving
- Check browser console for errors (F12)
- Ensure localStorage is enabled in browser

## 📞 Contact Information to Update

When going live, update these in the code:
- Phone: Search for `+919876543210` and replace
- WhatsApp: Search for `919876543210` and replace
- Email: Search for `info@mysururealty.com` and replace

## 🔄 Logout

Click the **"Logout"** button in the top-right corner of the dashboard to end your session.

---

**Remember**: All data is stored locally in the browser. For a production website with multiple admins or devices, consider implementing a backend database.
