---
title: width
slug: Web/CSS/width
page-type: css-property
browser-compat: css.properties.width
---

{{CSSRef}}

The **`width`** [CSS](/en-US/docs/Web/CSS) property sets an element's width. By default, it sets the width of the [content area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area), but if {{cssxref("box-sizing")}} is set to `border-box`, it sets the width of the [border area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/width.html")}}

The specified value of `width` applies to the content area so long as its value remains within the values defined by {{cssxref("min-width")}} and {{cssxref("max-width")}}.

- If the value for `width` is less than the value for `min-width`, then `min-width` overrides `width`.
- If the value for `width` is greater than the value for `max-width`, then `max-width` overrides `width`.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;
width: anchor-size(--myAnchor inline, 120%);
width: minmax(100px, anchor-size(width));

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content;
width: fit-content(20em);
width: auto;

/* Global values */
width: inherit;
width: initial;
width: revert;
width: revert-layer;
width: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the width as a distance value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the width as a percentage of the [containing block](/en-US/docs/Web/CSS/Containing_block)'s width.
- `auto`
  - : The browser will calculate and select a width for the specified element.
- `max-content`
  - : The intrinsic preferred width.
- `min-content`
  - : The intrinsic minimum width.
- `fit-content`
  - : Use the available space, but not more than [max-content](/en-US/docs/Web/CSS/max-content), i.e `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the fit-content formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, <length-percentage>))`.

## Accessibility concerns

Ensure that elements set with a `width` aren't truncated and/or don't obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Default width

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Default_width', '500px', '64px')}}

### Example using pixels and ems

```css
.px_length {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.em_length {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

{{EmbedLiveSample('Example using pixels and ems', '500px', '64px')}}

### Example with percentage

```css
.percent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="percent">Width in percentage</div>
```

{{EmbedLiveSample('Example using percentage', '500px', '64px')}}

### Example using "max-content"

```css
p.maxgreen {
  background: lightgreen;
  width: max-content;
}
```

```html
<p class="maxgreen">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "max-content"', '500px', '64px')}}

### Example using "min-content"

```css
p.minblue {
  background: lightblue;
  width: min-content;
}
```

```html
<p class="minblue">The MDN community writes really great documentation.</p>
```

{{EmbedLiveSample('Example using "min-content"', '500px', '155px')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- The mapped logical properties: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
