---
title: position-try-options
slug: Web/CSS/position-try-options
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-try-options
---

{{CSSRef}}{{seecompattable}}

The **`position-try-options`** [CSS](/en-US/docs/Web/CSS) property enables you to specify one or more alternative **position try options** for **anchor-positioned elements** to be placed in relative to their associated **anchor elements**. The browser will try placing the positioned element in these different positions, to stop it from overflowing its container or the viewport.

> **Note:** There is also a shorthand property — {{cssxref("position-try")}}, which can be used to specify {{cssxref("position-try-order")}} and `position-try-options` values in a single declaration.

For detailed information on anchor positioning, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Syntax

```css
/* Single try option */
position-try-options: flip-block;
position-try-options: inset-area(top);
position-try-options: --custom-try-option;

/* Multiple value combination option */
position-try-options: flip-block flip-inline;

/* Multiple values */
position-try-options: flip-block, flip-inline;
position-try-options: inset-area(top), inset-area(right), inset-area(bottom);
position-try-options: --custom-try-option1, --custom-try-option2;
position-try-options:
  flip-block,
  flip-inline,
  flip-block flip-inline;
position-try-options: flip-block, inset-area(right), --custom-try-option;

/* Global values */
position-try-options: inherit;
position-try-options: initial;
position-try-options: revert;
position-try-options: revert-layer;
position-try-options: unset;
```

### Values

- `none`
  - : The default value. There are no position try options set.
- Predefined option
  - : Referred to as a `try-tactic` in the specification, these predefined values move the positioned element by taking its computed position and transforming it across a particular axis of the anchor. Possible values are:
    - `flip-block`: Flips the element's position along the block axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across an inline axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the top of the anchor, this value would flip it to the bottom.
    - `flip-inline`: Flips the element's position along the inline axis so that it appears the same distance away from the anchor but on the opposite side of it. To put it another way, it mirrors the element's position across a block axis drawn through the center of the anchor. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip it to the right.
    - `flip-start`: Mirrors the element's position across an axis drawn diagonally through the center of the anchor, passing through the point at the intersection of the block axis start and the inline axis start, and the point at the intersection of the block axis end and the inline axis end. As an example, if the positioned element started to overflow at the left of the anchor, this value would flip it to the top.
- [`inset-area()`](/en-US/docs/Web/CSS/inset-area_function)
  - : An {{cssxref("inset-area")}} value passed into an `inset-area()` function. This has the effect of automatically creating a position try option based on that `inset-area` value behind the scenes. In effect, it is a shortcut for creating a custom {{cssxref("@position-try")}} option that contains only that `inset-area` property value.
- {{cssxref("dashed-ident")}}
  - : Adds a custom {{cssxref("@position-try")}} option to the try options list, the identifying name of which matches the specified `dashed-ident`. If no custom option exists with that name, the option is ignored.

> **Note:** Multiple options can be specified, separated by commas.

## Description

You should try to ensure that anchor-positioned elements always appear in a convenient place for the user to interact with them if at all possible, regardless of where their anchor is positioned. This often requires changing an elements' position as its anchor gets close to the edge of its containing element or the viewport, to stop the positioned element overflowing.

This is achieved by providing one or more position try options in the `position-try-options` property. By default, the browser will try them in the order they appear in the list, applying the first one it finds one that will stop the positioned element from overflowing.

If no option can be found that will place the positioned element completely on-screen, the browser will revert to displaying the positioned element at its default position before any try options were applied.

> **Note:** In some situations you might want to just hide overflowing positioned elements, which can be achieved using the {{cssxref("position-visibility")}} property. In most cases however it is better to keep them on-screen and usable.

### Combination options

Multiple predefined or `dashed-ident` options can be combined together into a single option, separated by spaces:

- In the case of multiple predefined options, their transformations are composed together.
- In the case of predefined and `dashed-ident` options, one of each can be combined. The `dashed-ident` option is applied first, and the predefined transformation is then applied.

`inset-area()` values cannot be combined like this.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

> **Note:** See the {{cssxref("@position-try")}} reference page for custom try option examples.

### Basic usage

This example shows basic usage of a couple of predefined try options.

#### HTML

The HTML includes two {{htmlelement("div")}} elements that will become an anchor and an anchor-positioned element:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

We first style the `<body>` element to be very large, so that we can scroll the anchor and the positioned element around in the viewport, both horizontally and vertically:

```css
body {
  width: 1500px;
  height: 500px;
}
```

The anchor is given an {{cssxref("anchor-name")}} and has a {{cssxref("position")}} value of `absolute` set on it. We then position it somewhere near the center of the initial `<body>` rendering using {{cssxref("top")}} and {{cssxref("left")}} values:

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
  anchor-name: --myAnchor;
  position: absolute;
  top: 100px;
  left: 350px;
}
```

The infobox is given fixed positioning, a {{cssxref("position-anchor")}} property that references the anchor's `anchor-name`, to associate the two together, and it is tethered to the anchor's top-left corner using an `inset-area`. It is given some predefined try options to stop it overflowing when the anchor gets near the edge of the viewport.

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

  position-try-options: flip-block, flip-inline;
}
```

#### Result

This gives us the following result. Try scrolling the demo so that the anchor starts to get near the edges:

- If you move the anchor near the top of the viewport, you will see the positioned element flip to the bottom-left of the anchor to avoid overflowing.
- If you move the anchor near the left of the viewport, you will see the positioned element flip to the top-right of the anchor to avoid overflowing.

{{ EmbedLiveSample("Predefined try options", "100%", "250") }}

However, if you move the anchor towards the top-left corner of the viewport, you'll notice a problem — as the positioned element starts to overflow in the block and inline direction, it flips back to its default top-left position and overflows in both directions, which not what we want.

This is because we only gave the browser position options of `flip-block` _or_ `flip-vertical`. We didn't give it an option of trying both at the same time. The next example will show you how to fix this issue.

### Combining multiple values into one option

Let's use a combined try option to fix the problem we found with the previous demo.

#### HTML and CSS

All of the HTML and CSS in this demo is the same, except for the positioned element code. In this case, it is given a third position try option: `flip-block flip-inline`:

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
  position: absolute;
  top: 100px;
  left: 350px;
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

  position-try-options:
    flip-block,
    flip-inline,
    flip-block flip-inline;
}
```

#### Result

The third position try option means that the browser will try `flip-block` then `flip-inline` to avoid overflow, and if those options fail, it will combine the two, flipping the element's position in the block and inline directions at the same time. Now when you scroll the anchor towards the top _and_ left edges of the viewport, the positioned element will flip over to the bottom-right.

{{ EmbedLiveSample("Combining multiple values into one option", "100%", "250") }}

### `inset-area` try options

This example shows some `inset-area()` position try options in action.

#### HTML and CSS

All of the HTML and CSS in this demo is the same, except for the positioned element code. In this case, our position try options are all `inset-area()` functions; we've included an option for top, top-right, right, bottom-right, bottom, bottom-left, and left.

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
  position: absolute;
  top: 100px;
  left: 350px;
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

  position-try-options:
    inset-area(top), inset-area(top right),
    inset-area(right), inset-area(bottom right),
    inset-area(bottom), inset-area(bottom left),
    inset-area(left);
}
```

#### Result

Scroll the page and check out the effect of these position try options as the anchor nears the edge of the viewport:

{{ EmbedLiveSample("`inset-area` try options", "100%", "250") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-try-order")}}, {{cssxref("position-try")}}
- The {{cssxref("@position-try")}} at-rule
- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
