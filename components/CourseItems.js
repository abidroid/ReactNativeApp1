import { View, Text, ScrollView } from 'react-native';

const CourseItems = () => {

    const courses = [
        ' C++ \n Java \n Python \n Kotlin \n Swift \n Native Android \n Native iOS \n HTML \n CSS \n Javascript \n ReactJS \n NodeJS \n ExpressJS \n MongoDB \n Flutter \n React Native'
    ];

    return (
        <View
            style={{
                flex: 0.8,
            }}
        >
            <ScrollView
                indicatorStyle='black'
            >
                <Text
                style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    padding: 10,
                }}
                >Course</Text>
                <Text
                style={{
                    fontSize: 30,
                    padding: 10,
                }}
                >{courses[0]}</Text>
            </ScrollView>


        </View>
    );
}

export default CourseItems;