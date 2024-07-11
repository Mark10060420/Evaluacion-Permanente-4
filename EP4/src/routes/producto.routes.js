import { Router } from "express";
import { methods as productController } from "./../controllers/producto";

const router = Router();

router.get("/api/productos", productController.getProductos);
router.get("/api/producto/:id", productController.getProducto);
router.post("/api/producto/add", productController.addProducto);
router.put("/api/producto/update/:id", productController.updateProducto);
router.delete("/api/producto/delete/:id", productController.delProducto);


export default router;
