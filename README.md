# react-provider-factory

A simple and normalized React Provider generator using the React Context API.

## Installation

```sh
npm install react-provider-factory
```

## Usage

#### providers/theme.ts
Generate the provider and hook in a separate, shared file, then export.
```ts
import createProvider from "react-provider-factory";

// ...

const [useTheme, ThemeProvider] = createProvider<'light' | 'dark'>('light');

export { useTheme, ThemeProvider };
```

#### index.ts
Import Provider where you want the data to be rooted from. (Typically `index.ts` if global)
```tsx
import { ThemeProvider } from '../providers/theme.ts';

// ...

const App = () => {
    return (
        <ThemeProvider>
          <App />
        </ThemeProvider>
    )
}
```

#### YourComponent.tsx
Import hook where needed to access and mutate data. (Works the exact same way as `useState`)
```tsx
import { useTheme } from '../providers/theme.ts';

// ...

const YourComponent = () => {
    const [theme, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Text>{theme}</Text>
            <Button title="Toggle theme" onPress={toggleTheme} />
        </>
    )
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
