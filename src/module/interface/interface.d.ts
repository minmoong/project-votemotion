declare interface VoteObject {
  path: string;
  title: string;
  content: string[];
  content_totalVotes: number;
  content_votes: number[];
}