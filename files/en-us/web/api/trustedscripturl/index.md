---
title: TrustedScriptURL
slug: Web/API/TrustedScriptURL
page-type: web-api-interface
browser-compat: api.TrustedScriptURL
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`TrustedScriptURL`** interface of the {{domxref("Trusted Types API", "", "", "nocode")}} represents a string that a developer can insert into an [injection sink](/en-US/docs/Web/API/Trusted_Types_API#injection_sinks) that will parse it as a URL of an external script. These objects are created via {{domxref("TrustedTypePolicy.createScriptURL","TrustedTypePolicy.createScriptURL()")}} and therefore have no constructor.

The value of a `TrustedScriptURL` object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.

## Instance methods

- {{domxref("TrustedScriptURL.toJSON()")}}
  - : Returns a JSON representation of the stored data.
- {{domxref("TrustedScriptURL.toString()")}}
  - : A string containing the sanitized URL.

## Examples

The constant `sanitized` is an object created via a Trusted Types policy.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);
console.log(sanitized); /* a TrustedScriptURL object */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/articles/trusted-types)
