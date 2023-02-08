/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (l1, l2) {
  let list = new ListNode(),
    head = list;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }

    list = list.next;
  }

  list.next = l1 || l2;

  return head
};
