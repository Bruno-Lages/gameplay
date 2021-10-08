import React from "react";
import { Modal, View } from "react-native";
import { Background } from "../Background";
import { style } from "./style";

export function ModalView({children, ...settings}) {
    return (
        <Modal
        transparent
        animationType="slide"
        {...settings}
        >
            <View style={style.overlay}>
                <View style={style.container}>
                    <Background>
                        <View style={style.bar} />
                        {children}
                    </Background>
                </View>
            </View>
        </Modal>
    )
}