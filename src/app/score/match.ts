import { User } from '../user/user';

export interface Match {
  winner: User;
  loser: User;
  loserScore: number;
  timestamp: number;
}
