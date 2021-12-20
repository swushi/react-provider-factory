import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { ThemeProvider, UserProvider, useTheme, useUser } from './providers';

const GrandChild = () => {
  const [theme, setTheme] = useTheme();
  const [user, setUser] = useUser();

  return (
    <View>
      <Text>{theme}</Text>
      <Button
        title="Change Theme"
        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
      <Text>{user.id}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
      <Text>{user.occupartion}</Text>
      <Button
        title="Change User"
        onPress={() => setUser({ ...user, id: user.id + 1 })}
      />
    </View>
  );
};

const Child = () => {
  return (
    <View>
      <GrandChild />
    </View>
  );
};

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Child />
        </View>
      </ThemeProvider>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
