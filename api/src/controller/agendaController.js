import { Inserir, Buscar, buscarNome, Favoritos, Intervalo, Alterar, Deletar } from "../repository/agendaRepository.js";

import {Router} from 'express';
const server = Router();

server.post('/inserir', async (req, resp) => {
    try {
        
        const novo = req.body;
        const novoCadastro = await Inserir(novo);
        

        resp.send(novoCadastro)
    } catch (error) {
        resp.status(400).send({
            erro: error.message
        })
    }
}) 


server.get('/buscar', async (req, resp) => {
    try {
        const {busca} = req.query;
        const res = await Buscar(busca);

        resp.send(res);

    } catch (error) {
        resp.status(400).send({
            erro: 'Errou ai mano!!'
        })
    }
})

server.get('/buscar/nome', async (req, resp) => {
    try {
        const {nome} = req.query;
        const nomes = await buscarNome(nome);

        resp.send(nomes);

    } catch (error) {
        resp.status(400).send({
            erro: 'Errou ai mano!!'
        })
    }
})

server.get('/buscar/favoritos', async (req, resp) => {
    try {
        const {favorito} = req.query;
        const res = await Favoritos(favorito);

        resp.send(res);

    } catch (error) {
        resp.status(400).send({
            erro: 'Errou ai mano!!'
        });
    }
});

server.get('/contatos/cadastro', async (req, resp) => {
    try {
        const {inicio, fim} = req.query;
        const res = await Intervalo(inicio, fim);

        resp.send(res);

    } catch (error) {
        resp.status(400).send({
            erro: 'Errou ai mano!!'
        });
    }
}) 

server.put('/contatos/:id', async (req, resp) => {
    try {

        const {id} = req.params;
        const alterar = req.body;
        const alterarContato = await Alterar(id, alterar);


        resp.send(alterarContato);


    } catch (error) {
        resp.status(400).send({
            erro: error.message
        });
    }
})

server.delete('/contatos/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const apagarContato = Deletar(id);
        
        resp.send(apagarContato);

    } catch (error) {
        resp.status(400).send({
            erro: 'Errou ai mano!!'
        });
    }
})

export default server;
















































