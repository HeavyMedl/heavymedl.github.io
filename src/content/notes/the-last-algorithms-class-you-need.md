# The Last Algorithms Class You Need

From Primeagen (Netflix) at [frontendmasters](https://frontendmasters.com)

## Intro

### Algorithms I have ran into (in industry)

### Why should I care?

- Isn't asking aglorithms old fashion for interviews?
- I don't actually use any of them on the job right?

### Let me ask you this

What data structure is used here?

```typescript
const a = [];
```

It ain't. Arrays are the simplest Data Structure. We should know what they are fundamentally

### Time and Space complexity

- There will be no proofs
- there will be graphs though

### Some books

- [Introduction to algorithms](https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-1&linkCode=sl1&tag=theprimeagen-20&linkId=83c55b2c018fbe94a1de79ebd447b66a&language=en_US&ref_=as_li_ss_tl)
- [A Common-Sense Guide to Data Structures and Algorithms](https://www.amazon.com/Common-Sense-Guide-Structures-Algorithms-Second/dp/1680507222?keywords=introduction+to+algorithms&qid=1660584469&s=books&sprefix=introduction,stripbooks,93&sr=1-16&linkCode=sl1&tag=theprimeagen-20&linkId=2000de29907b98b5ac7a98aa6b52c1d9&language=en_US&ref_=as_li_ss_tl#customerReviews): I own this book! Maybe grab a digital copy so I'm not lugging it around everywhere

## Big O Time Complexity

It categorizes your algorithms' time or memory requirements based on input. It's not meant to be an exact measurement. it is meant to generalize the growth of your algorithm.

### Why use it

Make decisions about what DSA to use. Knowing how they will perform can greatly help create the best possible program out there.

> As your input grows, how fast does computation or memory grow?

#### Example

```typescript
function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; ++i) {
    sum += n.charCodeAt(i);
  }
  return sum;
}
```

As the input grows, execution time grows. Look for loops, as they represent `o(n)` when we have to loop over `n` elements.

**Always drop constants**. We're not trying to get an exact time.

**We're interested in the worst-case scenario.** An instance where we end a loop before reaching the end of an input is a best case. However, we may iterate over the entire input in some other case.

### Important concepts

1. Growth concerns the input
2. Constants are dropped
3. The worst case is _usually_ the way we measure

#### More examples

Count the loops

`o(n^2)`

```typescript
str.forEach(() => {
  str.forEach(() => {});
});
```

`o(n^3)`

```typescript
str.forEach(() => {
  str.forEach(() => {
    str.forEach(() => {});
  });
});
```

`o(n log n)`

Quicksort

`O(log n)`

Binary search trees

`O(sqrt(n))`

## Array Data Structures

Contiguous (unbreaking) memory space that contains a certain amount of bytes

```
[        ]
0        n
```

0 or more pieces of memory in a row

- They are fixed-size, contiguous memory chunks
- That means you cannot grow it
- There is no "insertAt" or push or pop. Doesn't mean you can't write those though

These are static arrays. There's not even `.length`. You have to implement these. Always has to be initialized with a size.

## Linear Search & Kata Setup
