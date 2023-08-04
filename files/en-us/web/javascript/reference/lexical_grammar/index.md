---
title: Lexical grammar
slug: Web/JavaScript/Reference/Lexical_grammar
page-type: guide
browser-compat: javascript.grammar
spec-urls: https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html
---

{{JsSidebar("More")}}

This page describes JavaScript's lexical grammar. JavaScript source text is just a sequence of characters — in order for the interpreter to understand it, the string has to be _parsed_ to a more structured representation. The initial step of parsing is called [lexical analysis](https://en.wikipedia.org/wiki/Lexical_analysis), in which the text gets scanned from left to right and is converted into a sequence of individual, atomic input elements. Some input elements are insignificant to the interpreter, and will be stripped after this step — they include [white space](#white_space) and [comments](#comments). The others, including [identifiers](#identifiers), [keywords](#keywords), [literals](#literals), and punctuators (mostly [operators](/en-US/docs/Web/JavaScript/Reference/Operators)), will be used for further syntax analysis. [Line terminators](#line_terminators) and multiline comments are also syntactically insignificant, but they guide the process for [automatic semicolons insertion](#automatic_semicolon_insertion) to make certain invalid token sequences become valid.

## Format-control characters

Format-control characters have no visual representation but are used to control the interpretation of the text.

| Code point | Name                  | Abbreviation | Description                                                                                                                                                                                                                    |
| ---------- | --------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| U+200C     | Zero width non-joiner | \<ZWNJ>      | Placed between characters to prevent being connected into ligatures in certain languages ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_non-joiner)).                                                                   |
| U+200D     | Zero width joiner     | \<ZWJ>       | Placed between characters that would not normally be connected in order to cause the characters to be rendered using their connected form in certain languages ([Wikipedia](https://en.wikipedia.org/wiki/Zero-width_joiner)). |
| U+FEFF     | Byte order mark       | \<BOM>       | Used at the start of the script to mark it as Unicode and the text's byte order ([Wikipedia](https://en.wikipedia.org/wiki/Byte_order_mark)).                                                                                  |

In JavaScript source text, \<ZWNJ> and \<ZWJ> are treated as [identifier](#identifiers) parts, while \<BOM> (also called a zero-width no-break space \<ZWNBSP> when not at the start of text) is treated as [white space](#white_space).

## White space

[White space](/en-US/docs/Glossary/Whitespace) characters improve the readability of source text and separate tokens from each other. These characters are usually unnecessary for the functionality of the code. [Minification tools](https://en.wikipedia.org/wiki/Minification_%28programming%29) are often used to remove whitespace in order to reduce the amount of data that needs to be transferred.

| Code point | Name                           | Abbreviation | Description                                                                                        | Escape sequence |
| ---------- | ------------------------------ | ------------ | -------------------------------------------------------------------------------------------------- | --------------- |
| U+0009     | Character tabulation           | \<TAB>       | Horizontal tabulation                                                                              | \t              |
| U+000B     | Line tabulation                | \<VT>        | Vertical tabulation                                                                                | \v              |
| U+000C     | Form feed                      | \<FF>        | Page breaking control character ([Wikipedia](https://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f              |
| U+0020     | Space                          | \<SP>        | Normal space                                                                                       |                 |
| U+00A0     | No-break space                 | \<NBSP>      | Normal space, but no point at which a line may break                                               |                 |
| U+FEFF     | Zero-width no-break space      | \<ZWNBSP>    | When not at the start of a script, the BOM marker is a normal whitespace character.                |                 |
| Others     | Other Unicode space characters | \<USP>       | [Characters in the "Space_Separator" general category][space separator set]                        |                 |

[space separator set]: https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BGeneral_Category%3DSpace_Separator%7D

> **Note:** Of those [characters with the "White_Space" property but are not in the "Space_Separator" general category](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BWhite_Space%7D%26%5CP%7BGeneral_Category%3DSpace_Separator%7D), U+0009, U+000B, and U+000C are still treated as white space in JavaScript; U+0085 NEXT LINE has no special role; others become the set of [line terminators](#line_terminators).

> **Note:** Changes to the Unicode standard used by the JavaScript engine may affect programs' behavior. For example, ES2016 upgraded the reference Unicode standard from 5.1 to 8.0.0, which caused U+180E MONGOLIAN VOWEL SEPARATOR to be moved from the "Space_Separator" category to the "Format (Cf)" category, and made it a non-whitespace. Subsequently, the result of [`"\u180E".trim().length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) changed from `0` to `1`.

## Line terminators

In addition to [white space](#white_space) characters, line terminator characters are used to improve the readability of the source text. However, in some cases, line terminators can influence the execution of JavaScript code as there are a few places where they are forbidden. Line terminators also affect the process of [automatic semicolon insertion](#automatic_semicolon_insertion).

Outside the context of lexical grammar, white space and line terminators are often conflated. For example, {{jsxref("String.prototype.trim()")}} removes all white space and line terminators from the beginning and end of a string. The `\s` [character class escape](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) in regular expressions matches all white space and line terminators.

Only the following Unicode code points are treated as line terminators in ECMAScript, other line breaking characters are treated as white space (for example, Next Line, NEL, U+0085 is considered as white space).

| Code point | Name                | Abbreviation | Description                                            | Escape sequence |
| ---------- | ------------------- | ------------ | ------------------------------------------------------ | --------------- |
| U+000A     | Line Feed           | \<LF>        | New line character in UNIX systems.                    | \n              |
| U+000D     | Carriage Return     | \<CR>        | New line character in Commodore and early Mac systems. | \r              |
| U+2028     | Line Separator      | \<LS>        | [Wikipedia](https://en.wikipedia.org/wiki/Newline)     |                 |
| U+2029     | Paragraph Separator | \<PS>        | [Wikipedia](https://en.wikipedia.org/wiki/Newline)     |                 |

## Comments

Comments are used to add hints, notes, suggestions, or warnings to JavaScript code. This can make it easier to read and understand. They can also be used to disable code to prevent it from being executed; this can be a valuable debugging tool.

JavaScript has two long-standing ways to add comments to code: line comments and block comments. In addition, there's a special hashbang comment syntax.

### Line comments

The first way is the `//` comment; this makes all text following it on the same line into a comment. For example:

```js
function comment() {
  // This is a one line JavaScript comment
  console.log("Hello world!");
}
comment();
```

### Block comments

The second way is the `/* */` style, which is much more flexible.

For example, you can use it on a single line:

```js
function comment() {
  /* This is a one line JavaScript comment */
  console.log("Hello world!");
}
comment();
```

You can also make multiple-line comments, like this:

```js
function comment() {
  /* This comment spans multiple lines. Notice
     that we don't need to end the comment until we're done. */
  console.log("Hello world!");
}
comment();
```

You can also use it in the middle of a line, if you wish, although this can make your code harder to read so it should be used with caution:

```js
function comment(x) {
  console.log("Hello " + x /* insert the value of x */ + " !");
}
comment("world");
```

In addition, you can use it to disable code to prevent it from running, by wrapping code in a comment, like this:

```js
function comment() {
  /* console.log("Hello world!"); */
}
comment();
```

In this case, the `console.log()` call is never issued, since it's inside a comment. Any number of lines of code can be disabled this way.

Block comments that contain at least one line terminator behave like [line terminators](#line_terminators) in [automatic semicolon insertion](#automatic_semicolon_insertion).

### Hashbang comments

There's a special third comment syntax, the **hashbang comment**. A hashbang comment behaves exactly like a single line-only (`//`) comment, except that it begins with `#!` and **is only valid at the absolute start of a script or module**. Note also that no whitespace of any kind is permitted before the `#!`. The comment consists of all the characters after `#!` up to the end of the first line; only one such comment is permitted.

Hashbang comments in JavaScript resemble [shebangs in Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) which provide the path to a specific JavaScript interpreter that you want to use to execute the script. Before the hashbang comment became standardized, it had already been de-facto implemented in non-browser hosts like Node.js, where it was stripped from the source text before being passed to the engine. An example is as follows:

```js
#!/usr/bin/env node

console.log("Hello world");
```

The JavaScript interpreter will treat it as a normal comment — it only has semantic meaning to the shell if the script is directly run in a shell.

> **Warning:** If you want scripts to be runnable directly in a shell environment, encode them in UTF-8 without a [BOM](https://en.wikipedia.org/wiki/Byte_order_mark). Although a BOM will not cause any problems for code running in a browser — because it's stripped during UTF-8 decoding, before the source text is analyzed — a Unix/Linux shell will not recognize the hashbang if it's preceded by a BOM character.

You must only use the `#!` comment style to specify a JavaScript interpreter. In all other cases just use a `//` comment (or multiline comment).

## Identifiers

An _identifier_ is used to link a value with a name. Identifiers can be used in various places:

```js
const decl = 1; // Variable declaration (may also be `let` or `var`)
function fn() {} // Function declaration
const obj = { key: "value" }; // Object keys
// Class declaration
class C {
  #priv = "value"; // Private property
}
lbl: console.log(1); // Label
```

In JavaScript, identifiers are commonly made of alphanumeric characters, underscores (`_`), and dollar signs (`$`). Identifiers are not allowed to start with numbers. However, JavaScript identifiers are not only limited to ASCII — many Unicode code points are allowed as well. Namely, any character in the [ID_Start](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Start%7D) category can start an identifier, while any character in the [ID_Continue](https://util.unicode.org/UnicodeJsps/list-unicodeset.jsp?a=%5Cp%7BID_Continue%7D) category can appear after the first character.

> **Note:** If, for some reason, you need to parse some JavaScript source yourself, do not assume all identifiers follow the pattern `/[A-Za-z_$][\w$]*/` (i.e. ASCII-only)! The range of identifiers can be described by the regex `/[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u` (excluding unicode escape sequences).

In addition, JavaScript allows using [Unicode escape sequences](#unicode_escape_sequences) in the form of `\u0000` or `\u{000000}` in identifiers, which encode the same string value as the actual Unicode characters. For example, `你好` and `\u4f60\u597d` are the same identifiers:

```js-nolint
const 你好 = "Hello";
console.log(\u4f60\u597d); // Hello
```

Not all places accept the full range of identifiers. Certain syntaxes, such as function declarations, function expressions, and variable declarations require using identifiers names that are not [reserved words](#reserved_words).

```js example-bad
function import() {} // Illegal: import is a reserved word.
```

Most notably, private properties and object properties allow reserved words.

```js
const obj = { import: "value" }; // Legal despite `import` being reserved
class C {
  #import = "value";
}
```

## Keywords

_Keywords_ are tokens that look like identifiers but have special meanings in JavaScript. For example, the keyword [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function) before a function declaration indicates that the function is asynchronous.

Some keywords are _reserved_, meaning that they cannot be used as an identifier for variable declarations, function declarations, etc. They are often called _reserved words_. [A list of these reserved words](#reserved_words) is provided below. Not all keywords are reserved — for example, `async` can be used as an identifier anywhere. Some keywords are only _contextually reserved_ — for example, `await` is only reserved within the body of an async function, and `let` is only reserved in strict mode code, or `const` and `let` declarations.

Identifiers are always compared by _string value_, so escape sequences are interpreted. For example, this is still a syntax error:

```js example-bad
const els\u{65} = 1;
// `els\u{65}` encodes the same identifier as `else`
```

### Reserved words

These keywords cannot be used as identifiers for variables, functions, classes, etc. anywhere in JavaScript source.

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/switch", "case")}}
- {{jsxref("Statements/try...catch", "catch")}}
- {{jsxref("Statements/class", "class")}}
- {{jsxref("Statements/const", "const")}}
- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/debugger", "debugger")}}
- {{jsxref("Statements/switch", "default")}}
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Statements/do...while", "do")}}
- {{jsxref("Statements/if...else", "else")}}
- {{jsxref("Statements/export", "export")}}
- [`extends`](/en-US/docs/Web/JavaScript/Reference/Classes/extends)
- [`false`](#boolean_literal)
- {{jsxref("Statements/try...catch", "finally")}}
- {{jsxref("Statements/for", "for")}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/if...else", "if")}}
- {{jsxref("Statements/import", "import")}}
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Operators/instanceof", "instanceof")}}
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Operators/null", "null")}}
- {{jsxref("Statements/return", "return")}}
- {{jsxref("Operators/super", "super")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/this", "this")}}
- {{jsxref("Statements/throw", "throw")}}
- [`true`](#boolean_literal)
- {{jsxref("Statements/try...catch", "try")}}
- {{jsxref("Operators/typeof", "typeof")}}
- {{jsxref("Statements/var", "var")}}
- {{jsxref("Operators/void", "void")}}
- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/with", "with")}}

The following are only reserved when they are found in strict mode code:

- {{jsxref("Statements/let", "let")}} (also reserved in `const`, `let`, and class declarations)
- [`static`](/en-US/docs/Web/JavaScript/Reference/Classes/static)
- {{jsxref("Operators/yield", "yield")}} (also reserved in generator function bodies)

The following are only reserved when they are found in module code or async function bodies:

- [`await`](/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Future reserved words

The following are reserved as future keywords by the ECMAScript specification. They have no special functionality at present, but they might at some future time, so they cannot be used as identifiers.

These are always reserved:

- `enum`

The following are only reserved when they are found in strict mode code:

- `implements`
- `interface`
- `package`
- `private`
- `protected`
- `public`

#### Future reserved words in older standards

The following are reserved as future keywords by older ECMAScript specifications (ECMAScript 1 till 3).

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

### Identifiers with special meanings

A few identifiers have a special meaning in some contexts without being reserved words of any kind. They include:

- {{jsxref("Functions/arguments", "arguments")}} (not a keyword, but cannot be declared as identifier in strict mode)
- `as` ([`import * as ns from "mod"`](/en-US/docs/Web/JavaScript/Reference/Statements/import#namespace_import))
- [`async`](/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- {{jsxref("Global_Objects/eval", "eval")}} (not a keyword, but cannot be declared as identifier in strict mode)
- `from` ([`import x from "mod"`](/en-US/docs/Web/JavaScript/Reference/Statements/import))
- {{jsxref("Functions/get", "get")}}
- [`of`](/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- {{jsxref("Functions/set", "set")}}

## Literals

> **Note:** This section discusses literals that are atomic tokens. [Object literals](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) and [array literals](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#array_literal_notation) are [expressions](/en-US/docs/Web/JavaScript/Reference/Operators) that consist of a series of tokens.

### Null literal

See also [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) for more information.

```js-nolint
null
```

### Boolean literal

See also [boolean type](/en-US/docs/Web/JavaScript/Data_structures#boolean_type) for more information.

```js-nolint
true
false
```

### Numeric literals

The [Number](/en-US/docs/Web/JavaScript/Data_structures#number_type) and [BigInt](/en-US/docs/Web/JavaScript/Data_structures#bigint_type) types use numeric literals.

#### Decimal

```js-nolint
1234567890
42
```

Decimal literals can start with a zero (`0`) followed by another decimal digit, but if all digits after the leading `0` are smaller than 8, the number is interpreted as an octal number. This is considered a legacy syntax, and number literals prefixed with `0`, whether interpreted as octal or decimal, cause a syntax error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode#legacy_octal_literals) — so, use the `0o` prefix instead.

```js-nolint example-bad
0888 // 888 parsed as decimal
0777 // parsed as octal, 511 in decimal
```

##### Exponential

The decimal exponential literal is specified by the following format: `beN`; where `b` is a base number (integer or floating), followed by an `E` or `e` character (which serves as separator or _exponent indicator_) and `N`, which is _exponent_ or _power_ number – a signed integer.

```js-nolint
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
```

#### Binary

Binary number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "B" (`0b` or `0B`). Any character after the `0b` that is not 0 or 1 will terminate the literal sequence.

```js-nolint
0b10000000000000000000000000000000 // 2147483648
0b01111111100000000000000000000000 // 2139095040
0B00000000011111111111111111111111 // 8388607
```

#### Octal

Octal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "O" (`0o` or `0O)`. Any character after the `0o` that is outside the range (01234567) will terminate the literal sequence.

```js-nolint
0O755 // 493
0o644 // 420
```

#### Hexadecimal

Hexadecimal number syntax uses a leading zero followed by a lowercase or uppercase Latin letter "X" (`0x` or `0X`). Any character after the `0x` that is outside the range (0123456789ABCDEF) will terminate the literal sequence.

```js-nolint
0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
```

#### BigInt literal

The [BigInt](/en-US/docs/Web/JavaScript/Data_structures#bigint_type) type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. BigInt literals are created by appending `n` to the end of an integer.

```js-nolint
123456789123456789n     // 123456789123456789
0o777777777777n         // 68719476735
0x123456789ABCDEFn      // 81985529216486895
0b11101001010101010101n // 955733
```

BigInt literals cannot start with `0` to avoid confusion with legacy octal literals.

```js example-bad
0755n;
// SyntaxError: invalid BigInt syntax
```

For octal `BigInt` numbers, always use zero followed by the letter "o" (uppercase or lowercase):

```js example-good
0o755n;
```

For more information about `BigInt`, see also [JavaScript data structures](/en-US/docs/Web/JavaScript/Data_structures#bigint_type).

#### Numeric separators

To improve readability for numeric literals, underscores (`_`, `U+005F`) can be used as separators:

```js-nolint
1_000_000_000_000
1_050.95
0b1010_0001_1000_0101
0o2_2_5_6
0xA0_B0_C0
1_000_000_000_000_000_000_000n
```

Note these limitations:

```js example-bad
// More than one underscore in a row is not allowed
100__000; // SyntaxError

// Not allowed at the end of numeric literals
100_; // SyntaxError

// Can not be used after leading 0
0_1; // SyntaxError
```

### String literals

A [string](/en-US/docs/Web/JavaScript/Data_structures#string_type) literal is zero or more Unicode code points enclosed in single or double quotes. Unicode code points may also be represented by an escape sequence. All code points may appear literally in a string literal except for these code points:

- U+005C \ (backslash)
- U+000D \<CR>
- U+000A \<LF>
- The same kind of quote that begins the string literal

Any code points may appear in the form of an escape sequence. String literals evaluate to ECMAScript String values. When generating these String values Unicode code points are UTF-16 encoded.

```js-nolint
'foo'
"bar"
```

The following subsections describe various escape sequences (`\` followed by one or more characters) available in string literals. Any escape sequence not listed below becomes an "identity escape" that becomes the code point itself. For example, `\z` is the same as `z`. There's a deprecated octal escape sequence syntax described in the [Deprecated and obsolete features](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#escape_sequences) page. Many of these escape sequences are also valid in regular expressions — see [Character escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape).

#### Escape sequences

Special characters can be encoded using escape sequences:

| Escape sequence                                        | Unicode code point                           |
| ------------------------------------------------------ | -------------------------------------------- |
| `\0`                                                   | null character (U+0000 NULL)                 |
| `\'`                                                   | single quote (U+0027 APOSTROPHE)             |
| `\"`                                                   | double quote (U+0022 QUOTATION MARK)         |
| `\\`                                                   | backslash (U+005C REVERSE SOLIDUS)           |
| `\n`                                                   | newline (U+000A LINE FEED; LF)               |
| `\r`                                                   | carriage return (U+000D CARRIAGE RETURN; CR) |
| `\v`                                                   | vertical tab (U+000B LINE TABULATION)        |
| `\t`                                                   | tab (U+0009 CHARACTER TABULATION)            |
| `\b`                                                   | backspace (U+0008 BACKSPACE)                 |
| `\f`                                                   | form feed (U+000C FORM FEED)                 |
| `\` followed by a [line terminator](#line_terminators) | empty string                                 |

The last escape sequence, `\` followed by a line terminator, is useful for splitting a string literal across multiple lines without changing its meaning.

```js
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Make sure there is no space or any other character after the backslash (except for a line break), otherwise it will not work. If the next line is indented, the extra spaces will also be present in the string's value.

You can also use the [`+`](/en-US/docs/Web/JavaScript/Reference/Operators/Addition) operator to append multiple strings together, like this:

```js
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Both of the above methods result in identical strings.

#### Hexadecimal escape sequences

Hexadecimal escape sequences consist of `\x` followed by exactly two hexadecimal digits representing a code unit or code point in the range 0x0000 to 0x00FF.

```js
"\xA9"; // "©"
```

#### Unicode escape sequences

A Unicode escape sequence consists of exactly four hexadecimal digits following `\u`. It represents a code unit in the UTF-16 encoding. For code points U+0000 to U+FFFF, the code unit is equal to the code point. Code points U+10000 to U+10FFFF require two escape sequences representing the two code units (a surrogate pair) used to encode the character; the surrogate pair is distinct from the code point.

See also {{jsxref("String.fromCharCode()")}} and {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Unicode code point escapes

A Unicode code point escape consists of `\u{`, followed by a code point in hexadecimal base, followed by `}`. The value of the hexadecimal digits must be in the range 0 and 0x10FFFF inclusive. Code points in the range U+10000 to U+10FFFF do not need to be represented as a surrogate pair.

See also {{jsxref("String.fromCodePoint()")}} and {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// the same character represented as a surrogate pair
"\uD87E\uDC04";
```

### Regular expression literals

Regular expression literals are enclosed by two forward slashes (`/`). The lexer consumes all characters up to the next unescaped forward slash or the end of the line, unless the forward slash appears within a character class (`[]`). Some characters (namely, those that are [identifier parts](#identifiers)) can appear after the closing slash, denoting flags.

The lexical grammar is very lenient: not all regular expression literals that get identified as one token are valid regular expressions.

See also {{jsxref("RegExp")}} for more information.

```js-nolint
/ab+c/g
/[/]/
```

A regular expression literal cannot start with two forward slashes (`//`), because that would be a line comment. To specify an empty regular expression, use `/(?:)/`.

### Template literals

One template literal consists of several tokens: `` `xxx${`` (template head), `}xxx${` (template middle), and ``}xxx` `` (template tail) are individual tokens, while any expression may come between them.

See also [template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals) for more information.

```js-nolint
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
```

## Automatic semicolon insertion

Some [JavaScript statements](/en-US/docs/Web/JavaScript/Reference/Statements)' syntax definitions require semicolons (`;`) at the end. They include:

- [`var`](/en-US/docs/Web/JavaScript/Reference/Statements/var), [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let), [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Expression statements](/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement)
- [`do...while`](/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [`continue`](/en-US/docs/Web/JavaScript/Reference/Statements/continue), [`break`](/en-US/docs/Web/JavaScript/Reference/Statements/break), [`return`](/en-US/docs/Web/JavaScript/Reference/Statements/return), [`throw`](/en-US/docs/Web/JavaScript/Reference/Statements/throw)
- [`debugger`](/en-US/docs/Web/JavaScript/Reference/Statements/debugger)
- Class field declarations ([public](/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields) or [private](/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields))
- [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import), [`export`](/en-US/docs/Web/JavaScript/Reference/Statements/export)

However, to make the language more approachable and convenient, JavaScript is able to automatically insert semicolons when consuming the token stream, so that some invalid token sequences can be "fixed" to valid syntax. This step happens after the program text has been parsed to tokens according to the lexical grammar. There are three cases when semicolons are automatically inserted:

1\. When a token not allowed by the grammar is encountered, and it's separated from the previous token by at least one [line terminator](#line_terminators) (including a block comment that includes at least one line terminator), or the token is "}", then a semicolon is inserted before the token.

```js-nolint
{ 1
2 } 3

// is transformed by ASI into:

{ 1
;2 ;} 3;

// Which is valid grammar encoding three statements,
// each consisting of a number literal
```

The ending ")" of [`do...while`](/en-US/docs/Web/JavaScript/Reference/Statements/do...while) is taken care of as a special case by this rule as well.

```js-nolint
do {
  // ...
} while (condition) /* ; */ // ASI here
const a = 1
```

However, semicolons are not inserted if the semicolon would then become the separator in the [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) statement's head.

```js example-bad
for (
  let a = 1 // No ASI here
  a < 10 // No ASI here
  a++
) {}
```

Semicolons are also never inserted as [empty statements](/en-US/docs/Web/JavaScript/Reference/Statements/Empty). For example, in the code below, if a semicolon is inserted after ")", then the code would be valid, with an empty statement as the `if` body and the `const` declaration being a separate statement. However, because automatically inserted semicolons cannot become empty statements, this causes a [declaration](/en-US/docs/Web/JavaScript/Reference/Statements#difference_between_statements_and_declarations) to become the body of the `if` statement, which is not valid.

```js example-bad
if (Math.random() > 0.5)
const x = 1 // SyntaxError: Unexpected token 'const'
```

2\. When the end of the input stream of tokens is reached, and the parser is unable to parse the single input stream as a complete program, a semicolon is inserted at the end.

```js-nolint
const a = 1 /* ; */ // ASI here
```

This rule is a complement to the previous rule, specifically for the case where there's no "offending token" but the end of input stream.

3\. When the grammar forbids line terminators in some place but a line terminator is found, a semicolon is inserted. These places include:

- `expr <here> ++`, `expr <here> --`
- `continue <here> lbl`
- `break <here> lbl`
- `return <here> expr`
- `throw <here> expr`
- `yield <here> expr`
- `yield <here> * expr`
- `(param) <here> => {}`
- `async <here> function`, `async <here> prop()`, `async <here> function*`, `async <here> *prop()`, `async <here> (param) <here> => {}`

Here [`++`](/en-US/docs/Web/JavaScript/Reference/Operators/Increment) is not treated as a postfix operator applying to variable `b`, because a line terminator occurs between `b` and `++`.

```js-nolint
a = b
++c

// is transformed by ASI into

a = b;
++c;
```

Here, the `return` statement returns `undefined`, and the `a + b` becomes an unreachable statement.

```js-nolint
return
a + b

// is transformed by ASI into

return;
a + b;
```

Note that ASI would only be triggered if a line break separates tokens that would otherwise produce invalid syntax. If the next token can be parsed as part of a valid structure, semicolons would not be inserted. For example:

```js-nolint example-bad
const a = 1
(1).toString()

const b = 1
[1, 2, 3].forEach(console.log)
```

Because `()` can be seen as a function call, it would usually not trigger ASI. Similarly, `[]` may be a member access. The code above is equivalent to:

```js-nolint example-bad
const a = 1(1).toString();

const b = 1[1, 2, 3].forEach(console.log);
```

This happens to be valid syntax. `1[1, 2, 3]` is a [property accessor](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) with a [comma](/en-US/docs/Web/JavaScript/Reference/Operators/Comma_operator)-joined expression. Therefore, you would get errors like "1 is not a function" and "Cannot read properties of undefined (reading 'forEach')" when running the code.

Within classes, class fields and generator methods can be a pitfall as well.

```js example-bad
class A {
  a = 1
  *gen() {}
}
```

It is seen as:

```js example-bad
class A {
  a = 1 * gen() {}
}
```

And therefore will be a syntax error around `{`.

There are the following rules-of-thumb for dealing with ASI, if you want to enforce semicolon-less style:

- Write postfix `++` and `--` on the same line as their operands.

  ```js-nolint example-bad
  const a = b
  ++
  console.log(a) // ReferenceError: Invalid left-hand side expression in prefix operation
  ```

  ```js-nolint example-good
  const a = b++
  console.log(a)
  ```

- The expressions after `return`, `throw`, or `yield` should be on the same line as the keyword.

  ```js-nolint example-bad
  function foo() {
    return
      1 + 1 // Returns undefined; 1 + 1 is ignored
  }
  ```

  ```js-nolint example-good
  function foo() {
    return 1 + 1
  }

  function foo() {
    return (
      1 + 1
    )
  }
  ```

- Similarly, the label identifier after `break` or `continue` should be on the same line as the keyword.

  ```js-nolint example-bad
  outerBlock: {
    innerBlock: {
      break
        outerBlock // SyntaxError: Illegal break statement
    }
  }
  ```

  ```js-nolint example-good
  outerBlock: {
    innerBlock: {
      break outerBlock
    }
  }
  ```

- The `=>` of an arrow function should be on the same line as the end of its parameters.

  ```js-nolint example-bad
  const foo = (a, b)
    => a + b
  ```

  ```js-nolint example-good
  const foo = (a, b) =>
    a + b
  ```

- The `async` of async functions, methods, etc. cannot be directly followed by a line terminator.

  ```js-nolint example-bad
  async
  function foo() {}
  ```

  ```js-nolint example-good
  async function
  foo() {}
  ```

- If a line starts with one of `(`, `[`, `` ` ``, `+`, `-`, `/` (as in regex literals), prefix it with a semicolon, or end the previous line with a semicolon.

  ```js-nolint example-bad
  // The () may be merged with the previous line as a function call
  (() => {
    // ...
  })()

  // The [ may be merged with the previous line as a property access
  [1, 2, 3].forEach(console.log)

  // The ` may be merged with the previous line as a tagged template literal
  `string text ${data}`.match(pattern).forEach(console.log)

  // The + may be merged with the previous line as a binary + expression
  +a.toString()

  // The - may be merged with the previous line as a binary - expression
  -a.toString()

  // The / may be merged with the previous line as a division expression
  /pattern/.exec(str).forEach(console.log)
  ```

  ```js-nolint example-good
  ;(() => {
    // ...
  })()
  ;[1, 2, 3].forEach(console.log)
  ;`string text ${data}`.match(pattern).forEach(console.log)
  ;+a.toString()
  ;-a.toString()
  ;/pattern/.exec(str).forEach(console.log)
  ```

- Class fields should preferably always be ended with semicolons — in addition to the previous rule (which includes a field declaration followed by a [computed property](/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names), since the latter starts with `[`), semicolons are also required between a field declaration and a generator method.

  ```js-nolint example-bad
  class A {
    a = 1
    [b] = 2
    *gen() {} // Seen as a = 1[b] = 2 * gen() {}
  }
  ```

  ```js-nolint example-good
  class A {
    a = 1;
    [b] = 2;
    *gen() {}
  }
  ```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Grammar and types](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Micro-feature from ES6, now in Firefox Aurora and Nightly: binary and octal numbers](https://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/) by Jeff Walden (2013)
- [JavaScript character escape sequences](https://mathiasbynens.be/notes/javascript-escapes) by Mathias Bynens (2011)
