---
title: TrustedScriptURL.toJSON()
slug: Web/API/TrustedScriptURL/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON
  - TrustedScriptURL
browser-compat: api.TrustedScriptURL.toJSON
---
{{DefaultAPISidebar("Trusted Types API")}}

The **`toJSON()`** method of the {{domxref("TrustedScriptURL")}} interface returns a JSON representation of the stored data.

## Syntax

```js
var json = TrustedScriptURL.toJSON();
```

### Return value

A {{domxref("DOMString","string")}} containing a JSON representation of the stored data.

## Examples

The constant `sanitized` is an object created via a Trusted Types policy. The `toString()` method returns a string to safely use to load a third party script.

```js
const sanitized = scriptPolicy.createScriptURL("https://example.com/my-script.js");
  console.log(sanitized.toJSON());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
