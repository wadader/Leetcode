// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let current = head;
  let next = current?.next;
  let nextNext = next?.next;

  if (!current) return null;

  current.next = null;

  while (current) {
    if (!next) return current;
    next.next = current;
    current = next;
    next = nextNext;
    nextNext = next?.next;
  }

  return current;
}

export default reverseList;

export { ListNode };
