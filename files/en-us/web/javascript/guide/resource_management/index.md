---
title: JavaScript resource management
slug: Web/JavaScript/Guide/Resource_management
page-type: guide
sidebar: jssidebar
---

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}

This guide talks about how to do _resource management_ in JavaScript. Resource management is not exactly the same as [memory management](/en-US/docs/Web/JavaScript/Memory_management), which is a more advanced topic and usually handled automatically by JavaScript. Resource management is about managing resources that are _not_ automatically cleaned up by JavaScript. Sometimes, it's okay to have some unused objects in memory, as they don't interfere with application logic, but resource leaks often lead to things not working, or a lot of excess memory usage.

> [!NOTE]
> While memory management and resource management are two separate topics, sometimes you can hook into the memory management system to do resource management, as a last resort. For example, if you have a JavaScript object representing a handle of an external resource, you can create a {{jsxref("FinalizationRegistry")}} to clean up the resource when the handler is garbage collected. However, there is no guarantee that the finalizer will run, so it's not a good idea to rely on it for critical resources.

## Problem

Let's first look at a few examples of resources that need to be managed:

- **File handles**: A file handle is used to read and write bytes in a file. When you are done with it, you must call [`filehandle.close()`](https://nodejs.org/api/fs.html#filehandleclose), otherwise the file will remain open, even when the JS object is no longer accessible. As the linked Node.js docs say:

  > If a `<FileHandle>` is not closed using the `filehandle.close()` method, it will try to automatically close the file descriptor and emit a process warning, helping to prevent memory leaks. Please do not rely on this behavior because it can be unreliable and the file may not be closed. Instead, always explicitly close `<FileHandle>`s. Node.js may change this behavior in the future.

- **Network connections**: Some connections, such as {{domxref("WebSocket")}} and {{domxref("RTCPeerConnection")}}, need to be closed if no messages are transmitted. Otherwise, the connection remains open, and connection pools are often very limited in size.
- **Stream readers**: If you don't call {{domxref("ReadableStreamDefaultReader.releaseLock()")}}, the stream will be locked and does not permit another reader to consume it.

Here is one concrete example, using a readable stream:

```js
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

async function readUntilB(stream) {
  const reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== "b") {
    console.log(chunk);
    chunk = await reader.read();
  }
  // We forgot to release the lock here
}

readUntilB(stream).then(() => {
  const anotherReader = stream.getReader();
  // TypeError: ReadableStreamDefaultReader constructor can only
  // accept readable streams that are not yet locked to a reader
});
```

Here, we have a stream that emits three chunks of data. We read from the stream until we find the letter "b". When `readUntilB` returns, the stream is only partially consumed, so we should be able to continue to read from it using another reader. However, we forgot to release the lock, so although `reader` is no longer available, the stream is still locked and we cannot create another reader.

The solution in this case is straightforward: call `reader.releaseLock()` at the end of `readUntilB`. But, a few issues still remain:

- Inconsistency: different resources have different ways to release them. For example, we have `close()`, `releaseLock()`, `disconnect()`, etc.
- Error handling: what happens if the `reader.read()` call fails? Then `readUntilB` would terminate and never get to the `reader.releaseLock()` call. We can fix this using {{jsxref("Statements/try...catch", "try...finally")}}:

  ```js
  async function readUntilB(stream) {
    const reader = stream.getReader();
    try {
      let chunk = await reader.read();

      while (!chunk.done && chunk.value !== "b") {
        console.log(chunk);
        chunk = await reader.read();
      }
    } finally {
      reader.releaseLock();
    }
  }
  ```

  But you have to remember to do this every time you have some important resource to release.

- Scoping: in the above example, `reader` is already closed when we exit the `try...finally` statement, but it continues to be available in its scope. This means you may accidentally use it after it's closed.
- Multiple resources: if we have two readers on different streams, we have to remember to release both of them. This is a respectable attempt to do so:

  ```js
  const reader1 = stream1.getReader();
  const reader2 = stream2.getReader();
  try {
    // do something with reader1 and reader2
  } finally {
    reader1.releaseLock();
    reader2.releaseLock();
  }
  ```

  However, this introduces more error handling troubles. If `stream2.getReader()` throws, then `reader1` does not get released; if `reader1.releaseLock()` throws an error, then `reader2` does not get released. This means we actually have to wrap each resource acquisition-release pair in its own `try...finally`:

  ```js
  const reader1 = stream1.getReader();
  try {
    const reader2 = stream2.getReader();
    try {
      // do something with reader1 and reader2
    } finally {
      reader2.releaseLock();
    }
  } finally {
    reader1.releaseLock();
  }
  ```

You see how a seemingly benign task of calling `releaseLock` can quickly lead to nested boilerplate code. This is why JavaScript provides integrated language support for resource management.

## The `using` and `await using` declarations

The solution we have is two special kinds of variable declaration: {{jsxref("Statements/using", "using")}} and {{jsxref("Statements/await_using", "await using")}}. They are similar to `const`, but they automatically release the resource when the variable goes out of scope. Using the same example as above, we can rewrite it as:

```js
{
  using reader1 = stream1.getReader();
  using reader2 = stream2.getReader();

  // do something with reader1 and reader2

  // Before we exit the block, reader1 and reader2 are automatically released
}
```

First, notice the extra braces around the code. This creates a new [block scope](/en-US/docs/Web/JavaScript/Reference/Statements/block) for the `using` declarations. Resources declared with `using` are automatically freed when they go out of the scope of `using`, which, in this case, is whenever we are exiting the block, because all statements have executed, or because an error was encountered somewhere.

This means `using` can only be used in a scope that has a clear lifetime—namely, it cannot be used at the top level of a script, because the lifetime of the script is the lifetime of the page, which practically means the resource can never be freed if the page never unloads (and unloading a page causes all remaining resources to be collected anyway). However, you can use it at the top level of a [module](/en-US/docs/Web/JavaScript/Guide/Modules), because the module scope ends when the module finishes executing.

Now we know _when_ `using` does cleanup. But _how_ is it done? `using` requires the resource to implement the _disposable_ protocol. An object is disposable if it has the [`[Symbol.dispose]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose) method. This method is called with no arguments to perform cleanup. For example, in the reader case, the `[Symbol.dispose]` property can be a simple alias or wrapper of `releaseLock`:

```js
// For demonstration
class MyReader {
  // A wrapper
  [Symbol.dispose]() {
    this.releaseLock();
  }
  releaseLock() {
    // Logic to release resources
  }
}

// OR, an alias
MyReader.prototype[Symbol.dispose] = MyReader.prototype.releaseLock;
```

Through the disposable protocol, `using` can dispose all resources in a consistent fashion without understanding what type of resource it is.

Every scope has a list of resources associated with it, in the order they were declared. When the scope exits, the resources are disposed in reverse order, by calling their `[Symbol.dispose]()` method.

`await using` is very similar to `using`. The name tells you that an `await` happens somewhere—not exactly when the resource is declared, but actually when it's disposed. To be clear, `await using` requires the resource to be _async disposable_, which means it has an [`[Symbol.asyncDisposable]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncDispose) method. This method is called with no arguments and returns a promise that resolves when the cleanup is done. This is useful when the cleanup is asynchronous, such as `filehandle.close()`, in which case the result of the disposal can only be known asynchronously.

```js
{
  await using filehandle = open("file.txt", "w");
  await filehandle.write("Hello");

  // filehandle.close() is called and awaited
}
```

Because `await using` requires doing an `await`, it is only permitted in contexts where `await` is, which includes inside `async` functions and top-level `await` in modules.

Some things to note:

- `using` and `await using` are _opt in_. If you declare your resource using `let`, `const`, or `var`, no automatic disposal happens, just like any other non-disposable values.
- `using` and `await using` require the resource to be disposable (or async disposable). If the resource does not have the `[Symbol.dispose]()` or `[Symbol.asyncDispose]()` method, you will get a `TypeError` at the line of declaration. The resource can be `null` or `undefined`, however, allowing you to conditionally acquire resources.
- Like `const`, `using` and `await using` variables cannot be re-assigned, but its properties can be changed. However, the `[Symbol.dispose]()`/`[Symbol.asyncDispose]()` method is already saved at the time of declaration, so changing the method after the declaration does not affect the cleanup.
- There are some gotchas when conflating scopes with resource lifetime. See [`using`](/en-US/docs/Web/JavaScript/Reference/Statements/using#examples) for a few examples.

## The `DisposableStack` and `AsyncDisposableStack` objects

`using` and `await using` are special syntaxes. Syntaxes are convenient and hide a lot of the complexity, but sometimes you need to do things manually.

For one common example: what if you don't want to dispose the resource at the end of _this_ scope, but at some _later_ scope? Consider this:

```js
let reader;
if (someCondition) {
  reader = stream.getReader();
} else {
  reader = stream.getReader({ mode: "byob" });
}
```

As we said, `using` is like `const`: it must be initialized and can't be reassigned, so you may attempt this:

```js
if (someCondition) {
  using reader = stream.getReader();
} else {
  using reader = stream.getReader({ mode: "byob" });
}
```

However, this means all logic has to be written inside the `if` or `else`, causing a lot of duplication. What we want to do is to acquire and register the resource in one scope but dispose it in another. We can use a {{jsxref("DisposableStack")}} for this purpose.

```js
{
  using stack = new DisposableStack();
  let reader;
  if (someCondition) {
    reader = stack.use(stream.getReader());
  } else {
    reader = stack.use(stream.getReader({ mode: "byob" }));
  }
  // Do something with reader
  // Before scope exit, stack is disposed, which disposes reader
}
```

Another use case is when you have a resource that does not yet implement the disposable protocol, so it will be rejected by `using`.

```js
{
  using stack = new DisposableStack();
  // Suppose reader does not have the [Symbol.dispose]() method,
  // then it cannot be used with using.
  // However, we can manually pass a disposer function to stack.adopt
  const reader = stack.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  // Do something with reader
  // Before scope exit, stack is disposed, which disposes reader
}
```

Yet another use case is when you have a disposal action to perform but it's not "tethered" to any resource in particular. Maybe you just want to log a message saying "All database connections closed" when there are multiple connections open simultaneously.

```js
{
  using stack = new DisposableStack();
  stack.defer(() => console.log("All database connections closed"));
  const connection1 = stack.use(openConnection());
  const connection2 = stack.use(openConnection());
  // Do something with connection1 and connection2
  // Before scope exit, stack is disposed, which first disposes connection1
  // and connection2 and then logs the message
}
```

## Error handling

TODO

## Pitfalls

The resource disposal syntax offers a lot of strong error handling guarantees that ensure the resources are always cleaned up no matter what happens, but there are some pitfalls you may still encounter:

- Forgetting to use `using` or `await using`
- Use-after-free

## Examples

## Conclusion

Here are the key components of the resource management system:

- {{jsxref("Statements/using", "using")}} and {{jsxref("Statements/await_using", "await using")}} declarations for automatic resource disposal.
- The _disposable_ and _async disposable_ protocols, using the {{jsxref("Symbol.dispose")}} and {{jsxref("Symbol.asyncDispose")}} respectively, for resources to implement.
- The {{jsxref("DisposableStack")}} and {{jsxref("AsyncDisposableStack")}} objects for cases where `using` and `await using` are not suitable.

With proper usage of these APIs, you can create systems that are strong and robust against all error conditions without lots of boilerplate code.

{{PreviousNext("Web/JavaScript/Guide/Iterators_and_generators", "Web/JavaScript/Guide/Internationalization")}}
