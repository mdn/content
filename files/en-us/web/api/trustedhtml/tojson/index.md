---
title: "TrustedHTML: toJSON() method"
short-title: toJSON()
slug: Web/API/TrustedHTML/toJSON
page-type: web-api-instance-method
browser-compat: api.TrustedHTML.toJSON
---

{{APIRef("Trusted Types API")}}{{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("TrustedHTML")}} interface returns a string representing the `TrustedHTML` object. This is the same string that {{domxref("TrustedHTML.toString()")}} returns.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `TrustedHTML` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization. The serialized value can then be deserialized using the {{domxref("TrustedTypePolicy.createHTML()")}} method within the reviver of {{jsxref("JSON.parse()")}}.

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

The `TrustedHTML` object from the previous example is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(escaped));
```

This would log the following JSON string, including the surrounding double quotes, which are part of the string's content:

```json
"&lt;img src=x onerror=alert(1)>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
