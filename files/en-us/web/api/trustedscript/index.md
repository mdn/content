---
title: TrustedScript
slug: Web/API/TrustedScript
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - TrustedScript
browser-compat: api.TrustedScript
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`TrustedScript`** interface of the {{domxref('Trusted Types API')}} represents a string with an uncompiled script body that a developer can insert into an [injection sink](/en-US/docs/Web/API/Trusted_Types_API#injection_sinks) that might execute the script. These objects are created via {{domxref("TrustedTypePolicy.createScript","TrustedTypePolicy.createScript()")}} and therefore have no constructor.

The value of a **TrustedScript** object is set when the object is created and cannot be changed by JavaScript as there is no setter exposed.

## Methods

- {{domxref("TrustedScript.toJSON()")}}
  - : Returns a JSON representation of the stored data.
- {{domxref("TrustedScript.toString()")}}
  - : A string containing the sanitized script.

## Examples

The constant `sanitized` is an object created via a Trusted Types policy.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized); /* a TrustedScript object */
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Prevent DOM-based cross-site scripting vulnerabilities with Trusted Types](https://web.dev/trusted-types/)
