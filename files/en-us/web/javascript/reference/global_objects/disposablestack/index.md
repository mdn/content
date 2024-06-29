---
title: DisposableStack
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack
page-type: javascript-class
browser-compat: javascript.builtins.DisposableStack
---

{{JSRef}}

The **`DisposableStack`** object represents a stack of [disposers](/en-US/docs/Web/JavaScript/Reference/Statements/using) to run when the stack itself is disposed. Disposer functions are executed in reverse order of registration, with strong error handling guarantees.

## Description

A `DisposableStack` is not exactly a "stack" in terms of its interface. It has several methods for pushing disposers to it, but it has no way to pop one disposer off. Rather, _all_ disposers are popped and executed one-by-one when the stack is disposed.

It is good practice to _not_ extract the resource acquisition expression to a separate statement, no matter how long the expression is. You should always wrap {{jsxref("DisposableStack/use", "use()")}} or {{jsxref("DisposableStack/adopt", "adopt()")}} around the resource acquisition expression to ensure that the resource is registered to the stack immediately.

```js example-good
using stack = new DisposableStack();
const handle = stack.use(new FileHandle("file.txt"));
```

```js example-bad
using stack = new DisposableStack();
const handle = new FileHandle("file.txt");
stack.use(handle);
```

Functionally, these two code snippets are equivalent. However, the first one is less error-prone because the resource is declared and registered in a single line. If someone puts more code between the second and third lines of the second snippet, an error could occur, causing the resource to leak.

## Constructor

- {{jsxref("DisposableStack/DisposableStack", "DisposableStack()")}}
  - : Creates a new `DisposableStack` object.

## Instance properties

These properties are defined on `DisposableStack.prototype` and shared by all `DisposableStack` instances.

- {{jsxref("Object/constructor", "DisposableStack.prototype.constructor")}}
  - : The constructor function that created the instance object. For `DisposableStack` instances, the initial value is the {{jsxref("DisposableStack/DisposableStack", "DisposableStack")}} constructor.
- {{jsxref("DisposableStack.prototype.disposed")}}
  - : Read-only. Returns `true` if the `DisposableStack` has been disposed, or `false` if not.
- `DisposableStack.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"DisposableStack"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("DisposableStack.prototype.adopt()")}}
  - : Registers a value that doesn't implement the disposable protocol to the stack by providing a custom disposer function.
- {{jsxref("DisposableStack.prototype.defer()")}}
  - : Takes a callback function to be called when the stack is disposed.
- {{jsxref("DisposableStack.prototype.dispose()")}}
  - : Disposes this stack by calling all disposers registered to it in reverse order of registration.
- {{jsxref("DisposableStack.prototype.move()")}}
  - : Creates a new `DisposableStack` instance that contains the same disposers as this stack, and then marks this stack as disposed (without calling any disposers).
- {{jsxref("DisposableStack.prototype.use()")}}
  - : Registers a value that implements the disposable protocol to the stack.
- [`DisposableStack.prototype[Symbol.dispose]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose)
  - : An alias for the `dispose()` method.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript resource management](/en-US/docs/Web/JavaScript/Guide/Resource_management)
- {{jsxref("Symbol.dispose")}}
- {{jsxref("Statements/using", "using")}}
- {{jsxref("AsyncDisposableStack")}}
