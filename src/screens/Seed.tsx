import { StyleSheet, Text, View } from 'react-native';

export default function Seed() {
  return (
    <View style={styles.container}>
      <Text>Essa screen é o seed!</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
