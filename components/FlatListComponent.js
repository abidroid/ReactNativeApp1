import { FlatList, View, Text, StyleSheet } from "react-native";

const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
];


const Item = ({ item }) => (
    <View style={styles.listRow}>
        <Text style={styles.listItem}>{item.id}</Text>
        <Text style={styles.listItem}>{item.name}</Text>
    </View>
);

const FlatListComponent = () => {

    const renderItem = ({ item }) => <Item item={item} />;

    return (

        <View style={styles.container}>
            <FlatList
                data={menuItemsToDisplay}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

            />
        </View>
    );
};

export default FlatListComponent;

const styles = StyleSheet.create({

    container: {
        flex: 0.8,

    },

    listRow: {
        flexDirection: 'row',
        backgroundColor: '#aeaeae',
        margin: 10,
        borderRadius: 10
    },
    listItem: {
        fontSize: 20,
        padding: 20
    }
});