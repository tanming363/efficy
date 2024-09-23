import { Router } from "express";
import {
  createTeam,
  deleteTeam,
  listTeams,
} from "../controllers/teamController";

const router = Router();

/**
 * @swagger
 * /create-teams:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Team A"
 *     responses:
 *       201:
 *         description: Team created successfully
 */
router.post("/create-teams", (req, res) => {
  const { name } = req.body;
  const team = createTeam(name);
  res.status(201).json(team);
});

/**
 * @swagger
 * /teams:
 *   get:
 *     summary: Get a list of all teams
 *     tags: [Teams]
 *     responses:
 *       200:
 *         description: A list of teams
 */
router.get("/teams", (req, res) => {
  res.json(listTeams());
});

/**
 * @swagger
 * /teams/{id}:
 *   delete:
 *     summary: Delete a team
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Team ID
 *     responses:
 *       204:
 *         description: Team deleted successfully
 */
router.delete("/teams/:id", (req, res) => {
  deleteTeam(req.params.id);
  res.status(204).send();
});

export default router;
