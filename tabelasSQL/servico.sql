CREATE TABLE servicos (
    id SERIAL PRIMARY KEY,
    titulo TEXT NOT NULL,
	descricao TEXT NOT NULL,
    imagem TEXT NOT NULL,
    preco VARCHAR(100) NOT NULL,
    userId INTEGER REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW()
);