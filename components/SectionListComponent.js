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




    const Item = ({item}) => (
        <View>
            <Text>{item.name}</Text>
        </View>
    );

const SectionListComponent = () => {

    const renderItem = ({item}) => <Item item={item}/>
    const renderSectionHeader = ({section: {title}}) => (
        <Text>{title}</Text>
    ); 

    return (

        <View>
            <SectionList
                keyExtractor={(item, index) => item + index}
                sections={menuItemsToDisplay}
                renderSectionHeader={ renderSectionHeader}
                renderItem={ renderItem }
                // ItemSeparatorComponent={ }
                // ListFooterComponent={ }
            />
        </View>
    );

}

export default SectionListComponent;