import express from "express";
import {
    addClothes,
    getAllClothes,
    getByIdClothes,
    updateClothes,
    deleteClothes,
    searchClothes,
    addStock,
    deleteStock,
    getAvailableClothes,
    getNotAvailableClothes,
    getLessThanFiveClothes
} from "../controller/clothesController.js";

import { clothesValidator,stockValidator } from "../validation/clothesValidator.js";
import { validate } from "../middleware/validationHandler.js";

const clothesRoute = express.Router();

clothesRoute
// Menampilkan Seluruh Baju
    .get("/", getAllClothes)
    // Menemukan Baju Berdasarkan ID
    .get("/clothes/:id", getByIdClothes)
    // Menambahkan Baju
    .post("/",clothesValidator,validate, addClothes)
    // Mengupdate Baju
    .put("/:id",clothesValidator,validate,updateClothes)
    // Menghapus Baju
    .delete("/:id",deleteClothes)
    // Mencari Baju
    .post("/search",searchClothes)
    // Menambahkan Stok
    .patch("/:id/addStock",stockValidator,validate,addStock)
    // Mengurangi Stok
    .patch("/:id/deleteStock",stockValidator,validate,deleteStock)
    // Menampilkan Baju yang tersedia
    .get("/available",getAvailableClothes)
    // Menampilkan Baju yang tidak tersedia
    .get("/notAvailable",getNotAvailableClothes)
    // Menampilkan Baju yang stoknya kurang dari 5
    .get("/lessThanFive",getLessThanFiveClothes)


export default clothesRoute