---
title: Memory Management
slug: Web/JavaScript/Memory_Management
tags:
  - Garbage collection
  - Guide
  - JavaScript
  - Performance
  - memory
---
{{JsSidebar("Advanced")}}

Low-level languages like C, have manual memory management primitives such as [malloc()](https://pubs.opengroup.org/onlinepubs/009695399/functions/malloc.html) and [free()](https://en.wikipedia.org/wiki/C_dynamic_memory_allocation#Overview_of_functions). In contrast, JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (_garbage collection_). This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management.

## Memory life cycle

Regardless of the programming language, the memory life cycle is pretty much always the same:

1. Allocate the memory you need
2. Use the allocated memory (read, write)
3. Release the allocated memory when it is not needed anymore

The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

### Allocation in JavaScript

#### Value initialization

In order to not bother the programmer with allocations, JavaScript will automatically allocate memory when values are initially declared.

```js
const n = 123; // allocates memory for a number
const s = 'azerty'; // allocates memory for a string

const o = {
  a: 1,
  b: null,
}; // allocates memory for an object and contained values

// (like object) allocates memory for the array and
// contained values
const a = [1, null, 'abra'];

function f(a) {
  return a + 2;
} // allocates a function (which is a callable object)

// function expressions also allocate an object
someElement.addEventListener('click', () => {
  someElement.style.backgroundColor = 'blue';
}, false);
```

#### Allocation via function calls

Some function calls result in object allocation.

```js
const d = new Date(); // allocates a Date object

const e = document.createElement('div'); // allocates a DOM element
```

Some methods allocate new values or objects:

```js
const s = 'azerty';
const s2 = s.substr(0, 3); // s2 is a new string
// Since strings are immutable values,
// JavaScript may decide to not allocate memory,
// but just store the [0, 3] range.

const a = ['ouais ouais', 'nan nan'];
const a2 = ['generation', 'nan nan'];
const a3 = a.concat(a2);
// new array with 4 elements being
// the concatenation of a and a2 elements.
```

### Using values

Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.

### Release when the memory is not needed anymore

The majority of memory management issues occur at this phase. The most difficult aspect of this stage is determining when the allocated memory is no longer needed.

Low-level languages require the developer to manually determine at which point in the program the allocated memory is no longer needed and to release it.

Some high-level languages, such as JavaScript, utilize a form of automatic memory management known as [garbage collection](<https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)>) (GC). The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it. This automatic process is an approximation since the general problem of determining whether or not a specific piece of memory is still needed is [undecidable](https://en.wikipedia.org/wiki/Decidability_%28logic%29).

## Garbage collection

As stated above, the general problem of automatically finding whether some memory "is not needed anymore" is undecidable. As a consequence, garbage collectors implement a restriction of a solution to the general problem. This section will explain the concepts that are necessary for understanding the main garbage collection algorithms and their respective limitations.

### References

The main concept that garbage collection algorithms rely on is the concept of _reference_. Within the context of memory management, an object is said to reference another object if the former has access to the latter (either implicitly or explicitly). For instance, a JavaScript object has a reference to its [prototype](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) (implicit reference) and to its properties values (explicit reference).

In this context, the notion of an "object" is extended to something broader than regular JavaScript objects and also contain function scopes (or the global lexical scope).

### Reference-counting garbage collection

This is the most naive garbage collection algorithm. This algorithm reduces the problem from determining whether or not an object is still needed to determining if an object still has any other objects referencing it. An object is said to be "garbage", or collectible if there are zero references pointing to it.

#### Example

```js
let x = {
  a: {
    b: 2
  }
};
// 2 objects are created. One is referenced by the other as one of its properties.
// The other is referenced by virtue of being assigned to the 'x' variable.
// Obviously, none can be garbage-collected.

let y = x;      // The 'y' variable is the second thing that has a reference to the object.

x = 1;          // Now, the object that was originally in 'x' has a unique reference
                //   embodied by the 'y' variable.

let z = y.a;    // Reference to 'a' property of the object.
                //   This object now has 2 references: one as a property,
                //   the other as the 'z' variable.

y = 'mozilla';  // The object that was originally in 'x' has now zero
                //   references to it. It can be garbage-collected.
                //   However its 'a' property is still referenced by
                //   the 'z' variable, so it cannot be freed.

z = null;       // The 'a' property of the object originally in x
                //   has zero references to it. It can be garbage collected.
```

#### Limitation: Circular references

There is a limitation when it comes to circular references. In the following example, two objects are created with properties that reference one another, thus creating a cycle. They will go out of scope after the function call has completed. At that point they become unneeded and their allocated memory should be reclaimed. However, the reference-counting algorithm will not consider them reclaimable since each of the two objects has at least one reference pointing to them, resulting in neither of them being marked for garbage collection. Circular references are a common cause of memory leaks.

```js
function f() {
  const x = {};
  const y = {};
  x.a = y;        // x references y
  y.a = x;        // y references x

  return 'azerty';
}

f();
```

Internet Explorer 6 and 7 are known to have reference-counting garbage collectors, which have caused memory leaks with circular references. No modern engine uses reference-counting for garbage collection anymore.

### Mark-and-sweep algorithm

This algorithm reduces the definition of "an object is no longer needed" to "an object is unreachable".

This algorithm assumes the knowledge of a set of objects called _roots._ In JavaScript, the root is the global object. Periodically, the garbage collector will start from these roots, find all objects that are referenced from these roots, then all objects referenced from these, etc. Starting from the roots, the garbage collector will thus find all _reachable_ objects and collect all non-reachable objects.

This algorithm is an improvement over the previous one since an object having zero references is effectively unreachable. The opposite does not hold true as we have seen with circular references.

As of 2012, all modern browsers ship a mark-and-sweep garbage-collector. All improvements made in the field of JavaScript garbage collection (generational/incremental/concurrent/parallel garbage collection) over the last few years are implementation improvements of this algorithm, but not improvements over the garbage collection algorithm itself nor its reduction of the definition of when "an object is no longer needed".

#### Cycles are no longer a problem

In the first example above, after the function call returns, the two objects are no longer referenced by any resource that is reachable from the global object. Consequently, they will be found unreachable by the garbage collector and have their allocated memory reclaimed.

#### Limitation: Releasing memory manually

There are times when it would be convenient to manually decide when and what memory is released. In order to release the memory of an object, it needs to be made explicitly unreachable.

As of 2019, it is not possible to explicitly or programmatically trigger garbage collection in JavaScript.

## Node.js

Node.js offers additional options and tools for configuring and debugging memory issues that may not be available for JavaScript executed within a browser environment.

#### V8 Engine Flags

The max amount of available heap memory can be increased with a flag:

```bash
node --max-old-space-size=6000 index.js
```

We can also expose the garbage collector for debugging memory issues using a flag and the [Chrome Debugger](https://nodejs.org/en/docs/guides/debugging-getting-started/):

```bash
node --expose-gc --inspect index.js
```

#### See also

- [Kangax article on how to register event handler and avoid memory leaks (2010)](https://docs.microsoft.com/en-us/previous-versions/msdn10/ff728624(v=msdn.10))
