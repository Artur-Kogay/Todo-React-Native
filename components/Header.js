import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Список дел</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 60,
        height: 100,
        backgroundColor: 'silver',
        width: '100%'
    },
    text: {
        fontSize: 18,
        color: 'red',
        fontStyle: 'normal',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%'
    }
});
