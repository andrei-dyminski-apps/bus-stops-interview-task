export type Stop = {
  line: number;
  stop: string;
  order: number;
  time: string;
};

type Time = {
  order: number;
  time: string;
};

type StopObject = {
  order: number;
  stop: string;
  times: Time[];
};

export type LineObject = {
  order: number;
  line: number;
  stops: Record<string, StopObject>;
};

export type Line = {
  order: number;
  line: number;
  stops: StopObject[];
};

export type RootState = {
  stops: Stop[] | null;
  lines: Line[] | null;
};
