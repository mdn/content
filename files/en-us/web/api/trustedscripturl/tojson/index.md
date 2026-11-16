---
title: "TrustedScriptURL: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedScriptURL.toJSON
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("TrustedScriptURL")}} interface returns a string representing the `TrustedScriptURL` object. This is the same string that {{domxref("TrustedScriptURL.toString()")}} returns.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `TrustedScriptURL` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization. The serialized value can then be converted back using the {{domxref("TrustedTypePolicy.createScriptURL()")}} method within the reviver of {{jsxref("JSON.parse()")}}, which runs the policy's transformation on it again.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A string.

## Examples

### Calling toJSON() directly

This example creates a `TrustedScriptURL` object. Calling `toJSON()` directly returns its stored string value.

```js
const sanitized = scriptPolicy.createScriptURL(
  "https://example.com/my-script.js",
);

const json = sanitized.toJSON();
console.log(json); // Same value as sanitized.toString()
console.log(typeof json); // "string"
```

### Serializing to a JSON string

The `TrustedScriptURL` object from the previous example is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(sanitized));
```

This would log the following JSON string, including the surrounding double quotes, which are part of the string's content:

```json
"https://example.com/my-script.js"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
