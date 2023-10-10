use sistemadecadastro;

CREATE TABLE usuario(
	nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

SELECT * FROM sistemadecadastro.usuario;

delete from usuario where idade = 40;

UPDATE usuario SET nome = "Nome de teste" WHERE nome = "Nome";