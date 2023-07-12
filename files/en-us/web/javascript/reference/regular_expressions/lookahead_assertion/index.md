---
title: "Lookahead assertion: (?=...), (?!...)"
slug: Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.lookahead_assertion
---

{{JsSidebar}}

A **lookahead assertion** "looks ahead": it attempts to match the subsequent input with the given pattern, but it does not consume any of the input — if the match is successful, the current position in the input stays the same.

## Syntax

```regex
(?=pattern)
(?!pattern)
```

### Parameters

- `pattern`
  - : A pattern consisting of anything you may use in a regex literal, including a [disjunction](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction).

## Description

A regular expression generally matches from left to right. This is why lookahead and [lookbehind](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion) assertions are called as such — lookahead asserts what's on the right, and lookbehind asserts what's on the left.

In order for a `(?=pattern)` assertion to succeed, the `pattern` must match the text after the current position, but the current position is not changed. The `(?!pattern)` form negates the assertion — it succeeds if the `pattern` does not match at the current position.

The `pattern` can contain [capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group). See the capturing groups page for more information on the behavior in this case.

Unlike other regular expression operators, there's no backtracking into a lookahead — this behavior is inherited from Perl. This only matters when the `pattern` contains [capturing groups](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) and the pattern following the lookahead contains [backreferences](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Backreference) to those captures. For example:

```js
/(?=(a+))a*b\1/.exec("baabac"); // ['aba', 'a']
// Not ['aaba', 'a']
```

The matching of the pattern above happens as follows:

1. The lookahead `(a+)` succeeds before the first `"a"` in `"baabac"`, and `"aa"` is captured because the quantifier is greedy.
2. `a*b` matches the `"b"` in `"baabac"`.
3. `\1` does not match the following string, because that requires 2 `"a"`s, but only 1 is available. So the matcher backtracks, but it doesn't go into the lookahead, so the capturing group cannot be reduced to 1 `"a"`, and the entire match fails at this point.
4. `exec()` re-attempts matching at the next position — before the second `"a"`. This time, the lookahead matches `"a"`, and `a*b` matches `"b"`. The backreference `\1` matches the captured `"a"`, and the match succeeds.

If the regex is able to backtrack into the lookahead and revise the choice made in there, then the match would succeed at step 3 by `(a+)` matching the first `"a"` (instead of the first two `"a"`s) and `a*b` matching `"ab"`, without even re-attempting the next input position.

Negative lookaheads can contain capturing groups as well, but backreferences only make sense within the `pattern`, because if matching continues, `pattern` would necessarily be unmatched (otherwise the assertion fails). This means outside of the `pattern`, backreferences to those capturing groups in negative lookaheads always succeed. For example:

```js
/(.*?)a(?!(a+)b\2c)\2(.*)/.exec("baaabaac"); // ['baaabaac', 'ba', undefined, 'abaac']
```

The matching of the pattern above happens as follows:

1. The `(.*?)` pattern is non-greedy, so it starts by matching nothing. However, the next character is `a`, which fails to match `"b"` in the input.
2. The `(.*?)` pattern matches `"b"` so that the `a` in the pattern matches the first `"a"` in `"baaabaac"`.
3. At this position, the lookahead succeeds to match, because if `(a+)` matches `"aa"`, then `(a+)b\2c` matches `"aabaac"`. This causes the assertion to fail, so the matcher backtracks.
4. The `(.*?)` pattern matches the `"ba"` so that the `a` in the pattern matches the second `"a"` in `"baaabaac"`.
5. At this position, the lookahead fails to match, because the remaining input does not follow the pattern "any number of `"a"`s, a `"b"`, the same number of `"a"`s, a `c`". This causes the assertion to succeed.
6. However, because nothing was matched within the assertion, the `\2` backreference has no value, so it matches the empty string. This causes the rest of the input to be consumed by the `(.*)` at the end.

Normally, assertions cannot be [quantified](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier). However, in [Unicode-unaware mode](/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#unicode-aware_mode), lookahead assertions can be quantified. This is a [deprecated syntax for web compatibility](/en-US/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#regexp), and you should not rely on it.

```js
/(?=a)?b/.test("b"); // true; the lookahead is matched 0 time
```

## Examples

### Matching strings without consuming them

Sometimes it's useful to validate that the matched string is followed by something without returning that as the result. The following example matches a string that is followed by a comma/period, but the punctuation is not included in the result:

```js
function getFirstSubsentence(str) {
  return /^.*?(?=[,.])/.exec(str)?.[0];
}

getFirstSubsentence("Hello, world!"); // "Hello"
getFirstSubsentence("Thank you."); // "Thank you"
```

A similar effect can be achieved by [capturing](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) the submatch you are interested in.

### Pattern subtraction and intersection

Using lookahead, you can match a string multiple times with different patterns, which allows you to express complex relationships like subtraction (is X but not Y) and intersection (is both X and Y).

The following example matches any [identifier](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) that's not a [reserved word](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words) (only showing three reserved words here for brevity; more reserved words can be added to this disjunction). The `[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*` syntax describes exactly the set of identifier strings in the language spec; you can read more about identifiers in [lexical grammar](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) and the `\p` escape in [Unicode character class escape](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape).

```js
function isValidIdentifierName(str) {
  const re =
    /^(?!(?:break|case|catch)$)[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*$/u;
  return re.test(str);
}

isValidIdentifierName("break"); // false
isValidIdentifierName("foo"); // true
isValidIdentifierName("cases"); // true
```

The following example matches a string that's both ASCII and can be used as an identifier part:

```js
function isASCIIIDPart(char) {
  return /^(?=\p{ASCII}$)\p{ID_Start}$/u.test(char);
}

isASCIIIDPart("a"); // true
isASCIIIDPart("α"); // false
isASCIIIDPart(":"); // false
```

If you are doing intersection and subtraction with finitely many characters, you may want to use the [character set intersection](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class#v-mode_character_class) syntax enabled with the `v` flag.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Assertions](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions)
- [Regular expressions reference](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Input boundary assertion: `^`, `$`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Word boundary assertion: `\b`, `\B`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)
- [Lookbehind assertion: `(?<=...)`, `(?<!...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Capturing group: `(...)`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
