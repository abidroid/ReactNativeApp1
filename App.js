import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import Welcome from './components/Welcome';
import CourseItems from './components/CourseItems';
import FlatListComponent from './components/FlatListComponent';
import MenuItemsFlatList from './components/MenuItemsFlatList';
import SectionListComponent from './components/SectionListComponent';
import SectionListWithComplexData from './components/SectionListWithComplexData';
import FeedbackForm from './components/FeedbackForm';
export default function App() {
  return (
    <View
      style={styles.container}
    >

      <HeaderComponent />
      {/* <Welcome /> */}
      {/* <FlatListComponent /> */}
      {/* <MenuItemsFlatList /> */}
      {/* <SectionListComponent /> */}
      {/* <SectionListWithComplexData /> */}
      <FeedbackForm />
      <FooterComponent />


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
