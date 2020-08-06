import { Context } from "./Context";

export interface Behavior {
  run(state: Context): void;
}
