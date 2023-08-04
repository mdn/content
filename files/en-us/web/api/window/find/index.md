---
title: "Window: find() method"
short-title: find()
slug: Web/API/Window/find
page-type: web-api-instance-method
status:
  - non-standard
browser-compat: api.Window.find
---

{{ApiRef}}{{Non-standard_Header}}

> **Note:** Support for `Window.find()` might change in future
> versions of Gecko. See [Webkit bug 672395](https://bugzil.la/672395).

The **`Window.find()`** method finds a string in a window sequentially.

## Syntax

```js-nolint
find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)
```

### Parameters

- `aString`
  - : The text string for which to search.
- `aCaseSensitive`
  - : A boolean value. If `true`, specifies a case-sensitive search.
- `aBackwards`
  - : A boolean value. If `true`, specifies a backward search.
- `aWrapAround`
  - : A boolean value. If `true`, specifies a wrap around search.
- `aWholeWord` {{Unimplemented_Inline}}
  - : A boolean value. If `true`, specifies a whole word search. This is not implemented; see [Firefox bug 481513](https://bugzil.la/481513).
- `aSearchInFrames`
  - : A boolean value. If `true`, specifies a search in frames.

### Return value

`true` if the string is found; otherwise, `false`.

## Examples

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent = `String found? ${window.find(
    text,
  )}`;
}
```

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" onClick='findString("Apples")'>Search for Apples</button>
<button type="button" onClick='findString("Bananas")'>
  Search for Bananas
</button>
<button type="button" onClick='findString("Orange")'>Search for Orange</button>

<p id="output"></p>
```

### Result

{{EmbedLiveSample("Examples")}}

## Notes

In some browsers, `Window.find()` selects (highlights) the found content on
the site.

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
