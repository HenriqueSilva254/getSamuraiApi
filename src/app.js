import express, { json } from 'express'
import cors from 'cors' 
import router from './routes/index.routes.js';

// config Server  
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)


// Run Server
if (process.env.NODE_ENV === "production") configDatabase.ssl = true;

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})

