import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Registration = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login', {
          screen: 'Settings',
          params: { userId: 'e2ee4' }
        })
        }
      />
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

export default Registration;