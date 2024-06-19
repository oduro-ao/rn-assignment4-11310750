import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Text_input from "./text_input";
import IconBar from "./iconbar";
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.jobizz}>Jobizz</Text>
      <View style={styles.welcome_text}>
        <Text style={styles.welcome}>Welcome Back 👋</Text>
        <Text style={styles.login_text}>Let’s log in. Apply to jobs!</Text>
      </View>
      <View style={styles.login_input}>
        <Text_input />
      </View>
      <View style={styles.line_con}>
        <View style={styles.line} />
        <Text style={styles.text}>Or continue with</Text>
        <View style={styles.line} />
      </View>
      <IconBar />
      <Text style={styles.noaccount}>
          Haven’t an account?<Text style={styles.Regis}> Register </Text>
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: "#FAFAFD",
    padding: 24,
    paddingTop: 106,
  },

  jobizz: {
    color: "#356899",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 10,
  },

  welcome_text: {
    marginBottom: 20,
  },
  welcome: {
    color: "#0D0D26",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  login_text: {
    color: "#0D0D26",
    fontSize: 14,
    fontWeight: "400",
  },


  line_con: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#AFB0B6',
  },
  text: {
    marginHorizontal: 10,
    color: '#AFB0B6', 
  },

  noaccount: {
    marginTop: 20,
    color: 'rgba(189,190,194,1)',
    fontSize: 14,
    fontFamily: 'Circular Std, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },

  Regis: {
    marginTop: 20,
    color: 'blue',
    fontSize: 14,
    fontFamily: 'Circular Std, sans-serif',
    fontWeight: '400',
    textAlign: 'center',
  },
});
