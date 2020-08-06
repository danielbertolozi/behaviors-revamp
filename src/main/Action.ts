import { Behavior } from "./Behavior";
import { Context } from "./Context";

export class Action {
  private behaviors: Behavior[] = [];
  private context: Context = {};
  public addBehavior(behavior: Behavior): void {
    this.behaviors.push(behavior);
  }
  public async execute(): Promise<void> {
    for (const behavior of this.behaviors) {
      await behavior.run(this.context);
    }
  }
}