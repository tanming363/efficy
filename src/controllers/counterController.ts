import counters, { Counter } from "../models/counterModel";
import teams from "../models/teamModel";

export const createCounter = (teamId: string, memberName: string): Counter => {
  const newCounter: Counter = {
    id: Date.now().toString(),
    teamId,
    memberName,
    steps: 0,
  };
  counters.push(newCounter);
  return newCounter;
};

export const incrementCounter = (id: string, stepIncrement: number) => {
  const counter = counters.find((counter) => counter.id === id);
  if (counter) {
    counter.steps += stepIncrement;
    const team = teams.find((team) => team.id === counter.teamId);
    if (team) team.totalSteps += stepIncrement;
  }
};

export const getTeamSteps = (teamId: string) => {
  return counters
    .filter((counter) => counter.teamId === teamId)
    .reduce((total, counter) => total + counter.steps, 0);
};

export const listCounters = (teamId: string) => {
  return counters.filter((counter) => counter.teamId === teamId);
};
