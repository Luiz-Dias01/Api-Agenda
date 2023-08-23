-- Inserir Registro
INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
	VALUES ('Ketlen', '+351 927-738-530', 'kehportuga@gmail.com', true, '2023-08-16 11:07:50');

-- Buscar por Todos     
SELECT * FROM tb_agenda;

-- Buscar por nome
SELECT nm_contato FROM tb_agenda
	WHERE nm_contato = 'Maria alice';


-- Buscar por Favorito
SELECT bt_favorito FROM tb_agenda
	WHERE bt_favorito = true;


-- Buscar por Intervalo  
SELECT dt_cadastro FROM tb_agenda
	WHERE dt_cadastro BETWEEN '2023-08-01 00:00:00' AND '2023-08-30 00:00:00';


-- ALterar Registro    
UPDATE tb_agenda 
	SET nm_contato = 'Sophia',
		ds_telefone = '+55 (11) 97595-8925',
        ds_email = 'sophiasoh@gmail.com',
        bt_favorito = false,
        dt_cadastro = '2023-08-19 11:24:25'
		WHERE id_agenda = 2;

-- Apagar Registro       
DELETE FROM tb_agenda
	WHERE id_agenda = 2;