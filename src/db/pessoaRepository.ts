import { TypePessoa } from "./TypePessoa";
import { executeTransaction } from "./databaseSQLite";

export default class PessoaRepository {
  constructor(){
    this.up();
  }

  public async up(){
  try {
    await executeTransaction(
      'CREATE TABLE IF NOT EXISTS pessoa(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco TEXT);'
      );
  } catch (error) {
    console.log('Não foi possível criar a tabela: ', error);
  }
  }

  public async down(){
    await executeTransaction('DROP TABLE pessoa');
  }

  //criar um registro
  public async create(pessoa: TypePessoa)
  {
    try{
      const result = await executeTransaction(
        'INSERT INTO pessoa(nome, endereco) VALUES (?, ?)',
        [pessoa.nome, pessoa.endereco]);
        return result.insertId;
    }catch(error){
      console.log('Houve um erro na transação sql: ',error);
      return null;
    }     
  }
  
  public async getById(id: number){
    try {
      const result =  executeTransaction(
        'SELECT * FROM pessoa where id=?',
        [id]);
        return (await result).rows.item(0) as TypePessoa;//muito cuidado com os campos da tabela
    } catch (error) {
      console.log('Houve um erro na transação sql: ',error);
    }
  }

  public async all(){
  try {
    const result = await executeTransaction(
      'SELECT * FROM pessoa'
    );
    return result.rows._array;
  } catch (error) {
    console.log('Houve um erro na transação sql: ', error)
  }
  }

}