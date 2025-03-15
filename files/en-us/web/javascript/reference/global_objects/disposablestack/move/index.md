---
title: DisposableStack.prototype.move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
page-type: javascript-instance-method
browser-compat: javascript.builtins.DisposableStack.move
---

{{JSRef}}

The **`move()`** method of {{jsxref("DisposableStack")}} instances creates a new `DisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed (without calling any disposers).

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

The major use case of `move()` is when you have a list of resources in a `DisposableStack`, and it could either be disposed right here, or it could be persisted for later use. In this case, you can call `move()` when you need to persist the resources for later usage.

```js
// sync
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  constructor() {
    // Create a DisposableStack that is disposed when the constructor exits.
    // If construction succeeds, we move everything out of `stack` and into
    // `#disposables` to be disposed later.
    using stack = new DisposableStack();

    // Create an IPC adapter around process.send/process.on("message").
    // When disposed, it unsubscribes from process.on("message").
    this.#channel = stack.use(new NodeProcessIpcChannelAdapter(process));

    // Create a pseudo-websocket that sends and receives messages over
    // a NodeJS IPC channel.
    this.#socket = stack.use(new NodePluginHostIpcSocket(this.#channel));

    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `stack` and into `#disposables`.
    this.#disposables = stack.move();

    // If construction failed, then `stack` would be disposed before reaching
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
    // This isn't strictly a requirement for every Disposable, but is
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
