import React from 'react';
import {Button,View, Text } from 'react-native';
import {globalStyles} from "../styles/global";


const ReviewDetails = ({navigation,route}) =>{

    return(
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.rating}</Text>
            <Text>{route.params.body}</Text>

            {/*<Button*/}
            {/*    title='back to home'*/}
            {/*    onPress={() => navigation.goBack()}*/}
            {/*/>*/}
        </View>
    );
}
export default ReviewDetails;


