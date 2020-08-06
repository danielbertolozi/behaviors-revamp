import { Context } from "./Context";

export interface Behavior {
  run(state: Context): Promise<void>;
}
