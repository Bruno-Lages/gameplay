import React from "react";
import { Modal, View, TouchableWithoutFeedback } from "react-native";
import { Background } from "../Background";
import { style } from "./style";

export function ModalView({children, closeModal, ...settings}) {
    return (
        <Modal
        transparent
        animationType="slide"
        statusBarTranslucent
        {...settings}
        >
            <TouchableWithoutFeedback onPress={() => closeModal()}>
                <View style={style.overlay} >
                    <View style={style.container}>
                        <Background>
                            <View style={style.bar} />
                            {children}
                        </Background>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}