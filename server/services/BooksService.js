import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class BookService {

  async getAll(query = {}) {
    let data = await dbContext.Books.find(query).populate(
      "creator",
      "name picture"
      //NOTE Is this correct?
      //FIXME Populate??
    );
    return data
  }

  async getById(id, userEmail) {
    let data = await dbContext.Books.findOne({ _id: id, creatorEmail: userEmail })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board")
    }
    return data
  }


  async edit(id, userEmail, update) {
    let data = await dbContext.Books.findOneAndUpdate({ _id: id, creatorEmail: userEmail }, update, { new: true })
    if (!data) {
      throw new BadRequest("Invalid ID or you do not own this board");
    }
    return data;
  }

  async delete(id, userEmail) {
    let data = await dbContext.Books.findOneAndRemove({ id, creatorEmail: userEmail });
    if (!data) {
      throw new BadRequest("Invalid Id or you are not the owner")
    }
  }


}


export const booksService = new BookService()