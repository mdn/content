---
title: anchor-name
slug: Web/CSS/anchor-name
page-type: css-property
status:
  - experimental
browser-compat: css.properties.anchor-name
---

{{CSSRef}}{{seecompattable}}

The **`anchor-name`** [CSS](/en-US/docs/Web/CSS) property enables you to define an element as an **anchor element** and give it one or more identifying **anchor names**, which can then be set as values of positioned elements' {{cssxref("position-anchor")}} property to associate them with the anchor.

To tether the anchor element and positioned elements together, and position the latter relative to the position of the former, you need to use a feature such as the {{cssxref("anchor()")}} function or the {{cssxref("inset-area")}} property.

An element needs to have {{cssxref("position")}} `fixed` or `absolute` applied to it to be associated with an anchor, and it needs to be placed after the anchor element in the DOM, or be a descendant of it, for the association to work.

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
  - : The default value. Setting `anchor-name: none` on an element means that it is not identified as an anchor element, and the property therefore has no effect.
- {{cssxref("dashed-ident")}}

  - : Defines the element as an anchor element and gives it one or more identifying anchor names, which can then be set as values of positioned elements' {{cssxref("position-anchor")}} properties to associate them with the anchor. The values need to be {{cssxref("dashed-ident")}} values; if multiple values are specified, they are separated with commas.

    If multiple anchor elements have the same anchor name set on them, and that name is referenced by a positioned element in its `position-anchor` property, it will be associated with the last anchor element with that name in the source order.

> **Note:** You cannot associate a positioned element with an anchor element if the anchor is hidden, for example with {{cssxref("display", "display: none")}} or {{cssxref("visibility", "visibility: hidden")}}, or if it is part of the [skipped contents](/en-US/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) of another element due to it having {{cssxref("content-visibility", "content-visibility: hidden")}} set on it.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Examples

### Basic usage

The following example associates a positioned element with an anchor, and tethers the positioned element to the right of the anchor.

#### HTML

In the HTML, we specify two {{htmlelement("div")}} elements, one with a class of `anchor` and one with a class of `infobox`. These are intended to be the anchor element and the positioned element we will associate with it, respectively.

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

In the CSS, we first declare the `anchor` `<div>` as an anchor element by setting an anchor name on it via the `anchor-name` property:

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

The positioned element is then associated with the anchor element by setting its anchor name as the value of the positioned element's {{cssxref("position-anchor")}} property.

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

The result looks like this. Try scrolling the page to demonstrate how the infobox is tethered to the anchor.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Multiple positioned elements

This example demonstrates how you can associate multiple positioned elements with one anchor.

#### HTML

The HTML is the same as for the previous example, except that this time we have multiple positioned element `<div>`s, with different [`id`](/en-US/docs/Web/HTML/Global_attributes/id)s to identify them.

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

The CSS is mostly the same as the previous example too. We declare the `anchor` `<div>` as an anchor element using the `anchor-name` property and give it an anchor name as before.

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

Each of the two positioned elements are associated with the anchor element by setting its anchor name as each positioned element's {{cssxref("position-anchor")}} property value. The positioned elements are then positioned in different places relative to the anchor using a combination of inset, alignment, and margin properties.

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
#infobox1 {
  position-anchor: --infobox;

  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --infobox;

  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Result

The result looks like this. Try scrolling the page to demonstrate how both of the infoboxes are tethered to the anchor.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
