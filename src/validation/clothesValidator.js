import { body } from "express-validator";

export const clothesValidator = [
    body("name").notEmpty().withMessage("Name is required").isString().withMessage("Name must be a string"),

    body("color")
        .notEmpty()
        .withMessage("Color is required")
        .isString()
        .withMessage("Color must be a string"),

    body("size")
        .notEmpty()
        .withMessage("Size is required")
        .isString()
        .withMessage("Size must be a string"),

    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isNumeric()
        .withMessage("Price must be a number"),
    
    body("stock")
        .notEmpty()
        .withMessage("Stock is required")
        .isNumeric()
        .withMessage("Stock must be a number"),
]

export const stockValidator = [
    body("stock")
        .notEmpty()
        .withMessage("Stock is required")
        .isNumeric()
        .withMessage("Stock must be a number"),
]

