import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Context from '../context/Context';

export default function SignIn() {
    const { theme: {colors} } = useContext(Context);
    return (
        <View>
            <Text>signIn</Text>
        </View>
    )
}