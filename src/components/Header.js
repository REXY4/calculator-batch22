import React from "react";

import {View, Image} from "react-native";


export default function Header(){
    return (
        <View style={{
            backgroundColor : "#FF6666",
            width : 60,
            height : 25,
            padding : 10,
            flex : 1,
        }}>
             <Image
          source={require('../image/dumbways.png')}
          style={{ width: 40, height: 20, display:"flex", alignItems : "flex-end" }}
        />
        </View>
       
    )
}