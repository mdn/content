---
title: any-hover
slug: Web/CSS/@media/any-hover
page-type: css-media-feature
browser-compat: css.at-rules.media.any-hover
---

{{CSSRef}}

The **`any-hover`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) can be used to test whether _any_ available input mechanism can hover over elements.

## Syntax

The `any-hover` feature is specified as a keyword value chosen from the list below.

- `none`
  - : None of the available input mechanism(s) can hover conveniently, or there is no pointing input mechanism.
- `hover`
  - : One or more available input mechanisms can conveniently hover over elements.

## Examples

### Testing whether input methods can hover

#### HTML

```html
<a href="#">Try hovering over me!</a>
```

#### CSS

```css
@media (any-hover: hover) {
  a:hover {
    background: yellow;
  }
}
```

#### Result

{{EmbedLiveSample("Testing_whether_input_methods_can_hover")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [the `hover` media feature](/en-US/docs/Web/CSS/@media/hover)
