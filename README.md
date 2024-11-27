# Final-Year-Project_Auction-Bidding-Platform

Project was deployed at render website: https://auction-bidding-platform.onrender.com/

Sorry for inconvenience for visitors because this project was deployed on free service so it takes time to start the server on loading of starting intro webpage.
Maximum it takes 1 minute to load.

Might be you're in patience to see, Thank you for your patience, This project is developed by us own, not bought from any other sources.
Authors: **Jnana Charan (Team Leader, Developer),
         Ch Lokesh (Developer and Administrator).**


# Auction Bidding Platform

This project is a **web-based auction bidding platform** designed to facilitate smooth and efficient bidding for goods and services. The platform provides a seamless user experience, enabling buyers and sellers to engage in real-time auctions securely.

---

## Features

- User-friendly interface for buyers and sellers.
- Real-time auction updates with dynamic bidding.
- Secure user authentication and authorization.
- Manageable auction listings with detailed product descriptions.
- Notifications for successful bids and auction closures.
- Admin dashboard to manage users and auctions.

---

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT-based secure login system
- **Others**: Socket.IO for real-time bid updates

---

## Requirements

To run this project, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

---

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/CharanChery/Final-Year-Project_Auction-Bidding-Platform.git
   ```
2. Navigate to the project directory:

```
cd Final-Year-Project_Auction-Bidding-Platform
```

3. Install dependencies for the backend and frontend:
```
npm install
```
4. Set up the .env file in the backend/ directory with the following details:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
5. Start the development server
   ```
   npm start
   ```
Access the platform at http://localhost:3000.

---

Usage

For Sellers:

Sign up and log in to the platform.
Create new auctions with product details and starting bid amounts.
Monitor bids in real-time.

For Buyers:

Browse available auctions.
Place bids on desired products.
Receive notifications for winning bids.
Adding money to their wallet using Stripe Payments.

---

Future Enhancements:

Implement advanced analytics for bid trends.
Enable multi-language support.
Include mobile app compatibility.
Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Acknowledgments
Special thanks to mentors and colleagues who provided guidance during development.
Inspired by popular auction platforms to create a tailored solution for real-time bidding.
