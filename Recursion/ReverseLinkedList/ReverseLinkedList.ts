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
  let previous = null;
  let nextVar = head?.next;

  function reverse(
    curr: ListNode | null,
    next: ListNode | null,
    prev: ListNode | null
  ): ListNode | null {
    let newNext = next?.next || null;

    if (curr === null) return prev;
    curr.next = prev;

    return reverse(next, newNext, curr);
  }

  if (nextVar === undefined) return head;

  return reverse(current, nextVar, previous);
}

export default reverseList;

export { ListNode };
