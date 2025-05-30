import React from 'react';
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function Welcome() {

    const [firstName, onChangeFirstName] = React.useState('Useless');
    return (

        <View
            style={welcomeStyles.container}
        >
            <ScrollView
                indicatorStyle={'white'}>
                <Text
                    style={welcomeStyles.headerText}
                >Welcome to IntelliLogics</Text>

                <Image
                    source={{ uri: 'https://avatars.githubusercontent.com/u/17814795?v=4' }}
                    width={200}
                    height={200}
                    borderRadius={10}
                    resizeMode='contain'
                />

                <Image
                style={welcomeStyles.logo}
                    source={require('../img/intellilogics_logo.jpeg')}
                    accessable={true}
                    accessibilityLabel={'IntelliLogics Logo'}
                   
                />
                <View style={{ height: 20 }}></View>
                <Text
                    style={welcomeStyles.detailItemText}
                >
                    IntelliLogics is a free study site where you can learn Mobile and Web Development.

                </Text>

                <TextInput
                    keyboardType='default'
                    style={welcomeStyles.input}
                    placeholder='First Name'
                    onChangeText={onChangeFirstName}
                    value={firstName}
                />
            </ScrollView>
        </View>
    );
};

export default Welcome;

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 0.92
    },

    input: {
        backgroundColor: 'white',
        padding: 12,
        marginTop: 12,
        borderColor: 'red',
        borderWidth: 2,
        height: 40,
        borderRadius: 12,



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
    },

    logo: {
        width: 100,
        height: 100,
        resizeMode: 'cover'
    }
}
);