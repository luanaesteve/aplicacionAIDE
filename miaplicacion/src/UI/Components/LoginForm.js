import { StatusBar } from "expo-status-bar";
import React from "react";
import {TextInput, Button} from "react-native";
import LoginForm from "./src/components/LoginForm"

export default function LoginForm(){
    return(
        <view>
            <text>hola</text>
            <text>adios</text>
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