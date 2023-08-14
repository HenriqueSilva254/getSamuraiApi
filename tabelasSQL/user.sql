  CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      telefone VARCHAR(10) NOT NULL,
      cidade VARCHAR(100) NOT NULL,
      password VARCHAR(100) NOT NULL
    );