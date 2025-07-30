---
title: DisposableStack.prototype.move()
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.move
sidebar: jsref
---

The **`move()`** method of {{jsxref("DisposableStack")}} instances creates a new `DisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed, without calling any disposers.

## Syntax

```js-nolint
move()
```

### Parameters

None.

### Return value

A new {{jsxref("DisposableStack")}} instance.

### Exceptions

- {{jsxref("ReferenceError")}}
  - : Thrown if the stack is already disposed.

## Description

The primary purpose of `move()` is to enable transferring responsibility for disposal out of the current scope. For example, your function can claim ownership of some resources and dispose them if an error occurs; if everything completes successfully, then you return these resources and transfer ownership to the caller.

When using `move()` to transfer ownership, caling `move()` should be the very last step in your control flow, because there will be no owner in between your code dropping ownership via `move()` and the caller picking up ownership from the return value.

```js example-good
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  // Drop ownership immediately before returning
  return disposer.move();
}

// Pick up ownership immediately after returning
using disposer = init();
```

```js example-bad
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  const newDisposer = disposer.move();
  // If someone adds code in between these lines and an error occurs,
  // there would be no owner to free resource1
  return newDisposer;
}

using disposer = init();
```

Also be cautious with the following pattern, although using the "good" pattern may be very awkward in many cases:

```js
function init() {
  using disposer = new DisposableStack();
  const resource1 = disposer.use(getResource1());
  // ...
  return { disposer: disposer.move(), resource1 };
}

const { resource1, ...rest } = init();
// If someone adds code in between these lines and an error occurs,
// there would be no owner to free resource1
using disposer = rest.disposer;
```

`move()` can also be used for conditional disposal in cases where you may sometimes not want to dispose the resources at all. For example:

```js
using disposer = new DisposableStack();
const server = disposer.use(makeServer());
await server.init();
if (server.ready) {
  // Successfully initialized server; it now should live through the rest
  // of the program. Drop its disposer and don't pick it up. It will no
  // longer be disposed at all.
  disposer.move();
}
// If we reach the end of the scope without running disposer.move(),
// then server isn't ready for any reason, and we dispose its resources
// by disposing the disposer.
```

## Examples

### Claiming ownership of a stack

```js
function consumeStack(stack) {
  using newStack = stack.move(); // newStack now owns the disposers
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack is disposed here immediately before the function exits
}

const stack = new DisposableStack();
console.log(stack.disposed); // false
consumeStack(stack);
console.log(stack.disposed); // true
```

### Allowing resources to be disposed within two code paths

The major use case of `move()` is when you have one or more resources which could either be disposed right here or could be persisted for later use. In this case, you can put the resources in a `DisposableStack` and then call `move()` when you need to persist the resources for later usage.

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  constructor() {
    // Create a DisposableStack that is disposed when the constructor exits.
    // If construction succeeds, we move everything out of `disposer` and into
    // `#disposables` to be disposed later.
    using disposer = new DisposableStack();

    // Create an IPC adapter around process.send/process.on("message").
    // When disposed, it unsubscribes from process.on("message").
    this.#channel = disposer.use(new NodeProcessIpcChannelAdapter(process));

    // Create a pseudo-websocket that sends and receives messages over
    // a NodeJS IPC channel.
    this.#socket = disposer.use(new NodePluginHostIpcSocket(this.#channel));

    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `disposer` and into `#disposables`.
    this.#disposables = disposer.move();

    // If construction failed, then `disposer` would be disposed before reaching
    // the line above. Event handlers would be removed, allowing `#channel` and
    // `#socket` to be GC'd.
  }

  [Symbol.dispose]() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    // Put `this.#disposables` into a `using` variable, so it is automatically
    // disposed when the function exits.
    using disposables = this.#disposables;

    // NOTE: we can free `#socket` and `#channel` here since they will be
    // disposed by the call to `disposables[Symbol.dispose]()`, below.
    // This isn't strictly a requirement for every disposable, but is
    // good housekeeping since these objects will no longer be useable.
    this.#socket = undefined;
    this.#channel = undefined;
    this.#disposables = undefined;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("DisposableStack")}}
- {{jsxref("DisposableStack.prototype.dispose()")}}
