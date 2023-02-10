/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let list = new ListNode();
  const head = list;
  let flag = 0;
  while (l1 || l2||flag) {
    let val = 0;
    if (l1 && l1.val) {
      val = val + l1.val;
    }

    if (l2 && l2.val) {
      val = val + l2.val;
    }
    val += flag;
    if (val > 9) {
      list.val = val - 10;
      flag = 1;
    } else {
      list.val = val;
      flag = 0;
    }

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if (l1 || l2 || flag) {
      list.next = new ListNode();
      list = list.next;
    }
  }
  return head;
};
