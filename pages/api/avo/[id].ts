import { NextApiRequest, NextApiResponse } from "next"
import Database from "../../../db/db";

const avoById = async (req: NextApiRequest, res: NextApiResponse) => {
  const dataBase = new Database()
  const { id } = req.query
  const avo = await dataBase.getById(id)
  return res.status(200).json({data: avo})
}

export default avoById