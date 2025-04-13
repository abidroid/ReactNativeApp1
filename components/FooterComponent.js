import { View, Text } from 'react-native';

function FooterComponent() {

    return (

        <View style={{
            // flex: 0.05,
            backgroundColor: 'yellow',
            padding: 8
        }}>
            <Text
            style={{
                textAlign: 'center'
            }}
            >All rights reserved by IntelliLogics 2025</Text>
        </View>
    );
}

export default FooterComponent;