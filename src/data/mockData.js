export const categoriesList = [
  { id: 'cat1', name: 'Cakes', image: '/images/category-cakes.jpg' },
  { id: 'cat2', name: 'Biscuits & Cookies', image: '/images/category-cookies.jpg' },
  { id: 'cat3', name: 'Pastries', image: '/images/category-pastries.jpg' },
  { id: 'cat4', name: 'Traditional Sweets', image: '/images/category-sweets.jpg' },
  { id: 'cat5', name: 'Breads & Buns', image: '/images/category-bread.jpg' },
  { id: 'cat6', name: 'Pizzas', image: '/images/category-pizza.jpg' },
  { id: 'cat7', name: 'Fast Food', image: '/images/category-burgers.jpg' },
  { id: 'cat8', name: 'Donuts', image: '/images/category-donuts.jpg' }
];

export const allProducts = [
  // Cakes
  { id: 'c1', categoryId: 'cat1', name: 'Fresh Cream Cake', price: 'Rs. 1,200', image: '/images/category-cakes.jpg' },
  { id: 'c2', categoryId: 'cat1', name: 'Pineapple Cake', price: 'Rs. 1,400', image: '/images/category-cakes.jpg' },
  { id: 'c3', categoryId: 'cat1', name: 'Chocolate Fudge Cake', price: 'Rs. 1,500', image: '/images/featured-chocolate-cake.jpg' },
  { id: 'c4', categoryId: 'cat1', name: 'Dry Cake', price: 'Rs. 800', image: '/images/category-cakes.jpg' },
  
  // Biscuits & Cookies
  { id: 'b1', categoryId: 'cat2', name: 'Chocolate Chip Cookies', price: 'Rs. 600 / kg', image: '/images/category-cookies.jpg' },
  { id: 'b2', categoryId: 'cat2', name: 'Butter Cookies', price: 'Rs. 600 / kg', image: '/images/category-cookies.jpg' },
  { id: 'b3', categoryId: 'cat2', name: 'Zeera Biscuits', price: 'Rs. 500 / kg', image: '/images/category-cookies.jpg' },
  
  // Pastries
  { id: 'p1', categoryId: 'cat3', name: 'Chocolate Pastry', price: 'Rs. 150', image: '/images/category-pastries.jpg' },
  { id: 'p2', categoryId: 'cat3', name: 'Pineapple Pastry', price: 'Rs. 150', image: '/images/category-pastries.jpg' },
  { id: 'p3', categoryId: 'cat3', name: 'Cream Roll', price: 'Rs. 100', image: '/images/category-pastries.jpg' },
  
  // Traditional Sweets
  { id: 's1', categoryId: 'cat4', name: 'Mix Mithai', price: 'Rs. 1,000 / kg', image: '/images/category-sweets.jpg' },
  { id: 's2', categoryId: 'cat4', name: 'Gulab Jamun', price: 'Rs. 900 / kg', image: '/images/category-sweets.jpg' },
  { id: 's3', categoryId: 'cat4', name: 'Barfi', price: 'Rs. 1,100 / kg', image: '/images/category-sweets.jpg' },
  { id: 's4', categoryId: 'cat4', name: 'Cham Cham', price: 'Rs. 1,000 / kg', image: '/images/category-sweets.jpg' },
  { id: 's5', categoryId: 'cat4', name: 'Sohan Halwa', price: 'Rs. 1,200 / kg', image: '/images/category-sweets.jpg' },
  
  // Breads & Buns
  { id: 'br1', categoryId: 'cat5', name: 'White Bread', price: 'Rs. 120', image: '/images/category-bread.jpg' },
  { id: 'br2', categoryId: 'cat5', name: 'Bran Bread', price: 'Rs. 150', image: '/images/category-bread.jpg' },
  { id: 'br3', categoryId: 'cat5', name: 'Cake Rusk', price: 'Rs. 700 / kg', image: '/images/category-rusks.jpg' },
  
  // Pizzas
  { id: 'pz1', categoryId: 'cat6', name: 'Chicken Tikka Pizza', price: 'Rs. 1,100', image: '/images/category-pizza.jpg' },
  { id: 'pz2', categoryId: 'cat6', name: 'Fajita Pizza', price: 'Rs. 1,100', image: '/images/category-pizza.jpg' },
  { id: 'pz3', categoryId: 'cat6', name: 'Malai Boti Pizza', price: 'Rs. 1,200', image: '/images/category-pizza.jpg' },
  
  // Fast Food
  { id: 'f1', categoryId: 'cat7', name: 'Zinger Burger', price: 'Rs. 450', image: '/images/category-burgers.jpg' },
  { id: 'f2', categoryId: 'cat7', name: 'Chapli Burger', price: 'Rs. 400', image: '/images/category-burgers.jpg' },
  { id: 'f3', categoryId: 'cat7', name: 'Crispy Samosa', price: 'Rs. 50', image: '/images/category-burgers.jpg' },
  { id: 'f4', categoryId: 'cat7', name: 'Chicken Sandwich', price: 'Rs. 250', image: '/images/category-bread.jpg' },
  
  // Donuts
  { id: 'd1', categoryId: 'cat8', name: 'Chocolate Donut', price: 'Rs. 180', image: '/images/category-donuts.jpg' },
  { id: 'd2', categoryId: 'cat8', name: 'Strawberry Donut', price: 'Rs. 180', image: '/images/category-donuts.jpg' },
  
  // Gifting - Baskets
  { id: 'g1', categoryId: 'gift1', name: 'Premium Sweets Basket', price: 'Rs. 4,500', image: '/images/category-sweets.jpg' },
  { id: 'g2', categoryId: 'gift1', name: 'Mixed Bakery Basket', price: 'Rs. 3,500', image: '/images/category-bread.jpg' },
  
  // Gifting - Biscuits
  { id: 'g3', categoryId: 'gift2', name: 'Assorted Cookies Tin', price: 'Rs. 1,500', image: '/images/category-cookies.jpg' },
  { id: 'g4', categoryId: 'gift2', name: 'Royal Butter Cookies Box', price: 'Rs. 1,800', image: '/images/category-cookies.jpg' },
  
  // Gifting - Cakes
  { id: 'g5', categoryId: 'gift3', name: 'Celebration Chocolate Cake', price: 'Rs. 2,500', image: '/images/featured-chocolate-cake.jpg' },
  { id: 'g6', categoryId: 'gift3', name: 'Anniversary Pineapple Cake', price: 'Rs. 2,200', image: '/images/category-cakes.jpg' }
];

export const giftingCategories = [
  { id: 'gift1', name: 'Baskets', image: '/images/category-sweets.jpg' },
  { id: 'gift2', name: 'Premium Biscuits', image: '/images/category-cookies.jpg' },
  { id: 'gift3', name: 'Special Cakes', image: '/images/category-cakes.jpg' }
];
