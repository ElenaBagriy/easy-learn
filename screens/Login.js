import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight,
  TouchableOpacity } from "react-native";

const Login = () => {


  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <TouchableOpacity>
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight>
        <Text>
        TouchableHighlight

        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;