---
title: Regular expressions
slug: Web/JavaScript/Reference/Regular_expressions
---

{{JsSidebar}}

A **regular expression** (_regex_ for short) enable

## Description

### Regular expression literal

### Regex flags

### Assertions

- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
  - : Asserts that the current position is the start or end of input, or start or end of a line if the `m` flag is set.
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
  - : Asserts that the current position is a word boundary.
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
  - : Asserts that the current position is followed or not followed by a certain pattern.
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
  - : Asserts that the current position is preceded or not preceded by a certain pattern.

### Atoms

- [Wildcard: `.`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
  - : Matches any character except line terminators, unless the `s` flag is set.
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
  - : Matches any character in or not in a set of characters.
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
  - : Matches a subpattern and remembers information about the match.
- [Non-capturing group: `(?:...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
  - : Matches a subpattern without remembering information about the match.
- [Named capturing group: `(?<name>...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
  - : Matches a subpattern and remembers information about the match. The group can later be identified by a custom name instead of by its index in the pattern.
- [Backreference: `\1`, `\2`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
  - : Matches a previously matched subpattern captured with a capturing group.
- [Named backreference: `\k<name>`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
  - : Matches a previously matched subpattern captured with a named capturing group.
- [Character class escape: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
  - : Matches any character in or not in a predefined set of characters.
- [Unicode character class escape: `\p{...}`, `\P{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
  - : Matches any character in or not in a set of Unicode characters identified by a Unicode property.
- [Character escape: `\n`, `\u{...}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
  - : Matches a character that may not be able to be conveniently represented in its literal form.

### Other features

- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
  - : Matches an atom a certain number of times.
- [Disjunction: `|`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
  - : Matches any of a set of alternatives separated by the `|` character.
