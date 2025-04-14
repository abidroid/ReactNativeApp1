import { View, Text, StyleSheet } from 'react-native';

function HeaderComponent() {

    return (
        <View style={headerStyle.outerContainer}>
            <Text
                numberOfLines={3}

                style={headerStyle.innerTextStyle}
            >IntelliLogics

                {/* <Text style={{ fontWeight: 'bold' }}> IntelliLogics — the place where we turn long ideas into amazing mobile experiences, line after line after line! */}
                {/* </Text> */}
            </Text>
        </View>
    );
};

export default HeaderComponent;

const headerStyle = StyleSheet.create({

    outerContainer: { flex: 0.15, backgroundColor: 'yellow' },
    innerTextStyle: {
        fontSize: 30,
        color: 'black',
        paddingTop: 60,
        textAlign: 'center', 
        fontWeight: 'bold',
        // flexWrap: 'wrap',
        // flexShrink: 1,

    }
});