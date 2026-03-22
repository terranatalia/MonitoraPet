import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import {SignUpScreen} from './screens/authentication/signUp'

export function App() {
  return (
    <View style={styles.container}>
        <SignUpScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
