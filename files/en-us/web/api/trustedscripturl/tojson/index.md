---
title: "TrustedScriptURL: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedScriptURL/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedScriptURL.toJSON
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("TrustedScriptURL")}} interface returns a string representing the `TrustedScriptURL` object, which is the same value as {{domxref("TrustedScriptURL.toString()")}}.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `TrustedScriptURL` object is stringified. This method is generally intended to, by default, usefully serialize `TrustedScriptURL` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("TrustedTypePolicy.createScriptURL()")}} method within the reviver of {{jsxref("JSON.parse()")}}.

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

In this example, the `TrustedScriptURL` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(sanitized));
```

This would log a JSON string like so (quotes are part of the string content):

```json
"https://example.com/my-script.js"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
