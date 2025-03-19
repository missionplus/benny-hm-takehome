# React Native Web Monorepo

A modern cross-platform application monorepo built with Turborepo, React Native, and Next.js. This project allows you to share code between web and native applications while maintaining platform-specific optimizations.

## What's Inside

This Turborepo includes the following packages/apps:

### Apps

- `native`: A [React Native](https://reactnative.dev/) app built with [Expo](https://docs.expo.dev/)
  - Features tab-based navigation using Expo Router
  - Uses NativeWind v4 for styling
  - Includes custom components like TripCard with linear gradients

- `web`: A [Next.js](https://nextjs.org/) app built with [React Native Web](https://necolas.github.io/react-native-web/)
  - Shares components with the native app
  - Uses NativeWind v4 for consistent styling across platforms

### Shared Packages

- `@repo/ui`: A shared component library used by both web and native applications
  - Cross-platform components with platform-specific optimizations
  - Typography component with customizable text alignment and className support
  - Logo component with platform-specific SVG implementations
  - BrandGrid component for displaying brand logos
  - Uses NativeWind v4 for styling

- `@repo/typescript-config`: Shared TypeScript configurations used throughout the monorepo

### Technology Stack

- [TypeScript](https://www.typescriptlang.org/) for type safety across the entire project
- [NativeWind v4](https://www.nativewind.dev/) for consistent styling in both web and native
- [Expo](https://docs.expo.dev/) for native development
- [Turborepo](https://turbo.build/) for monorepo management
- [Jest](https://jestjs.io/) for testing
- [React Native SVG](https://github.com/react-native-svg/react-native-svg) for SVG support

## Installation

### Prerequisites

- Node.js >= 18
- Yarn >= 1.22.19
- For iOS development: macOS with Xcode installed
- For Android development: Android Studio with SDK installed

### Setup

1. Clone the repository:

```sh
git clone <repository-url>
cd demo-monorepo
```

2. Install dependencies:

```sh
yarn install
```

3. Build shared packages:

```sh
yarn build
```

## Development

### Running the Web App

```sh
yarn dev
# or to run only the web app
cd apps/web
yarn dev
```

The web app will be available at http://localhost:3000

### Running the Native App

```sh
# From the root directory
cd apps/native
yarn ios
yarn android
```

This will start the Expo development server. You can run the app on:
- iOS simulator: Press `i`
- Android emulator: Press `a`
- Web: Press `w`
- Scan the QR code with the Expo Go app on your physical device

### Working with the UI Package

The `@repo/ui` package contains shared components used by both web and native apps. When making changes to this package:

1. Start the development build:

```sh
cd packages/ui
yarn dev
```

2. In another terminal, run your target application (web or native)

## Testing

This monorepo uses Jest for testing with specific configurations for both web and native environments.

### Running Tests

```sh
# Run tests for a specific app or package
cd apps/web
yarn test

# or
cd apps/native
yarn test
```

### Jest Configuration

The monorepo has been configured to handle the complexities of testing in a cross-platform environment:

- ES Module vs CommonJS conflicts are properly managed
- Transformers are configured for both environments
- Module resolution for shared dependencies is set up correctly

## Building for Production

### Web App

```sh
cd apps/web
yarn build
yarn start
```

### Native App

```sh
cd apps/native

# For iOS
yarn ios

# For Android
yarn android

# Build for production
EAS build --platform all
```

## Project Structure

```
.
├── apps
│   ├── native        # Expo React Native app
│   └── web           # Next.js web app
├── packages
│   ├── ui            # Shared UI components
│   └── typescript-config  # Shared TypeScript configurations
├── package.json      # Root package.json for monorepo configuration
└── turbo.json       # Turborepo configuration
```

## Contributing

1. Make sure all shared code is properly typed and works on both platforms
2. Test your changes on both web and native before submitting
3. Follow the established patterns for NativeWind v4 styling
4. Ensure Jest tests pass for both environments
