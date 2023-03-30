import { NextApiResponse } from "next";
import DataBase from '../../../db/db'

const AllAvos = async (req, res: NextApiResponse) => {
  const db = new DataBase()
  const allEntries = await db.getAll()

  res.status(200).json({data: allEntries})
}

export default AllAvos