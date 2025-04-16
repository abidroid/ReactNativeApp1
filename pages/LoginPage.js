
import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Alert } from 'react-native';

const LoginPage = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const [loggedIn, setLoggIn] = React.useState(false);
    return (
        <ScrollView style={styles.container}
            keyboardDismissMode='on-drag'
        >
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>


            <Text style={styles.regularText}>

                {loggedIn ? 'You are logged in' : 'Login to continue'}
            </Text>

            {!loggedIn && <TextInput
                style={styles.input}
                placeholder='email'
                onChangeText={onChangeEmail}
                keyboardType='email-address'
                value={email}
            />}


            {!loggedIn && <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={onChangePassword}
                secureTextEntry={true}
                value={password}
            />}

            <Pressable style={styles.button}
                onPress={() => {
                    setLoggIn(!loggedIn);
                }}
            >
                <Text style={styles.buttonText}>
                    {loggedIn ? 'Logout' : 'Login'}
                </Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#EDEFEE',
        height: 40,
        padding: 12,
        margin: 16,
    },

    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 48
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
    },
});
export default LoginPage;