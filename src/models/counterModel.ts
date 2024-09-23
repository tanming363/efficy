export interface Counter {
  id: string;
  teamId: string;
  memberName: string;
  steps: number;
}

const counters: Counter[] = [];

export default counters;
