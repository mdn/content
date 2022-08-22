---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.toJSON
---
{{JSRef}}

The **`toJSON()`** method returns a string representation of
the {{jsxref("Date")}} object.

{{EmbedInteractiveExample("pages/js/date-tojson.html")}}

## Syntax

```js
toJSON()
```

### Return value

A string representation of the given date.

## Description

{{jsxref("Date")}} instances refer to a specific point in time. `toJSON()` calls the object's {{jsxref("Date.prototype.toISOString()", "toISOString()")}} method, which returns a string representing the {{jsxref("Date")}} object's value. This method is generally intended to, by default, usefully serialize {{jsxref("Date")}} objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the [`Date()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) or [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) as the reviver of [`JSON.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).

## Examples

### Using toJSON()

```js
const jsonDate = new Date().toJSON();
const backToDate = new Date(jsonDate);

console.log(jsonDate); // 2015-10-26T07:46:36.611Z
```

### Serialization round-tripping

When parsing JSON containing date strings, you can use [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) to revive them into the original date objects.

```js
const fileData = {
  author: "John",
  title: "Date.prototype.toJSON()",
  createdAt: new Date(2019, 3, 15),
  updatedAt: new Date(2020, 6, 26),
};
const response = JSON.stringify(fileData);

// Imagine transmission through network

const data = JSON.parse(response, (key, value) => {
  if (key === "createdAt" || key === "updatedAt") {
    return Date.parse(value);
  }
  return value;
});

console.log(data);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
