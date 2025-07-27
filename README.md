# 🛍️ Products Gallery Web Application

## 🎯 Objective

This project is a fully functional, responsive **Products Gallery Web Application** built using **Angular** and styled with **Tailwind CSS**. It allows users to browse, filter, sort, and view product details using data from the Fake Store API.

---

## 🧱 Tech Stack Used

- **Framework:** Angular v19
- **Styling:** Tailwind CSS
- **API:** [Fake Store API](https://fakestoreapi.com/)
- **Language:** TypeScript, HTML

---

## 🖼️ Features

### ✅ Products Page

- **Data Fetching:**  
  - Fetched all products from `https://fakestoreapi.com/products`
  - Error handling with fallback UI for API failures

- **Display Product Cards:**  
  - Each card includes Product Name and Product Image  
  - Clicking a card routes to the Product Details page

- **Filtering & Sorting:**  
  - Real-time search by product title (case-insensitive)  
  - Sort options:  
    - Name: A–Z

---

### 📄 Product Details Page

- **Dynamic Routing:**  
  - Implemented route: `/products/:id`

- **Displayed Info:**  
  - Product Name  
  - Full Description  
  - Product Image  
  - Price  
  - Category

---

## 💅 Optional Enhancements

- ✅ Product Rating Display (stars based on API rating)

---

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```


# ProductsGalleryWebApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
=======
# Products_gallery-web_app
>>>>>>> 88c6d72c4db6ac2f3f4b43f04a963b1f6c975e86
