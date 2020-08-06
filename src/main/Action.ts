import { Behavior } from "./Behavior";
import { Context } from "./Context";

export class Action {
  private behaviors: Behavior[] = [];
  private context: Context = {};
  public addBehavior(behavior: Behavior): void {
    this.behaviors.push(behavior);
  }
  public execute(): void {
    this.behaviors.forEach((b) => b.run(this.context));
  }
}