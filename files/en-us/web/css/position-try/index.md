---
title: position-try
slug: Web/CSS/position-try
page-type: css-shorthand-property
status:
  - experimental
browser-compat: css.properties.position-try
---

{{CSSRef}}{{seecompattable}}

The **`position-try-options`** [CSS](/en-US/docs/Web/CSS) property is a shorthand that corresponds to the {{cssxref("position-try-order")}} and {{cssxref("position-try-options")}} properties.

## Constituent properties

This property is a shorthand for the following CSS properties:

- {{cssxref("position-try-order")}}
- {{cssxref("position-try-options")}}

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

See {{cssxref("position-try-order")}} and {{cssxref("position-try-options")}} for value descriptions.

`position-try` can specify values for `position-try-options`, or `position-try-order` and `position-try-options`, in that order. If `position-try-order` is omitted, it is set to the property's initial value, which is `normal`. `normal` means that the position try options are tried in the order they appear in the property.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic `position-try` usage

This demo shows the effect of `position-try`.

#### HTML

The HTML includes two {{htmlelement("div")}} elements that will become an anchor and an anchor-positioned element.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

In the CSS, the anchor is given an {{cssxref("anchor-name")}} and has a {{cssxref("position")}} value of `absolute` set on it. We position it in the top-half of the viewport using {{cssxref("top")}} and {{cssxref("left")}} values:

```css hidden
.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --infobox;
  position: absolute;
  top: 100px;
  left: 45%;
}
```

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
}

form {
  position: fixed;
  bottom: 2px;
  right: 2px;
}
```

We then include a custom try option — `--custom-bottom` — which positions the element below the anchor and gives it an appropriate margin:

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  bottom: unset;
  margin-top: 10px;
}
```

We initially position the element above its anchor, and then set a `position-try` value on it that gives it a `position-try-order` of `most-height`, and a `position-try-options` list that just includes our custom try option:

```css
.infobox {
  position: fixed;
  position-anchor: --infobox;

  bottom: anchor(top);
  margin-bottom: 10px;
  justify-self: anchor-center;

  position-try: most-height --custom-bottom;
}
```

#### Result

The element appears below its anchor, even though it is initially positioned above it. This occurs because there is more vertical space below the anchor than there is above it. The `most-height` try order causes the `--custom-bottom` try option to be applied, placing the positioned element in the position that gives its containing block the most height.

{{ EmbedLiveSample("Basic `position-try` usage", "100%", "300") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try-order")}}, {{cssxref("position-try-options")}}
- The {{cssxref("@position-try")}} at-rule
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
