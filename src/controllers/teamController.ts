import teams, { Team } from "../models/teamModel";

export const createTeam = (name: string): Team => {
  const newTeam: Team = { id: Date.now().toString(), name, totalSteps: 0 };
  teams.push(newTeam);
  return newTeam;
};

export const deleteTeam = (id: string) => {
  const index = teams.findIndex((team) => team.id === id);
  if (index !== -1) teams.splice(index, 1);
};

export const listTeams = () => teams;
