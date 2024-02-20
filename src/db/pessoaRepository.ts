import { TypePessoa } from "./TypePessoa";
import { executeTransaction } from "./databaseSQLite";

export default class PessoaRepository {
  constructor(){
    this.up();
  }

  public async up(){
    await executeTransaction(
    'CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, endereco TEXT'
    );
  }

  public async down(){
    await executeTransaction('DROP TABLE pessoa');
  }

  public async create(pessoa: TypePessoa){
    const result = await executeTransaction(
      'INSERT INTO pessoa(nome, endereco) VALUES (?, ?)',
      [pessoa.nome, pessoa.endereco]
    );

    return result.insertId;
  }

  public async all(){
    const result = await executeTransaction(
      'SELECT * FROM pessoa'
    );
    return result.rows._array;
  }

}