import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class BookService {
  async findAll(query = {}) {
   let values = await dbContext.Books.find(query). populate(
     "creator",
     "name picture"
     //NOTE Is this correct?
   );
   return values
  }

  async getById(id, userEmail) {
    let data = await dbContext.Boards.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }



  async edit(id, userEmail, update) {
    let data = await dbContext.Boards.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }


}


export const boardService = new BoardService()