import createProvider from 'react-provider-factory';

const [useTheme, ThemeProvider] = createProvider<'light' | 'dark'>('light');

const [useUser, UserProvider] = createProvider({
  name: 'sam',
  email: 'sam@email.com',
  occupartion: 'open source developer',
  id: 99,
});

export { useTheme, useUser, ThemeProvider, UserProvider };
