export type Stop = {
  order: number;
  line: number;
  stop: string;
  time: string;
};

export type StopItem = {
  order: number;
  name: string;
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

export type LineItem = {
  name: string;
  stops: LineStop[];
};

export interface RootState {
  stops: StopItem[] | null;
  lines: LineItem[] | null;
}
