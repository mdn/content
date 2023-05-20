---
title: text-size-adjust
slug: Web/CSS/text-size-adjust
page-type: css-property
status:
  - experimental
browser-compat: css.properties.text-size-adjust
---

{{CSSRef}}{{SeeCompatTable}}

The **`text-size-adjust`** [CSS](/en-US/docs/Web/API/CSS) property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.

```css
/* Keyword values */
text-size-adjust: none;
text-size-adjust: auto;

/* <percentage> value */
text-size-adjust: 80%;

/* Global values */
text-size-adjust: inherit;
text-size-adjust: initial;
text-size-adjust: revert;
text-size-adjust: revert-layer;
text-size-adjust: unset;
```

Because many websites have not been developed with small devices in mind, mobile browsers differ from desktop browsers in the way they render web pages. Instead of laying out pages at the width of the device screen, they lay them out using a {{glossary("viewport")}} that is much wider, usually 800 or 1000 pixels. To map the extra-wide layout back to the original device size, they either show only part of the whole render or scale the viewport down to fit.

Since text that has been scaled down to fit a mobile screen may be very small, many mobile browsers apply a text inflation algorithm to enlarge the text to make it more readable. When an element containing text uses 100% of the screen's width, the algorithm increases its text size, but without modifying the layout. The `text-size-adjust` property allows web authors to disable or modify this behavior, as web pages designed with small screens in mind do not need it.

## Syntax

The `text-size-adjust` property is specified as `none`, `auto`, or a `<percentage>`.

### Values

- `none`
  - : Disables the browser's inflation algorithm.
- `auto`
  - : Enables the browser's inflation algorithm. This value is used to cancel a `none` value previously set with CSS.
- `<percentage>`
  - : Enables the browser's inflation algorithm, specifying a percentage value with which to increase the font size.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic disabling usage

As hinted at above, on a properly designed responsive site the `text-size-adjust` behavior is not needed, so developers can elect to turn it off by specifying a value of none:

```css
p {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Apple's documentation](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/AdjustingtheTextSize/AdjustingtheTextSize.html#//apple_ref/doc/uid/TP40006510-SW16)
- [Google Chrome behavior description](https://docs.google.com/document/d/1PPcEwAhXJJ1TQShor29KWB17KJJq7UJOM34oHwYP3Zg/edit)
- [Gecko's behavior description](https://dbaron.org/log/20111126-font-inflation), by L. David Baron
