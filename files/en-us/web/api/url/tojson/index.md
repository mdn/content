---
title: "URL: toJSON() method"
short-title: toJSON()
slug: Web/API/URL/toJSON
page-type: web-api-instance-method
browser-compat: api.URL.toJSON
---

{{APIRef("URL API")}} {{AvailableInWorkers}}

The **`toJSON()`** method of the {{domxref("URL")}} interface returns a string representing the `URL` object. This is the same string that {{domxref("URL.toString()")}} returns.

The method is automatically called by {{jsxref("JSON.stringify()")}} when a `URL` object is encountered during [JSON](/en-US/docs/Glossary/JSON) serialization. The serialized value can then be deserialized using the {{domxref("URL/URL", "URL()")}} constructor within the reviver of {{jsxref("JSON.parse()")}}.

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

Calling `toJSON()` directly returns a string containing the URL.

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/toString",
);

const json = url.toJSON();
console.log(json); // https://developer.mozilla.org/en-US/docs/Web/API/URL/toString
console.log(typeof json); // "string"
```

### Serializing to a JSON string

The `URL` object from the previous example is serialized using {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method automatically.

```js
console.log(JSON.stringify(url));
```

This would log the following JSON string, including the surrounding double quotes, which are part of the string's content:

```json
"https://developer.mozilla.org/en-US/docs/Web/API/URL/toString"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `URL.prototype.toJSON` in `core-js`](https://core-js.io/docs/features/web-standards/url)
