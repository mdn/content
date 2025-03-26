---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.modifier
---

{{jsSidebar}}

A **modifier** overrides [flag](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#regex_flags) settings in a specific part of a regular expression. It can be used to enable or disable flags that change the meanings of certain regex syntax elements. These flags are [`i`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase), [`m`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline), and [`s`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll).

## Syntax

```regex
(?flags1:pattern)
(?flags1-flags2:pattern)
```

> [!NOTE]
> JavaScript only has the "bounded" modifier form, where the pattern is placed inside the modifier group. Most other languages that support modifiers have an "unbounded" form, where the modifier is applied until the end of the closest containing group.

### Parameters

- `flags1` {{optional_inline}}
  - : A string of flags to enable. Can contain any combination of `i`, `m`, and `s`.
- `flags2` {{optional_inline}}
  - : A string of flags to disable. Can contain any combination of `i`, `m`, and `s`, but must not contain any flags included in `flags1`.
- `pattern`
  - : A pattern consisting of anything you may use in a regex literal, including a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

Some flags change the meanings of regex syntax elements:

- The [`i`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase) flag makes the regex case-insensitive by making all [literal characters](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) and [character classes](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class) implicitly be lowercase.
- The [`m`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline) flag changes the behavior of [input boundary assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion) `^` and `$` to match the start and end of each line, in addition to the start and end of the input string.
- The [`s`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll) flag changes the behavior of the [wildcard](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) `.` character to match any character, including line terminators.

Sometimes you may want these changes to only take effect in a specific part of a regex pattern. You can do so by wrapping that part in a modifier. For example:

```js
/(?i:Hello) world/;
```

In this regex, the `i` flag is only enabled for the `Hello` part of the pattern. The `world` part is case-sensitive. Therefore, it matches `Hello world`, `hello world`, and `HELLO world`, but not `HELLO WORLD`. The following is equivalent, by enabling the `i` flag globally, and then disabling it for the `world` part:

```js
/Hello (?-i:world)/i;
```

The `flags1` and `flags2` parameters can contain any combination of `i`, `m`, and `s`. However, the flags must all be unique between `flags1` and `flags2`—you cannot enable or disable a flag twice, or enable a flag and then immediately disable it.

The `flags1` and `flags2` parameters are optional, but at least one must be non-empty. `(?flags1-:pattern)` is a modifier that only enables flags (equivalent to `(?flags1:pattern)`). `(?-flags2:pattern)` is a modifier that only disables flags. `(?:pattern)` is just a [non-capturing group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group), and `(?-:pattern)` is a syntax error.

Other flags don't make sense in a modifier and are thus syntax errors if included:

- The [`g`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) and [`y`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) flags determine how multiple calls to [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) behave and affect matching behavior of the whole regex.
- The [`d`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) flag enables additional information in the [`exec()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec) result and affects matching behavior of the whole regex.
- The [`u`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode) and [`v`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets) flags change the behavior of the regex engine in a way that's too complex to be locally modified. They also have global effects on the regex, such as how the [`lastIndex`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex) is advanced.

## Examples

### Matching a multiline format only at the start of the string

The following regex defines a format for a multiline string. The first `^` represents the start of the whole input string, by being inside a `(?-m:)` modifier, while all other `^` characters represent the start of a line:

```js
const pattern = /(?-m:^)---\n^title:.*^slug:.*^---/ms;

const input = `---
title: "Modifier: (?ims-ims:...)"
slug: Web/JavaScript/Reference/Regular_expressions/Modifier
---`;

pattern.test(input); // true

// Extra line break at the start of string
const input2 = `\n${input}`;

pattern.test(input2); // false
```

### Matching certain words case-insensitively

Imagine you are finding all variable declarations called `foo` or `bar` (because they are bad names). The word may appear in any case, but you know the keyword is always lowercase, so you can do this:

```js
const pattern = /(?:var|let|const) (?i:foo|bar)\b/;

pattern.test("let foo;"); // true
pattern.test("const BAR = 1;"); // true
pattern.test("Let foo be a number"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Groups and backreferences](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
