import React from "react";
import { Text, View } from "react-native";
import { Button, ThemeProvider, Avatar } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, theme } from "../Theme"

function JohnScreen({navigation, route}) {
  const texto = route.params.texto
  return(
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme} >
        <Avatar
          rounded
          title="JV"
          size="xlarge"
          source={require("../assets/images/john-photo.jpeg")}
          containerStyle={{alignSelf:"center", margin:10}}
        />

        <View>
          <Text style={styles.inicio}>{texto.inicio}</Text>
          <Text style={styles.texto} >{texto.text}</Text>
          <Text style={styles.agradecimento}>{texto.agradecimento}</Text>
        </View>

        <Button title="Voltar" onPress={()=>navigation.goBack()} />
      </ThemeProvider>
    </SafeAreaView>
  )
}

export default JohnScreen
