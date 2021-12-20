# react-provider-factory

A simple and normalized React Provider generator using the React Context API.

The goal of this library is to deliver a similar interface as React's `useState`, but on a contextual level. This will help alleviate common issues such as large state machines and especially prop drilling. 

Imagine this scenario: You have a `User` component, which holds state. This user component has a `UserDetails` component which has a `UserAvatar` and `UserBio` component. Both of these component need all of the state from the `User` component. You now have to drill your props through for the data, not to mention callbacks as well to mutate that data. You can imagine how this can get out of hand quickly. 

Now, instead of prop drilling, you could wrap `User` in a `UserProvider`, and use the convenient `useUser` hook anywhere you want to access or mutate the user data. 

Common misconception: Any component in the hierarchy of `User` that does not use the `useUser` hook will not re-render.

## Installation

```sh
$ npm install react-provider-factory
# or
$ yarn add react-provider-factory
```

## Usage

`providers/theme.ts`
Generate the provider and hook in a separate, shared file, then export.
```ts
import createProvider from "react-provider-factory";

// ...

const [useTheme, ThemeProvider] = createProvider<'light' | 'dark'>('light');

export { useTheme, ThemeProvider };
```

`index.ts`
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

`YourComponent.tsx`
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
