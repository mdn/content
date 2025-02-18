---
title: anchor-name
slug: Web/CSS/anchor-name
page-type: css-property
status:
  - experimental
browser-compat: css.properties.anchor-name
---

{{CSSRef}}{{seecompattable}}

The **`anchor-name`** [CSS](/en-US/docs/Web/CSS) property enables defining an element as an **anchor element** by giving it one or more identifying **anchor names**. Each name can then be set as the value of a positioned element's {{cssxref("position-anchor")}} property to associate it with the anchor.

## Syntax

```css
/* Single values */
anchor-name: none;
anchor-name: --name;

/* Multiple values */
anchor-name: --name, --another-name;

/* Global values */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### Values

- `none`

  - : The default value. Setting `anchor-name: none` on an element means that it is not defined as an anchor element. If the element was previously defined as an anchor and associated with a positioned element, setting `anchor-name: none` disassociates the two.

- {{cssxref("dashed-ident")}}
  - : One or more comma-separated arbitrary custom identifiers defining the name or names of the anchor, which can then be referenced in a {{cssxref("position-anchor")}} property.

## Description

To position an element relative to an anchor element, the positioned element requires three features: an association, a position, and a location. The `anchor-name` and {{cssxref("position-anchor")}} properties provide the association.

The anchor element accepts one or more `<dashed-ident>` anchor names set on it via the `anchor-name` property. When one of those names is then set as the value of the `position-anchor` property of an element that has its {{cssxref("position")}} set to `absolute` or `fixed`, the two elements are associated. The two elements become tethered by setting a location on the associated element relative to the anchor, making it an "anchor-positioned" element.

If multiple anchor elements have the same anchor name set on them, and that name is referenced by the `position-anchor` property value of a positioned element, that positioned element will be associated with the last anchor element with that anchor name in the source order.

Anchor positioning changes the [containing block](/en-US/docs/Web/CSS/CSS_display/Containing_block) of anchor-positioned elements, making its `position` relative to its anchor rather than to the nearest positioned ancestor element.

To tether and place a positioned element in a specific location relative to an anchor element, an anchor positioning feature is needed, such as the {{cssxref("anchor()")}} function (set within an {{glossary("inset properties", "inset property's")}} value) or the {{cssxref("position-area")}} property.

You cannot associate a positioned element with an anchor element if the anchor is hidden, such as with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if the anchor is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it.

The `anchor-name` property is supported on all elements that generate a principal box. This means that [pseudo-elements](/en-US/docs/Web/CSS/Pseudo-elements), including generated content created using {{cssxref("::before")}} and {{cssxref("::after")}}, and UI features like the [`range` input](/en-US/docs/Web/HTML/Element/input/range) thumb ({{cssxref("::-webkit-slider-thumb")}}) can be anchor elements. Pseudo elements are implicitly anchored to the same element as the pseudo-element's originating element, unless otherwise specified.

For more information on anchor features and usage, see the [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page and the [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

This example tethers a positioned element to an anchor, positioning the element to the right of the anchor.

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

We first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the `anchor-name` property:

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
  anchor-name: --myAnchor;
}
```

We associate the second `<div>` with the anchor element by setting its anchor name as the value of the positioned element's {{cssxref("position-anchor")}} property. We then set the positioned element's:

- {{cssxref("position")}} property to `fixed`, converting it to an _anchor-positioned element_ so it can be positioned relative to the anchor's position on the page.
- {{cssxref("left")}} and {{cssxref("top")}} properties to {{cssxref("anchor()")}} functions with values of `right` and `top` respectively. This positions the infobox's left edge flush to the right edge of its anchor, and its top edge relative to the top edge of its anchor.
- {{cssxref("margin-left")}} to `10px`, creating space between the anchor positioned element and its anchor.

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
  position-anchor: --myAnchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### Result

Scroll the page to see how the infobox is positioned relative to the anchor. As the anchor scrolls upwards, the positioned element moves along with it.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Multiple positioned elements

This example demonstrates how you can associate multiple positioned elements with one anchor.

#### HTML

The HTML is the same as for the previous example, except this time we have multiple positioned element `<div>`s with different [`id`](/en-US/docs/Web/HTML/Global_attributes/id)s to identify them.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is an information box.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is another information box.</p>
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

We declare the `anchor` `<div>` as an anchor element using the `anchor-name` property, giving it an anchor name as before.

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
  anchor-name: --myAnchor;
}
```

Each of the two positioned elements are associated with the anchor element by setting its anchor name as the positioned element's {{cssxref("position-anchor")}} property value. Both are also given `fixed` positioning, making them **anchor positioned elements**. The positioned elements are then positioned in different places relative to the anchor using a combination of inset properties as seen above and {{cssxref("align-self")}} / {{cssxref("justify-self")}} properties with a value of `anchor-center`, centrally aligning the infobox to the center of the anchor in the inline/block directions respectively.

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
  position-anchor: --myAnchor;
  position: fixed;
}

#infobox1 {
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Result

Scroll the page to see how both of the infoboxes are tethered to the anchor.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Multiple anchor names

This example demonstrates how an anchor element can have more than one anchor name.

#### HTML

The HTML is the same as for the previous example.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is an information box.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is another information box.</p>
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

The CSS is the same as the previous example too, except we include two comma-separated names in the target's `anchor-name` property value and each positioned element has a different value for `position-anchor`.

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
.anchor {
  anchor-name: --anchor1, --anchor2;
}

.infobox {
  position: fixed;
}

#infobox1 {
  position-anchor: --anchor1;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --anchor2;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Result

Scroll the page to see how both of the infoboxes are tethered to the anchor.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/en-US/docs/Web/HTML/Global_attributes/anchor) attribute
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
