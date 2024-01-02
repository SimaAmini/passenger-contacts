# Passenger Contacts

A simple app to manage passenger's contacts

## Introduction

This repository contains my submission for the interview task assignment.

### Demo

You can access the live demo of this project [here](https://passenger-contacts.netlify.app).

## Technologies Used

- React.js 18
- Zustand
- Tailwind CSS
- Daisyui
- Cypress
- React Table
- React Query
- Axios

## Getting Started

To run this project locally, follow these steps:

1. **Installation**: Clone this repository.

   ```bash
   git clone https://github.com/SimaAmini/passenger-contacts
   ```

2. **Install Dependencies**: Navigate to the project directory and install the necessary packages.

   ```bash
   npm install
   ```

3. **Run the Application**: Start the development server.
   ```bash
   npm run start
   ```

## Project Structure

    ├── cypress
    │
    ├── public
    │     └── index.html
    │
    ├── src
    │   │
    │   ├── _mappers
    │   │   ├── map-contact-to-model.js
    │   │   └── map-contacts-to-model.js
    │   │
    │   ├── _services
    │   │   ├── get-contact.js
    │   │   └── get-contacts.js
    │   │
    │   ├── assets
    │   │   └── svg-icons
    │   │        └── ...
    │   │
    │   ├── components
    │   │   ├── search-box
    │   │   ├── table
    │   │   └── header
    │   │
    │   ├── contact-detail
    │   │   ├── conatct-detail.jsx
    │   │   └── use-contact-detail.js
    │   │
    │   ├── contacts
    │   │   ├── components
    │   │   ├── columns.js
    │   │   │   ├── contact-card.jsx
    │   │   │   └── frequently-contacts.jsx
    │   │   ├── conatct-list.jsx
    │   │   └── use-contact-list.js
    │   │
    │   ├── core
    │   │   ├── axios.js
    │   │   ├── request.js
    │   │   └── use-query.js
    │   │
    │   ├── pages
    │   │   ├── detail.jsx
    │   │   ├── error.jsx
    │   │   ├── home.jsx
    │   │   └── not-found.jsx
    │   │
    │   ├── store
    │   │   ├── conatct-store.js
    │   │   └── freq-store.js
    │   │
    │   ├── utils
    │   │
    │   └── ...
    └── ...

## E2E tests

To run the e2e tests run this command:

```bash
  npm run cy:run
```
