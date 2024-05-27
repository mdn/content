---
title: position-anchor
slug: Web/CSS/position-anchor
page-type: css-property
status:
  - experimental
browser-compat: css.properties.position-anchor
---

{{CSSRef}}{{seecompattable}}

The **`position-anchor`** [CSS](/en-US/docs/Web/CSS) property associates a positioned element with its **anchor element** (i.e. an element that has had an **anchor name** set on it via the {{cssxref("anchor-name")}} property). This is done by specifying the anchor name as the value of the positioned element's `position-anchor` property.

## Syntax

```css
/* Single values */
position-anchor: implicit;
position-anchor: --name;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Values

- {{cssxref("dashed-ident")}}

  - : The name of the anchor element to associate the positioned element with, as defined by its {{cssxref("anchor-name")}} property. This is known as the **default anchor specifier**.

- `implicit`
  - : Currently unsupported, this value will associate the positioned element with its implicit anchor element. For example, the non-standard HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute creates an implicit anchor element, and future specs may also specify features that create an implicit anchor element for a given positioned element under certain circumstances.

## Description

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location.  The `position-anchor` property provides the association.

The positioned element is associated with the anchor element via an anchor name. The anchor element has a `<dashed-ident>` anchor name set on it via the {{cssxref("anchor-name")}} property. The same `<dashed-ident>` value is set as the value of the positioned element's `position-anchor` property.

If multiple anchor elements have the same anchor name set on them, and that name is referenced by a positioned element in its `position-anchor` property, it will be associated with the last anchor element in the source order.

The `position-anchor` property associates the two elements. To make it an anchor-positioned element, you have to set its {{cssxref("position")}} property to either `fixed` or `absolute`. The element needs to be placed after the anchor element in the DOM, or be a descendant of it, for this association to work. This `position` will be relative to the anchor rather than to the nearest ancestor positioned element. 

To place the positioned element in a specific location relative to the anchor element, a feature such as the {{cssxref("anchor()")}} function or the {{cssxref("inset-area")}} property is needed.

You cannot associate a positioned element with an anchor element if the anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it.

[Pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements) set on anchor-positioned elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For more information about anchor positioning, see the [using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

The following example associates a positioned element with an anchor, and tethers the positioned element to the right of the anchor.

#### HTML

We specify two {{htmlelement("div")}} elements; an anchor element with a class of `anchor` and a positioned element with a class of `infobox`.

We also include some filler text around the two `<div>`s to make the {{htmlelement("body")}} taller so that it will scroll.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

We first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the {{cssxref("anchor-name")}} property:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
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
```

```css
.anchor {
  anchor-name: --infobox;
}
```

We associate the second `<div>` with the anchor element by setting its anchor name as the value of the positioned element's `position-anchor` property.

In addition, we set the `infobox`'s:

- {{cssxref("position")}} property to `fixed`, so it can be positioned relative to the anchor's position in the page.
- {{cssxref("left")}} property to an {{cssxref("anchor()")}} function with a value of `right` — this has the effect of positioning the infobox's left edge flush to the right edge of its anchor.
- {{cssxref("align-self")}} property to `anchor-center`. This causes the infobox to be aligned centrally to the center of the anchor in the inline direction.
- {{cssxref("margin-left")}} to `10px` to create space between the infobox and its anchor.

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
  position-anchor: --infobox;

  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Result

Scroll the page to demonstrate how the infobox is tethered to the anchor.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
