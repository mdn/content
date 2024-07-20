---
title: "RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'"
slug: Web/JavaScript/Reference/Errors/Form_must_be_one_of
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD'" occurs when an unrecognized string is passed to the {{jsxref("String.prototype.normalize()")}} method.

## Message

```plain
RangeError: The normalization form should be one of NFC, NFD, NFKC, NFKD. (V8-based)
RangeError: form must be one of 'NFC', 'NFD', 'NFKC', or 'NFKD' (Firefox)
RangeError: argument does not match any normalization form (Safari)
```

## Error type

{{jsxref("RangeError")}}

## What went wrong?

The {{jsxref("String.prototype.normalize()")}} method only accepts the following four values as its `form` argument: `"NFC"`, `"NFD"`, `"NFKC"`, or `"NFKD"`. If you pass any other value, an error will be thrown. Read the reference of `normalize()` to learn about different normalization forms.

## Examples

### Invalid cases

```js example-bad
"foo".normalize("nfc"); // RangeError
"foo".normalize(" NFC "); // RangeError
```

### Valid cases

```js example-good
"foo".normalize("NFC"); // 'foo'
```

## See also

- {{jsxref("String.prototype.normalize()")}}
