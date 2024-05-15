---
title: position-try
slug: Web/CSS/position-try
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.position-try
---

{{CSSRef}}{{seecompattable}}

The **`position-try-options`** [CSS](/en-US/docs/Web/CSS) property is a shorthand that corresponds to the `position-try-order` and {{cssxref("position-try-options")}} properties.

## Constituent properties

This property is a shorthand for the following CSS properties:

- `position-try-order`
- {{cssxref("position-try-options")}}

> **Note:** We've not yet documented `position-try-order`, as there were still ongoing discussions about its specified behavior, which seems likely to change.

## Syntax

```css
/* position-try-options only */
position-try: flip-block;
position-try: inset-area(top);
position-try: --custom-try-option;
position-try: flip-block flip-inline;
position-try: inset-area(top), inset-area(right), inset-area(bottom);
position-try: --custom-try-option1, --custom-try-option2;
position-try: flip-block, inset-area(right), --custom-try-option;

/* position-try-order and position-try-options */
position-try:
  most-width --custom-try-option1,
  --custom-try-option2;
position-try:
  most-height flip-block,
  inset-area(right),
  --custom-try-option;

/* Global values */
position-try: inherit;
position-try: initial;
position-try: revert;
position-try: revert-layer;
position-try: unset;
```

### Values

See {{cssxref("position-try-options")}} for value descriptions.

`position-try` can specify values for `position-try-options`, or `position-try-order` and `position-try-options`, in that order. If `position-try-order` is omitted, it is set to the property's initial value, which is `normal`. `normal` means that the position try options are tried in the order they appear in the property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

> **Note:** See the {{cssxref("position-try-options")}} and {{cssxref("@position-try")}} reference pages for try option examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try-options")}}
- The {{cssxref("@position-try")}} at-rule
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
