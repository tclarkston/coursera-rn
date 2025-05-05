import * as React from "react";
import { Alert, Image, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "./../ui/Button";
import { validateEmail } from "@/utils/index";

const SubscribeScreen = () => {
    const [email, setEmail] = React.useState('');
    const isEmailValid = validateEmail(email);

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("@/assets/images/little-lemon-logo-grey.png")}
            />
            <Text style={styles.title}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                keyboardAppearance="default"
                textContentType="emailAddress"
                placeholder={"Type your email"}
            />
            <Button
                onPress={() => {
                    Alert.alert("Thanks for subscribing, stay tuned!");
                }}
                disabled={!isEmailValid}
            >
                Subscribe
            </Button>
        </View>
    );
};

export default SubscribeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    title: {
        color: "#333333",
        textAlign: "center",
        fontSize: 20,
    },
    logo: {
        height: 100,
        width: 300,
        resizeMode: "contain",
        marginBottom: 32,
    },
    input: {
        height: 40,
        alignSelf: "stretch",
        marginVertical: 24,
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "EDEFEE",
    },
});
