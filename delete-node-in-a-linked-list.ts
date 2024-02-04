/**
 * Definition for singly-linked list.
*/
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.next = (next === undefined ? null : next)
    this.val = (val === undefined ? 0 : val)
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  

};
