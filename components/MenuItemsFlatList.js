import { View, Text, FlatList, StyleSheet } from 'react-native';

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

const Separator = () => <View style={menuItemStyles.separator} />;

const Header = () => <Text style={menuItemStyles.headerText}>Items List</Text>;

const Footer = () => (
    <Text style={menuItemStyles.headerText}>
        All rights reserved to Little Lemon
    </Text>
);

const Item = ({ item }) => {

    return (

        <View style={menuItemStyles.menuItemRow}>
            <Text style={menuItemStyles.menuItemText}>{item.name}</Text>
            <Text style={menuItemStyles.menuItemText}>{item.price}</Text>

        </View>
    );
}

const MenuItemsFlatList = () => {

    const renderItem = ({ item }) => <Item item={item} />

    return (

        <View style={menuItemStyles.outerContainer}>
            <FlatList
                data={menuItemsToDisplay}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}

            />
        </View>
    );
}

export default MenuItemsFlatList;

const menuItemStyles = StyleSheet.create({

    outerContainer: {
        flex: 0.8,
        backgroundColor: 'black'
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F4CE14',

    },
    menuItemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 5,
        // backgroundColor: '#aeaeae',
        borderRadius: 10
    },

    menuItemText: {
        fontSize: 20,
        color: '#F4CE14',

    },

    separator: {
        borderBottomWidth: 1,
        borderColor: '#F4CE14'
    }
});