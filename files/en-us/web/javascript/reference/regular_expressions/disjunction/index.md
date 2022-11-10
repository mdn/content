---
title: Disjunction |
slug: Web/JavaScript/Reference/Regular_expressions/Disjunction
---

{{JsSidebar}}

A **disjunction** specifies multiple alternatives. Any alternative matching the input causes the entire disjunction to be matched.

## Syntax

```js-nolint
/alternative1|alternative2/
/alternative1|alternative2|alternative3/
```

### Parameters

- `alternativeN`
  - : One alternative pattern, composed of a sequence of [atoms and assertions](TODO). Successfully matching one alternative causes the entire disjunction to be matched.

## Description

The `|` regular expression operator separates two or more _alternatives_. The pattern first tries to match the first alternative; if it fails, it tries to match the second one, and so on. For example, the following returns `"a"` instead of `"ab"`, because the first alternative already matches successfully:

```js
/a|ab/.exec("abc");
```

The `|` operator has the lowest precedence in a regular expression. If you want to use a disjunction as a part of a bigger pattern, you must group it.

When a grouped disjunction has more expressions after it, the matching begins by selecting the first alternative and attempting to match the rest of the regular expression. If the rest of the regular expression fails to match, the matcher tries the next alternative instead. For example,

```js
/(?:(a)|(ab))(?:(c)|(bc))/.exec("abc");
```

returns the array

```js
["abc", "a", undefined, undefined, "bc"]
```

and not

```js
["abc", undefined, "ab", "c", undefined]
```

because by selecting `a` in the first alternative, it's possible to select `bc` in the second alternative and result in a successful match. This process is called _backtracking_, because the matcher first goes beyond the disjunction and then comes back to it when subsequent matching fails.

Note also that any capturing parentheses inside an alternative that's not matched produce `undefined` in the resulting array.

An alternative can be empty, in which case it matches the empty string (in other words, always matches).

Alternatives are always attempted left-to-right, regardless of the direction of matching.

## Examples
