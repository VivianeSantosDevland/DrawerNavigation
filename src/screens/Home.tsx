import { StyleSheet, Text, View, TextInput, Pressable, Button} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Essa screen é a home!</Text>
      <TextInput placeholder='Nome' style={styles.input}></TextInput>
      <TextInput placeholder='Endereço' style={styles.input}></TextInput>
      <Button title='Enviar'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3A3DFCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
  width: 150,
  height: 40,
  borderWidth: 1,
  margin: 10,
  borderRadius: 8,
  }
});
