---
title: width
slug: Web/CSS/Reference/Properties/width
page-type: css-property
browser-compat: css.properties.width
sidebar: cssref
---

The **`width`** [CSS](/en-US/docs/Web/CSS) property sets an element's width. By default, it sets the width of the [content area](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#content_area), but if {{cssxref("box-sizing")}} is set to `border-box`, it sets the width of the [border area](/en-US/docs/Web/CSS/Guides/Box_model/Introduction#border_area).

{{InteractiveExample("CSS Demo: width")}}

```css interactive-example-choice
width: 150px;
```

```css interactive-example-choice
width: 20em;
```

```css interactive-example-choice
width: 75%;
```

```css interactive-example-choice
width: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the width.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  height: 80%;
  justify-content: center;
  color: white;
}
```

The specified value of `width` applies to the content area so long as its value remains within the values defined by {{cssxref("min-width")}} and {{cssxref("max-width")}}.

- If the value for `width` is less than the value for `min-width`, then `min-width` overrides `width`.
- If the value for `width` is greater than the value for `max-width`, then `max-width` overrides `width`.

> [!NOTE]
> As a geometric property, `width` also applies to the {{SVGElement("svg")}}, {{SVGElement("rect")}}, {{SVGElement("image")}}, and {{SVGElement("foreignObject")}} SVG elements, with `auto` resolving to `100%` for `<svg>` and `0` for other elements, and percent values being relative to the SVG viewport width for `<rect>`. The CSS `width` property value overrides any SVG {{SVGAttr("width")}} attribute value set on the SVG element.

## Syntax

```css
/* <length> values */
width: 300px;
width: 25em;

/* <percentage> value */
width: 75%;

/* Keyword values */
width: max-content;
width: min-content;
width: fit-content;
width: auto;
width: stretch;

/* function values */
width: fit-content(20em);
width: anchor-size(width);
width: anchor-size(--my-anchor inline, 120%);
width: calc-size(max-content, size / 2);

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
  - : Defines the width as a percentage of the [containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block)'s width.
- `auto`
  - : The browser will calculate and select a width for the specified element.
- {{cssxref("max-content")}}
  - : The intrinsic preferred width.
- {{cssxref("min-content")}}
  - : The intrinsic minimum width.
- {{cssxref("fit-content")}}
  - : Use the available space, but not more than [max-content](/en-US/docs/Web/CSS/Reference/Values/max-content), i.e., `min(max-content, max(min-content, stretch))`.
- {{cssxref("anchor-size()")}}
  - : Sets the width relative to a dimension of an anchor element. When defining the `width` of an anchor-positioned element, the first parameter defaults to the associated anchor's width. If applied to a non-anchor-positioned element, it sets the width to the fallback value. If no fallback is defined, the declaration is ignored.
- {{cssxref("calc-size()")}}
  - : Sets the width to a modified intrinsic size.
- [`fit-content(<length-percentage>)`](/en-US/docs/Web/CSS/Reference/Values/fit-content_function)
  - : Uses the fit-content formula with the available space replaced by the specified argument, clamping the width according to the formula `min(maximum size, max(minimum size, <length-percentage>))`.
- `stretch`
  - : Sets the width of the element's [margin box](/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model#parts_of_a_box) to the width of its [containing block](/en-US/docs/Web/CSS/Guides/Display/Containing_block#identifying_the_containing_block). It attempts to make the margin box fill the available space in the containing block, so in a way behaving similar to `100%` but applying the resulting size to the margin box rather than the box determined by [box-sizing](/en-US/docs/Web/CSS/Reference/Properties/box-sizing).

## Accessibility

Ensure that elements set with a `width` aren't truncated and/or don't obscure other content when the page is zoomed to increase text size.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Formal definition

{{CSSInfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Default width

This example demonstrates basic usage and the default `auto` value.

#### HTML

We include two paragraphs; one with a class name.

```html
<p>The MDN community writes really great documentation.</p>
<p class="has-width">The MDN community writes really great documentation.</p>
```

#### CSS

We make all paragraphs have a gold background, explicitly setting the second paragraph's `width` to `auto`.

```css
p {
  background: gold;
}
p.has-width {
  width: auto;
}
```

#### Results

{{EmbedLiveSample("Default width", 600, 100)}}

As `width` defaults to `auto`, both paragraphs are the same width.

### Using length units

This example demonstrates length width values.

#### HTML

We include two {{htmlelement("div")}} elements with some text.

```html
<div class="px_length">Width measured in px</div>
<div class="em_length">Width measured in em</div>
```

#### CSS

The `px_length` element is set to `200px` while the `em_length` element is set to be `20em` wide. Both elements also have different {{cssxref("background-color")}}, {{cssxref("color")}}, and {{cssxref("border")}} values to enable differentiating between the two when rendered.

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

#### Results

{{EmbedLiveSample("Using length units", 600, 60)}}

The `px_length` element will always be 200px wide. The rendered width of the `em_length` element depends on the font size.

### Using percentages

This example demonstrates using percentage values.

#### HTML

We include one {{htmlelement("div")}} element with some text.

```html
<div class="percent">Width in percentage</div>
```

#### CSS

We set the `width` of the element to be `20%` of the width of its parent container.

```css
.percent {
  width: 20%;

  background-color: silver;
  border: 1px solid red;
}
```

#### Results

{{EmbedLiveSample("Using percentages", 600, 60)}}

### Using intrinsic sizes

This example compares `max-content` and `min-content`, and introduces `calc-size`.

#### HTML

We include three paragraphs with the same content; just their class names differ.

```html
<p class="max-green">The MDN community writes really great documentation.</p>
<p class="min-blue">The MDN community writes really great documentation.</p>
<p class="min-pink">The MDN community writes really great documentation.</p>
```

#### CSS

We set one paragraph's `width` to `max-content`, the second to `min-content`, and the third to be twice the size of the `min-content` by using the `calc-size()` function. Each is given a different {{cssxref("background-color")}} and {{cssxref("border-style")}} to enable differentiating between the two.

```css
p.max-green {
  width: max-content;

  background-color: lightgreen;
  border-style: dotted;
}

p.min-blue {
  width: min-content;

  background-color: lightblue;
  border-style: dashed;
}

p.min-pink {
  width: calc-size(min-content, size * 2);

  background-color: pink;
  border-style: solid;
}
```

```css hidden
@supports not (width: calc-size(min-content, size * 2)) {
  body::after {
    content: "Your browser doesn't support the calc-size() function yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Results

{{EmbedLiveSample("Using intrinsic sizes", 600, 230)}}

The `max-content` example is as wide as the text. The `min-content` example is as wide as the widest word. The `calc-size()` example is set to be twice as wide as the `min-content`.

### Using the stretch keyword

This example demonstrates the `stretch` value within a [flex](/en-US/docs/Web/CSS/Guides/Flexible_box_layout) container.

#### HTML

We include a parent container with two child elements.

```html
<div class="parent">
  <div class="child">text</div>
  <div class="child stretch">stretch</div>
</div>
```

#### CSS

We use the {{cssxref("display")}} property to make the parent a flex container, and set the second child's `width` the `stretch`.

```css
.parent {
  border: solid;
  margin: 1rem;
  display: flex;
}

.child {
  background: #00999999;
  margin: 1rem;
}

.stretch {
  width: stretch;
}
```

```css hidden
@supports not (width: stretch) {
  body::after {
    content: "Your browser doesn't support the stretch value yet.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1em;
  }
}
```

#### Result

{{EmbedLiveSample("Using the stretch keyword", "auto", 100)}}

By default, flex items are as wide as their content. The `stretch` value makes the element as wide as the available space allows, with the element's margin box otherwise clamped to the width of its containing block.

### Using the anchor-size() function

This example demonstrates using the `anchor-size()` function to define the width of an anchor-positioned element; we defined its width as a multiple of its anchor's height.

#### HTML

We specify two {{htmlelement("div")}} elements: one `anchor` element and one `infobox` element that we'll position relative to the anchor.

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Infobox.</p>
</div>
```

#### CSS

We declare the `anchor` `<div>` as an anchor element by giving it an {{cssxref("anchor-name")}}. The positioned element has its {{cssxref("position")}} property set to `absolute`, and is associated with the anchor element via its {{cssxref("position-anchor")}} property. We also set absolute {{cssxref("height")}} and `width` dimensions on the anchor and define the width of the anchor-positioned element to be the width of the anchor using the `anchor-size()` function as the value of the `width` property. As a bonus, we also use the `anchor-size()` function to define the infobox's {{cssxref("left")}} position, making the gap between the anchor and the infobox one quarter of the height of the anchor.

```css hidden
.anchor {
  anchor-name: --my-anchor;
  width: 120px;
  height: 60px;

  font-size: 2rem;
  background-color: lightpink;
  text-align: center;
  align-content: center;
  outline: 1px solid black;
}

.infobox {
  position-anchor: --my-anchor;
  position: absolute;
  position-area: right;
  width: anchor-size(width);

  left: calc( anchor-size(height) / 4 )

  align-content: center;
  color: darkblue;
  background-color: azure;
  outline: 1px solid #dddddd;
}
```

```css hidden
body {
  padding: 5em;
}
```

#### Results

{{EmbedLiveSample("Using the anchor-size() function", "auto", 200)}}

Note how the infobox's width is always the same as the anchor element's width.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("height")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-width")}}, {{cssxref("max-width")}}
- {{cssxref("block-size")}}, {{cssxref("inline-size")}}
- SVG {{SVGAttr("width")}} attribute
- [Introduction to the CSS box model](/en-US/docs/Web/CSS/Guides/Box_model/Introduction) guide
- [CSS box model](/en-US/docs/Web/CSS/Guides/Box_model) module
- [CSS anchor positioning](/en-US/docs/Web/CSS/Guides/Anchor_positioning) module
- [CSS values and units](/en-US/docs/Web/CSS/Guides/Values_and_units) module
