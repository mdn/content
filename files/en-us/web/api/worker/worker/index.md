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

The **`Worker()`** constructor creates a {{domxref("Worker")}} object that executes the script at the specified URL.

This script must obey the [same-origin policy](/en-US/docs/Web/Security/Same-origin_policy).

## Syntax

```js-nolint
new Worker(url)
new Worker(url, options)
```

### Parameters

- `url`
  - : A {{domxref("TrustedScriptURL")}} object or a string representing the URL of the script the worker will execute.
    It must obey the same-origin policy.
    The URL is resolved relative to the current HTML page's location.
- `options` {{optional_inline}}
  - : An object containing option properties that can be set when creating the object instance. Available properties are as follows:
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
  - : Thrown if the MIME type of the worker script is incorrect. It _should_ always be `text/javascript`
    (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types) may be accepted).
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the document is not allowed to start workers, e.g., if the URL has an invalid syntax or if the same-origin policy is violated.
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `url` cannot be parsed.
- `TypeError`
  - : Thrown if the `url` parameter is set with a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.
    <!-- This is also thrown if the fetched URL cannot be successfully parsed as its indicated type. -->

## Description

### `data:` and `blob:` URLs

`data:` urls can be passed to the `url` parameter, but have an [opaque_origin](/en-US/docs/Glossary/Origin#opaque_origin), which makes them cross-origin to all other origins including their owner.

Consequently, while the worker can still communicate with its owner using `postMessage()`, it's access to other external resources is highly restricted.
For example, a worker `fetch()` request would be cross-origin to its own site, and any requests to any origin must be granted by CORS.

`blob:` urls should be used instead, where possible, because the URL inherits the origin of the document that created it.
This ensures that a worker created with a `blob:` URL is same-origin with the page that created it.

### Bundler considerations

Bundlers such as [webpack](https://webpack.js.org/guides/web-workers/), [Vite](https://vite.dev/guide/features.html#web-workers), and [Parcel](https://parceljs.org/languages/javascript/#web-workers), recommend passing URLs that are relative to [`import.meta.url`](/en-US/docs/Web/JavaScript/Reference/Operators/import.meta#url) to the `Worker()` constructor.

For example:

```js
const myWorker = new Worker(new URL("worker.js", import.meta.url));
```

This makes the path relative to the current script instead of the current HTML page, which allows the bundler to safely do optimizations like renaming (because otherwise the `worker.js` URL may point to a file not controlled by the bundler, so it cannot make any assumptions.

### Security considerations

The script specified by the `url` argument is executed in the context of the current page.
If the `url` is provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

It is extremely risky to accept and execute arbitrary URLs from untrusted origins.
A website should control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`worker-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) directive (or a fallback defined in [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify the URL before it is injected.

<!-- Need to check COORs/COEP rules.-->

## Examples

The following code snippet shows creation of a {{domxref("Worker")}} object using the `Worker()` constructor and subsequent usage of the object:

```js
const myWorker = new Worker("worker.js");
const first = document.querySelector("input#number1");

first.onchange = () => {
  myWorker.postMessage(first.value);
  console.log("Message posted to worker");
};
```

For a full example, see our [Basic dedicated worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([run dedicated worker](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Worker")}}
- [Trusted Types API](/en-US/docs/Web/API/Trusted_Types_API)
