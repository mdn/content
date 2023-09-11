---
title: "RegExp: lastIndex"
slug: Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.RegExp.lastIndex
---

{{JSRef}}

The **`lastIndex`** data property of a {{jsxref("RegExp")}} instance specifies the index at which to start the next match.

{{EmbedInteractiveExample("pages/js/regexp-lastindex.html")}}

## Value

A non-negative integer.

{{js_property_attributes(1, 0, 0)}}

## Description

This property is set only if the regular expression instance used the `g` flag to indicate a global search, or the `y` flag to indicate a sticky search. The following rules apply when {{jsxref("RegExp.prototype.exec()", "exec()")}} is called on a given input:

- If `lastIndex` is greater than the length of the input, `exec()` will not find a match, and `lastIndex` will be set to 0.
- If `lastIndex` is equal to or less than the length of the input, `exec()` will attempt to match the input starting from `lastIndex`.
  - If `exec()` finds a match, then `lastIndex` will be set to the position of the end of the matched string in the input.
  - If `exec()` does not find a match, then `lastIndex` will be set to 0.

Other regex-related methods, such as {{jsxref("RegExp.prototype.test()")}}, {{jsxref("String.prototype.match()")}}, {{jsxref("String.prototype.replace()")}}, etc., call `exec()` under the hood, so they have different effects on `lastIndex`. See their respective pages for details.

## Examples

### Using lastIndex

Consider the following sequence of statements:

```js
const re = /(hi)?/g;
```

Matches the empty string.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Returns `["hi", "hi"]` with `lastIndex` equal to 2.

```js
console.log(re.exec("hi"));
console.log(re.lastIndex);
```

Returns `["", undefined]`, an empty array whose zeroth element is the match string. In this case, the empty string because `lastIndex` was 2 (and still is 2) and `hi` has length 2.

### Using lastIndex with sticky regexes

The `lastIndex` property is writable. You can set it to make the regex start its next search at a given index.

The `y` flag almost always requires setting `lastIndex`. It always matches strictly at `lastIndex` and does not attempt any later positions. This is usually useful for writing parsers, when you want to match tokens only at the current position.

```js
const stringPattern = /"[^"]*"/y;
const input = `const message = "Hello world";`;

stringPattern.lastIndex = 6;
console.log(stringPattern.exec(input)); // null

stringPattern.lastIndex = 16;
console.log(stringPattern.exec(input)); // ['"Hello world"']
```

### Rewinding lastIndex

The `g` flag also benefits from setting `lastIndex`. One common use case is when the string is modified in the middle of a global search. In this case, we may miss a particular match if the string is shortened. We can avoid this by rewinding `lastIndex`.

```js
const mdLinkPattern = /\[[^[\]]+\]\((?<link>[^()\s]+)\)/dg;

function resolveMDLink(line) {
  let match;
  let modifiedLine = line;
  while ((match = mdLinkPattern.exec(modifiedLine))) {
    const originalLink = match.groups.link;
    const resolvedLink = originalLink.replaceAll(/^files|\/index\.md$/g, "");
    modifiedLine =
      modifiedLine.slice(0, match.indices.groups.link[0]) +
      resolvedLink +
      modifiedLine.slice(match.indices.groups.link[1]);
    // Rewind the pattern to the end of the resolved link
    mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length;
  }
  return modifiedLine;
}

console.log(
  resolveMDLink(
    "[`lastIndex`](files/en-us/web/javascript/reference/global_objects/regexp/lastindex/index.md)",
  ),
); // [`lastIndex`](/en-us/web/javascript/reference/global_objects/regexp/lastindex)
console.log(
  resolveMDLink(
    "[`ServiceWorker`](files/en-us/web/api/serviceworker/index.md) and [`SharedWorker`](files/en-us/web/api/sharedworker/index.md)",
  ),
); // [`ServiceWorker`](/en-us/web/api/serviceworker) and [`SharedWorker`](/en-us/web/api/sharedworker)
```

Try deleting the `mdLinkPattern.lastIndex += resolvedLink.length - originalLink.length` line and running the second example. You will find that the second link is not replaced correctly, because the `lastIndex` is already past the link's index after the string is shortened.

> **Warning:** This example is for demonstration only. To deal with Markdown, you should probably use a parsing library instead of regex.

### Optimizing searching

You can optimize searching by setting `lastIndex` to a point where previous possible occurrences can be ignored. For example, instead of this:

```js
const stringPattern = /"[^"]*"/g;
const input = `const message = "Hello " + "world";`;

// Pretend we've already dealt with the previous parts of the string
let offset = 26;
const remainingInput = input.slice(offset);
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset += nextString.index + nextString.length;
```

Consider this:

```js
stringPattern.lastIndex = offset;
const nextString = stringPattern.exec(remainingInput);
console.log(nextString[0]); // "world"
offset = stringPattern.lastIndex;
```

This is potentially more performant because we avoid string slicing.

### Avoiding side effects

The side effects caused by `exec()` can be confusing, especially if the input is different for each `exec()`.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
console.log(re.test("foo baz")); // false, because lastIndex is non-zero
```

This is even more confusing when you are hand-modifying `lastIndex`. To contain the side effects, remember to reset `lastIndex` after each input is completely processed.

```js
const re = /foo/g;
console.log(re.test("foo bar")); // true
re.lastIndex = 0;
console.log(re.test("foo baz")); // true
```

With some abstraction, you can require `lastIndex` to be set to a particular value before each `exec()` call.

```js
function createMatcher(pattern) {
  // Create a copy, so that the original regex is never updated
  const regex = new RegExp(pattern, "g");
  return (input, offset) => {
    regex.lastIndex = offset;
    return regex.exec(input);
  };
}

const matchFoo = createMatcher(/foo/);
console.log(matchFoo("foo bar", 0)[0]); // "foo"
console.log(matchFoo("foo baz", 0)[0]); // "foo"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("RegExp.prototype.dotAll")}}
- {{JSxRef("RegExp.prototype.global")}}
- {{JSxRef("RegExp.prototype.hasIndices")}}
- {{JSxRef("RegExp.prototype.ignoreCase")}}
- {{JSxRef("RegExp.prototype.multiline")}}
- {{JSxRef("RegExp.prototype.source")}}
- {{JSxRef("RegExp.prototype.sticky")}}
- {{JSxRef("RegExp.prototype.unicode")}}
