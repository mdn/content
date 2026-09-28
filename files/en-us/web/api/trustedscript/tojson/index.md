---
title: "TrustedScript: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedScript/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedScript.toJSON
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("TrustedScript")}} interface returns a string representing the `TrustedScript` object, which is the same value as {{domxref("TrustedScript.toString()")}}.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `TrustedScript` object is stringified. This method is generally intended to, by default, usefully serialize `TrustedScript` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("TrustedTypePolicy.createScript()")}} method within the reviver of {{jsxref("JSON.parse()")}}.

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

This example creates a `TrustedScript` object. Calling `toJSON()` directly returns its stored string value.

```js
const sanitized = scriptPolicy.createScript("eval('2 + 2')");

const json = sanitized.toJSON();
console.log(json); // Same value as sanitized.toString()
console.log(typeof json); // "string"
```

### Serializing to a JSON string

In this example, the `TrustedScript` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(sanitized));
```

This would log a JSON string like so (quotes are part of the string content):

```json
"eval('2 + 2')"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
