---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
---

{{WebAssemblySidebar}}

To use WebAssembly in JavaScript, you first need to pull your module into memory before compilation/instantiation. This article provides a reference for the different mechanisms that can be used to fetch WebAssembly bytecode, as well as how to compile/instantiate then run it.

## What are the options?

WebAssembly is not yet integrated with `<script type='module'>` or `import` statements, thus there is not a path to have the browser fetch modules for you using imports.

The older [`WebAssembly.compile`](/en-US/docs/WebAssembly/JavaScript_interface/compile)/[`WebAssembly.instantiate`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) methods require you to create an {{jsxref("ArrayBuffer")}} containing your WebAssembly module binary after fetching the raw bytes, and then compile/instantiate it. This is analogous to `new Function(string)`, except that we are substituting a string of characters (JavaScript source code) with an array buffer of bytes (WebAssembly source code).

The newer [`WebAssembly.compileStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/compileStreaming)/[`WebAssembly.instantiateStreaming`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) methods are a lot more efficient — they perform their actions directly on the raw stream of bytes coming from the network, cutting out the need for the {{jsxref("ArrayBuffer")}} step.

So how do we get those bytes into an array buffer and compiled? The following sections explain.

## Using Fetch

[Fetch](/en-US/docs/Web/API/Fetch_API) is a convenient, modern API for fetching network resources.

The quickest, most efficient way to fetch a Wasm module is using the newer [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiateStreaming) method, which can take a `fetch()` call as its first argument, and will handle fetching, compiling, and instantiating the module in one step, accessing the raw byte code as it streams from the server:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Do something with the results!
  },
);
```

If we used the older [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) method, which doesn't work on the direct stream, we'd need an extra step of converting the fetched byte code to an {{jsxref("ArrayBuffer")}}, like so:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Do something with the results!
  });
```

### Aside on instantiate() overloads

The [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) function has two overload forms — the one shown above takes the byte code to compile as an argument and returns a Promise that resolves to an object containing both the compiled module object and an instantiated instance of it. The object looks like this:

```
{
  module : Module // The newly compiled WebAssembly.Module object,
  instance : Instance // A new WebAssembly.Instance of the module object
}
```

> **Note:** Usually we only care about the instance, but it's useful to have the module in case we want to cache it, share it with another worker or window via [`postMessage()`](/en-US/docs/Web/API/MessagePort/postMessage), or create more instances.

> **Note:** The second overload form takes a [`WebAssembly.Module`](/en-US/docs/WebAssembly/JavaScript_interface/Module) object as an argument, and returns a promise directly containing the instance object as the result. See the [Second overload example](/en-US/docs/WebAssembly/JavaScript_interface/instantiate#second_overload_example).

### Running your WebAssembly code

Once you've got your WebAssembly instance available in your JavaScript, you can then start using features of it that have been exported via the [`WebAssembly.Instance.exports`](/en-US/docs/WebAssembly/JavaScript_interface/Instance/exports) property. Your code might look something like this:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Call an exported function:
    obj.instance.exports.exported_func();

    // or access the buffer contents of an exported memory:
    const i32 = new Uint32Array(obj.instance.exports.memory.buffer);

    // or access the elements of an exported table:
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> **Note:** For more information on how exporting from a WebAssembly module works, have a read of [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API), and [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Understanding_the_text_format).

## Using XMLHttpRequest

[`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) is somewhat older than Fetch, but can still be happily used to get a typed array. Again, assuming our module is called `simple.wasm`:

1. Create a new {{domxref("XMLHttpRequest()")}} instance, and use its {{domxref("XMLHttpRequest.open","open()")}} method to open a request, setting the request method to `GET`, and declaring the path to the file we want to fetch.
2. The key part of this is to set the response type to `'arraybuffer'` using the {{domxref("XMLHttpRequest.responseType","responseType")}} property.
3. Next, send the request using {{domxref("XMLHttpRequest.send()")}}.
4. We then use the {{domxref("XMLHttpRequest.load_event", "load")}} event handler to invoke a function when the response has finished downloading — in this function we get the array buffer from the {{domxref("XMLHttpRequest.response", "response")}} property, and then feed that into our [`WebAssembly.instantiate()`](/en-US/docs/WebAssembly/JavaScript_interface/instantiate) method as we did with Fetch.

The final code looks like this:

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> **Note:** You can see an example of this in action in [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
