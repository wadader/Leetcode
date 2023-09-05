import reverseList, { ListNode } from "./ReverseLinkedList";

describe("reverseList", () => {
  it("should reverse a linked list iteratively", () => {
    const n3 = new ListNode(3);
    const n2 = new ListNode(2, n3);
    const n1 = new ListNode(1, n2);

    const reversed = reverseList(n1);

    expect(reversed).toBe(n3);
    expect(reversed?.next).toBe(n2);
    expect(reversed?.next?.next).toBe(n1);
    expect(reversed?.next?.next?.next).toBeNull();
  });

  it("should return null for an empty list", () => {
    expect(reverseList(null)).toBeNull();
  });

  it("should return the same node for a list of length 1", () => {
    const n1 = new ListNode(1);
    expect(reverseList(n1)).toBe(n1);
  });
});
