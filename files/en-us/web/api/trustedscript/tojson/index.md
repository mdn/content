---
title: "TrustedScript: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedScript/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedScript.toJSON
---

{{DefaultAPISidebar("Trusted Types API")}}

The **`toJSON()`** method of the {{domxref("TrustedScript")}} interface returns a JSON representation of the stored data.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string containing a JSON representation of the stored data.

## Examples

The constant `sanitized` is an object created via a Trusted Types policy. The `toString()` method returns a string to safely execute as a script.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");
console.log(sanitized.toJSON());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
