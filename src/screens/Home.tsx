import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import PessoaRepository from '../db/pessoaRepository';
import { TypePessoa } from '../db/TypePessoa';
import { useNavigation } from '@react-navigation/native';

const pessoaRepo = new PessoaRepository();


export default function Home() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');


  const  recuperarDado = async() => {
    const res = await pessoaRepo.getById(20);
    console.log(res);
    return res;
  }

  useEffect(()=>{

    const fetchDado = async () =>{
      const dado = await recuperarDado();
      if(dado != null){
        setNome(dado.nome);
      }
      
    }

    fetchDado()
  },[])




  const save = async () => {
    const id = await pessoaRepo.create({
      nome: nome,
      endereco: endereco
    });
    console.log('Created: ', id)
  }

  return (
    <View style={styles.container}>
      <Text>Essa screen é a home!</Text>
      <TextInput placeholder='Nome'
        onChangeText={setNome}
        style={styles.input}></TextInput>
      <TextInput placeholder='Endereço'
        onChangeText={setEndereco}
        style={styles.input}></TextInput>
      <Button title='Enviar' onPress={recuperarDado}></Button>
      <Text>
      {nome}
      </Text>
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
  input: {
    width: 150,
    height: 40,
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
  }
});
