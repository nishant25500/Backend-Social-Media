import LikeService from "../services/like-service.js";

const likeservice = new LikeService();

export const toggleLike = (async(req,res)=>{
    try {
        const response = await likeservice.toggleLike(req.query.modelId,req.query.modelType,req.body.userId);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Successful toggled like",
            err: {}
        })
    } catch (error) {
       return res.status(500).json({
        success: false,
        data: {},
        message: "Something went wrong",
        err: error
       })
    }
})