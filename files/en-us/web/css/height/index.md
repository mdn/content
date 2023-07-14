---
title: height
slug: Web/CSS/height
page-type: css-property
browser-compat: css.properties.height
---

{{CSSRef}}

The **`height`** CSS property specifies the height of an element. By default, the property defines the height of the [content area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#content_area). If {{cssxref("box-sizing")}} is set to `border-box`, however, it instead determines the height of the [border area](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

The {{cssxref("min-height")}} and {{cssxref("max-height")}} properties override `height`.

## Syntax

```css
/* <length> values */
height: 120px;
height: 10em;
height: 100vh;

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content(20em);
height: auto;

/* Global values */
height: inherit;
height: initial;
height: revert;
height: revert-layer;
height: unset;
```

### Values

- {{cssxref("&lt;length&gt;")}}
  - : Defines the height as a distance value.
- {{cssxref("&lt;percentage&gt;")}}
  - : Defines the height as a percentage of the containing block's height.
- `auto`
  - : The browser will calculate and select a height for the specified element.
- `max-content`
  - : The intrinsic preferred height.
- `min-content`
  - : The intrinsic minimum height.
- `fit-content`
  - : Box will use the available space, but never more than `max-content`
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the fit-content formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, <length-percentage>))`
- {{cssxref("clamp", "clamp()")}}
  - : Enables selecting a middle value within a range of values between a defined minimum and maximum

## Accessibility concerns

Ensure that elements set with a `height` aren't truncated and/or don't obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Setting height using pixels and percentages

#### HTML

```html
<div id="taller">I'm 50 pixels tall.</div>
<div id="shorter">I'm 25 pixels tall.</div>
<div id="parent">
  <div id="child">I'm half the height of my parent.</div>
</div>
```

#### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 2px solid blue;
}

#taller {
  height: 50px;
}

#shorter {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

#### Result

{{EmbedLiveSample('Setting_height_using_pixels_and_percentages', 'auto', 240)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The box model](/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- The mapped logical properties: {{cssxref("block-size")}}, {{cssxref("inline-size")}}
