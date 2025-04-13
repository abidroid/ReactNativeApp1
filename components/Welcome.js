import { View, Text } from 'react-native';

function Welcome() {

    return (

        <View
            style={{
                flex: 0.8,
               

            }}
        >
            <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 40,
                    padding: 50,
                }}
            >Welcome to IntelliLogics</Text>
            <View style={{height: 20}}></View>
            <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 30,
                    padding: 20,
                }}
            >IntelliLogics is a free study site where you can learn Mobile and Web Development.</Text>

        </View>
    );
};

export default Welcome;