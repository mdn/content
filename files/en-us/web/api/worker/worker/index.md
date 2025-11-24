---
title: "Worker: Worker() constructor"
short-title: Worker()
slug: Web/API/Worker/Worker
page-type: web-api-constructor
browser-compat: api.Worker.Worker
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

> [!WARNING]
> This script passed to the `url` element is executed.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`Worker()`** constructor creates a {{domxref("Worker")}} object that executes the classic script or module at the specified URL.

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameters

- `url`
  - : A {{domxref("TrustedScriptURL")}} object or a string representing the URL of the script or module that the worker will execute.
    This must be same-origin with the caller's document, or a `blob:` or `data:` URL.
    The URL is resolved relative to the current HTML page's location.
- `options` {{optional_inline}}
  - : An object containing option properties that can be set when creating the object instance.
    Available properties are as follows:
    - `credentials`
      - : A string specifying the type of credentials to use for the worker.
        The value can be `omit`, `same-origin`, or _`include`.
        If not specified, or if type is `classic`, the default used is `same-origin` (only include credentials for same-origin requests)._
    - `name`
      - : A string specifying an identifying name for the {{domxref("DedicatedWorkerGlobalScope")}} representing the scope of the worker, which is mainly useful for debugging purposes.
    - `type`
      - : A string specifying the type of worker to create.
        The value can be `classic` or `module`.
        If not specified, the default used is `classic`.

### Exceptions

- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the MIME type of the worker script is incorrect.
    It _should_ always be `text/javascript` (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) may be accepted).
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the document is not allowed to start workers, e.g., if the URL has an invalid syntax or if the same-origin policy is violated.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `url` cannot be parsed.
- `TypeError`
  - : Thrown if the `url` parameter is a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`Worker()`** constructor creates a {{domxref("Worker")}} object that executes the classic script or module at the specified URL.

The script must be [same-origin](/en-US/docs/Web/Security/Same-origin_policy) with the associated document, but may itself import scripts or modules that are cross-origin (if permitted by CORS and other restrictions).
If a cross-origin worker is required, users must load it from an intermediate same-origin worker or a blob.

### Module and classic workers

A classic worker is one that hat is constructed from a classic script, while a module worker is constructed from an [ECMASCript module](/en-US/docs/Web/JavaScript/Guide/Modules).
The type of worker affects the worker constructor options, how the worker script is fetched, and how it is executed.

The code below shows two ways you can construct a classic worker, and also how you specify the `type` of `"module"` to create a module worker.
In both cases the script must be same-origin with the loading document and is resolved relative to the location of the launching document.

```js
// Construct a classic worker
const worker1 = new Worker("worker_classic.js");
const worker2 = new Worker("worker_classic.js", {
  type: "classic",
});

// Construct a module worker
const worker3 = new Worker("worker_module.js", {
  type: "module",
});
```

Module workers and their dependencies are loaded and executed using ECMAScript module semantics:

- Fetched using [CORS](/en-US/docs/Web/HTTP/Guides/CORS)
- All modules are resolved before any code is executed
- Must be served with the media type `Content-Type: text/javascript`
- Executed in {{glossary("Strict mode")}}
- Dependencies are loaded via static [`import` statements](/en-US/docs/Web/JavaScript/Reference/Statements/import)

All same-origin workers can load same-origin scripts by default.
However because module scripts are fetched using CORS, cross-origin scripts must be served with the {{httpheader("Access-Control-Allow-Origin")}} header.
In addition, the if the document has a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP), it must allow the origins of imported worker scripts in `worker-src` (with fallback to `script-src` and `default-src` directives).

Classic workers are fetched in `no-cors` mode and are executed as scripts rather than modules.
They can themselves import other scripts using {{domxref("WorkerGlobalScope.importScripts()")}} (not `import` statements), and these are also fetched in `no-cors` mode.
Because imports are fetched in `no-cors` mode, scripts can be requested cross-origin even if the server does not set the appropriate CORS headers.
Unlike for modules, the document [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) is not affected by the `worker-src` directive, but it is still affected by sources listed in the `script-src` directive.

### `data:` and `blob:` URLs

`data:` URLs can be passed to the `url` parameter, but have an [opaque_origin](/en-US/docs/Glossary/Origin#opaque_origin), which makes them cross-origin to all other origins including their owner.

Consequently, while the worker can still communicate with its owner using `postMessage()`, it's access to other external resources is highly restricted.
For example, a worker `fetch()` request would be cross-origin to its own site, and any requests to any origin must be granted by CORS.

`blob:` URLs should be used instead, where possible, because the URL inherits the origin of the document that created it.
This ensures that a worker created with a `blob:` URL is same-origin with the page that created it.
Note that if you're using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) to restrict what resources can be loaded into your worker, you will need to allow the `blob:` origin.

### Bundler considerations

Bundlers such as [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), and [Parcel](https://parceljs.org/languages/javascript/#web-workers), recommend passing URLs that are relative to [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#url) to the `Worker()` constructor.

For example:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

This makes the path relative to the current script instead of the current HTML page, which allows the bundler to safely do optimizations like renaming (because otherwise the `worker.js` URL may point to a file not controlled by the bundler, so it cannot make any assumptions).

### Security considerations

The script or module specified by the `url` argument is executed in the web worker context, and may itself import other same-origin and cross-origin scripts.
If the `url` is provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

While web workers do not have direct access to the owning document or window, it is still extremely risky to accept and execute arbitrary URLs from untrusted origins.
For module workers, but not classic workers, CORS will control what cross-origin resources can be requested.

A website should also control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`worker-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) directive (or a fallback to [`child-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/child-src), [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src), or [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify URLs needed by the worker before they are fetched.

## Examples

For brevity, only the first example below uses trusted types.
In production your code should always use trusted types when passing data originating from users into injection sinks.

### Using Trusted Types

To mitigate the risk of XSS, we should always pass `TrustedScriptURL` instances to the worker URL instead of strings.
We also need to do this if we're enforcing trusted types for other reasons and we want to allow some sources that have been permitted (by `CSP: worker-src`).

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} method for transforming input strings into {{domxref("TrustedScriptURL")}} instances.

For the purpose of this example we'll assume that we want to allow a predefined set of URLs in the `workerScriptAllowList` array and log any other scripts.

```js
const workerScriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("worker-url-policy", {
  createScriptURL(input) {
    if (workerScriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in workerScriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Next we use our `policy` object to create a `trustedScriptURL` object from a potentially unsafe input string and pass this to the worker.

```js
// The potentially malicious worker URL
// We won't be including untrustedScript in our workerScriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Construct the worker with the trusted URL
const myWorker = new Worker(trustedScriptURL);
```

### Creating a classic worker

The following code snippet shows creation of a classic {{domxref("Worker")}} object using the `Worker()` constructo, and subsequent usage of the object:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

### Loading a cross-origin module worker from a blob

This example shows a method that can fetch and load a cross-origin module worker script and then load it into your worker as a blob (a classic script could be loaded in the same way):

```js
async function loadWorker() {
  const response = await fetch("https://other_origin.com/worker.js");
  const script = await response.text();

  // Create a blob that contains the fetched script, and then create a URL from that blob
  const blob = new Blob([script], { type: "application/javascript" });
  const workerUrl = URL.createObjectURL(blob);

  try {
    const worker = new Worker(workerUrl, { type: "module" });
  } catch (e) {
    console.error(`Cross-origin worker module failed to load: ${e}`);
  }
}
loadWorker();
```

The initial fetch is made with CORS, and so the `other_origin.com` response will need to include the {{httpheader("Access-Control-Allow-Origin")}} header as shown:

```http
Access-Control-Allow-Origin "https://my_origin.com"
```

In addition, if you're using a CSP you will need to allow the `blob:` origin for `worker-src` so that it can be loaded into the document:

```http
Content-Security-Policy worker-src 'self' https://other_origin.com blob:
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
- [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API)
