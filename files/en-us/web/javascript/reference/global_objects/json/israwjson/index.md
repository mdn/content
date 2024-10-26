---
title: JSON.isRawJSON()
slug: Web/JavaScript/Reference/Global_Objects/JSON/isRawJSON
page-type: javascript-static-method
browser-compat: javascript.builtins.JSON.isRawJSON
---

{{JSRef}}

The **`JSON.isRawJSON()`** static method tests whether a value is an object returned by {{jsxref("JSON.rawJSON()")}}.

## Syntax

```js-nolint
JSON.isRawJSON(value)
```

### Parameters

- `value`
  - : The value to test.

### Return value

`true` if `value` is created by {{jsxref("JSON.rawJSON()")}}; otherwise, `false`.

## Description

"Raw JSON" objects, when serialized to JSON, are treated as if they are already a piece of JSON. Furthermore, because of the way {{jsxref("JSON.rawJSON()")}} works, the raw JSON is guaranteed to be syntactically valid JSON. For more information on the shape and behavior of raw JSON objects, see {{jsxref("JSON.rawJSON()")}}. This method exists to allow other serialization libraries to implement similar behavior to `JSON.stringify()` for raw JSON objects.

## Examples

### Using JSON.isRawJSON()

The following example demonstrates how to use `JSON.isRawJSON()` to test whether an object was returned by `JSON.rawJSON()`. It implements a custom serializer that serializes data to a YAML-like format.

```js
function mySerializer(value, indent = "") {
  if (typeof value !== "object" || value === null) {
    return JSON.stringify(value);
  }
  if (JSON.isRawJSON(value)) {
    return value.rawJSON;
  }
  const subIndent = `${indent}  `;
  if (Array.isArray(value)) {
    return `- ${value.map((v) => mySerializer(v, subIndent)).join(`\n${indent}- `)}`;
  }
  return Object.entries(value)
    .map(([key, value]) => {
      const subValue = mySerializer(value, subIndent);
      if (subValue.includes("\n")) {
        return `${key}:\n${subIndent}${subValue}`;
      }
      return `${key}: ${subValue}`;
    })
    .join(`\n${indent}`);
}

console.log(
  mySerializer({
    name: "Josh",
    userId: JSON.rawJSON("12345678901234567890"),
    friends: [
      { name: "Alice", userId: JSON.rawJSON("9876543210987654321") },
      { name: "Bob", userId: JSON.rawJSON("56789012345678901234") },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567890
// friends:
//   - name: "Alice"
//     userId: 9876543210987654321
//   - name: "Bob"
//     userId: 56789012345678901234
```

If in the above example, the `userId` values were not created by `JSON.rawJSON()`, but passed as numbers directly, then we will get loss of precision upfront because of JS floating point precision limitations.

```js
console.log(
  mySerializer({
    name: "Josh",
    userId: 12345678901234567890,
    friends: [
      { name: "Alice", userId: 9876543210987654321 },
      { name: "Bob", userId: 56789012345678901234 },
    ],
  }),
);

// name: "Josh"
// userId: 12345678901234567000
// friends:
//   - name: "Alice"
//     userId: 9876543210987655000
//   - name: "Bob"
//     userId: 56789012345678900000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `JSON.isRawJSON` in `core-js`](https://github.com/zloirock/core-js#jsonparse-source-text-access)
- {{jsxref("JSON")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
