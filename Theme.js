import { StyleSheet } from "react-native";

const theme = {
  Button: {
    type: "solid",
    titleStyle: {
      color: "white",
    },
    buttonStyle: {
      borderColor: "black",
      borderWidth: 0.5,
      borderRadius: 25,
      backgroundColor: "black",
    },
    containerStyle: {
      margin: 5,
      borderRadius: 25,
    },
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    color: "white",
    textAlign: "center",
    margin: 15,
    fontSize: 28,
    padding: 10,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  inicio:{
    color:"white",
    fontSize: 20,
    padding: 10,
    paddingVertical:5,
  },
  texto:{
    color:"white",
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  agradecimento:{
    color:"white",
    fontSize: 18,
    textAlign:"center",
    paddingVertical:10,
  }
});

export { styles, theme };
