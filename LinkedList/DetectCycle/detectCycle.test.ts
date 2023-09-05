import hasCycle, { ListNode } from "./detectCycle";

describe("hasCycle", () => {
  it("should return false for a linked list without a cycle", () => {
    // Constructing: 1 -> 2 -> 3
    const third = new ListNode(3);
    const second = new ListNode(2, third);
    const head = new ListNode(1, second);

    expect(hasCycle(head)).toBe(false);
  });

  it("should return true for a linked list with a cycle", () => {
    // Constructing: 1 -> 2 -> 3 -> 2...
    const third = new ListNode(3);
    const second = new ListNode(2, third);
    const head = new ListNode(1, second);
    third.next = second; // Introduce a cycle.

    expect(hasCycle(head)).toBe(true);
  });
});
