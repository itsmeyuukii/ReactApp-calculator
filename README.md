# React Calculator

Lightweight calculator built with React + TypeScript. Perform basic arithmetic with a clean UI and simple component architecture.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Basic operations**: add, subtract, multiply, divide
- **Clear/reset**: instant state reset with `C`
- **Responsive UI**: tidy layout on desktop and mobile
- **Type-safe**: components and props in TypeScript

## Quick Start

From the project directory:

```bash
npm install
npm start
```

Open http://localhost:3000 to view the app. The dev server live-reloads on changes.

## Scripts

- `npm start`: run the development server
- `npm test`: run tests in watch mode
- `npm run build`: create a production build in `build/`

## Project Structure

```
src/
├─ components/
│  ├─ Button/
│  ├─ ButtonPanel/
│  ├─ Calculator/
│  └─ Display/
├─ App.tsx
└─ index.tsx
```

- Calculator container: [src/components/Calculator/Calculator.tsx](src/components/Calculator/Calculator.tsx)
- Display area: [src/components/Display/Display.tsx](src/components/Display/Display.tsx)
- Button grid: [src/components/ButtonPanel/ButtonPanel.tsx](src/components/ButtonPanel/ButtonPanel.tsx)
- Single button: [src/components/Button/Button.tsx](src/components/Button/Button.tsx)

## Component Overview

- **`Calculator`**: holds state and handles button interactions
- **`Display`**: renders the current input/result, right-aligned
- **`ButtonPanel`**: renders the keypad in a grid
- **`Button`**: generic button with `value` and `onClick(value)`

## Development Notes

- UI styles live alongside components (CSS files in each folder)
- Keep inputs as strings until evaluation to avoid floating precision pitfalls
- Avoid `eval` in production; consider a parser if you expand operations

## Testing

Run the test suite:

```bash
npm test
```

Add tests near components (see [src/App.test.tsx](src/App.test.tsx)).

## Roadmap

- Keyboard input support
- Advanced ops (%, √, +/-)
- Accessibility polish (focus states, roles)
- Error handling for invalid sequences

## Contributing

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
2. Commit with clear messages:
   ```bash
   git commit -m "feat: add your feature"
   ```
3. Push and open a PR.

## License

MIT © Contributors

## Learn More

- React: https://reactjs.org/
- TypeScript: https://www.typescriptlang.org/
- Create React App: https://create-react-app.dev/