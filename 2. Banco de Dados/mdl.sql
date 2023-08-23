-- Inserir Registro
INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
	VALUES ('?', '?', '?', true, '?');

-- Buscar por Todos     
SELECT * FROM tb_agenda;

-- Buscar por nome
SELECT nm_contato FROM tb_agenda
	WHERE nm_contato = '?';


-- Buscar por Favorito
SELECT bt_favorito FROM tb_agenda
	WHERE bt_favorito = ?;


-- Buscar por Intervalo  
SELECT dt_cadastro FROM tb_agenda
	WHERE dt_cadastro BETWEEN '?' AND '?';


-- ALterar Registro    
UPDATE tb_agenda 
	SET nm_contato = '?',
		ds_telefone = '?',
        ds_email = '?',
        bt_favorito = false,
        dt_cadastro = '?'
		WHERE id_agenda = ?;

-- Apagar Registro       
DELETE FROM tb_agenda
	WHERE id_agenda = ?;