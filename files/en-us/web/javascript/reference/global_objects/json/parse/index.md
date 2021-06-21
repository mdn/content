---
title: JSON.parse()
slug: Web/JavaScript/Reference/Global_Objects/JSON/parse
tags:
- ECMAScript 5
- JSON
- JavaScript
- Method
- Reference
browser-compat: javascript.builtins.JSON.parse
---
{{JSRef}}

The **`JSON.parse()`** method parses a JSON string, constructing the JavaScript
value or object described by the string. An optional **reviver** function can be
provided to perform a transformation on the resulting object before it is
returned.

{{EmbedInteractiveExample("pages/js/json-parse.html")}}

## Syntax

```js
JSON.parse(text)
JSON.parse(text, reviver)
```

### Parameters

- `text`
  - : The string to parse as JSON. See the {{jsxref("JSON")}} object for a
    description of JSON syntax.
- `reviver` {{optional_inline}}
  - : If a function, this prescribes how the value originally produced by
    parsing is transformed, before being returned.

### Return value

The {{jsxref("Object")}}, {{jsxref("Array")}}, string, number,
boolean, or null value corresponding to the given JSON `text`.

### Exceptions

Throws a {{jsxref("SyntaxError")}} exception if the string to parse is
not valid JSON.

## Polyfill

```js
// From https://github.com/douglascrockford/JSON-js/blob/master/json2.js
if (typeof JSON.parse !== "function") {
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    var rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    JSON.parse = function(text, reviver) {

        // The parse method takes a text and an optional reviver function, and returns
        // a JavaScript value if the text is a valid JSON text.

        var j;

        function walk(holder, key) {

            // The walk method is used to recursively walk the resulting structure so
            // that modifications can be made.

            var k;
            var v;
            var value = holder[key];
            if (value && typeof value === "object") {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }

        // Parsing happens in four stages. In the first stage, we replace certain
        // Unicode characters with escape sequences. JavaScript handles many characters
        // incorrectly, either silently deleting them, or treating them as line endings.

        text = String(text);
        rx_dangerous.lastIndex = 0;
        if (rx_dangerous.test(text)) {
            text = text.replace(rx_dangerous, function(a) {
                return (
                    "\\u" +
                    ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                );
            });
        }

        // In the second stage, we run the text against regular expressions that look
        // for non-JSON patterns. We are especially concerned with "()" and "new"
        // because they can cause invocation, and "=" because it can cause mutation.
        // But just to be safe, we want to reject all unexpected forms.

        // We split the second stage into 4 regexp operations in order to work around
        // crippling inefficiencies in IE's and Safari's regexp engines. First we
        // replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
        // replace all simple value tokens with "]" characters. Third, we delete all
        // open brackets that follow a colon or comma or that begin the text. Finally,
        // we look to see that the remaining characters are only whitespace or "]" or
        // "," or ":" or "{" or "}". If that is so, then the text is safe for eval.

        if (
            rx_one.test(
                text
                .replace(rx_two, "@")
                .replace(rx_three, "]")
                .replace(rx_four, "")
            )
        ) {

            // In the third stage we use the eval function to compile the text into a
            // JavaScript structure. The "{" operator is subject to a syntactic ambiguity
            // in JavaScript: it can begin a block or an object literal. We wrap the text
            // in parens to eliminate the ambiguity.

            j = eval("(" + text + ")");

            // In the optional fourth stage, we recursively walk the new structure, passing
            // each name/value pair to a reviver function for possible transformation.

            return (typeof reviver === "function") ?
                walk({
                    "": j
                }, "") :
                j;
        }

        // If the text is not JSON parsable, then a SyntaxError is thrown.

        throw new SyntaxError("JSON.parse");
    };
}
```

## Examples

### Using JSON.parse()

```js
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
```

### Using the reviver parameter

If a `reviver` is specified, the value computed by parsing is _transformed_
before being returned. Specifically, the computed value and all its properties
(beginning with the most nested properties and proceeding to the original value
itself) are individually run through the `reviver`. Then it is called, with the
object containing the property being processed as `this`, and with the property
name as a string, and the property value as arguments. If the `reviver` function
returns {{jsxref("undefined")}} (or returns no value, for example, if
execution falls off the end of the function), the property is deleted from the
object. Otherwise, the property is redefined to be the return value.

If the `reviver` only transforms some values and not others, be certain to
return all untransformed values as-is, otherwise, they will be deleted from the
resulting object.

```js
JSON.parse('{"p": 5}', (key, value) =>
  typeof value === 'number'
    ? value * 2 // return value * 2 for numbers
    : value     // return everything else unchanged
);

// { p: 10 }

JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}', (key, value) => {
  console.log(key); // log the current property name, the last is "".
  return value;     // return the unchanged property value.
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### JSON.parse() does not allow trailing commas

```js example-bad
// both will throw a SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');
```

### JSON.parse() does not allow single quotes

```js example-bad
// will throw a SyntaxError
JSON.parse("{'foo': 1}");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("JSON.stringify()")}}
