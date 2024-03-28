---
title: "Lookbehind assertion: (?<=...), (?<!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.lookbehind_assertion
---

{{jsSidebar}}

A **lookbehind assertion** "looks behind": it attempts to match the previous input with the given pattern, but it does not consume any of the input — if the match is successful, the current position in the input stays the same. It matches each atom in its pattern in the reverse order.

## Syntax

```regex
(?<=pattern)
(?<!pattern)
```

### Parameters

- `pattern`
  - : A pattern consisting of anything you may use in a regex literal, including a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

A regular expression generally matches from left to right. This is why [lookahead](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion) and lookbehind assertions are called as such — lookahead asserts what's on the right, and lookbehind asserts what's on the left.

In order for a `(?<=pattern)` assertion to succeed, the `pattern` must match the input immediately to the left of the current position, but the current position is not changed before matching the subsequent input. The `(?<!pattern)` form negates the assertion — it succeeds if the `pattern` does not match the input immediately to the left of the current position.

Lookbehind generally has the same semantics as lookahead — however, within a lookbehind assertion, the regular expression matches _backwards_. For example,

```js
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

If the lookbehind matches from left to right, it should first greedily match `[ab]+`, which makes the first group capture `"ab"`, and the remaining `"c"` is captured by `[bc]+`. However, because `[bc]+` is matched first, it greedily grabs `"bc"`, leaving only `"a"` for `[ab]+`.

This behavior is reasonable — the matcher does not know where to _start_ the match (because the lookbehind may not be fixed-length), but it does know where to _end_ (at the current position). Therefore, it starts from the current position and works backwards. (Regexes in some other languages forbid non-fixed-length lookbehind to avoid this issue.)

For [quantified](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier) [capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) inside the lookbehind, the match furthest to the left of the input string — instead of the one on the right — is captured because of backward matching. See the capturing groups page for more information. [Backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) inside the lookbehind must appear on the _left_ of the group it's referring to, also due to backward matching. However, [disjunctions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction) are still attempted left-to-right.

## Examples

### Matching strings without consuming them

Similar to [lookaheads](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion#matching_strings_without_consuming_them), lookbehinds can be used to match strings without consuming them so that only useful information is extracted. For example, the following regex matches the number in a price label:

```js
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

A similar effect can be achieved by [capturing](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) the submatch you are interested in.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookahead assertion: `(?=...)`, `(?!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
