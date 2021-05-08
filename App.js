import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, } from "react-native";
import { ThemeProvider, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as WebBrowser from "expo-web-browser";
import { styles, theme } from "./Theme"

const sonText = {
  "João": {
    inicio: `Mamãe...`,
    text: `Texto heyyyy\n  bobooooo`,
    agradecimento: `Obrigado <3`,
  },
  "Nathan":{
    inicio: `Mamãe...`,
    text: `     Texto heyyyy\n     bobooooo`,
    agradecimento: `Obrigado`,
  },
}

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Text style={styles.title}>
          Olá... Sei que não é muito, mas foi feito de coração para você, mãe ❤
        </Text>
        <Button
          title="Mensagem do João"
          onPress={() => navigation.navigate("John")}
        />
        <Button
          title="Mensagem do Nathan"
          onPress={() => navigation.navigate("Nathan")}
        />
        <Button
          title="Vídeo"
          onPress={() =>
            WebBrowser.openBrowserAsync(
              "https://www.youtube.com/watch?v=TQUrlSk25EE"
            )
          }
        />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="John"
          getComponent={() => require("./screens/JohnScreen").default}
          initialParams={{texto: sonText.João}}
          options={{ animationEnabled:false }}
        />
        <Stack.Screen
          name="Nathan"
          getComponent={() => require("./screens/NathanScreen").default}
          initialParams={{texto: sonText.Nathan}}
          options={{ animationEnabled:false}}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

export default App;
