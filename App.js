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
    inicio: `Querida Mamãe...`,
    text:
`    Você é a pessoa mais importante para mim nesse mundo, você é meu tudo, sem você esse planeta não existe.
    Mãe, você me deu a luz e a sabedoria, todos os sermãos que você me deu era ára p meu próprio bme, para eu entender o que eu estava fazendo de errado e para eu nunca mais fazer.`,
    agradecimento: `❤ Eu te amo ❤\nAss: João`,
  },
  "Nathan": {
    inicio: `Mãe...`,
    text:
`    Sei que não é muito, sei que não chega a uma fração do que eu e o João gostariamos de te oferecer, mas foi feito com carinho, pensando sempre em você.
    Para deixar claro: nós dois te amamos muito, mesmo nas brigas e nas irritações, nós te amamos indescritivelmente, e, assim como a Dona Herminia e seus filhos, espero que independente da briga ou da discussão, consigamos sempre ficar juntos, e sempre amando um ao outro.`,
    agradecimento: `Obrigado por tudo❤\nTe amamos Mil Milhões!`,
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
              "https://youtu.be/S95afvs7oGU"
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
