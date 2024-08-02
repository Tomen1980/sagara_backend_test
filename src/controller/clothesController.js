import { PrismaClient,Prisma } from "@prisma/client"
const prisma = new PrismaClient()


export const getAllClothes = async (req,res) =>{
    try{
        const clothes = await prisma.clothes.findMany()
        if(clothes.length > 0){
            res.status(200).json({
                message: "Success get all clothes",
                data: clothes
            })
        }else{
            res.status(404).json(
                {message: "Clothes not found"}
            )
        }
    }catch(error){
        res.status(500).json(
            {message: error.message}
        )
    }
}

export const getByIdClothes = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const clothes = await prisma.clothes.findUnique({
            where: {
                id
            }
        })
        if(clothes){
            res.status(200).json({
                message: "Success get clothes",
                data: clothes
            })
        }else{
            res.status(404).json(
                {message: "Clothes not found"}
            )
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const addClothes = async (req,res) =>{
    
    try{
        const {name, color, size} = req.body
        const price = parseFloat(req.body.price)
        const stock = parseInt(req.body.stock)
        const clothes = await prisma.clothes.create({
            data: {
                name,
                color,
                size,
                price,
                stock
            }   
        })
        res.status(201).json({
            message: "Success add clothes",
            data: clothes
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }   
}

export const updateClothes = async (req,res) =>{
    try{

        const id = parseInt(req.params.id)
        const {name, color, size} = req.body
        const price = parseFloat(req.body.price)
        const stock = parseInt(req.body.stock)
        const clothes = await prisma.clothes.update({
            where: {
                id
            },
            data: {
                name,
                color,
                size,
                price,
                stock,
            }
        })
        res.status(200).json({
            message: "Success update clothes",
            data: clothes
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteClothes = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const clothesId = await prisma.clothes.findUnique({
            where: {
                id
            }
        })

        if(!clothesId){
            return res.status(404).json({
                message: "Clothes not found"
            })
        }

        const clothes = await prisma.clothes.delete({
            where: {
                id
            }
        })
        res.status(200).json({
            message: "Success delete clothes",
            data: clothes
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const searchClothes = async (req,res) =>{
    try{
        const querySearch = req.body.search || ""
        const clothes = await prisma.clothes.findMany({
            where: {
                OR: [
                    {
                        size: {
                            contains: querySearch,
                            mode: "insensitive"
                        }
                    },
                    {
                        color: {
                            contains: querySearch,
                            mode: "insensitive"
                        }
                    },
                ]
            }
        })

        if(clothes.length > 0){
            res.status(200).json({
                message: "Success get clothes",
                data: clothes
            })
        }else{
            res.status(404).json(
                {
                    message: "Clothes not found",
                    value: querySearch
                }
            )
        }

    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}
        

export const addStock = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const stock = parseInt(req.body.stock)
        const colthes = await prisma.clothes.findUnique({
            where: {
                id
            }
        })

        if(!colthes){
            return res.status(404).json({
                message: "Clothes not found"
            })
        }

        const clothes = await prisma.clothes.update({
            where: {
                id
            },
            data: {
                stock: {
                    increment: stock
                }
            }
        })
        res.status(200).json({
            message: "Success add stock",
            data: clothes
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const deleteStock = async (req,res) =>{
    try{
        const id = parseInt(req.params.id)
        const stock = parseInt(req.body.stock)
        const colthes = await prisma.clothes.findUnique({
            where: {
                id
            }
        })

        if(!colthes){
            return res.status(404).json({
                message: "Clothes not found"
            })
        }

        const clothes = await prisma.clothes.update({
            where: {
                id
            },
            data: {
                stock: {
                    decrement: stock
                }
            }
        })
        res.status(200).json({
            message: "Success delete stock",
            data: clothes
        })
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const getAvailableClothes = async (req,res) =>{
    try{
        const clothes = await prisma.clothes.findMany({
            where: {
                stock: {
                    gt: 0
                }
            }
        })
        if(clothes.length > 0){     
            res.status(200).json({
                message: "Success get available clothes",
                data: clothes
            })
        }else{
            res.status(404).json({
                message: "Clothes not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const getNotAvailableClothes = async (req,res) =>{
    try{
        const clothes = await prisma.clothes.findMany({
            where: {
                stock: {
                    lt: 1
                }
            }
        })
        if(clothes.length > 0){     
            res.status(200).json({
                message: "Success get not available clothes",
                data: clothes
            })
        }else{
            res.status(404).json({
                message: "Clothes not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

export const getLessThanFiveClothes = async (req,res) =>{
    try{
        const clothes = await prisma.clothes.findMany({
            where: {
                stock: {
                    lt: 5
                }
            }
        })
        if(clothes.length > 0){     
            res.status(200).json({
                message: "Success get less than five clothes",
                data: clothes
            })
        }else{
            res.status(404).json({
                message: "Clothes not found"
            })
        }
    }catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}




