import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Register from "./screens/Registration";
import Home from "./screens/Home";

const MainStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Registration" component={Register} />
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home screen",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Press me"
                
              />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
