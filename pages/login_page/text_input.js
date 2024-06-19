import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View, Pressable } from "react-native";

export default function Text_input() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.name} placeholder="Name" />
      <TextInput style={styles.name} placeholder="Email" />
      <Pressable style={styles.login}  onPress={() => styles}>
        <Text style={styles.login_text}>Log In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },

  name: {
    borderWidth: 1,
    borderColor: '#AFB0B6',
    borderRadius: 10,
    borderStyle: 'solid',
    height: 52,
    marginTop: 15,
    paddingLeft: 15,
  },
  login: {
    backgroundColor: '#356899',
    height: 56,
    borderRadius: 5,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },


});
