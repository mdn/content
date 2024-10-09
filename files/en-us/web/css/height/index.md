---
title: height
slug: Web/CSS/height
page-type: css-property
browser-compat: css.properties.height
---

{{CSSRef}}

The **`height`** [CSS](/en-US/docs/Web/CSS) property specifies the height of an element. By default, the property defines the height of the [content area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content_area). If {{cssxref("box-sizing")}} is set to `border-box`, however, it instead determines the height of the [border area](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#border_area).

{{EmbedInteractiveExample("pages/css/height.html")}}

The {{cssxref("min-height")}} and {{cssxref("max-height")}} properties override `height`.

> [!NOTE]
> As a geometric property, `height` also applies to the {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}}, and {{SVGElement("foreignObject")}} SVG elements, with `auto` resolving to `0` and percent values being relative to the SVG viewport height for `<rect>`. The CSS `height` property value overrides any SVG {{SVGAttr("height")}} attribute value set on the SVG element.

## Syntax

```css
/* <length> values */
height: 120px;
height: 10em;
height: 100vh;
height: anchor-size(height);
height: anchor-size(--myAnchor self-block, 250px);
height: clamp(200px, anchor-size(width));

/* <percentage> value */
height: 75%;

/* Keyword values */
height: max-content;
height: min-content;
height: fit-content;
height: fit-content(20em);
height: auto;
height: minmax(min-content, anchor-size(width));
height: stretch;

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
  - : Defines the height as a percentage of the [containing block](/en-US/docs/Web/CSS/Containing_block)'s height.
- `auto`
  - : The browser will calculate and select a height for the specified element.
- `max-content`
  - : The intrinsic preferred height.
- `min-content`
  - : The intrinsic minimum height.
- `fit-content`
  - : Use the available space, but not more than [max-content](/en-US/docs/Web/CSS/max-content), i.e. `min(max-content, max(min-content, stretch))`.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Uses the fit-content formula with the available space replaced by the specified argument, i.e. `min(max-content, max(min-content, <length-percentage>))`.
- `stretch`

  - : Sets the height of the element's [margin box](/en-US/docs/Learn/CSS/Building_blocks/The_box_model#parts_of_a_box) to the height of its [containing block](/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block). It attempts to make the margin box fill the available space in the containing block, so in a way behaving similar to `100%` but applying the resulting size to the margin box rather than the box determined by [box-sizing](/en-US/docs/Web/CSS/box-sizing).

    > [!NOTE]
    > To check aliases used by browsers for the `stretch` value and its implementation status, see the [Browser compatibility](#browser_compatibility) section.

## Accessibility

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

- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}, {{cssxref("max-height")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- {{cssxref("anchor-size()")}}
- {{cssxref("clamp", "clamp()")}}
- {{cssxref("clamp", "minmax()")}}
- [Introduction to the CSS basic box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [CSS box model](/en-US/docs/Web/CSS/CSS_box_model) module
