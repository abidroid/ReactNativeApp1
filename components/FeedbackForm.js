import React from "react";
import {
    KeyboardAvoidingView,
    ScrollView,
    Text,
    TextInput,
    Platform,
    StyleSheet,
    Button,
} from "react-native";

const FeedbackForm = () => {

    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    return (

        <KeyboardAvoidingView
            style={formStyles.container}
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        >

            <ScrollView
                style={formStyles.innerContainer}
                keyboardDismissMode="on-drag"
            >

                <Text style={formStyles.headerText}>IntelliLogics</Text>
                <Text style={formStyles.questionText}>How is your Online Flutter Class?</Text>

                <TextInput
                    style={formStyles.inputBox}
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={onChangeFirstName}
                />
                <TextInput
                    style={formStyles.inputBox}

                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={onChangeLastName}

                />
                <TextInput
                    style={formStyles.messageBox}
                    placeholder="Message"
                    value={message}
                    multiline
                    editable
                    numberOfLines={5}
                    onChangeText={onChangeMessage}

                />
                <Button
                    title="Submit"
                    onP
                />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const formStyles = StyleSheet.create({
    container: {
        flex: 0.8,
    },

    innerContainer: {
        paddingVertical: 24,
        paddingHorizontal: 24
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    questionText: {
        fontSize: 24,
        marginBottom: 24,
    },
    inputBox: {
        // borderColor: '',
        borderWidth: 1,
        height: 40,
        padding: 12,
        marginBottom: 16,
    },

    messageBox: {
        // borderColor: '#ccc',
        borderWidth: 1,
        padding: 12,
        marginBottom: 16,
        height: 120,
    },
});

export default FeedbackForm;