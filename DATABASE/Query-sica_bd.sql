create database sica_bd;

use sica_bd;

CREATE TABLE usuario (
	id_usuario INT(11) NOT NULL AUTO_INCREMENT,
	tipo_usuario VARCHAR(15) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	imagem DOUBLE NOT NULL,
	login VARCHAR(30) NOT NULL,
	PRIMARY KEY (id_usuario),
    UNIQUE (login)
);

CREATE TABLE reservas_ambientais (
	id_reserva INT(11) NOT NULL AUTO_INCREMENT,
	reservas_id_usuario INT(11) NOT NULL,
	nome VARCHAR(180) NOT NULL,
	local VARCHAR(180) NOT NULL,
	tamanho INT(11) NOT NULL,
	tipo_reserva VARCHAR(180) NOT NULL,
	saude_reserva INT(11) NOT NULL,
	PRIMARY KEY (id_reserva),
	INDEX reservas_id_usuario (reservas_id_usuario),
	CONSTRAINT reservas_id_usuario FOREIGN KEY (reservas_id_usuario) REFERENCES usuario (id_usuario)
);


CREATE TABLE eventos_ambientais (
	id_evento INT(11) NOT NULL AUTO_INCREMENT,
	eventos_id_usuario INT(11) NOT NULL,
	eventos_id_reservas INT(11) NOT NULL,
	desc_evento VARCHAR(180) NOT NULL,
	data_evento DATE NOT NULL,
	causa VARCHAR(180) NOT NULL,
	impacto INT(11) NOT NULL,
	desc_impacto VARCHAR(180) NOT NULL,
	consequencia VARCHAR(180) NOT NULL,
	plano_restauracao VARCHAR(180) NOT NULL,
	tempo_restauracao VARCHAR(180) NOT NULL,
	PRIMARY KEY (id_evento),
	INDEX eventos_id_usuario (eventos_id_usuario),
	INDEX eventos_id_reservas (eventos_id_reservas),
	CONSTRAINT eventos_id_reservas FOREIGN KEY (eventos_id_reservas) REFERENCES reservas_ambientais (id_reserva),
	CONSTRAINT eventos_id_usuario FOREIGN KEY (eventos_id_usuario) REFERENCES usuario (id_usuario)
);

insert into usuario(tipo_usuario, senha, imagem, login) values ("adm", "1234", 636719.0323, "admin");
select * from usuario;