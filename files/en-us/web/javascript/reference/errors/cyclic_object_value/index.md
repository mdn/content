---
title: "TypeError: cyclic object value"
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "cyclic object value" occurs when object references were found
in [JSON](https://www.json.org/). {{jsxref("JSON.stringify()")}} doesn't try
to solve them and fails accordingly.

## Message

```plain
TypeError: Converting circular structure to JSON (V8-based)
TypeError: cyclic object value (Firefox)
TypeError: JSON.stringify cannot serialize cyclic structures. (Safari)
```

## Error type

{{jsxref("TypeError")}}

## What went wrong?

The [JSON format](https://www.json.org/) per se doesn't support object
references (although an [IETF draft exists](https://datatracker.ietf.org/doc/html/draft-pbryan-zyp-json-ref-03)),
hence {{jsxref("JSON.stringify()")}} doesn't try to solve them and fails accordingly.

## Examples

### Circular references

In a circular structure like the following

```js
const circularReference = { otherData: 123 };
circularReference.myself = circularReference;
```

{{jsxref("JSON.stringify()")}} will fail

```js example-bad
JSON.stringify(circularReference);
// TypeError: cyclic object value
```

To serialize circular references you can use a library that supports them (e.g. [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js))
or implement a solution by yourself, which will require finding and replacing (or
removing) the cyclic references by serializable values.

The snippet below illustrates how to find and filter (thus causing data loss) a cyclic
reference by using the `replacer` parameter of
{{jsxref("JSON.stringify()")}}:

```js
function getCircularReplacer() {
  const ancestors = [];
  return function (key, value) {
    if (typeof value !== "object" || value === null) {
      return value;
    }
    // `this` is the object that value is contained in,
    // i.e., its direct parent.
    while (ancestors.length > 0 && ancestors.at(-1) !== this) {
      ancestors.pop();
    }
    if (ancestors.includes(value)) {
      return "[Circular]";
    }
    ancestors.push(value);
    return value;
  };
}

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123,"myself":"[Circular]"}

const o = {};
const notCircularReference = [o, o];
JSON.stringify(notCircularReference, getCircularReplacer());
// [{},{}]
```

## See also

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js)
  – Introduces two functions, `JSON.decycle` and
  `JSON.retrocycle`, which makes it possible to encode and decode cyclical
  structures and dags into an extended and retrocompatible JSON format.
