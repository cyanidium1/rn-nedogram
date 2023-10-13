import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import LogOut from "../components/LogOut";
import Icon from "react-native-vector-icons/Feather";
import AddPostButton from "../components/AddPostButton";
const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: "#FF00FE",
          borderBottomWidth: 0,
        },
        tabBarActiveTintColor: "pink",
        tabBarInactiveTintColor: "violet",
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: [
          {
            height: 85,
            borderTopWidth: 0,
            display: "flex",
            backgroundColor: "rgba(2,0,36,1)",
          },
          null,
        ],
      }}
    >
      <Tabs.Screen
        name="Posts"
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#ffe329" },
          headerLeft: () => <BackButton click={navigation.goBack} />,
          tabBarIcon: () => <Icon name="grid" size={30} color={"white"} />,
        }}
        component={PostsScreen}
      />
      <Tabs.Screen
        name="Add post"
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#ffe329" },
          // title: "Make a post",
          headerLeft: () => <BackButton click={navigation.goBack} />,
          tabBarIcon: () => <AddPostButton />,
        }}
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarLabel: "",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#ffe329" },
          title: "Profile",
          headerLeft: () => <BackButton click={navigation.goBack} />,
          headerRight: () => (
            <LogOut click={() => navigation.navigate("LoginScreen")} />
          ),
          tabBarIcon: () => <Icon name="user" size={30} color={"white"} />,
        }}
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

export default Home;
