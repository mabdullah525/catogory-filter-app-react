🛍️ Category Filter React App (Redux Toolkit)
📌 Description

Ye project ek React + Redux Toolkit application hai jisme user category ke basis par products filter kar sakta hai.
Redux ka use karke data (products) ko ek global store me rakha gaya hai jisse har component easily data use kar sakta hai.

🚀 Features

Category wise product filter (e.g., Laptops, Clothes, Electronics).

Data ek hi store (Redux Store) me rakha jata hai.

Easy state management with Redux Toolkit.

UI automatically update hoti hai jab data change hota hai.

🛠️ Technologies Used

React

Redux Toolkit

JavaScript (ES6+)

Vite (for fast build)

CSS / Tailwind (optional)

⚙️ How Redux Works Here

Category.jsx (Component)

User button click karta hai (e.g., "Electronics").

Ye ek dispatch action bhejta hai → filterByCategory().

productSlice.jsx (Reducer + Actions)

Reducer action ko sunti hai aur products ko filter karke new state banati hai.

Store.jsx (Global Store)

Saara data ek central box me hota hai (Store).

Reducer state ko update karke Store me save karta hai.

Project Structure
src/
│── assets/
│── images/          # Product images
│── App.jsx          # Main app component
│── Category.jsx     # Buttons for filtering
│── Data.jsx         # All products data
│── productSlice.jsx # Redux Slice (Reducer + Actions)
│── Store.jsx        # Redux Store
│── Navbar.jsx       # Example navbar
│── main.jsx         # ReactDOM + Provider



▶️ How to Run

Clone the repo:
git clone <repo-url>
cd Category-Filter-React

Install dependencies:
npm install

Run project:
npm run dev

UI Update

Jab Store me data update hota hai → React components automatically re-render hoke updated products dikhate hain.
