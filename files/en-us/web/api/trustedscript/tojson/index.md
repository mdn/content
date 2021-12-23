---
title: TrustedScript.toJSON()
slug: Web/API/TrustedScript/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - TrustedScript
browser-compat: api.TrustedScript.toJSON
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`toJSON()`** method of the {{domxref("TrustedScript")}} interface returns a JSON representation of the stored data.

## Syntax

```js
var json = TrustedScript.toJSON();
```

### Return value

A {{domxref("DOMString","string")}} containing a JSON representation of the stored data.

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
