---
title: TrustedScript.toString()
slug: Web/API/TrustedScript/toString
tags:
  - API
  - Method
  - Reference
  - toString
  - TrustedScript
browser-compat: api.TrustedScript.toString
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`toString()`** method of the {{domxref("TrustedScript")}} interface returns a string which may safely inserted into an [injection sink](/en-US/docs/Web/API/Trusted_Types_API#injection_sinks).

## Syntax

```js
var str = TrustedScript.toString();
```

### Return value

A {{domxref("DOMString","string")}} containing the sanitized script.

## Examples

The constant `sanitized` is an object created via a Trusted Types policy. The `toString()` method returns a string to safely execute as a script.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
