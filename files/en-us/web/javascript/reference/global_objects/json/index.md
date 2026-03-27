---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
page-type: javascript-namespace
browser-compat: javascript.builtins.JSON
sidebar: jsref
---

The **`JSON`** namespace object contains static methods for parsing values from and converting values to [JavaScript Object Notation](https://json.org/) ({{Glossary("JSON")}}).

## Description

Unlike most global objects, `JSON` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `JSON` object as a function. All properties and methods of `JSON` are static (just like the {{jsxref("Math")}} object).

### JavaScript and JSON differences

JSON is a syntax for serializing objects, arrays, numbers, strings, booleans, and [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null). It is based upon JavaScript syntax, but is distinct from JavaScript: most of JavaScript is _not_ JSON. For example:

- Objects and Arrays
  - : Property names must be double-quoted strings; [trailing commas](/en-US/docs/Web/JavaScript/Reference/Trailing_commas) are forbidden.
- Numbers
  - : Leading zeros are prohibited. A decimal point must be followed by at least one digit. `NaN` and `Infinity` are unsupported.

Any JSON text is a valid JavaScript expression, but only after the [JSON superset](https://github.com/tc39/proposal-json-superset) revision. Before the revision, U+2028 LINE SEPARATOR and U+2029 PARAGRAPH SEPARATOR are allowed in string literals and property keys in JSON; but the same use in JavaScript string literals is a {{jsxref("SyntaxError")}}.

Other differences include allowing only double-quoted strings and no support for {{jsxref("undefined")}} or comments. For those who wish to use a more human-friendly configuration format based on JSON, there is [JSON5](https://json5.org/), used by the Babel compiler, and the more commonly used [YAML](https://en.wikipedia.org/wiki/YAML).

The same text may represent different values in JavaScript object literals vs. JSON as well. For more information, see [Object literal syntax vs. JSON](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#object_literal_syntax_vs._json).

### Full JSON grammar

Valid JSON syntax is formally defined by the following grammar, expressed in [ABNF](https://en.wikipedia.org/wiki/Augmented_Backus%E2%80%93Naur_form), and copied from [IETF JSON standard (RFC)](https://datatracker.ietf.org/doc/html/rfc8259):

```plain
JSON-text = ws value ws
begin-array     = ws %x5B ws  ; [ left square bracket
begin-object    = ws %x7B ws  ; { left curly bracket
end-array       = ws %x5D ws  ; ] right square bracket
end-object      = ws %x7D ws  ; } right curly bracket
name-separator  = ws %x3A ws  ; : colon
value-separator = ws %x2C ws  ; , comma
ws = *(
     %x20 /              ; Space
     %x09 /              ; Horizontal tab
     %x0A /              ; Line feed or New line
     %x0D                ; Carriage return
     )
value = false / null / true / object / array / number / string
false = %x66.61.6c.73.65   ; false
null  = %x6e.75.6c.6c      ; null
true  = %x74.72.75.65      ; true
object = begin-object [ member *( value-separator member ) ]
         end-object
member = string name-separator value
array = begin-array [ value *( value-separator value ) ] end-array
number = [ minus ] int [ frac ] [ exp ]
decimal-point = %x2E       ; .
digit1-9 = %x31-39         ; 1-9
e = %x65 / %x45            ; e E
exp = e [ minus / plus ] 1*DIGIT
frac = decimal-point 1*DIGIT
int = zero / ( digit1-9 *DIGIT )
minus = %x2D               ; -
plus = %x2B                ; +
zero = %x30                ; 0
string = quotation-mark *char quotation-mark
char = unescaped /
    escape (
        %x22 /          ; "    quotation mark  U+0022
        %x5C /          ; \    reverse solidus U+005C
        %x2F /          ; /    solidus         U+002F
        %x62 /          ; b    backspace       U+0008
        %x66 /          ; f    form feed       U+000C
        %x6E /          ; n    line feed       U+000A
        %x72 /          ; r    carriage return U+000D
        %x74 /          ; t    tab             U+0009
        %x75 4HEXDIG )  ; uXXXX                U+XXXX
escape = %x5C              ; \
quotation-mark = %x22      ; "
unescaped = %x20-21 / %x23-5B / %x5D-10FFFF
HEXDIG = DIGIT / %x41-46 / %x61-66   ; 0-9, A-F, or a-f
       ; HEXDIG equivalent to HEXDIG rule in [RFC5234]
DIGIT = %x30-39            ; 0-9
      ; DIGIT equivalent to DIGIT rule in [RFC5234]
```

Insignificant {{Glossary("whitespace")}} may be present anywhere except within a `JSONNumber` (numbers must contain no whitespace) or `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab (U+0009), carriage return (U+000D), line feed (U+000A), and space (U+0020) characters are the only valid whitespace characters.

## Static properties

- `JSON[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"JSON"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("JSON.isRawJSON()")}}
  - : Tests whether a value is an object returned by {{jsxref("JSON.rawJSON()")}}.
- {{jsxref("JSON.parse()")}}
  - : Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.
- {{jsxref("JSON.rawJSON()")}}
  - : Creates a "raw JSON" object containing a piece of JSON text. When serialized to JSON, the raw JSON object is treated as if it is already a piece of JSON. This text is required to be valid JSON.
- {{jsxref("JSON.stringify()")}}
  - : Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.

## Examples

### Example JSON

```json
{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}
```

You can use the {{jsxref("JSON.parse()")}} method to convert the above JSON string into a JavaScript object:

```js
const jsonText = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;

console.log(JSON.parse(jsonText));
```

### Lossless number serialization

JSON can contain number literals of arbitrary precision. However, it is not possible to represent all JSON numbers exactly in JavaScript, because JavaScript uses floating point representation which has a fixed precision. For example, `12345678901234567890 === 12345678901234567000` in JavaScript because they have the same floating point representation. This means there is no JavaScript number that corresponds precisely to the `12345678901234567890` JSON number.

Let's assume you have an exact representation of some number (either via {{jsxref("BigInt")}} or a custom library):

```js
const data = {
  // Using a BigInt here to store the exact value,
  // but it can also be a custom high-precision number library,
  // if the number might not be an integer.
  gross_gdp: 12345678901234567890n,
};
```

You want to serialize it and then parse to the same exact number. There are several difficulties:

- On the serialization side, in order to obtain a number in JSON, you have to pass a number to `JSON.stringify`, either via the `replacer` function or via the `toJSON` method. But, in either case, you have already lost precision during number conversion. If you pass a string to `JSON.stringify`, it will be serialized as a string, not a number.
- On the parsing side, not all numbers can be represented exactly. For example, `JSON.parse("12345678901234567890")` returns `12345678901234568000` because the number is rounded to the nearest representable number. Even if you use a `reviver` function, the number will already be rounded before the `reviver` function is called.

There are, in general, two ways to ensure that numbers are losslessly converted to JSON and parsed back: one involves a JSON number, another involves a JSON string. JSON is a _communication format_, so if you use JSON, you are likely communicating with another system (HTTP request, storing in database, etc.). The best solution to choose depends on the recipient system.

#### Using JSON strings

If the recipient system does not have same JSON-handling capabilities as JavaScript, and does not support high precision numbers, you may want to serialize the number as a string, and then handle it as a string on the recipient side. This is also the only option in older JavaScript.

To specify how custom data types (including `BigInt`) should be serialized to JSON, either add a `toJSON` method to your data type, or use the `replacer` function of {{jsxref("JSON.stringify()")}}.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return this.toString();
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return value.toString();
  }
  return value;
});
```

In either case, the JSON text will look like `{"gross_gdp":"12345678901234567890"}`, where the value is a string, not a number. Then, on the recipient side, you can parse the JSON and handle the string.

#### Using JSON numbers

If the recipient of this message natively supports high precision numbers (such as Python integers), passing numbers as JSON numbers is obviously better, because they can directly parse to the high precision type instead of parsing a string from JSON, and then parsing a number from the string. In JavaScript, you can serialize arbitrary data types to JSON numbers without producing a number value first (resulting in loss of precision) by using {{jsxref("JSON.rawJSON()")}} to precisely specify what the JSON source text should be.

```js
// Using toJSON() method
BigInt.prototype.toJSON = function () {
  return JSON.rawJSON(this.toString());
};
const str1 = JSON.stringify(data);

// Using JSON.stringify() with replacer
const str2 = JSON.stringify(data, (key, value) => {
  if (key === "gross_gdp") {
    return JSON.rawJSON(value.toString());
  }
  return value;
});
```

The text passed to `JSON.rawJSON` is treated as if it is already a piece of JSON, so it won't be serialized again as a string. Therefore, the JSON text will look like `{"gross_gdp":12345678901234567890}`, where the value is a number. This JSON can then be parsed by the recipient without any extra processing, provided that the recipient system does not have the same precision limitations as JavaScript.

When parsing JSON containing high-precision numbers in JavaScript, take extra care because when `JSON.parse()` invokes the `reviver` function, the value you receive is already parsed (and has lost precision). You can use the `context.source` parameter of the {{jsxref("JSON.parse()")}} `reviver` function to re-parse the number yourself.

```js
const parsedData = JSON.parse(str, (key, value, context) => {
  if (key === "gross_gdp") {
    // Or use the constructor of your custom high-precision number library
    return BigInt(context.source);
  }
  return value;
});
// { gross_gdp: 12345678901234567890n }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JSON Diff](https://json-diff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
