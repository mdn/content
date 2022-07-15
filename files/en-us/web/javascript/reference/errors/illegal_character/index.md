---
title: 'SyntaxError: illegal character'
slug: Web/JavaScript/Reference/Errors/Illegal_character
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
---
{{jsSidebar("Errors")}}

The JavaScript exception "illegal character" occurs when there is an invalid or
unexpected token that doesn't belong at this position in the code.

## Message

```
SyntaxError: Invalid character (Edge)
SyntaxError: illegal character (Firefox)
SyntaxError: Invalid or unexpected token (Chrome)
```

## Error type

{{jsxref("SyntaxError")}}

## What went wrong?

There is an invalid or unexpected token that doesn't belong at this position in the
code. Use an editor that supports syntax highlighting and carefully check your code
against mismatches like a minus sign (` - `) versus a dash (` – `)
or simple quotes (` " `) vs non-standard quotation marks (` " `).

## Examples

### Mismatched characters

Some characters look similar, but will cause the parser to fail interpreting your code.
Famous examples of this are quotes, the minus or semicolon
([greek question mark (U+37e)](https://en.wikipedia.org/wiki/Question_mark#Greek_question_mark) looks same).

```js example-bad
“This looks like a string”;  // SyntaxError: illegal character
                             // “ and ” are not " but look like this

42 – 13;                     // SyntaxError: illegal character
                             // – is not - but looks like this

const foo = 'bar';           // SyntaxError: illegal character
                             // <37e> is not ; but looks like this
```

This should work:

```js example-good
"This is actually a string";
42 - 13;
const foo = 'bar';
```

Some editors and IDEs will notify you or at least use a slightly different highlighting for it, but not all. When something like this happens to your code and you're not able to find the source of the problem, it's often best to just delete the problematic line and retype it.

### Forgotten characters

It's easy to forget a character here or there.

```js example-bad
const colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

Add the missing quote for `'#333'`.

```js example-good
const colors = ['#000', '#333', '#666'];
```

### Hidden characters

When copy pasting code from external sources, there might be invalid characters. Watch
out!

```js example-bad
const foo = 'bar';​
// SyntaxError: illegal character
```

When inspecting this code in an editor like Vim, you can see that there is actually a
[zero-width space (ZWSP) (U+200B)](https://en.wikipedia.org/wiki/Zero-width_space) character.

```
const foo = 'bar';<200b>
```

## See also

- [Lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)
