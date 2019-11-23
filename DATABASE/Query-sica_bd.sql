create database sica_bd;

use sica_bd;

CREATE TABLE usuario (
	id_usuario INT(11) NOT NULL AUTO_INCREMENT,
	tipo_usuario VARCHAR(15) NOT NULL,
	senha VARCHAR(20) NOT NULL,
	imagem DOUBLE NOT NULL,
	login VARCHAR(30) NOT NULL,
	PRIMARY KEY (id_usuario)
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

insert into usuario(tipo_usuario, senha, imagem, login) values ("Adm", "1234", 7.2, "admin");
select * from reservas_ambientais;
SELECT * FROM reservas_ambientais WHERE nome LIKE '%Reserva%';
UPDATE reservas_ambientais SET reservas_id_usuario=1, nome='R1738', local='Amazônia', tamanho=5380, tipo_reserva='Tropical', saude_reserva=5 WHERE id_reserva=1;
INSERT INTO eventos_ambientais (eventos_id_usuario, eventos_id_reservas, desc_evento, data_evento, causa, impacto, desc_impacto, consequencia, plano_restauracao, tempo_restauracao) VALUES (1, 1, 'Desmatamento', '2019-04-23', 'Humana', 1, 'Desmatamento ilegal', 'Afetou região', 'Reflorestamento natural', 'Não se aplica');
DROP DATABASE sica_bd;