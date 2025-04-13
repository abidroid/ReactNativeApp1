import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

export default function App() {
  return (

    <View style={styles.container}>
      <SafeAreaView>
        <HeaderComponent />

        <View
          style={{ backgroundColor: 'blue', flex: 1, width: 100, }}
        ></View>
        <StatusBar style="auto" />
        <FooterComponent />
      </SafeAreaView>
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
