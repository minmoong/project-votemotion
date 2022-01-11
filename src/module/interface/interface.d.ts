declare type VoteObject = {
  path: string;
  title: string;
  created_at: number;
  uploader: string;
  votecontent: string[];
  comment: string[];
  votecontent_total_votes: number;
  votecontent_each_votes: number[];
}

declare type User = {
  nickname?: string;
  voted_at?: { path: string; votedIdx: number; }[];
}