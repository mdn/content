---
title: Window.find()
slug: Web/API/Window/find
tags:
  - API
  - HTML DOM
  - Method
  - NeedsCompatTable
  - NeedsContent
  - Non-standard
  - Reference
  - Window
  - find
browser-compat: api.Window.find
---
{{ApiRef}}{{Non-standard_Header}}

> **Note:** Support for `Window.find()` might change in future
> versions of Gecko. See {{Bug("672395")}}.

The **`Window.find()`** method finds a string in a window sequentially.

## Syntax

```js
window.find(aString, aCaseSensitive, aBackwards, aWrapAround,
            aWholeWord, aSearchInFrames, aShowDialog);
```

- `aString`
  - : The text string for which to search.
- `aCaseSensitive`
  - : A boolean value. If `true`, specifies a case-sensitive search.
- `aBackwards`
  - : A boolean value. If `true`, specifies a backward search.
- `aWrapAround`
  - : A boolean value. If `true`, specifies a wrap around search.
- `aWholeWord` {{Unimplemented_Inline}}
  - : A boolean value. If `true`, specifies a whole word search. This is
    not implemented; see {{bug(481513)}}.
- `aSearchInFrames`
  - : A boolean value. If `true`, specifies a search in frames.

### Returns

`true` if the string is found; otherwise, `false`.

## Example

### JavaScript

```js
function findString(text) {
  document.querySelector("#output").textContent="String found? " + window.find(text);
}
```

### HTML

```html
<p>Apples, Bananas, and Oranges.</p>
<button type="button" onClick='findString("Apples")'>Search for Apples</button>
<button type="button" onClick='findString("Bananas")'>Search for Bananas</button>
<button type="button" onClick='findString("Orange")'>Search for Orange</button>

<p id="output"></p>
```

### Result

{{EmbedLiveSample("Example")}}

## Notes

In some browsers, `Window.find()` selects (highlights) the found content on
the site.

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
