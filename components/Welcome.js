import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

function Welcome() {

    return (

        <View
            style={welcomeStyles.container}
        >
            <ScrollView
                indicatorStyle={'white'}>
                <Text
                    style={welcomeStyles.headerText}
                >Welcome to IntelliLogics</Text>
                <View style={{ height: 20 }}></View>
                <Text
                    style={welcomeStyles.detailItemText}
                >
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.

                </Text>
            </ScrollView>
        </View>
    );
};

export default Welcome;

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 0.92
    },

    headerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        padding: 50,
    },

    detailItemText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        padding: 20,
    }
}
);