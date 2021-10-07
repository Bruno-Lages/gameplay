import React from "react";
import { ScrollView, View } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { style } from "./style";

export function CategorySelect({categorySelected, 
    setCategory}) {
    return (
            <ScrollView
            style={style.container}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: 40}}
            >
                {
                    categories.map((category) => 
                    <Category
                    key={category.id}
                    Svg={category.icon}
                    tittle={category.title}
                    checked={category.id === categorySelected}
                    // hasCheckbox
                    onPress={() => setCategory(category.id)}
                    />
                    )
                }
            </ScrollView>
    )
}