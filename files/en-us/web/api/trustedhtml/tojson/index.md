---
title: "TrustedHTML: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedHTML/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedHTML.toJSON
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("TrustedHTML")}} interface returns a string representing the `TrustedHTML` object, which is the same value as {{domxref("TrustedHTML.toString()")}}.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `TrustedHTML` object is stringified. This method is generally intended to, by default, usefully serialize `TrustedHTML` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("TrustedTypePolicy.createHTML()")}} method within the reviver of {{jsxref("JSON.parse()")}}.

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

This example creates a `TrustedHTML` object. Calling `toJSON()` directly returns its stored string value.

```js
const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
  createHTML: (string) => string.replace(/</g, "&lt;"),
});

const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");

const json = escaped.toJSON();
console.log(json); // Same value as escaped.toString()
console.log(typeof json); // "string"
```

### Serializing to a JSON string

In this example, the `TrustedHTML` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(escaped));
```

This would log a JSON string like so (quotes are part of the string content):

```json
"&lt;img src=x onerror=alert(1)>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
