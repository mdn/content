---
title: JSON
slug: Web/JavaScript/Reference/Global_Objects/JSON
page-type: javascript-namespace
browser-compat: javascript.builtins.JSON
---

{{JSRef}}

The **`JSON`** namespace object contains static methods for parsing values from and converting values to [JavaScript Object Notation](https://json.org/) ({{glossary("JSON")}}).

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
JSON-text = object / array
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

Insignificant {{glossary("whitespace")}} may be present anywhere except within a `JSONNumber` (numbers must contain no whitespace) or `JSONString` (where it is interpreted as the corresponding character in the string, or would cause an error). The tab character ([U+0009](https://unicode-table.com/en/0009/)), carriage return ([U+000D](https://unicode-table.com/en/000D/)), line feed ([U+000A](https://unicode-table.com/en/000A/)), and space ([U+0020](https://unicode-table.com/en/0020/)) characters are the only valid whitespace characters.

## Static properties

- `JSON[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"JSON"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("JSON.parse()")}}
  - : Parse a piece of string text as JSON, optionally transforming the produced value and its properties, and return the value.
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.toJSON()")}}
- [JSON Diff](https://json-diff.com/)
- [JSON Beautifier/editor](https://jsonbeautifier.org/)
- [JSON Parser](https://jsonparser.org/)
- [JSON Validator](https://tools.learningcontainer.com/json-validator/)
