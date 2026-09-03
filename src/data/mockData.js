export const categoriesList = [
  { id: 'cat1', name: 'Cakes', image: '/images/category-cakes.png' },
  { id: 'cat2', name: 'Biscuits & Cookies', image: '/images/category-cookies.png' },
  { id: 'cat3', name: 'Pastries', image: '/images/category-pastries.png' },
  { id: 'cat4', name: 'Traditional Sweets', image: '/images/category-sweets.png' },
  { id: 'cat5', name: 'Breads & Buns', image: '/images/category-bread.png' },
  { id: 'cat6', name: 'Pizzas', image: '/images/category-pizza.png' },
  { id: 'cat7', name: 'Fast Food', image: '/images/category-burgers.png' },
  { id: 'cat8', name: 'Donuts', image: '/images/category-donuts.png' }
];

export const allProducts = [
  // Cakes
  { id: 'c1', categoryId: 'cat1', name: 'Fresh Cream Cake', price: 'Rs. 1,200', image: '/images/category-cakes.png' },
  { id: 'c2', categoryId: 'cat1', name: 'Pineapple Cake', price: 'Rs. 1,400', image: '/images/category-cakes.png' },
  { id: 'c3', categoryId: 'cat1', name: 'Chocolate Fudge Cake', price: 'Rs. 1,500', image: '/images/featured-chocolate-cake.png' },
  { id: 'c4', categoryId: 'cat1', name: 'Dry Cake', price: 'Rs. 800', image: '/images/category-cakes.png' },
  
  // Biscuits & Cookies
  { id: 'b1', categoryId: 'cat2', name: 'Chocolate Chip Cookies', price: 'Rs. 600 / kg', image: '/images/category-cookies.png' },
  { id: 'b2', categoryId: 'cat2', name: 'Butter Cookies', price: 'Rs. 600 / kg', image: '/images/category-cookies.png' },
  { id: 'b3', categoryId: 'cat2', name: 'Zeera Biscuits', price: 'Rs. 500 / kg', image: '/images/category-cookies.png' },
  
  // Pastries
  { id: 'p1', categoryId: 'cat3', name: 'Chocolate Pastry', price: 'Rs. 150', image: '/images/category-pastries.png' },
  { id: 'p2', categoryId: 'cat3', name: 'Pineapple Pastry', price: 'Rs. 150', image: '/images/category-pastries.png' },
  { id: 'p3', categoryId: 'cat3', name: 'Cream Roll', price: 'Rs. 100', image: '/images/category-pastries.png' },
  
  // Traditional Sweets
  { id: 's1', categoryId: 'cat4', name: 'Mix Mithai', price: 'Rs. 1,000 / kg', image: '/images/category-sweets.png' },
  { id: 's2', categoryId: 'cat4', name: 'Gulab Jamun', price: 'Rs. 900 / kg', image: '/images/category-sweets.png' },
  { id: 's3', categoryId: 'cat4', name: 'Barfi', price: 'Rs. 1,100 / kg', image: '/images/category-sweets.png' },
  { id: 's4', categoryId: 'cat4', name: 'Cham Cham', price: 'Rs. 1,000 / kg', image: '/images/category-sweets.png' },
  { id: 's5', categoryId: 'cat4', name: 'Sohan Halwa', price: 'Rs. 1,200 / kg', image: '/images/category-sweets.png' },
  
  // Breads & Buns
  { id: 'br1', categoryId: 'cat5', name: 'White Bread', price: 'Rs. 120', image: '/images/category-bread.png' },
  { id: 'br2', categoryId: 'cat5', name: 'Bran Bread', price: 'Rs. 150', image: '/images/category-bread.png' },
  { id: 'br3', categoryId: 'cat5', name: 'Cake Rusk', price: 'Rs. 700 / kg', image: '/images/category-rusks.png' },
  
  // Pizzas
  { id: 'pz1', categoryId: 'cat6', name: 'Chicken Tikka Pizza', price: 'Rs. 1,100', image: '/images/category-pizza.png' },
  { id: 'pz2', categoryId: 'cat6', name: 'Fajita Pizza', price: 'Rs. 1,100', image: '/images/category-pizza.png' },
  { id: 'pz3', categoryId: 'cat6', name: 'Malai Boti Pizza', price: 'Rs. 1,200', image: '/images/category-pizza.png' },
  
  // Fast Food
  { id: 'f1', categoryId: 'cat7', name: 'Zinger Burger', price: 'Rs. 450', image: '/images/category-burgers.png' },
  { id: 'f2', categoryId: 'cat7', name: 'Chapli Burger', price: 'Rs. 400', image: '/images/category-burgers.png' },
  { id: 'f3', categoryId: 'cat7', name: 'Crispy Samosa', price: 'Rs. 50', image: '/images/category-burgers.png' },
  { id: 'f4', categoryId: 'cat7', name: 'Chicken Sandwich', price: 'Rs. 250', image: '/images/category-bread.png' },
  
  // Donuts
  { id: 'd1', categoryId: 'cat8', name: 'Chocolate Donut', price: 'Rs. 180', image: '/images/category-donuts.png' },
  { id: 'd2', categoryId: 'cat8', name: 'Strawberry Donut', price: 'Rs. 180', image: '/images/category-donuts.png' },
  
  // Gifting - Baskets
  { id: 'g1', categoryId: 'gift1', name: 'Premium Sweets Basket', price: 'Rs. 4,500', image: '/images/category-sweets.png' },
  { id: 'g2', categoryId: 'gift1', name: 'Mixed Bakery Basket', price: 'Rs. 3,500', image: '/images/category-bread.png' },
  
  // Gifting - Biscuits
  { id: 'g3', categoryId: 'gift2', name: 'Assorted Cookies Tin', price: 'Rs. 1,500', image: '/images/category-cookies.png' },
  { id: 'g4', categoryId: 'gift2', name: 'Royal Butter Cookies Box', price: 'Rs. 1,800', image: '/images/category-cookies.png' },
  
  // Gifting - Cakes
  { id: 'g5', categoryId: 'gift3', name: 'Celebration Chocolate Cake', price: 'Rs. 2,500', image: '/images/featured-chocolate-cake.png' },
  { id: 'g6', categoryId: 'gift3', name: 'Anniversary Pineapple Cake', price: 'Rs. 2,200', image: '/images/category-cakes.png' }
];

export const giftingCategories = [
  { id: 'gift1', name: 'Baskets', image: '/images/category-sweets.png' },
  { id: 'gift2', name: 'Premium Biscuits', image: '/images/category-cookies.png' },
  { id: 'gift3', name: 'Special Cakes', image: '/images/category-cakes.png' }
];
