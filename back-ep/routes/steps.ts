import express, { Request, Response } from "express";
import { pool } from "../src/utils/dbClient";

const stepsRouter = express.Router();

// ------------------------------------------GET GAMES

stepsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const sql = 'SELECT * FROM public."Steps"';
    const stepsData: any = await pool.query(sql);
    const steps = stepsData.rows;
    res.status(201).send(steps);
  } catch (err) {
    res.status(400).send(err);
  }
});

export default stepsRouter;