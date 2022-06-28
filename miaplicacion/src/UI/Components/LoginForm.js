import React from "react";
import {TextInput, Button, Text, View} from "react-native"

export default function LoginForm(){
    return(
        <view>
            <text>hola</text>
            <text>me gusta la salchicha</text>
            <text>ajja</text>
            <TextInput placeholder="Email"></TextInput>
            <button>Enviar</button>
        </view>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});