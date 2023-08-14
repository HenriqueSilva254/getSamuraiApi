import { db } from "../database/db.js";

export async function createService({titulo, descricao, imagem, preco, name}){
    try {
        const user = await db.query(`SELECT id FROM users WHERE users.name = $1`, [name])
        if(user.rows.length === 0) return res.status(400).send('usuario nao existe')
        const userId = user.rows[0].id

        const nvservico = await db.query(
          "INSERT INTO servicos (titulo, descricao, imagem, preco, userId) VALUES ($1, $2, $3, $4, $5)",
          [titulo, descricao, imagem, preco, userId]
        );
      } catch (err) {
        throw err;
      }
}

export async function allfunction({titulo, descricao, imagem, preco, name}){
    try {
        ;
      } catch (err) {
        throw err;
      }
}

export async function getservicoId(id){
    try {
        const servicoId = await db.query(`
        SELECT servicos.id, servicos.preco, servicos.titulo, servicos.descricao, servicos.imagem,
        servicos.created_at AS dataPostagem, users.name, users.telefone, users.cidade 
        FROM servicos 
        JOIN users ON servicos.userid = users.id
        WHERE servicos.id = $1`, [id]);
  
      if (servicoId.rows.length > 0) {
        return servicoId.rows[0];
      }
  
      const servico = await db.query(`
        SELECT servicos.id, servicos.titulo, servicos.preco, servicos.descricao, servicos.imagem,
        servicos.created_at AS dataPostagem, users.name, users.telefone, users.cidade  
        FROM servicos 
        JOIN users ON servicos.userid = users.id
        WHERE servicos.ativo = true`);
  
      return servico.rows;

      } catch (err) {
        throw err;
      }
}
export async function getMyServicesFromDB(token) {
    try {
      const servico = await db.query(`
        SELECT servicos.id, servicos.ativo, servicos.titulo, servicos.preco, servicos.descricao, servicos.imagem,
        servicos.created_at AS dataPostagem, users.name, users.telefone, users.cidade  
        FROM servicos 
        JOIN users ON servicos.userid = users.id 
        JOIN tokens ON users.id = tokens.userId
        WHERE tokens.token = $1`, [token]);
      
      return servico.rows;
    } catch (err) {
      throw new Error(err.message);
    }
  }


  export async function updateServiceStatusToDB(id, ativo) {
    try {
      if (ativo) {
        await db.query(`UPDATE servicos SET ativo = false WHERE id = $1`, [id]);
      } else {
        await db.query(`UPDATE servicos SET ativo = true WHERE id = $1`, [id]);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }