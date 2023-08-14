import { db } from "../database/db.js";
import { createService, getMyServicesFromDB, getservicoId, updateServiceStatusToDB } from "../repository/serviceRepository.js";

export async function postService(req, res){
    const {titulo, descricao, imagem, preco, name} = req.body

    try {    
    createService({titulo, descricao, imagem, preco, name})
    res.sendStatus(200)
    } catch (err) {
        return res.status(500).send(err.message)
    }
}

export async function getService(req, res){
    const {id} = req.params

    try {
        const servico = await getservicoId(id);
    
        if (servico) {
          res.status(200).send(servico);
        } else {
          res.status(404).send("Serviço não encontrado");
        }
      } catch (err) {
        res.status(500).send(err.message);
      }
}

export async function getmyService(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
  
    try {
      const servicos = await getMyServicesFromDB(token);
  
      res.status(200).send(servicos);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }

  export async function statusService(req, res) {
    const { id } = req.params;
  
    try {
      const servico = await db.query(`SELECT servicos.ativo FROM servicos WHERE id = $1`, [id]);
      const ativo = servico.rows[0].ativo;
  
      await updateServiceStatusToDB(id, ativo);
  
      res.sendStatus(200);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }