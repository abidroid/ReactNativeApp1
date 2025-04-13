import { View, Text } from 'react-native';

function HeaderComponent() {

    return (
        <View style={{ flex: 0.15, backgroundColor: 'yellow' }}>
            <Text
                numberOfLines={3}

                style={{
                    fontSize: 30,
                    color: 'black',
                    paddingTop: 60,
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    // flexWrap: 'wrap',
                    // flexShrink: 1,

                }}
            >IntelliLogics

                {/* <Text style={{ fontWeight: 'bold' }}> IntelliLogics — the place where we turn long ideas into amazing mobile experiences, line after line after line! */}
                {/* </Text> */}
            </Text>
        </View>
    );
};

export default HeaderComponent;