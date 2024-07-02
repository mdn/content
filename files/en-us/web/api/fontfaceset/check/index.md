---
title: "FontFaceSet: check() method"
short-title: check()
slug: Web/API/FontFaceSet/check
page-type: web-api-instance-method
browser-compat: api.FontFaceSet.check
---

{{APIRef("CSS Font Loading API")}}

The `check()` method of the {{domxref("FontFaceSet")}} returns `true` if you can render some text using the given font specification without attempting to use any fonts in this `FontFaceSet` that are not yet fully loaded. This means you can use the font specification without causing a [font swap](/en-US/docs/Web/CSS/@font-face/font-display).

## Syntax

```js-nolint
check(font)
check(font, text)
```

### Parameters

- `font`
  - : a font specification using the syntax for the CSS [`font`](/en-US/docs/Web/CSS/font) property, for example `"italic bold 16px Roboto"`
- `text`
  - : limit the font faces to those whose Unicode range contains at least one of the characters in text. This [does not check for individual glyph coverage](https://lists.w3.org/Archives/Public/www-style/2015Aug/0330.html).

### Return value

A {{jsxref("Boolean")}} value that is `true` if rendering text with the given font specification will not attempt to use any fonts in this `FontFaceSet` that are not yet fully loaded.

This means that all fonts in this `FontFaceSet` that are matched by the given font specification have a [`status`](/en-US/docs/Web/API/FontFace/status) property set to `"loaded"`.

Otherwise, this function returns `false`.

## Examples

In the following example, we create a new `FontFace` and add it to the `FontFaceSet`:

```js
const font = new FontFace(
  "molot",
  "url(https://interactive-examples.mdn.mozilla.net/media/fonts/molot.woff2)",
  {
    style: "normal",
    weight: "400",
    stretch: "condensed",
  },
);

document.fonts.add(font);
```

### Unloaded fonts

The font is not yet loaded, so `check("12px molot")` returns `false`, indicating that if we try to use the given font specification, we will trigger a font load:

```js
console.log(document.fonts.check("12px molot"));
// false: the matching font is in the set, but is not yet loaded
```

### System fonts

If we specify only a system font in the argument to `check()`, it returns `true`, because we can use the system font without loading any fonts from the set:

```js
console.log(document.fonts.check("12px Courier"));
// true: the matching font is a system font
```

### Nonexistent fonts

If we specify a font that is not in the `FontFaceSet` and is not a system font, `check()` returns `true`, because in this situation we will not rely on any fonts from the set:

```js
console.log(document.fonts.check("12px i-dont-exist"));
// true: the matching font is a nonexistent font
```

### System and unloaded fonts

If we specify both a system font and a font in the set that is not yet loaded, then `check()` returns `false`:

```js
console.log(document.fonts.check("12px molot, Courier"));
// false: `molot` is in the set but not yet loaded
```

### Fonts that are loading

If we specify a font from the set that is still loading, `check()` returns `false`:

```js
function check() {
  font.load();
  console.log(document.fonts.check("12px molot"));
  // false: font is still loading
  console.log(font.status);
  // "loading"
}

check();
```

### Fonts that have loaded

If we specify a font from the set that has loaded, `check()` returns `true`:

```js
async function check() {
  await font.load();
  console.log(document.fonts.check("12px molot"));
  // true: font has finished loading
  console.log(font.status);
  // "loaded"
}

check();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
