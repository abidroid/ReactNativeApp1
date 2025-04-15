

import { Text, View, SectionList, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];



const Item = ({ item }) => (
    <View style={styles.itemRow}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemText}>{item.price}</Text>
    </View>
);

const SectionListWithComplexData = () => {

    const renderItem = ({ item }) => <Item item={item} />
    const renderSectionHeader = ({ section: { title } }) => (
        <Text style={styles.sectionHeaderText}>{title}</Text>
    );

    return (

        <View style={styles.outerContainer}>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
            // ItemSeparatorComponent={ }
            // ListFooterComponent={ }
            />
        </View>
    );

}

export default SectionListWithComplexData;

const styles = StyleSheet.create({

    outerContainer: {
        flex: 0.8,
    },

    sectionHeader: {
        backgroundColor: 'blue',
    },
    sectionHeaderText: {
        backgroundColor: '#fbdabb',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    },

    itemRow: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: '#333333',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    itemText: {
        color: '#F4CE14',
        fontSize: 24,
    },
});