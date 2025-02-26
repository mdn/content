---
title: "SyntaxError: illegal character"
slug: Web/JavaScript/Reference/Errors/Illegal_character
page-type: javascript-error
---

{{jsSidebar("Errors")}}

The JavaScript exception "illegal character" occurs when the [lexer](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) reads a character that's not part of a string literal, and the character cannot constitute a valid token in the language.

## Message

```plain
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: illegal character U+201C (Firefox)
SyntaxError: Invalid character '\u201c' (Safari)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is an invalid character that the interpreter doesn't understand. You should either put it in a string literal or replace it with another character. Use an editor that supports syntax highlighting and carefully check your code
against mismatches like a minus sign (`-`) versus a dash (`–`)
or simple quotes (`"`) versus non-standard quotation marks (`“`).

## Examples

### Mismatched characters

Some characters look similar, but will cause the parser to fail interpreting your code.
Famous examples of this are quotes, the minus or semicolon
([greek question mark (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) looks same).

```js-nolint example-bad
“This looks like a string”; // SyntaxError: illegal character
// “ and ” are not " but look like it

42 – 13; // SyntaxError: illegal character
// – (en-dash) is not - but looks like it

const foo = "bar"; // SyntaxError: illegal character
// <37e> is not ; but looks like it
```

This should work:

```js example-good
"This is actually a string";
42 - 13;
const foo = "bar";
```

Some editors and IDEs will notify you or at least use a slightly different highlighting for it, but not all. When something like this happens to your code and you're not able to find the source of the problem, it's often best to just delete the problematic line and retype it.

### Forgotten characters

It's easy to forget a character here or there.

```js-nolint example-bad
const operators = ["+", "-", ×", "÷"];
// SyntaxError: illegal character U+00D7
```

Add the missing quote for `"×"`.

```js example-good
const operators = ["+", "-", "×", "÷"];
```

### Hidden characters

When copy pasting code from external sources, there might be invalid characters. Watch
out!

```js-nolint example-bad
const foo = "bar";​
// SyntaxError: illegal character
```

When inspecting this code in an editor like VIM, you can see that there is actually a
[zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) character.

```js-nolint
const foo = "bar";<200b>
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
