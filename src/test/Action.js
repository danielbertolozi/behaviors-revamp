const { expect } = require("chai");
const { Action } = require("../../dist/Action");

class FirstBehavior {
  async run(context) {
    context["first"] = true;
  }
}

class SecondBehavior {
  async run(context) {
    context["second"] = true;
  }
}

class ThirdBehavior {
  async run(context) {
    context["third"] = true;
  }
}

context("Action", () => {
  beforeEach(() => {
  });
  describe("composing an action", () => {
    it("should execute three actions in order", async () => {
      const action = new Action();
      action.addBehavior(new FirstBehavior());
      action.addBehavior(new SecondBehavior());
      action.addBehavior(new ThirdBehavior());
      await action.execute();
      expect(action.context).to.have.property("first").which.is.true;
      expect(action.context).to.have.property("second").which.is.true;
      expect(action.context).to.have.property("third").which.is.true;
    });
  });
  // describe("");
});
