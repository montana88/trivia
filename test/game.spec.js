import trivia from '../src/trivia.js'

describe("The test environment", function() {
  it("should pass", function() {
    expect(true).toBe(true);
  });

  it("should access game", function() {
    expect(trivia).toBeDefined();
  });
});

describe("Your specs...", function() {
  // it ...
});
