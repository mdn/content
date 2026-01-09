---
title: "WorkerGlobalScope: importScripts() method"
short-title: importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
page-type: web-api-instance-method
browser-compat: api.WorkerGlobalScope.importScripts
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

> [!WARNING]
> The parameters passed to this method represent the URLs of classic scripts to be imported into a worker.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](#security_considerations) for more information.

The **`importScripts()`** method of the {{domxref("WorkerGlobalScope")}} interface synchronously imports one or more scripts into the scope of a [classic worker](/en-US/docs/Web/API/Worker/Worker#module_and_classic_workers) (a worker constructed from a classic script).

Note that the method cannot be used in [module workers](/en-US/docs/Web/API/Worker/Worker#module_and_classic_workers), which instead load dependenices using [`import` statements](/en-US/docs/Web/JavaScript/Reference/Statements/import).

## Syntax

```js-nolint
importScripts(url0)
importScripts(url0, url1)
importScripts(url0, url1, /* …, */ urlN)
```

### Parameters

- `urlN`
  - : A {{domxref("TrustedScriptURL")}} instance or a string representing the URL of the script to be imported.
    The URL may be absolute or relative.
    If the URL is relative, it is relative to the worker entry script's URL.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NetworkError`
  - : Imported scripts were served without a `text/javascript` media (MIME) type or without one of the permitted [legacy JavaScript MIME types](/en-US/docs/Web/HTTP/Guides/MIME_types#legacy_javascript_mime_types).
- {{jsxref("SyntaxError")}}
  - : Thrown if any URL cannot be resolved.
- {{jsxref("TypeError")}}
  - : Thrown if the current {{domxref("WorkerGlobalScope")}} is a module (use [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import) instead).
    It may also happen if any parameter is not a {{domxref("TrustedScriptURL")}} and the site is [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).

## Description

The **`importScripts()`** method synchronously imports one or more scripts into the scope of a classic worker.

Unlike the initial classic module script, which must be same-origin with its document, this method can import cross-origin scripts unless blocked by a {{httpheader("Cross-Origin-Resource-Policy")}}, [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP), or some other security mechanism.
Note that because classic scripts are fetched in `no-cors` mode, they can be fetched cross-origin even if the server does not set the appropriate CORS headers.

### Security considerations

The parameters specify scripts to be imported into the scope of a classic worker.
If the URLs for the scripts are provided by a user, this is a possible vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.

It is extremely risky to accept and execute arbitrary URLs from untrusted origins.
A website should control what scripts that are allowed to run using a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) with the [`script-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) directive (or a fallback defined in [`default-src`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)).
This can restrict scripts to those from the current origin, or a specific set of origins, or even particular files.

If you're using this property and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (using the [`require-trusted-types-for`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP directive), you will need to always assign {{domxref("TrustedScriptURL")}} objects instead of strings.
This ensures that the input is passed through a transformation function, which has the chance to reject or modify the URL before it is injected.

## Examples

### Basic usage

If you had some functionality written in a separate script called `foo.js` in the same directory as `worker.js`, you could import it into the worker using the following line:

```js
importScripts("foo.js");
```

`importScripts()` and `self.importScripts()` are effectively equivalent — both represent `importScripts()` being called from inside the worker's inner scope.

Note that in the next section we show you how to pass a `TrustedScriptURL` instead of a string.
This was omitted in this example for brevity, but is recommended in production code.

### Using TrustedScriptURL

To mitigate the risk of XSS, we should always assign `TrustedScriptURL` instances to each of the parameters.
We also need to do this if we're enforcing trusted types for other reasons and we want to allow some script sources that have been permitted (for example, by `CSP: script-src`).

Trusted types are not yet supported on all browsers, so first we define the [trusted types tinyfill](/en-US/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
This acts as a transparent replacement for the trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Next we create a {{domxref("TrustedTypePolicy")}} that defines a {{domxref("TrustedTypePolicy/createScriptURL", "createScriptURL()")}} method for transforming input strings into {{domxref("TrustedScriptURL")}} instances.

For the purpose of this example we'll assume that we want to allow a predefined set of URLs in the `scriptAllowList` array and log any other scripts.

```js
const scriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in scriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Then we use the `policy` object to create a `TrustedScript` object from a potentially unsafe input string:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/import_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

The `TrustedScriptURL` object can now be used when importing the script in a classic worker:

```js
importScripts(trustedScriptURL);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WorkerGlobalScope")}}
