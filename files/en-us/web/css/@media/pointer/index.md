---
title: pointer
slug: Web/CSS/@media/pointer
tags:
  - '@media'
  - CSS
  - Media Queries
  - Reference
  - media feature
browser-compat: css.at-rules.media.pointer
---
{{CSSRef}}

The **`pointer`** [CSS](/en-US/docs/Web/CSS) [media feature](/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#media_features) tests whether the user has a pointing device (such as a mouse), and if so, how accurate the _primary_ pointing device is.

> **Note:** If you want to test the accuracy of _any_ pointing device, use [`any-pointer`](/en-US/docs/Web/CSS/@media/any-pointer) instead.

## Syntax

The `pointer` feature is specified as a keyword value chosen from the list below.

- `none`
  - : The primary input mechanism does not include a pointing device.
- `coarse`
  - : The primary input mechanism includes a pointing device of limited accuracy.
- `fine`
  - : The primary input mechanism includes an accurate pointing device.

## Examples

This example creates a small checkbox for users with fine primary pointers and a large checkbox for users with coarse primary pointers.

### HTML

```html
<input id="test" type="checkbox" />
<label for="test">Look at me!</label>
```

### CSS

```css
input[type="checkbox"] {
  appearance: none;
  border: solid;
  margin: 0;
}

input[type="checkbox"]:checked {
  background: gray;
}

@media (pointer: fine) {
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    border-width: 1px;
    border-color: blue;
  }
}

@media (pointer: coarse) {
  input[type="checkbox"] {
    width: 30px;
    height: 30px;
    border-width: 2px;
    border-color: red;
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

- [The `any-pointer` media feature](/en-US/docs/Web/CSS/@media/any-pointer)
