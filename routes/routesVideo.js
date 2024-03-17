const express = require("express");
const ControllerVideo = require("../controllers/ControllerVideos");
const router = express.Router();

//Cadastrar
router.get("/Cadastrar", ControllerVideo.cadastrarVideo);
router.post("/Cadastrar", ControllerVideo.VideoCreate);

//A router.get / mostra todos os vídeos que temos no banco de dados.
router.get("/", ControllerVideo.listarVideos);


//O router.post /update envia para o banco os dados para atualização.
router.get("/update/:id_video", ControllerVideo.UpdateVideo);
router.post("/update", ControllerVideo.VideoUpdate);


//O router.post /remover chama a função para remover o objeto do banco.
router.post("/remover", ControllerVideo.removerVideo);


module.exports = router;