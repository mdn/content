---
title: "-moz-force-broken-image-icon"
slug: Web/CSS/-moz-force-broken-image-icon
page-type: css-property
status:
  - deprecated
  - non-standard
browser-compat: css.properties.-moz-force-broken-image-icon
---

{{Non-standard_header}}{{CSSRef}}{{Deprecated_Header}}

The **`-moz-force-broken-image-icon`** extended CSS property can be used to force the broken image icon to be shown even when a broken image has an `alt` attribute.

## Syntax

### Values

- {{cssxref("&lt;integer&gt;")}}
  - : A value of `1` means that the broken image icon is shown even if the image has an [`alt`](/en-US/docs/Web/HTML/Element/img#alt) attribute. When the value `0` is used, the image will act as usual and only display the `alt` attribute.

> **Note:** Even if the value is set to `1` the `alt` attribute will still be displayed, alongside the broken image icon.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

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

> **Note:** Unless the image has a specified height and width the broken image icon will not be displayed but the alt attribute will also be hidden if `-moz-force-broken-image-icon` is set to `1`.

## Notes

- This property will only work in Gecko-based browsers.
- The use of this property is not recommended. A proper `alt` attribute should be used instead.

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

- [Webkit bug 58646](https://bugzil.la/58646)
