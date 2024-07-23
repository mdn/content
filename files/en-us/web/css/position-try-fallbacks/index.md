---
title: position-try-fallbacks
slug: Web/CSS/position-try-fallbacks
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-try-fallbacks
---

{{CSSRef}}{{seecompattable}}

The **`position-try-fallbacks`** [CSS](/en-US/docs/Web/CSS) property enables you to specify a list of one or more alternative **position try fallback options** for anchor-positioned elements to be placed relative to their associated anchor elements. When the element would otherwise overflow its inset-modified containing block, the browser will try placing the positioned element in these different fallback positions, in the order provided, until it finds a value that stops it from overflowing its container or the viewport.

> **Note:** The {{cssxref("position-try")}} shorthand property can be used to specify {{cssxref("position-try-order")}} and `position-try-fallbacks` values in a single declaration.

> **Note:** This property was originally named and supported in Chromium browsers as `position-try-options`, with the same property values. Until `position-try-fallbacks` is supported, use the {{cssxref("position-try")}} shorthand instead.

## Syntax

```css
/* Default value: no try fallback options */
position-try-fallbacks: none;

/* Single try option */
position-try-fallbacks: flip-block;
position-try-fallbacks: top;
position-try-fallbacks: --custom-try-option;

/* Multiple value combination option */
position-try-fallbacks: flip-block flip-inline;

/* Multiple values */
position-try-fallbacks: flip-block, flip-inline;
position-try-fallbacks: top, right, bottom;
position-try-fallbacks: --custom-try-option1, --custom-try-option2;
position-try-fallbacks:
  flip-block,
  flip-inline,
  flip-block flip-inline;
position-try-fallbacks:
  flip-block,
  --custom-try-option,
  --custom-try-option flip-inline,
  right;

/* Global values */
position-try-fallbacks: inherit;
position-try-fallbacks: initial;
position-try-fallbacks: revert;
position-try-fallbacks: revert-layer;
position-try-fallbacks: unset;
```

The `position-try-fallbacks` property may be specified as either the keyword value `none` or as a comma-separated list of one or more space-separated custom position option names or `<try-tactic>`s or an `inset-area` value.

### Values

- `none`
  - : The default value. There are no position try fallback options set.
- `<try-tactic>`
  - : Predefined fallback options move the positioned element by taking its computed position and transforming it across a particular axis of the anchor, mirroring any margin offsets. Possible values are:
    - `flip-block`
      - : Flips the element's position along the block axis.
    - `flip-inline`
      - : Flips the element's position along the inline axis.
    - `flip-start`
      - : Flips both the inline and block axis values, swapping the `start` properties with each other, and the `end` properties with each other.
- [`inset-area`](/en-US/docs/Web/CSS/inset-area) value
  - : Positions the element relative to the edges of its associated anchor element by placing the positioned element on one or more tiles of an implicit 3x3 [inset area grid](/en-US/docs/Web/CSS/inset-area#description) based on the specified {{cssxref("inset-area_value","&lt;inset-area>")}} value; the effect is the same as a custom {{cssxref("@position-try")}} option containing only an {{cssxref("inset-area")}} descriptor.
- {{cssxref("dashed-ident")}}
  - : Adds a custom {{cssxref("@position-try")}} option to the fallback options list, the identifying name of which matches the specified `dashed-ident`. If no custom position option exists with that name, the option is ignored.

> **Note:** Multiple options can be specified, separated by commas.

## Description

Anchor-positioned elements should always appear in a convenient place for the user to interact with, if at all possible, regardless of where their anchor is positioned. To stop the positioned element from overflowing the viewport, it is often necessary to change its location when its anchor gets close to the edge of its containing element or the viewport.

This is achieved by providing one or more position-try fallback options in the `position-try-fallbacks` property. If the positioned element's initial position would overflow, the browser will try each fallback position option; the first fallback option that doesn't cause the element to overflow its containing block is applied. By default, the browser will try them in the order they appear in the list, applying the first one it finds that will stop the positioned element from overflowing.

If no option can be found that will place the positioned element completely on-screen, the browser will revert to displaying the positioned element at its default position before any try fallback options were applied.

> **Note:** In some situations you might want to just hide overflowing positioned elements, which can be achieved using the {{cssxref("position-visibility")}} property. In most cases however it is better to keep them on-screen and usable.

For detailed information on anchor features and position try fallback usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide.

### Predefined &lt;try-tactic&gt; values

Referred to as a `<try-tactic>` in the specification, the predefined values move the positioned element by taking its computed position and transforming it across a particular axis of the anchor. The predefined values are:

- `flip-block`
  - : Flips the element's position along the block axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across an inline axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the top of the anchor, this value would flip the position to the bottom.
- `flip-inline`
  - : Flips the element's position along the inline axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across a block axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip the position to the right.
- `flip-start`
  - : Mirrors the element's position across an axis drawn diagonally through the center of the anchor, passing through the point at the intersection of the block axis start and the inline axis start, and the point at the intersection of the block axis end and the inline axis end. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip the positioned element to the top.

### Combination options

A single position-try fallback option can include more than one `<try-tactic>` or `dashed-ident` options, or a combination of both by declaring them as a single space-separated option:

- In the case of multiple predefined `<try-tactic>` options, their transformations are composed together.
- In the case of declaring a predefined `<try-tactic>` and a `<dashed-ident>` named `@postion-try` option, the custom position option is applied first, then the `<try-tactic>` transformation is applied.

`inset-area` values cannot be combined like this.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example shows the basic usage of a couple of predefined `<try-tactic>` fallback options.

#### HTML

The HTML includes two {{htmlelement("div")}} elements that will become an anchor and an anchor-positioned element:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

We style the `<body>` element to be very large, to enable both horizontal and vertical scrolling.

The anchor is given an {{cssxref("anchor-name")}} and large margins to place it somewhere near the center of the visible section of the `<body>`:

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
body {
  width: 1500px;
  height: 500px;
}

.anchor {
  anchor-name: --myAnchor;
  margin: 100px 350px;
}
```

The infobox is given fixed positioning, a {{cssxref("position-anchor")}} property that references the anchor's `anchor-name`, to associate the two together, and it is tethered to the anchor's top-left corner using an `inset-area`.

We include a `position-try-fallbacks` list (and re-declare it with the `position-try` shorthand incase the longhand property name is not yet supported), providing two predefined position-try fallback options to prevent it from overflowing when the anchor gets near the edge of the viewport, by flipping it along the inline or block axis of the anchor.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  inset-area: top left;

  position-try-fallbacks: flip-block, flip-inline;
  position-try: flip-block, flip-inline;
}
```

#### Result

This gives us the following result:

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

Try scrolling so the anchor nears the edges:

- If you move the anchor near the top of the viewport, you will see the positioned element flip to the bottom-left of the anchor to avoid overflowing.
- If you move the anchor near the left of the viewport, you will see the positioned element flip to the top-right of the anchor to avoid overflowing.

However, if you move the anchor towards the top-left corner of the viewport, you'll notice a problem — as the positioned element starts to overflow in the block and inline direction, it flips back to its default top-left position and overflows in both directions, which is not what we want.

This is because we only gave the browser position options of `flip-block` _or_ `flip-inline`. We didn't give it the option of trying both at the same time. The next example will show you how to fix this issue.

### Combining multiple values into one option

Let's use a combined try fallback option to fix the problem we found with the previous demo.

#### HTML and CSS

All of the HTML and CSS in this demo is the same, except for the positioned element code. In this case, it is given a third position try fallback option: `flip-block flip-inline`:

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

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

.anchor {
  anchor-name: --myAnchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  inset-area: top left;

  position-try:
    flip-block,
    flip-inline,
    flip-block flip-inline;
  position-try-fallbacks:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

#### Result

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

The third position-try fallback option means that the browser will try `flip-block` then `flip-inline` to avoid overflow, and if those fallbacks fail, it will combine the two, flipping the element's position in the block and inline directions at the same time. Now when you scroll the anchor towards the top _and_ left edges of the viewport, the positioned element will flip over to the bottom-right.

### `inset-area` try options

This example shows some `inset-area` position-try fallback options in action.

#### HTML and CSS

All of the HTML and CSS in this demo is the same, except for the positioned element code. In this case, our position try fallback options are all `inset-area` values — `top`, `top right`, `right`, `bottom right`, `bottom`, `bottom left`, and `left`.

This means that the positioned element will find a reasonable position to display in, whatever viewport edges the anchor is near. This approach is a bit more longwinded than the predefined values approach, but it is also more granular and flexible.

```html hidden
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```css hidden
body {
  width: 1500px;
  height: 500px;
}

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

.anchor {
  anchor-name: --myAnchor;
  margin: 100px 350px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css-nolint
.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  inset-area: top left;

  position-try:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;

  position-try-fallbacks:
    top, top right, right,
    bottom right, bottom,
    bottom left, left;
}
```

#### Result

{{ EmbedLiveSample("`inset-area` try options", "100%", "250") }}

Scroll the page and check out the effect of these position-try fallback options as the anchor nears the edge of the viewport.

### Custom try option examples

See the {{cssxref("@position-try")}} reference page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try")}}
- {{cssxref("position-try-order")}}
- {{cssxref("@position-try")}} at-rule
- {{cssxref("inset-area")}}
- [`<inset-area>`](/en-US/docs/Web/CSS/inset-area_value) value
- [Handling overflow: try fallbacks and conditional hiding](/en-US/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) guide
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
