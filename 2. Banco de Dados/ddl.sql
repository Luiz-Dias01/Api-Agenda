CREATE DATABASE agenda;

USE agenda;

CREATE TABLE tb_agenda (
id_agenda			INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nm_contato			VARCHAR(200) NOT NULL,
ds_telefone			VARCHAR(200) NOT NULL,
ds_email			VARCHAR(200) NOT NULL,
bt_favorito			BOOLEAN NOT NULL,
dt_cadastro			DATETIME NOT NULL	
);