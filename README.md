# Food Delivery App

A mobile food delivery application built with Expo, React Native, TypeScript, and React Navigation. The project focuses on clean mobile UI, reusable components, and a simple ordering flow built from mock restaurant data.

## Features

- Login and register screens with local user storage
- Get started onboarding screen
- Home screen for browsing restaurants and dishes
- Dish detail screen with recommendations and add-to-cart flow
- Restaurant detail screen with menu listing
- Search screen with dish filtering
- Cart with quantity controls, pricing summary, and checkout
- Orders screen that displays checked-out cart items
- Profile screen with account details
- Drawer navigation for My Orders, Settings, Help, and Logout

## Tech Stack

- Expo SDK 55
- React Native
- TypeScript
- React Navigation stack, tabs, and drawer
- Context providers for auth, cart, and orders
- Expo Secure Store for account data
- Fraunces Google Font for typography

## Project Structure

```text
src/
  components/        Reusable UI pieces and tiles
  constants/         Theme colors and restaurant mock data
  navigation/        Navigators and screen modules
  providers/         Auth, cart, and order state
  types/             Shared TypeScript models
```

Restaurant and dish data currently lives in `src/constants/restraurents.ts`. Each restaurant and dish has a unique id and the UI uses this mock data for browse, search, cart, and order flows.

## Navigation

The app uses a root stack for auth and main app routes. After authentication, the main experience is wrapped in a drawer navigator with nested bottom tabs. Detail routes such as Dish, Restaurant, and Cart are opened from the stack.

## State

- `AuthProvider` stores the active signed-in user.
- `CartProvider` manages cart items, quantities, and subtotal.
- `OrdersProvider` stores orders created during checkout.

These providers keep the project simple while making state available across screens.

## How to Start This App

Install dependencies:

```sh
npm install
```

Start Expo:

```sh
npm run start
```

Then open the project with Expo Go, an Android emulator, iOS simulator, or the web option from the Expo terminal.

## Scripts

```sh
npm run start
npm run android
npm run ios
npm run web
```

## Notes

This is an assignment and learning project. It uses mock food data and local app state instead of a backend, so orders and cart data are not persisted after the app session ends.
