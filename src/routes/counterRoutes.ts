import { Router } from "express";
import {
  createCounter,
  incrementCounter,
} from "../controllers/counterController";

const router = Router();

/**
 * @swagger
 * /counters:
 *   post:
 *     summary: Create a new counter
 *     tags: [Counters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               teamId:
 *                 type: string
 *               memberName:
 *                 type: string
 *             example:
 *               teamId: "12345"
 *               memberName: "John Doe"
 *     responses:
 *       201:
 *         description: Counter created successfully
 */
router.post("/counters", (req, res) => {
  const { teamId, memberName } = req.body;
  const counter = createCounter(teamId, memberName);
  res.status(201).json(counter);
});

/**
 * @swagger
 * /counters/{id}/increment:
 *   post:
 *     summary: Increment steps for a counter
 *     tags: [Counters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Counter ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               steps:
 *                 type: number
 *             example:
 *               steps: 100
 *     responses:
 *       204:
 *         description: Steps incremented successfully
 */
router.post("/counters/:id/increment", (req, res) => {
  const stepIncrement = req.body.steps;
  incrementCounter(req.params.id, stepIncrement);
  res.status(204).send();
});

export default router;
