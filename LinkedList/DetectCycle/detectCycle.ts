class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let tortoise = head;
  let hare: ListNode | null | undefined = head?.next?.next;

  do {
    if (tortoise === hare) return true;

    if (tortoise === null) return false;
    if (hare === null || hare === undefined) return false;

    tortoise = tortoise.next;
    hare = hare.next?.next;
  } while (tortoise !== head && tortoise !== null);

  return false;
}

export default hasCycle;

export { ListNode };
