import * as sample from "sample";

describe("background", function() {
  it("testFunction", async () => {
    const site = "google.com";
    let op = sample.testFunction();

    assert(op == true, "output expected");

    op = sample.testFunction({ check: true });
    assert(op == true, "output expected");
  });
});
