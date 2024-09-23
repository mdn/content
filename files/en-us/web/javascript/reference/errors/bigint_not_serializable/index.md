---
title: "TypeError: BigInt value can't be serialized in JSON"
slug: Web/JavaScript/Reference/Errors/BigInt_not_serializable
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "BigInt value can't be serialized in JSON" occurs when a {{jsxref("BigInt")}} is encountered in {{jsxref("JSON.stringify")}} with no custom serialization method provided.

## Message

```plain
TypeError: Do not know how to serialize a BigInt (V8-based)
TypeError: BigInt value can't be serialized in JSON (Firefox)
TypeError: JSON.stringify cannot serialize BigInt. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

You are trying to serialize a BigInt value using `JSON.stringify`, which does not support BigInt values by default.Sometimes, JSON stringification happens implicitly in libraries, as part of data serialization. For example, sending data to the server, storing it in external storage, or transferring it between threads would all require serialization, which is often done using JSON.

There are several ways to handle this:

- If you can alter the data source, avoid using BigInt values and cast it to a number first (which may lose precision for large numbers).
- If you can alter the stringification process, pass a replacer function to `JSON.stringify` that converts BigInt values to strings or numbers.
- You can also provide a `BigInt.prototype.toJSON` method globally that gets called whenever a BigInt value is stringified.

For more information on various tradeoffs, see [BigInt reference](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#use_within_json).

## Examples

### Providing a custom serialization method

By default, BigInt values are not serializable in JSON:

```js example-bad
const data = { a: 1n };
JSON.stringify(data);
// TypeError: BigInt value can't be serialized in JSON
```

Assuming you intend for the JSON to contain a number value, here are a few approaches that work:

- Convert the BigInt to a number before stringifying:

  ```js
  const data = { a: 1n };
  JSON.stringify({ ...data, a: Number(data.a) });
  // '{"a":1}'
  ```

- Provide a replacer function that converts BigInt values to numbers or [raw JSON objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/rawJSON):

  ```js
  const data = { a: 1n };
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? Number(value) : value,
  );
  // '{"a":1}'
  ```

  ```js
  const data = { a: 1n };
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? JSON.rawJSON(value.toString()) : value,
  );
  // '{"a":1}'
  ```

- Provide a `BigInt.prototype.toJSON` method that gets called whenever a BigInt value is stringified:

  ```js
  BigInt.prototype.toJSON = function () {
    return Number(this);
  };
  const data = { a: 1n };
  JSON.stringify(data);
  // '{"a":1}'
  ```

  ```js
  BigInt.prototype.toJSON = function () {
    return JSON.rawJSON(this.toString());
  };
  const data = { a: 1n };
  JSON.stringify(data);
  // '{"a":1}'
  ```

## See also

- {{jsxref("BigInt")}}
- {{jsxref("JSON.stringify()")}}
- {{jsxref("JSON.rawJSON()")}}
