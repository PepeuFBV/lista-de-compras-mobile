# Lista de Compras Mobile

> [!WARNING]
> The current web deploymeny may be slow due to render's inactivity policy

## Overview

Lista de Compras Mobile is a React Native application designed to help users manage their shopping lists. The app allows users to add, update, and delete items from their shopping list, categorize items, and mark items as completed.

## Features

- Add new items to the shopping list
- Categorize items (e.g., Padaria, Legume, Fruta, Bebida, Carne)
- Update item details
- Delete items from the list
- Mark items as completed

## Technologies Used

- React Native
- Expo
- TypeScript
- NativeWind for styling
- Context API for state management

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/lista-de-compras.git
    cd lista-de-compras
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the Expo development server:
    ```sh
    npm start
    ```

## Running on a Device

To run the app on a physical device or emulator, use the following commands:

- For Android:
    ```sh
    npm run android
    ```

- For iOS:
    ```sh
    npm run ios
    ```

- For Web:
    ```sh
    npm run web
    ```

## Project Structure

- `app/`: Contains the main application screens and navigation setup.
- `components/`: Reusable UI components.
- `context/`: Context providers for state management.
- `constants/`: Application constants.
- `services/`: Backend service functions for API calls.
- `types/`: TypeScript type definitions.
- `assets/`: Static assets such as fonts and images.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
