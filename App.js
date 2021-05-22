import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from "react";
import { Keyboard, TextInput, TouchableOpacity,StyleSheet, Touchable } from "react-native";

export default function LoginScreen({navigaton}) {
    const [email,setEmail] = useState("");
    const [password, setPassword] =useState("");
    return(
        <TouchableOpacity onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.title}>CHat App</Text>
                <Text style={styles.fieldTitle}>CHat App</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.fieldTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Touchable style={styles.loginButton} onPress={null}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Touchable>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 60,
    }
  });