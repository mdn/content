---
title: Using CSS anchor positioning
slug: Web/CSS/CSS_anchor_positioning/Using
page-type: guide
---

{{CSSRef}}

**CSS anchor positioning** enables elements to be tethered together — defining some elements as **anchor elements** and others as **anchored elements**. The anchored elements can be positioned and sized relative to the anchor elements. In addition, you can declare conditions under which anchored elements should be hidden, and alternative position options to render them in, if the default rendering position causes anchored elements to overflow their containing block and/or be rendered offscreen.

This article explains all the anchor positioning concepts, and how to use the spec's features at a basic level. For further examples and syntax details, see the reference pages linked through.

## Fundamental concepts

It's very common to want to tether one element to another, for example:

1. Error messages that appear alongside form controls.
2. Tooltips or infoboxes that pop up next to a UI element to provide more information about it.
3. Settings or options dialogs that can be accessed to quickly configure UI elements.

Creating such uses cases is fairly simple when the element to tether to (aka the **anchor element**) is always in the same place in the UI and the tethered element (aka the **anchored element**) can just be placed before or after it in the source order. However, things are rarely that simple, and modern interfaces will often call for reusable, dynamically-generated anchored elements to be absolutely positioned next to their respective anchor elements. Their positions relative to one another will need to be maintained as the anchor element moves (e.g. by scolling, or drag and drop).

And if the anchor element gets close to the edge of the viewport, meaning that the anchored element is now offscreen, it's common to want to move its position to put it back onscreen again. Think of how right-click (<kbd>Ctrl</kbd> + click) context menus work on common desktop OSes.

Historically, implementing this functionality has required JavaScript to dynamically keep positions updated as appropriate, has significant performance issues, and is difficult to get right. The [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module allows these use cases to be implemented performantly and declaratively.

## Associating anchor and anchored elements

To associate an element with an anchor, you need to first declare which element is the anchor, and then specify which anchored element(s) are to be associated with that anchor. Anchored elements need to have absolute or fixed [positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning) applied to them to be associated with anchors.

### Via CSS

To declare an anchor element with CSS, you need to set an anchor name on it via the {{cssxref("anchor-name")}} property. The value needs to be a {{cssxref("dashed-ident")}}:

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
}
```

The anchored element is then associated with the anchor element by setting its anchor name as the value of the anchored element's {{cssxref("position-anchor")}} property. Let's say we want to tether an infobox to the anchor:

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
  position-anchor: --infobox;
}
```

We'll apply the above CSS to the following HTML:

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

This will render as follows:

{{ EmbedLiveSample("Via CSS", "100%", "120") }}

Note that the anchored element needs to be positioned after the anchor element in the DOM, or be a descendant of it, for the association to work.

The anchor and infobox are now associated together, but for the moment you'll have to trust us on this. They are not yet tethered to each other — if you were to position the anchor and move it somewhere else on the page, it would move on its own, leaving the infobox in the same place. You'll see the actual tethering in action later on, when we look at [positioning anchored elements based on anchor position](#positioning_anchored_elements_based_on_anchor_position).

### Via HTML

Associating an anchored element with an anchor is even simpler in HTML. You need to give the anchor element an ID, and then reference that ID in the anchored element's [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute:

```html
<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
  <p>This is an information box.</p>
</div>
```

We still need to give the infobox absolute or fixed position so that it can be associated with the anchor:

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
}
```

This gives the same result that we achieved earlier with CSS:

{{ EmbedLiveSample("Via HTML", "100%", "120") }}

## Positioning anchored elements based on anchor position

As we saw above, associating an anchored element with an anchor is not really much use on its own. You also need to specify the position of the anchored element relative to the anchor. Let's look at the machanisms available to do this.

### Using individual inset values, via `anchor()`

Conventional positioned elements can have their position specified via `inset` properties. This includes:

- Physical properties: {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("bottom")}}, and {{cssxref("right")}}.
- Logical properties: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}}, and {{cssxref("inset-inline-end")}}.
- Shorthand properties: {{cssxref("inset-block")}}, {{cssxref("inset-inline")}}, and {{cssxref("inset")}}.

With anchored elements, we have an extra tool at our disposal — the [`anchor()`](/en-US/docs/Web/CSS/anchor) function. This resolves to a {{cssxref("length")}} value, and enables `inset` values to be expressed in terms of the position of an anchor element's sides. The syntax looks like this:

```text
anchor(anchor-element anchor-side, length-percentage)
```

- The `anchor-element` specifies the `anchor-name` of the anchor you want to position to anchored element relative to. This is optional — if omitted, the anchored element is positioned relative to the anchor referenced by its `position-anchor` property (this is sometimes referred to as the element's **default anchor**).
- The `anchor-side` specifies the side of the anchor element that the anchored element will be positioned relative to. This can be expressed using a variety of values, for example physical (`top`, `left`, etc.) or logical (`start`, `end`, etc.)
- The {{cssxref("length-percentage")}} is a fallback value that specifies what the function should resolve to if the `anchor()` function is invalid.

The most common `anchor()` functions you'll use will just refer to a side of the default anchor. You will also likely use them inside {{cssxref("calc")}} functions, to add some spacing between the edge of the anchor and the edge of the anchored element. For example:

```css
.elem {
  /* Position the right edge of the anchored element
     flush to the anchor element's left edge  */
  right: anchor(left);

  /* Position the anchored element's logical block end edge
     10px from the anchor element's logical block start edge  */
  inset-block-end: calc(anchor(start) + 10px);
}
```

Let's look at an example of this in action ... GOT HERE

### Using an `inset-area`

xx

### Combining `anchor()` and `inset-area`

xx

### Centering on the anchor using `anchor-center`

xx

## Sizing anchored elements based on anchor size

xx

## Conditional anchored element hiding

xx

## Specifying alternatives — `position-try`

xx

## Examples

xx ?

### Sharing anchoring functionality across multiple anchors

### Popover example

xx

## See also

- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Positioning](/en-US/docs/Learn/CSS/CSS_layout/Positioning)
- [CSS logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values)
- [Sizing items in CSS](/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
