# DSA in JavaScript

Notes from the Udemy course

## Big O

- Time complexity. We measure the number of operations.
- Space complexity. The amount of memory something uses.

### Worst case

- Omega
- Theta
- Omicron
  - See most often

Given an array:

```
a[1,2,3,4,5,6,7]
  0           n
```

If we're iterating over it to find a specific element, finding an element at `a[0]` is the best case, `a[n]` is the worst case, and `a[(0+n)/2]`, or (average) is the average case.

- **best case**: omega
- **average case**: theta
- **worst case**: omicron

When we measure Big O, we're always measuring the worst case.

### `o(n)`

```typescript
function logItems() {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

It's proportional. Number of operations is proportional to whatever N is.

### Drop constants

Simplifying the notation.

```typescript
function logItems() {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; i++) {
    console.log(i);
  }
}
```

Our code ran `n + n = 2n`. This is technically `o(2n)`. It doesn't matter if it is 2n, 100n, etc. If there is a constant, we drop the constant and call it `o(n)`.

### `O(n^2)`

```typescript
function logItems() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; i++) {
      console.log(i, j);
    }
  }
}
```

The number of items is `n * n`, or `n^2`. `o(n^2)` is generally considered bad.

### Drop non-dominants

Another way to simplify big-o notation.

```typescript
function logItems() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; i++) {
      console.log(i, j);
    }
  }
  // Add another loop at the end
  for (let k = 0; j < k; i++) {
    console.log(i, j);
  }
}
```

Loop 1: `o(n^2)`

Loop 2: `o(n)`

-> `o(n^2 + n)`

`n^2` is the dominant term, and `n` is the non-dominant. We drop the non-dominant. This function is `o(n^2)`.

### `o(1)`

```typescript
function addItems(n) {
  return n + n;
}
```

Referred to as constant time. The number of operations does not change.

This is the most efficient.

### `o(log n)`

`[1,2,3,4,5,6,7,8]`

If we wanted to find `1` in this sorted array, we could use a divide-and-conquer strategy. If we looped:

```
[1,2,3,4,5,6,7,8]


0 - [1,2,3,4]
1 - [1,2]
2 - [1]
```

3 steps to find item
8 items in the array.

`2^3 = 8`

`log(8) = 3`

If we take the number 8, how many times do we have to cut it in half to get to 1 item? 3

### `o(n log n)`

If you're going to sort strings, this is the most efficient you can make an algorithm. It can be faster if just numbers

## Different Terms for Inputs

```typescript
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++) {
    console.log(i);
  }
}
```

You can't say `o(n)` in this case because `a` and `b` are different. For this case, we have to use different terms for inputs in big O notation. This would be `o(a + b)`.

Similarly, if we have nested loops:

```typescript
function logItems(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      console.log(i);
    }
  }
}
```

This would be described as `o(a * b)` instead of `o(n^2)`.

### Big O of Arrays

```
[11, 3, 23, 7]
  0, 1,  2, 3
```

`.push` and `.pop` work on adding or subtracting an element for the end of an array. These operations don't require re-indexing prior elements. Therefore, these are `o(1)` operations.

`.shift` and `.unshift` work at the beginning of an array to add or subtract an element from the array. These operations cause the rest of the elements in the array to be re-indexed. This is `o(n)` where `n` is the number of items in the array.

`.splice(1,0,'Hi')` is used to add or remove items somewhere in the middle of the array. This operation causes the rest of the items to be re-indexed, therefore its `o(n)`.

Let's say we're looking for 7 in `[11,3,23,7]`. If you **search by value**, this is `o(n)`.

We can find something in an array of items with a million items in it by accessing the item at the index directly, in constant time.

Arrays might not be the right data structure if we want to add and remove items at the beginning of the array all the time.

### Wrap up

if `n = 100`

- `o(1)` = 1
- `o(log n)` = ~7
- `o(n)` = 100
- `o(n^2)` = 10,000

[bigocheatsheet.com](https://www.bigocheatsheet.com)

## Linked Lists

Linked lists do not have indices like arrays. Arrays also have contiguous places in memory, unlike LL.

LLs have 2 pointers, one pointing to the head, one pointing to the tail. Each item in the linked list points to the next item. The last item points to null (null terminating LL).

### LL Big O

|                 | Linked Lists | Arrays |
| --------------- | ------------ | ------ |
| Push            | O(1)         | O(1)   |
| Pop             | O(n)         | O(1)   |
| Pop             | O(n)         | O(1)   |
| Shift           | O(1)         | O(n)   |
| Unshift         | O(1)         | O(n)   |
| Insert          | O(n)         | O(n)   |
| Delete          | O(n)         | O(n)   |
| Lookup by Index | O(n)         | O(1)   |
| Lookup by Value | O(n)         | O(n)   |

### LL constructor

```typescript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

let ll = new LinkedList(4);
```

### Push

- The last node in the list points to the new node
- Update tail to point to new node

#### Edge case

What if we're inserting into a LL that doesn't have any nodes yet?

- Assign head and tail to the new node

### Pop

- We need a pointer to the head node. Call it `node`.
- We need another pointer to keep track of the second-to-last node. Call it `nodeBeforeLast`.
- We walk the linked list until we reach the last node whose pointer to the next is `null`. This implies we've reached the end.
  - With each iteration, we first set the `nodeBeforeLast` to the `node` we're looking at.
  - We then set the `node` to `node.next`
- When we get to the end, `node` will be the last node, while `nodeBeforeLast` will be the second-to-last node.
- Set the tail to the second-to-last node, `nodeBeforeLast`.
- Set the tail's next element to null.
- Decrement the length value
- See edge case 2
- Return the `node`

#### Edge case

1. The Linked List is empty. Meaning the LL has no head element. Return undefined. Do this before everything
2. The Linked List has a single element. In this case, after decrementing the length value, check the length value, if it's 0, set head and tail to null.

### Unshift

- create a new node
- Set the new node's next pointer to the head pointer
- Update the head pointer to refer to the new node

#### Edge case

If the linked list is empty, set the head and tail to the new node.

### Shift

- Remove and return the first node from a linked list

#### Edge cases

- Empty linked list
- linked list with a single node

### Get

Get a node at a particular index

### Set

Set the value of a node located at the specific index

### Insert

We're inserting a new node at a specified index. The new node will push the existing node at the specified index back one.

- Iterate to the node at the index _one before_ the index (`index - 1`). We need a reference to its next pointer.
- Create a reference variable to the next pointer from the node before. This is the node at `index`.
- Create a reference to the next node from the node at `index`.
- Set `nodeBefore.next` to the new node.
- Set the new node's next pointer to the node at `index`
- Increment length

#### Edge cases

- The index is out of bounds: return `false`
- The index is 0: We can use `push`
- The index is the length of the LL (one after the last index): we can use `unshift`

### Reverse

- Create a pointer variable, `node`, for the head of the LL. Swap the head and tail pointers so that the head is pointing to the tail, and the tail is pointing to the head by way of the pointer variable.
- We set up a few more temporary pointer variables. `prev` is initially set to null, and `next` is the next node after `node`, so point to `node.next`.
- Create a loop. We'll use `prev`, `node`, `next` to swap pointers for each iteration
  - First, set `next` to `node.next`. This represents the "next" node.
  - Next, set `node.next` = `prev`. This represents reversing the direction of the next pointer.
  - Set `prev` to `node`. `prev` needs to point at the `node` we're dealing with in the current iteration so that when we iterate again, we have a pointer to the "previous" node.
  - Set `node` to `next`. Again, we're setting ourselves up for the next iteration. `node` and `next` will temporarily point to the same node. When we iterate again, `next` will point to `node.next`.
