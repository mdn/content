---
title: "WorkerGlobalScope: importScripts() method"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
page-type: web-api-instance-method
browser-compat: api.WorkerGlobalScope.importScripts
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> The parameters passed to this method represent the URLs of external scripts loaded into a worker.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`importScripts()`** method of the {{domxref("WorkerGlobalScope")}} interface synchronously imports one or more scripts into the worker's scope.

## Syntax

```js-nolint
importScripts(path0)
importScripts(path0, path1)
importScripts(path0, path1, /* …, */ pathN)
```

### Parameters

- `pathN`
  - : A {{domxref("TrustedScriptURL")}} instance or a string representing the URL of the script to be imported.
    The URL may be absolute or relative.
    If the URL is relative, it is relative to the worker entry script's URL.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NetworkError`
  - : Imported scripts were served without a `text/javascript` media (MIME) type or without one of the permitted [legacy JavaScript MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types).
- {{jsxref("TypeError")}}
  - : Thrown if the current {{domxref("WorkerGlobalScope")}} is a module (use [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) instead).
    It may also happen if any parameter is not a {{domxref("TrustedScriptURL")}} and the site is [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Description

### Security considerations

The parameters specify scripts to be imported into the scope of a classic worker.
If the input is provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

It is extremely risky to accept and execute arbitrary URLs from untrusted origins.
A website should control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`worker-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) directive (or a fallback defined in [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) or [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify the URL before it is injected.

## Examples

If you had some functionality written in a separate script called `foo.js` that you wanted to use inside `worker.js`, you could import it using the following line:

```js
importScripts("foo.js");
```

`foo.js` should be in the same URL subtree as the worker's entry point.
For example, if this worker was created with `new Worker("worker.js")`, then `worker.js` is the entry point.
If `worker.js` is at `https://example.com/scripts/worker.js`, then `foo.js` should be at `https://example.com/scripts/foo.js`.

`importScripts()` and `self.importScripts()` are effectively equivalent — both represent `importScripts()` being called from inside the worker's inner scope.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope")}}
