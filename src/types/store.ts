export type Stop = {
  line: number;
  stop: string;
  order: number;
  time: string;
};

type Times = string[];

type StopObject = {
  stop: string;
  times: Times;
};

export type LineObject = {
  line: number;
  order: number;
  stops: Record<string, StopObject>;
};

export type Line = {
  line: number;
  order: number;
  stops: StopObject[];
};

export type RootState = {
  stops: Stop[] | null;
  lines: Line[] | null;
};
