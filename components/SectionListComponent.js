import { Text, View, SectionList, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            'Hummus',
            'Moutabal',
            'Falafel',
            'Marinated Olives',
            'Kofta',
            'Eggplant Salad',
        ],
    },
    {
        title: 'Main Dishes',
        data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
        title: 'Sides',
        data: [
            'Fries',
            'Buttered Rice',
            'Bread Sticks',
            'Pita Pocket',
            'Lentil Soup',
            'Greek Salad',
            'Rice Pilaf',
        ],
    },
    {
        title: 'Desserts',
        data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    }];




const Item = ({ item }) => (
    <View style={styles.itemRow}>
        <Text style={styles.itemText}>{item}</Text>
    </View>
);

const SectionListComponent = () => {

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

export default SectionListComponent;

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
      },
    itemText: {
        color: '#F4CE14',
        fontSize: 32,
    },
});