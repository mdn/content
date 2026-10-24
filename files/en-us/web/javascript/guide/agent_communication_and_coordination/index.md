---
title: Agent communication and coordination
slug: Web/JavaScript/Guide/Agent_communication_and_coordination
page-type: guide
sidebar: jssidebar
---

**Agents** are the JavaScript formalism for describing an autonomous JavaScript executor. Most JavaScript you write gets executed in a single thread, but you may create more threads with specific platform APIs such as [web workers](/en-US/docs/Web/API/Web_Workers_API). This guide looks at some general computer science concepts related to thread coordination and how they are embodied in JavaScript, and introduces the APIs for enabling cross-thread communication: {{domxref("Worker/postMessage", "postMessage()")}}, {{jsxref("SharedArrayBuffer")}}, and {{jsxref("Atomics")}}. You may find the [Typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide useful before reading this.

This is a guide article; to dive into the technical details of JavaScript agents, reach the [Execution model](/en-US/docs/Web/JavaScript/Reference/Execution_model) reference.

> [!NOTE]
> In this article, we will use "thread" and "agent" interchangeably. An "agent" may or may not have its own operating system thread. Because JavaScript is a highly-abstracted VM language, we will ignore the implementation details.

## Communication between two agents

The JavaScript language spec does not provide APIs for creating agents, getting a reference to another agent, or exchanging data between them. Although the concept of "workers" exists in both the web and in Node.js, their APIs are largely distinct. This guide uses [web workers](/en-US/docs/Web/API/Web_Workers_API).

### Creating agents

A parent agent creates and holds a reference to a child agent using the {{domxref("Worker/Worker", "Worker()")}} constructor:

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
```

The parent agent can be a window or another worker. For example, to run this example in a browser, you can reference `main.js` in an HTML file:

```html
<script src="main.js"></script>
```

And serve it using a local HTTP server.

### Communication via messages

Two agents communicate using _messages_. Messages are sent over _message channels_. The parent agent (`main.js` here) and its child agent (`worker.js` here) have a message channel by default, which routes to their default ports:

- `main.js` sends messages using {{domxref("Worker/postMessage", "worker.postMessage()")}}, and receives messages using the {{domxref("Worker/message_event", "message")}} event on the `worker` object.
- `worker.js` sends messages using {{domxref("DedicatedWorkerGlobalScope/postMessage", "self.postMessage()")}}, and receives messages using the {{domxref("DedicatedWorkerGlobalScope/message_event", "message")}} event on `self`.

However, this is limited to communication between the creator and the agent it creates. When you want any two agents to communicate, you need to use a dedicated {{domxref("MessageChannel")}}. You pass one of its {{domxref("MessagePort")}} objects to the worker over the default channel, and then exclusively use that port:

```js
// -- main.js --
const worker = new Worker("./worker.js", { type: "module" });
const { port1, port2 } = new MessageChannel();

// We'll explain the [port2] parameter soon
worker.postMessage({ hereIsYourPort: port2 }, [port2]);

// Mark the port as ready for receiving messages
port1.start();
```

```js
// -- worker.js --
// Use top-level await (only available inside modules) so code following it
// only evaluates when the port is received
const port = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("I'm expecting a dedicated port"));
        return;
      }
      resolve(port);
    },
    { once: true },
  );
});

// Mark the port as ready for receiving messages
port.start();
```

> [!NOTE]
> In all examples to follow, we'll assume that these lines exist at the top of `main.js` and `worker.js`. We won't repeat them.

Now, each agent can call {{domxref("MessagePort/postMessage", "postMessage()")}} and listen for {{domxref("MessagePort/message_event", "message")}} events on the `MessagePort` object.

Using message channels, you can also connect two agents that aren't in a parent-child relationship, such as two workers created by the same thread:

```js
const { port1, port2 } = new MessageChannel();
const worker1 = new Worker("./worker1.js", { type: "module" });
const worker2 = new Worker("./worker2.js", { type: "module" });

worker1.postMessage({ hereIsYourPort: port1 }, [port1]);
worker2.postMessage({ hereIsYourPort: port2 }, [port2]);
```

As a practical example, we implement a number-guessing game. `main.js` comes up with a secret number, and `worker.js` tries to guess it. Each time, `main.js` tells `worker.js` whether the guess is correct, too low, or too high, and the worker adjusts its guess. Here's how `main.js` can receive guesses from the worker using {{domxref("MessageEvent.data")}}, and provide feedback using `port1.postMessage()`:

```js
// -- main.js --
const secretNumber = 63;

port1.addEventListener("message", (e) => {
  const workerGuess = e.data;
  console.log("Worker guessed:", workerGuess);
  if (workerGuess < secretNumber) {
    port1.postMessage("Too low");
  } else if (workerGuess > secretNumber) {
    port1.postMessage("Too high");
  } else {
    port1.postMessage("Correct");
    console.log("Worker successfully guessed the secret number!");
  }
});
```

And here's how the worker can submit guesses to `main.js` and adjust based on the feedback from it:

```js
// -- worker.js --
let low = 0;
let high = 100;
let lastGuess = Math.floor((low + high) / 2);

// First guess submitted immediately after initialization
port.postMessage(lastGuess);
port.addEventListener("message", (e) => {
  const feedback = e.data;
  if (feedback === "Correct") {
    console.log("Yay");
    return;
  }
  if (feedback === "Too low") {
    low = lastGuess + 1;
  } else if (feedback === "Too high") {
    high = lastGuess - 1;
  }
  if (low > high) {
    throw new Error(
      "Sorry, the feedback from main.js is inconsistent and I suspect main is cheating",
    );
  }
  lastGuess = Math.floor((low + high) / 2);
  port.postMessage(lastGuess);
});

port.start();
```

If you run this in a browser, both the worker and the main thread will output to the same DevTools console, so you will see the output as:

```plain
Worker guessed: 50                              main.js
Worker guessed: 75                              main.js
Worker guessed: 62                              main.js
Worker guessed: 68                              main.js
Worker guessed: 65                              main.js
Worker guessed: 63                              main.js
Worker successfully guessed the secret number!  main.js
Yay                                             worker.js
```

### Sending messages by copying or transferring

You can pass many kinds of JavaScript values to `postMessage`. In the number-guessing example, we pass numbers for guesses, strings for feedback, and objects for the `MessagePort` object. By default, each agent has its own [memory space](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_execution_model), so when an object is sent from one heap to another, a copy of it is created in the target heap. The copy uses the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), which only supports a fixed set of data types. When unsupported objects are attempted to be copied, a {{domxref("DOMException")}} is thrown.

![Two agents, an HTML page and a worker, each contain a heap with one object. An arrow labeled postMessage() points from the object in the page's heap to the object in the worker's heap.](message-copy-diagram.svg)

Copying an object allows the sender and the recipient to independently manipulate the object without affecting the other. The downside is that the object is re-constructed in the recipient's scope, which means:

- It's not tethered to the original creator, so {{domxref("MessagePort")}} can't work (indeed, if you read the list of [serializable objects](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#supported_types), you can see that `MessagePort` is not listed here).
- There are two copies of the same data, which increases memory usage.

To solve these problems, instead of copying objects, you can pass them by _transferring_ instead. Transferring an object uses a slightly different algorithm for constructing it in the target realm, and marks it as _detached_ in the source realm. The source object still exists, but its transferred resource is now available through the new object in the target realm:

![An HTML page and a worker each contain a heap. The original object in the page's heap is gray with a dashed border and labeled Detached. An arrow labeled Transfer points to a green object in the worker's heap.](message-transfer-diagram.svg)

To transfer an object, you still pass it (or other objects containing it) to `postMessage()`. The second parameter of `postMessage()` takes a list of objects inside the message that should be transferred instead of copied. This explains the following line in the number guessing game:

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

The whole object `{ hereIsYourPort: port2 }` is copied as usual and can be used in both agents (however, it's not assigned to a variable in the sender, so it will be immediately dropped). The `port2` resource is taken over by the new object in the worker agent, while the source instance is marked as detached. The effects of detachment depend on the object type, but generally operations either throw an error or do nothing. For a `MessagePort`, the original object loses its connection to the other port.

Other than `MessagePort`, another widely-used transferrable object is {{jsxref("ArrayBuffer")}}, which happens to be both copyable and transferrable. When an `ArrayBuffer` is copied, the source and recipient each hold an independent copy, and mutations on one side do not affect the other. When an `ArrayBuffer` is transferred, it is again marked as _detached_. A detached array buffer still exists as an object, but no longer provides access to the underlying memory. This means that:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} becomes 0 (in both the buffer and the associated typed array views).
- Methods, such as {{jsxref("ArrayBuffer/resize", "resize()")}} and {{jsxref("ArrayBuffer/slice", "slice()")}}, throw a {{jsxref("TypeError")}} when invoked. The associated typed array views' methods also throw a `TypeError`.

You can check whether an `ArrayBuffer` is detached by its {{jsxref("ArrayBuffer/detached", "detached")}} property.

In pure JavaScript, you can also transfer the ownership of memory from one `ArrayBuffer` to another using its {{jsxref("ArrayBuffer/transfer", "transfer()")}} or {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} method.

```js
const buffer1 = new ArrayBuffer(1024);
console.log(buffer1.detached); // false
console.log(buffer1.byteLength); // 1024

const buffer2 = buffer1.transfer();
console.log(buffer1.detached); // true
console.log(buffer1.byteLength); // 0
console.log(buffer2.byteLength); // 1024
```

## Sharing memory with SharedArrayBuffer

Other than copying and transferring, there's a third model of data passing: _sharing_. In sharing, both sides hold an object that shares the underlying memory. Memory sharing is available only to the {{jsxref("SharedArrayBuffer")}} object. The sender and recipient still hold distinct instances of the `SharedArrayBuffer` object, but they represent pointers to the same memory span and mutations on one side are visible to the other side.

![An HTML page and a worker each contain a heap with a SharedArrayBuffer object. A dashed, double-headed arrow labeled Sharing connects the objects, which refer to the same underlying memory.](message-sharing-diagram.svg)

### Enabling shared memory

Memory sharing isn't inherently risky; however, it allows implementing a high-precision clock (we won't go into the details here), which was revealed to enable [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>) attacks. In response to this, browsers restrict shared memory access to [cross-origin isolated](/en-US/docs/Web/API/Window/crossOriginIsolated) websites only.

> [!NOTE]
> If you are using Node.js for this tutorial (which means you had been adapting the previous examples to Node-specific APIs), you can ignore this section, because shared memory is available by default.

If you are using a local HTTP server to experiment with these examples, you must make your website cross-origin isolated, for example by sending the following headers:

```http
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

After you do this, you can do the following checks to confirm that shared memory is enabled:

```js
console.log(window.crossOriginIsolated); // true
console.log("SharedArrayBuffer" in window); // true
```

Now you can share memory, but only within an [agent cluster](/en-US/docs/Web/JavaScript/Reference/Execution_model#agent_clusters_and_memory_sharing)—you can't share memory with agents outside of its cluster even when they have a message channel. A window and its dedicated worker are in the same cluster, so our examples will work as normal.

### Using a shared buffer

The `SharedArrayBuffer` interface is mostly identical to `ArrayBuffer`. You can construct a `SharedArrayBuffer`, which allocates the specified number of bytes.

```js
const sab = new SharedArrayBuffer(1024);
```

You can read and write the memory contents by constructing a [view](/en-US/docs/Web/JavaScript/Guide/Typed_arrays#views), such as a {{jsxref("Int8Array")}}.

```js
const int8 = new Int8Array(sab);
int8[0] = 63;
```

You can create a [slice](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice) of the SAB, which allocates a new shared memory span and copies its contents.

```js
const sab2 = sab.slice();
// Entire sab is copied
const int82 = new Int8Array(sab2);
console.log(int82[0]); // 63
```

There are several differences between `SharedArrayBuffer` and `ArrayBuffer` (other than memory-sharing behavior, of course):

- Resizable SABs can only be _grown_, while normal resizable buffers can both be grown and shrunk.
- SABs cannot be transferred/detached.

To create a resizable/growable SAB, pass the `maxByteLength` option specifying the maximum length it's allowed to grow to. Then, you can use [`grow()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow).

```js
const sabResizable = new SharedArrayBuffer(1024, { maxByteLength: 2048 });
console.log(sabResizable.byteLength); // 1024

sabResizable.grow(2000);
console.log(sabResizable.byteLength); // 2000
```

### Posting SharedArrayBuffers

`SharedArrayBuffer` objects are always shared when passed to `postMessage()` (as long as the security requirements are met); no extra options are necessary. Both sides can mutate this memory span and observe the other side's mutations. You can also pass a view of a `SharedArrayBuffer` directly—the view and the `buffer` object are both copied, but the underlying memory span is still shared.

In the examples to follow, we'll share a buffer between `main.js` and `worker.js`, which is established together with the message port. Replace the line in `main.js`:

```js
worker.postMessage({ hereIsYourPort: port2 }, [port2]);
```

With:

```js
const sab = new SharedArrayBuffer(1024);
worker.postMessage({ hereIsYourPort: port2, andHereIsOurSAB: sab }, [port2]);
```

And inside `worker.js`, replace the initial reception code with:

```js
const { port, sab } = await new Promise((resolve, reject) => {
  self.addEventListener(
    "message",
    (e) => {
      const port = e.data.hereIsYourPort;
      if (!(port instanceof MessagePort)) {
        reject(new Error("I'm expecting a dedicated port"));
        return;
      }
      const sab = e.data.andHereIsOurSAB;
      if (!(sab instanceof SharedArrayBuffer)) {
        reject(new Error("I'm expecting a shared array buffer"));
        return;
      }
      resolve({ port, sab });
    },
    { once: true },
  );
});
```

To verify that this setup works, try coordinating a short write-read exchange using a message. The worker immediately updates the `SharedArrayBuffer` and posts a message to the main thread. The main thread receives that message and reads the new value. We'll talk about more efficient communications later.

```js
// -- main.js --
const int8 = new Int8Array(sab);

port1.addEventListener("message", (e) => {
  console.log(int8[0]); // 63
});
```

```js
// -- worker.js --
const int8 = new Int8Array(sab);
int8[0] = 63;
port.postMessage("I've modified the memory. Please check");
```

## Accessing shared memory with Atomics

In the example above, we use a message to force the following order:

1. Worker writes to memory
2. Worker posts message
3. Main agent receives message and runs event listener
4. Main agent reads memory

The problem with using event-based coordinations is that events are asynchronous: the time between steps 2 and 3 is up to the discretion of the browser's event loop. In this case, you might as well just pass values back and forth without going through a shared memory. The advantage of shared memory is exactly that you can (mostly) communicate synchronously, without yielding the job queue to other async tasks.

In a single agent, the [run-to-completion](/en-US/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) semantics ensures well-behaving effect ordering with respect to multiple synchronous jobs:

```js
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
```

Here, the overall order is always `i += 1; console.log(i); i += 1; console.log(i);` and never `i += 1; i += 1; console.log(i); console.log(i);`.

Such things cannot be said when the synchronous jobs belong to different agents. In the example below, the worker sends the main agent a `started` message and immediately starts incrementing the shared integer in a loop. Upon receipt of the message, the main agent runs the same loop at the same time. When the worker finishes, it sends a `finished` message, and the main agent logs the final value.

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      i[0] += 1;
    }
  } else if (data === "finished") {
    console.log(i[0]); // Usually less than 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  i[0] += 1;
}
port.postMessage("finished");
```

Because messages on a port are delivered in order, the `finished` handler always runs after the main agent's own loop has completed, so both agents have finished counting by the time the value is logged. Still, the logged value is probably less than `20000000`, and it differs between runs. This is because `i[0] += 1` is not a single step: it reads `i[0]`, adds 1, and writes the result back. There are at least two orders possible; the first one, which has no race, is:

1. Agent 1 reads `i[0]` as `currentI`
2. Agent 1 writes `i[0] = currentI + 1`
3. Agent 2 reads `i[0]` as `currentI + 1`
4. Agent 2 writes `i[0] = currentI + 2`

The second one, which has race, is:

1. Agent 1 reads `i[0]` as `currentI`
2. Agent 2 reads `i[0]` as `currentI`
3. Agent 1 writes `i[0] = currentI + 1`
4. Agent 2 writes `i[0] = currentI + 1`

To solve this problem, we must have a mechanism for ensuring execution order across agents, such that a statement in agent 2 is not allowed to execute until a statement in agent 1 finishes and its effect becomes observable. Methods from the {{jsxref("Atomics")}} namespace provide this capability.

### Reading and writing

The most basic `Atomics` primitives are {{jsxref("Atomics.load()")}} and {{jsxref("Atomics.store()")}}, which read and write at a particular index, respectively. They can be used with any signed or unsigned integer arrays (except `Uint8ClampedArray`).

The problem with the index read/write syntax is that the effect of a write is not required to be observable immediately to other agents. Consider the following indexed read/write:

```js
// -- main.js --
const a = new Int32Array(sab);
a[0] = 63;
console.log("Main:", a[1]);
```

```js
// -- worker.js --
const a = new Int32Array(sab);
a[1] = 15;
console.log("Worker:", a[0]);
```

Theoretically, no matter how these operations are ordered, as long as each agent executes its code in order, at least one log entry must be non-0. However, in reality, both logs may print 0. It may arise from the following seemingly-impossible ordering:

1. `main.js` reads `a[1]` as `0`.
2. `worker.js` reads `a[0]` as `0`.
3. `main.js` writes `a[0] = 63`.
4. `worker.js` writes `a[1] = 15`.
5. `main.js` and `worker.js` execute their `console.log` using already-retrieved `a[0]` and `a[1]` values, respectively.

Note that, within each single agent, this ordering perfectly preserves the sequential-execution guarantees you would expect. For example, for `main.js`, the `a[0] = 63` write is never read back, so it's perfectly fine to reorder it after the `a[1]` read, even if a line-by-line JavaScript interpreter would not do that. This kind of instruction reordering can happen in both the JavaScript compiler and the CPU in order to optimize consecutive memory operations, but may cause problems with multiple agents.

With `Atomics.load()` and `Atomics.store()`, you explicitly tell the compiler and the CPU that such reordering is not permitted, and the order of memory read/write must be consistent with the order of JavaScript code execution.

```js
// -- main.js --
const a = new Int32Array(sab);
Atomics.store(a, 0, 63);
console.log("Main:", Atomics.load(a, 1));
```

```js
// -- worker.js --
const a = new Int32Array(sab);
Atomics.store(a, 1, 15);
console.log("Worker:", Atomics.load(a, 0));
```

Here, although you may still see 0 in one of the logs (because, for example, the main `load` happens before the worker `store`), it's guaranteed that they can never be both 0.

`Atomics.load` and `Atomics.store` essentially create a "synchronization point" between two threads, much like a `message` event. This can help establish ordering between other non-atomic operations. For example:

```js
// -- main.js --
a[0] = 63;
// Set a "Ready" flag in a[1]; assume initially it's not 1.
Atomics.store(a, 1, 1);
```

```js
// -- worker.js --
// Spin until a[1] receives the "Ready" flag
while (Atomics.load(a, 1) !== 1);
console.log(a[0]); // 63
```

> [!NOTE]
> Within a single agent, the `worker.js` code would definitely be a bug because it's not possible for `a[1]` to have changed in the loop if the loop is never updating the value. Many synchronous infinite loops only make sense with shared memory!
>
> In [Waiting and notifying](#waiting_and_notifying), we'll see how to make this code slightly more performant and less like a bug.

Within `main.js`, writing `63` happens before storing the ready flag. Within `worker.js`, the load that observes the ready flag happens before reading `a[0]`. Because that load observes the value written by the atomic store, they synchronize with each other. Together, these relationships establish a happens-before chain from writing `63` to reading `a[0]`. Therefore, assuming no other writes to `a[0]`, the read is guaranteed to return `63`, even though the accesses to `a[0]` are non-atomic.

### Atomic updates

The next set of operations directly replace several [compound assignment](/en-US/docs/Web/JavaScript/Reference/Operators#assignment_operators) operators. As we already demonstrated, the `+=` operator is not atomic: other instructions may execute between the read and the write, causing the final write to not write the value you expect. To fix this, you can replace it with {{jsxref("Atomics.add()")}}:

```js
// -- main.js --
const i = new Int32Array(sab, 0, 1);

port1.addEventListener("message", ({ data }) => {
  if (data === "started") {
    for (let n = 0; n < 10_000_000; n++) {
      Atomics.add(i, 0, 1);
    }
  } else if (data === "finished") {
    console.log(i[0]); // Guaranteed 20000000
  }
});
```

```js
// -- worker.js --
const i = new Int32Array(sab, 0, 1);

port.postMessage("started");
for (let n = 0; n < 10_000_000; n++) {
  Atomics.add(i, 0, 1);
}
port.postMessage("finished");
```

The only difference from the previous data-race example is that we've replaced both `i[0] += 1` statements with `Atomics.add(i, 0, 1)`. But now, not only does it have the same "sequentially consistent" guarantee of `load`/`store`, but each block of read-modify-write sequence is also guaranteed to be atomic, so there are two atomic blocks that can be freely ordered but never interleaved:

1. Atomic block:
   1. Agent 1 reads `i[0]` as `currentI`
   2. Agent 1 writes `i[0] = currentI + 1`
2. Atomic block:
   1. Agent 2 reads `i[0]` as `currentI + 1`
   2. Agent 2 writes `i[0] = currentI + 2`

A few other compound assignment operators have their respective `Atomics` methods:

| Operator                                                                      | Method                      |
| ----------------------------------------------------------------------------- | --------------------------- |
| [`+=`](/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment)    | {{jsxref("Atomics.add()")}} |
| [`-=`](/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment) | {{jsxref("Atomics.sub()")}} |
| [`&=`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) | {{jsxref("Atomics.and()")}} |
| [`\|=`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) | {{jsxref("Atomics.or()")}}  |
| [`^=`](/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) | {{jsxref("Atomics.xor()")}} |

If your operation does not correspond to one of the method above, you can still use the general {{jsxref("Atomics.compareExchange()")}} method instead. This method is a replacement for the following sequence:

```js
const oldValue = array[index];
if (oldValue === expectedValue) {
  array[index] = newValue;
}
return oldValue;
```

For example, if you have an operation `array[index] *= multiplier`, you can make it atomic using the following:

```js
function atomicMultiply(array, index, multiplier) {
  let oldValue = Atomics.load(array, index);

  while (true) {
    const observed = Atomics.compareExchange(
      array,
      index,
      oldValue,
      oldValue * multiplier,
    );

    if (observed === oldValue) {
      return oldValue;
    }

    oldValue = observed;
  }
}
```

This function spins in a loop. Each time, it tries to write `oldValue * multiplier`, on the condition that at the time of its atomic block, the value at that index is still `oldValue`. If the value has changed, it re-attempts with the new `oldValue`.

There's also an unconditional exchange method, {{jsxref("Atomics.exchange()")}}. This method is a replacement for the following sequence:

```js
const oldValue = array[index];
array[index] = newValue;
return oldValue;
```

Use this method when you want to reset some memory while obtaining its value at the time of reset. For example, it can be used for a clock:

```js
// -- worker.js --
while (true) {
  Atomics.add(a, 0, 1);
}
```

```js
// -- main.js --
const ticksSinceLastCheck = Atomics.exchange(a, 0, 0);
// ticksSinceLastCheck records how many times the worker has spun.
```

If you split this into a `load` and a `store` operation, then the worker may have performed another `add` in the meantime, which is silently dropped.

## Waiting and notifying

In the examples above, wherever an agent is waiting on another agent to complete its operation, we use an infinite loop, like the `while (Atomics.load(a, 1) !== 1);` example. This is called [busy waiting](https://en.wikipedia.org/wiki/Busy_waiting). Essentially, it blocks the entire thread from executing other jobs, until some other thread writes the value it expects. You can make this slightly more efficient by calling {{jsxref("Atomics.pause()")}} inside the `while` loop. This method may tell the CPU to allocate fewer resources because it's just waiting and not actually doing computation, without asking the CPU to be immediately yielded to other threads.

```js
// -- worker.js --
while (Atomics.load(a, 1) !== 1) {
  Atomics.pause();
}
```

Alternatively, you can change it to an explicit notification-based system while still keeping it sync. The {{jsxref("Atomics.wait()")}} and {{jsxref("Atomics.notify()")}} methods allow you to do so—the waiting thread doesn't have to keep checking the value; the writing thread notifies it whenever the writing is done.

> [!NOTE]
> Unlike the previously-introduced methods, `wait()`, `waitAsync()`, and `notify()` can only operate on `Int32Array` and `BigInt64Array`.

Here, the `worker.js` thread is halted if `a[1] === 0`.

```js
// -- worker.js --
Atomics.wait(a, 1, 0);
console.log(a[0]);
```

It stays halted until another thread—in our case, `main.js`—notifies it:

```js
// -- main.js --
a[0] = 63;
Atomics.store(a, 1, 1);
Atomics.notify(a, 1);
```

Some important notes to call out:

- `Atomics.wait()` also blocks the thread from executing other jobs. On the web, the main thread is not allowed to be blocked, so calling `Atomics.wait` throws an error there.
- `Atomics.wait()` returns whenever it has been notified, regardless of whether `a[1]` has actually changed.
- Other than checking the initial value, the memory index that `store` and `wait` operate on is entirely arbitrary: they do not care what that value actually represents. The index serves as an "ID" of the waiter list. The initial flag check ensures that if the worker `wait` happens after `notify` is already called, the `wait` continues immediately instead of sleeping forever, so you should set and only set `a[1]` to `1` (representing "Ready" in our case) immediately before calling `notify`.

You can also specify a `timeout`, after which the thread resumes despite not receiving a notification:

```js
// -- worker.js --
const result = Atomics.wait(a, 1, 0, 100); // Wait about 100ms
if (result === "timed-out") {
  // Decide what to do here: wait again? Throw an error?
  // Change to an asynchronous wait instead?
} else {
  // result can be either "not-equal" - i.e., a[1] is already "Ready"
  // without waiting or "ok" - i.e., some other thread notified it
  console.log(a[0]);
}
```

The main thread in browsers is not allowed to be blocked. The {{jsxref("Atomics.waitAsync()")}} method provides the same functionality, but in the form of a promise, thus allowing other asynchronous jobs to proceed in the meantime.

```js
// -- worker.js --
const result = Atomics.waitAsync(a, 1, 0, 100); // Wait about 100ms
if (!result.async) {
  // Already ready
  // (Note: because timeout is not 0, result.value is always "not-equal")
  console.log(a[0]);
} else {
  const resultValue = await result.value;
  if (resultValue === "ok") {
    console.log(a[0]);
  } else {
    // resultValue is "timed-out" here; decide what to do
  }
}
```

You must carefully weigh the impacts of the three waiting mechanisms:

- Busy waiting blocks the thread without yielding the CPU. When it finishes, the CPU can immediately resume without [context switching](https://en.wikipedia.org/wiki/Context_switch), but while it's spinning, this core is occupied and cannot take other jobs (although the operating system may decide to schedule in some other thread if the current thread has used the CPU for too long). This is the fastest when you expect the wait to be very short, even shorter than the time of two context switches.
- Synchronous `Atomics.wait()` blocks the thread but yields the CPU. The CPU core can take other threads and may need to context switch when this thread continues. This is the most efficient when you expect the wait to be longer than two context switches and it might be better to let other threads use the CPU in the meantime, but you prefer to keep the code synchronous.
- Asynchronous `Atomics.waitAsync()` uses normal promise semantics: the code that waits for its completion comes back as another job in the agent, but other code in the same thread keeps executing. This is useful when the current thread has other jobs that are equally important and must proceed in the meantime, such as the main thread which needs to render the page and respond to user interactions.

## Useful shared memory patterns

Let's look at a few common techniques and concepts for ensuring the performance and correctness of multi-threading.

### Locks/Mutexes

A [_lock_](<https://en.wikipedia.org/wiki/Lock_(computer_science)>), also called a _mutex_ (for "Mutual exclusion"), is a mechanism where while a thread holds the lock, no other thread can operate on the same memory. This is one way to ensure atomic accesses, because the following is guaranteed to be an atomic block without interleaving effects from other threads:

1. The agent acquires a lock
2. The agent reads a value
3. The agent writes a value
4. The agent does other stuff...
5. The agent releases the lock

In fact, even something as simple as `uint16[0] = 1;` (or `Atomics.store(uint16, 0, 1)`) might need a lock! If you think about it, an index at an `Uint16Array` is comprised of two bytes, and CPUs operate on bytes, so theoretically, it needs to do the following:

```js
const firstByte = uint8[0]; // uint8 is the same memory span viewed as Uint8Array
const secondByte = uint8[1];

return (firstByte <<< 8) + secondByte;
```

If something else writes to `uint8[1]` between the first and second statements, the final read is no longer a coherent `uint16` value. This is called a _torn read_. No JavaScript operation—not even the non-atomic read/write—ever tears a read or write, because they either puts a lock on the bytes of interest, or use native CPU instructions that read/write multiple bytes at once. Locking involves two extra steps (acquisition and release) and is usually much slower than native instructions; whether the former or the latter is used depends on the operating system, CPU architecture, JavaScript interpreter, etc., as well as the byte size of the read/write. To know if a read/write on a specific byte size in your current environment requires a lock, use {{jsxref("Atomics.isLockFree()")}}.

```js
Atomics.isLockFree(4); // true: all platforms have tear-free 4-byte I/O
Atomics.isLockFree(7); // false: no platform provides native instructions for this
```

### Spinlocking

### Futexes

A [_futex_](https://en.wikipedia.org/wiki/Futex) is short for a "fast user-space mutex", but somewhat confusingly, it is not a mutex (although it can be used to implement one).

### Deadlocks

## See also

- [JavaScript execution model](/en-US/docs/Web/JavaScript/Reference/Execution_model)
- [Web workers API](/en-US/docs/Web/API/Web_Workers_API)
- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Atomics")}}
- {{domxref("Window.postMessage()")}}
