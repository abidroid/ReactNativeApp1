import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const ImageBackgroundPage = () => {

    const imageUrl = { uri: 'https://i.pinimg.com/474x/0d/9f/68/0d9f6801453f7d1ef40181871b88fd93.jpg' };
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImage}
                source={imageUrl}
            >
                <View style={styles.bottomContainer}>
                <Text style={styles.textStyle}>Not ignorance but ignorance of ignorance is the death of knowledge</Text>

                </View>
            </ImageBackground>
        </View>
    );
}
export default ImageBackgroundPage;

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    bgImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end'
    },
    bottomContainer: {
        backgroundColor: 'white',
        height: 150,
        margin: 30,
        borderRadius: 20,
        opacity: .5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    textStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24
        
    }
});