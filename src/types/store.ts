export type Stop = {
  line: number;
  stop: string;
  order: number;
  time: string;
};

export type Time = {
  name: string;
};

export type LineStop = {
  order: number;
  name: string;
  times: Time[];
};

export type LineObject = {
  name: string;
  stops: Record<string, LineStop>;
};

export type Line = {
  name: string;
  stops: LineStop[];
};

export type RootState = {
  stops: Stop[] | null;
  lines: Line[] | null;
};
