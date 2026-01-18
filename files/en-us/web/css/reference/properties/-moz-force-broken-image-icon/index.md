---
title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-force-broken-image-icon
sidebar: cssref
---

{{Non-standard_header}}{{Deprecated_Header}}

The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.

## Syntax

```css
-moz-force-broken-image-icon: 1;
-moz-force-broken-image-icon: 0;

/* Global values */
-moz-force-broken-image-icon: inherit;
-moz-force-broken-image-icon: initial;
-moz-force-broken-image-icon: revert;
-moz-force-broken-image-icon: revert-layer;
-moz-force-broken-image-icon: unset;
```

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : A value of `1` means that the broken image icon is shown even if the image has an [`alt`](/en-US/docs/Web/HTML/Reference/Elements/img#alt) attribute. When the value `0` is used, the image will act as usual and only display the `alt` attribute.

> [!NOTE]
> Even if the value is set to `1` the `alt` attribute will still be displayed, alongside the broken image icon.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntaxRaw(`-moz-force-broken-image-icon = <integer>`)}}

## Examples

### HTML

```html
<img src="/broken/image/link.png" alt="Broken image link" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### Result

{{EmbedLiveSample('Examples','125','125')}}

> [!NOTE]
> The alt text may not be visible if `-moz-force-broken-image-icon` is set to `1` and the image has no (or too small) `height` or `width` set.

## Notes

- This property will only work in Gecko-based browsers.
- The use of this property is not recommended. A proper `alt` attribute should be used instead.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Firefox bug 58646](https://bugzil.la/58646)
