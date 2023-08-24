Guidelines & Instructions for Building the Restaurant Menu Application:
General Requirements:
HTML Structure: Your application should be hosted in an index.html file.
Bootstrap Integration: Ensure you integrate Bootstrap into your project. It will be tested both in mobile and desktop views.
Desktop View (1280x720 resolution):
Menu Items:

Your application should render one or more menu items, represented with a class of .menu-item.
Every menu item should have a category mentioned, e.g., Category: starters.
Navbar:

The navigation bar should be visible and represented with a .navbar class.
Within the navbar, there should be 5 navigation links, each having a .nav-link class.
There should be a search input in the navbar with the id #search-input.
Filtering and Searching:

Implement filter buttons that allow users to filter items by category. When a category like starters is clicked, only menu items from that category should be displayed.
There should be a search functionality: typing a keyword into the #search-input (like 'apple') should display only the items whose titles include that keyword.
Bootstrap Classes: Ensure you're using the Bootstrap framework's classes for the navbar and navigation links, specifically .navbar and .nav-link.

Mobile View (375x667 resolution):
Menu Items:

Just as with the desktop view, your application should render one or more menu items on mobile.
Navbar:

There should be a navbar toggler (navbar-toggler) that is visible by default.
The navigation links and the search input should be hidden by default.
Navbar Toggler:

When the navbar-toggler button is clicked, the navigation links and the search input should become visible.
Additional Requirements:
Bootstrap Validation: Your application will be checked for the integration of Bootstrap. Ensure the Bootstrap CSS is properly linked in the head of your index.html.
Tasks for Students:
Setting Up:

Start with a basic index.html structure. Link the Bootstrap CSS in the head section.
Building the Navbar:

Use Bootstrap's navbar component. Ensure it contains navigation links and a search input.
Add functionality to the search input to filter displayed items based on their titles.
Implementing the Menu:

Display the menu items using Bootstrap's card component or a similar structure.
Each item should have a .menu-item class. Ensure that the category of each item is displayed (e.g., Category: starters).
Filter Buttons:

Create filter buttons for each category.
Add click event listeners to these buttons to filter displayed items based on their categories.
Mobile Responsiveness:

Use Bootstrap's classes to ensure your navbar is responsive. The navigation links and search input should hide by default on mobile but become visible when the navbar-toggler is clicked.

You should use these items in array and add more of your own if you want 
const menu = [
    { id: 1, title: "Soup of the day", category: "starters", price: "$5", description: "Freshly made soup with seasonal ingredients",img: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { id: 2, title: "Bruschetta", category: "starters", price: "$7", description: "Grilled bread rubbed with garlic and topped with diced tomatoes, fresh basil, and mozzarella",img: "https://www.allrecipes.com/thmb/kt9t899s87rKleitZiaUwWOoNJI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3605381-b506207e5f494e44a7cf5c1bbe488748.jpg" },
    { id: 3, title: "Chicken Parmesan", category: "mains", price: "$12", description: "Crispy chicken topped with tomato sauce and mozzarella, served with spaghetti",img: "https://media.gettyimages.com/id/1358831517/photo/crispy-chicken-parmesan.jpg?s=612x612&w=0&k=20&c=izCK6IforZt1WU1f467NXB-PPR0TAfEw0aoJ6d8imB0=" },
    { id: 4, title: "Steak Frites", category: "mains", price: "$18", description: "Grilled steak served with french fries and salad" , img: "https://media.gettyimages.com/id/463889403/photo/rib-eye-steak.jpg?s=612x612&w=0&k=20&c=igQuEqd2hEwHnwIcuMbiUnQRm5T9Mwk1ASFanAq6iOk="},
    { id: 5, title: "Chocolate Lava Cake", category: "desserts", price: "$8", description: "Warm chocolate cake with a gooey molten chocolate center, served with vanilla ice cream" , img: "https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.webp?b=1&s=170667a&w=0&k=20&c=6NPIcP8XUG4WwbJU-qfLOEP07aU79doAIsqZ8wic478="},
    { id: 6, title: "Apple Pie", category: "desserts", price: "$6", description: "Classic apple pie with a flaky crust, served with whipped cream", img: "https://plus.unsplash.com/premium_photo-1666353535417-c86616951727?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},
    { id: 7, title: "Vegan Burger", category: "mains", price: "$10", description: "Plant-based burger served with fries", img: "https://plus.unsplash.com/premium_photo-1664648063589-76b97669bc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 8, title: "Caesar Salad", category: "starters", price: "$6", description: "Fresh romaine lettuce with Caesar dressing, parmesan, and croutons", img: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Vhc2FyJTIwc2FsYWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 9, title: "Spaghetti Carbonara", category: "mains", price: "$14", description: "Classic carbonara with pancetta, egg, hard cheese, and pepper", img: "https://images.unsplash.com/photo-1600803907087-f56d462fd26b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWdoZXR0aSUyMGNhcmJvbmFyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 10, title: "Tiramisu", category: "desserts", price: "$7", description: "Italian dessert made of savoiardi dipped in coffee, layered with a whipped mixture of eggs, sugar, and mascarpone cheese", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 11, title: "Iced Coffee", category: "beverages", price: "$4", description: "Chilled coffee served with ice and cream", img: "https://media.istockphoto.com/id/170428990/photo/iced-mocha.webp?b=1&s=170667a&w=0&k=20&c=ItUVpbetBvrKaKcJySbepwehwa2JIJjSOqzHulpvJY0=" },
    { id: 12, title: "Mango Lassi", category: "beverages", price: "$5", description: "Refreshing Indian drink made with mango and yogurt", img: "https://media.istockphoto.com/id/1217751214/photo/fresh-mango-lassi-and-mango-fruit.webp?b=1&s=170667a&w=0&k=20&c=Jt0J70BwVkGdirVAu78hKb-MiMzN3_GUbCz8SmGUdS8=" },
    { id: 13, title: "Green Tea", category: "beverages", price: "$3", description: "Traditional green tea with antioxidants", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JlZW4lMjB0ZWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
  ];

  For dynamic renderation of items in form of card :
  <div class="menu-item col-12 col-md-6 col-lg-4">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <p class="card-text">${item.description}</p>
          <p class="card-text"><small class="text-muted">Category: ${item.category}</small></p>
        </div>
      </div>
    </div>   can be used .


Here is a video of sample of ours try to make it as similar as possile :

https://files.codingninjas.in/resturant-30313.mkv
