---
title: "SharedWorker: SharedWorker() constructor"
short-title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
page-type: web-api-constructor
browser-compat: api.SharedWorker.SharedWorker
---

{{APIRef("Web Workers API")}}

> [!WARNING]
> This script passed to the `url` element is executed.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](/en-US/docs/Web/API/Worker/Worker#security_considerations) in the `Worker()` constructor for more information.

The **`SharedWorker()`** constructor creates a {{domxref("SharedWorker")}} object that executes the script at the specified URL.

## Syntax

```js-nolint
new SharedWorker(url)
new SharedWorker(url, name)
new SharedWorker(url, options)
```

### Parameters

- `url`
  - : A {{domxref("TrustedScriptURL")}} object or a string representing the URL of the script or module that the worker will execute.
    This must be same-origin with the caller's document, or a `blob:` or `data:` URL.
    The URL is resolved relative to the current HTML page's location.
- `name` {{optional_inline}}
  - : A string specifying an identifying name for the {{domxref("SharedWorkerGlobalScope")}} representing the scope of the worker, which is useful for creating new instances of the same `SharedWorker` and debugging.
- `options` {{optional_inline}}
  - : An object containing option properties that can set when creating the object instance.
    Available properties are as follows:
    - `type`
      - : A string specifying the type of worker to create.
        The value can be `classic` or `module`.
        The default used is `classic`.
    - `credentials`
      - : A string specifying whether the browser sends credentials when importing modules into a module worker.
        The allowed values are the same as can be passed to the [`fetch()` request](/en-US/docs/Web/API/RequestInit#credentials): `omit`, `same-origin`, or `include`.
        The default is `same-origin` (only include credentials for same-origin requests).

        This is ignored for classic workers.

    - `name`
      - : A string specifying an
        identifying name for the {{domxref("SharedWorkerGlobalScope")}} representing the scope of the worker, which is mainly useful for debugging purposes.
    - `sameSiteCookies`
      - : A string indicating which [`SameSite` cookies](/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) should be available to the worker.
        Can have one of the following two values:
        - 'all'
          - : `SameSite=Strict`, `SameSite=Lax`, and `SameSite=None` cookies will all be available to the worker.
            This option is only supported in first-party contexts, and is the default in first-party contexts.
        - 'none'
          - : Only `SameSite=None` cookies will be available to the worker.
            This option is supported in first-party and third-party contexts, and is the default in third-party contexts.

### Exceptions

- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if the document is not allowed to start workers, for example if the URL has an invalid syntax or if the same-origin policy is violated, or if the `sameSiteCookies` value is not supported in the given context.
- `NetworkError` {{domxref("DOMException")}}
  - : Thrown if the MIME type of the worker script is incorrect.
    It should _always_ be `text/javascript` (for historical reasons [other JavaScript MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types#textjavascript) may be accepted).
- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `url` cannot be parsed.
- `TypeError`
  - : Thrown if the `url` parameter is a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) and no default policy is defined.

## Description

The **`SharedWorker()`** constructor creates a {{domxref("SharedWorker")}} object that executes the classic script or module at the specified URL.

The script must be [same-origin](/en-US/docs/Web/Security/Defenses/Same-origin_policy) with the associated document, but may itself import scripts or modules that are cross-origin (if permitted by CORS and other restrictions).
If a cross-origin worker is required, users must load it from an intermediate same-origin worker or a blob.

For more information see [Description](/en-US/docs/Web/API/Worker/Worker#description) in the `Worker()` constructor.

## Examples

For brevity, the following examples don't use [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API).
In production your code should always use trusted types when passing data originating from users into injection sinks.

For an example, see [Using Trusted Types](/en-US/docs/Web/API/Worker/Worker#using_trusted_types) in the `Worker()` constructor examples.

### Basic usage

The following code snippet shows creation of a {{domxref("SharedWorker")}} object using the `SharedWorker()` constructor and subsequent usage of the object:

```js
const myWorker = new SharedWorker("worker.js");

myWorker.port.start();

[first, second].forEach((input) => {
  input.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
  };
});

myWorker.port.onmessage = (e) => {
  result1.textContent = e.data;
  console.log("Message received from worker");
};
```

For a full example, see our [Basic shared worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([run shared worker](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/).)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("SharedWorker")}} interface it belongs to.
