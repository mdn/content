---
title: "Wildcard: ."
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.wildcard
---

{{jsSidebar}}

A **wildcard** matches all characters except line terminators. It also matches line terminators if the `s` flag is set.

## Syntax

```regex
.
```

## Description

`.` matches any character except [line terminators](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators). If the [`s`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) flag is set, `.` also matches line terminators.

The exact character set matched by `.` depends on whether the regex is [Unicode-aware](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode). If it is Unicode-aware, `.` matches any Unicode code point; otherwise, it matches any UTF-16 code unit. For example:

```js
/../.test("😄"); // true; matches two UTF-16 code units as a surrogate pair
/../u.test("😄"); // false; input only has one Unicode character
```

## Examples

### Usage with quantifiers

Wildcards are often used with [quantifiers](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) to match any character sequence, until the next character of interest is found. For example, the following example extracts the title of a Markdown page in the form `# Title`:

```js
function parseTitle(entry) {
  // Use multiline mode because the title may not be at the start of
  // the file. Note that the m flag does not make . match line
  // terminators, so the title must be on a single line
  // Return text matched by the first capturing group.
  return /^#[ \t]+(.+)$/m.exec(entry)?.[1];
}

parseTitle("# Hello world"); // "Hello world"
parseTitle("## Subsection"); // undefined
parseTitle(`
---
slug: Web/JavaScript/Reference/Regular_expressions/Wildcard
---

# Wildcard: .

A **wildcard** matches all characters except line terminators.
`); // "Wildcard: ."
```

### Matching code block content

The following example matches the content of a code block enclosed by three backticks in Markdown. It uses the `s` flag to make `.` match line terminators, because the content of a code block may span multiple lines:

````js
function parseCodeBlock(entry) {
  return /^```.*?^(.+?)\n```/ms.exec(entry)?.[1];
}

parseCodeBlock(`
\`\`\`js
console.log("Hello world");
\`\`\`
`); // "console.log("Hello world");"

parseCodeBlock(`
A \`try...catch\` statement must have the blocks enclosed in curly braces.

\`\`\`js example-bad
try
  doSomething();
catch (e)
  console.log(e);
\`\`\`
`); // "try\n  doSomething();\ncatch (e)\n  console.log(e);"
````

> [!WARNING]
> These examples are for demonstration only. If you want to parse Markdown, use a dedicated Markdown parser because there are many edge cases to consider.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
