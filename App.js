import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Welcome from './components/Welcome';
import CourseItems from './components/CourseItems';
import FlatListComponent from './components/FlatListComponent';
export default function App() {
  return (
    <View
      style={{ backgroundColor: 'white', flex: 1, }}
    >

      <HeaderComponent />
      {/* <Welcome /> */}
      <FlatListComponent />
      <FooterComponent />


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
