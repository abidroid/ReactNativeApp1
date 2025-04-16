
import React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

const LoginPage = () => {

    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <ScrollView style={styles.container}
        keyboardDismissMode='on-drag'
        >
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>

            <TextInput
                style={styles.input}
                placeholder='email'
                onChangeText={onChangeEmail}
                keyboardType='email-address'
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={onChangePassword}
                secureTextEntry={true}
                value={password}
            />
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
    }
});
export default LoginPage;