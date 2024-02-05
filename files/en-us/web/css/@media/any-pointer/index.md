---
title: any-pointer
slug: Web/CSS/@media/any-pointer
page-type: css-media-feature
browser-compat: css.at-rules.media.any-pointer
---

{{CSSRef}}

The **`any-pointer`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/@media#media_features) tests whether the user has _any_ pointing device (such as a mouse), and if so, how accurate it is.

> **Note:** If you want to test the accuracy of the _primary_ pointing device, use [`pointer`](/en-US/docs/Web/CSS/@media/pointer) instead.

## Syntax

The `any-pointer` feature is specified as a keyword value chosen from the list below.

- `none`
  - : No pointing device is available.
- `coarse`
  - : At least one input mechanism includes a pointing device of limited accuracy.
- `fine`
  - : At least one input mechanism includes an accurate pointing device.

> **Note:** More than one value can match if the available devices have different characteristics, although `none` only matches when none of them are pointing devices.

## Examples

This example creates a small checkbox for users with at least one fine pointer and a large checkbox for users with at least one coarse pointer. The big checkbox takes precedence because it is declared after the small one.

### HTML

```html
<input id="test" type="checkbox" /> <label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"]:checked {
  background: gray;
}

@media (any-pointer: fine) {
  input[type="checkbox"] {
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid blue;
  }
}

@media (any-pointer: coarse) {
  input[type="checkbox"] {
    appearance: none;
    width: 30px;
    height: 30px;
    border: 2px solid red;
  }
}
```

### Result

{{EmbedLiveSample("Examples")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The `pointer` media feature](/en-US/docs/Web/CSS/@media/pointer)
