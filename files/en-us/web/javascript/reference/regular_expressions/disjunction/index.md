---
title: "Disjunction: |"
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
page-type: javascript-language-feature
browser-compat: javascript.regular_expressions.disjunction
---

{{jsSidebar}}

A **disjunction** specifies multiple alternatives. Any alternative matching the input causes the entire disjunction to be matched.

## Syntax

```regex
alternative1|alternative2
alternative1|alternative2|alternative3|…
```

### Parameters

- `alternativeN`
  - : One alternative pattern, composed of a sequence of [atoms and assertions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions#assertions). Successfully matching one alternative causes the entire disjunction to be matched.

## Description

The `|` regular expression operator separates two or more _alternatives_. The pattern first tries to match the first alternative; if it fails, it tries to match the second one, and so on. For example, the following matches `"a"` instead of `"ab"`, because the first alternative already matches successfully:

```js
/a|ab/.exec("abc"); // ['a']
```

The `|` operator has the lowest precedence in a regular expression. If you want to use a disjunction as a part of a bigger pattern, you must [group](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group) it.

When a grouped disjunction has more expressions after it, the matching begins by selecting the first alternative and attempting to match the rest of the regular expression. If the rest of the regular expression fails to match, the matcher tries the next alternative instead. For example,

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc"); // ['abc', 'a', undefined, undefined, 'bc']
// Not ['abc', undefined, 'ab', 'c', undefined]
```

This is because by selecting `a` in the first alternative, it's possible to select `bc` in the second alternative and result in a successful match. This process is called _backtracking_, because the matcher first goes beyond the disjunction and then comes back to it when subsequent matching fails.

Note also that any capturing parentheses inside an alternative that's not matched produce `undefined` in the resulting array.

An alternative can be empty, in which case it matches the empty string (in other words, always matches).

Alternatives are always attempted left-to-right, regardless of the direction of matching (which is reversed in a [lookbehind](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)).

## Examples

### Matching file extensions

The following example matches file extensions, using the same code as the [input boundary assertion](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion#matching_file_extensions) article:

```js
function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}

isImage("image.png"); // true
isImage("image.jpg"); // true
isImage("image.pdf"); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Character classes](/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) guide
- [Regular expressions](/en-US/docs/Web/JavaScript/Reference/Regular_expressions)
- [Quantifier: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Character class: `[...]`, `[^...]`](/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
