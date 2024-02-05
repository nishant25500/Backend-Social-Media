import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
   constructor(){
    super(Like);
   }

   async findByUserAndLikeable(data){
      const result = await Like.findOne(data);
      return result;
   }
}

export  {LikeRepository};