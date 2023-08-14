import { Router } from "express";
import { tokenValidation } from "../middlewares/validationAuth.js";
import { validationSchemas } from "../middlewares/validationSchema.js";
import { getService, getmyService, postService, statusService } from "../controllers/servicesController.js";
import { ServiceSchema } from "../schemas/Service.schema.js";

const Services =  Router()

Services.post('/new/service',validationSchemas(ServiceSchema), tokenValidation, postService)
Services.get("/services", tokenValidation, getService)
Services.get("/services/:id", tokenValidation, getService)
Services.get("/my/services", tokenValidation, getmyService)
Services.put("/ativar/desativar/:id", statusService)

export default Services