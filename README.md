# Macc Essentials E-commerce Website

## Overview
Macc Essentials is a modern e-commerce platform built with React.js and Redux. The website allows users to browse products, add items to their cart, and proceed to checkout. This README provides detailed instructions on setting up, running, and contributing to the project.

## Features
- Product Listing: Browse a wide range of products with detailed descriptions and images.
- Shopping Cart: Add items to your cart and view the cart summary.
- Checkout Process: Seamless checkout experience with multiple payment options.
- Order Confirmation: Users receive a confirmation modal upon successful order placement.

## Deployed Link
Check out the live website: [Macc Essentials](https://macc-essentialsproject.netlify.app/)

## Prerequisites
- Node.js (version 14.x or later)
- npm (version 6.x or later) or yarn (version 1.x or later)
- Git

## Installation
- Clone the Repository:

```git clone https://github.com/DeekshithaMunigala/Macc-Essentials.git```
```cd Macc-Essentials```

- Install Dependencies:
Using npm: ```npm install```

Or using yarn:```yarn install```

- Start the Development Server:
Using npm: ```npm run dev```

Or using yarn: ```yarn dev```

This will start the development server and you can view the website at http://localhost:3000.

## Project Structure

- src/assets: Contains images and other static assets.
- src/components: Reusable React components.
- src/store: Redux store setup and slices.

## Step-by-Step Guide
1. Home Page:

  Users can browse through the list of available products.
  Each product displays an image, name, and price.

2. Product Details:

  Clicking on a product navigates to the product details page.
  Users can see detailed information and add the product to their cart.

3. Shopping Cart:

  Users can view the items added to their cart.
  They can update quantities or remove items from the cart.

4. Checkout Page:

  Users can choose from various payment options.
  They can enter delivery details and complete the purchase.

5. Order Confirmation:

  After a successful order, a modal confirms the order placement.
  Users can close the modal and continue shopping.

## Contributing

- Fork the repository.
- Create a new branch: git checkout -b my-feature-branch.
- Commit your changes: git commit -m 'Add some feature'.
- Push to the branch: git push origin my-feature-branch.
- Create a Pull Request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
