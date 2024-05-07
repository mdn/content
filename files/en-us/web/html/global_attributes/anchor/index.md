---
title: anchor
slug: Web/HTML/Global_attributes/anchor
page-type: html-attribute
status:
  - non-standard
browser-compat: html.global_attributes.anchor
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

The **`anchor`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is used to associate a positioned element with an anchor element. The anchor element is given an [`id`](/en-US/docs/Web/HTML/Global_attributes/id), and the positioned element is given an `anchor` attribute, the value of which is the anchor element's `id`.

You can also associate a positioned element with an anchor element via CSS, using the {{cssxref("anchor-name")}} and {{cssxref("position-anchor")}} properties.

For detailed information on anchor usage, see the [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module landing page.

## Examples

### Basic `anchor` attribute usage

The following example associates a positioned element with an anchor, and tethers the positioned element to the right of the anchor.

#### HTML

In the HTML, we create a {{htmlelement("div")}} element with an `id` of `example-anchor`. This will be our anchor element. We then include another `<div>` with a class of `infobox` and an `anchor` attribute set to `example-anchor`. This designates the first `<div>` as the second `<div>`'s anchor, associating the two together.

We also include some filler text around the two `<div>`s to make the {{htmlelement("body")}} taller so that it will scroll.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor" id="example-anchor">⚓︎</div>

<div class="infobox" anchor="example-anchor">
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

In the CSS, we set the `infobox`'s:

- {{cssxref("position")}} property to `fixed`, so it can be positioned relative to the anchor's position in the page.
- {{cssxref("left")}} property to an {{cssxref("anchor()")}} function with a value of `right` — this has the effect of positioning the infobox's left edge flush to the right edge of its anchor.
- {{cssxref("align-self")}} property to `anchor-center`. This causes the infobox to be aligned centrally to the center of the anchor in the inline direction.
- {{cssxref("margin-left")}} to `10px` to create space between the infobox and its anchor.

```css
.infobox {
  position: fixed;

  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Result

The result is as follows. Try scrolling the page to demonstrate how the infobox is tethered to the anchor.

{{EmbedLiveSample("Basic `anchor` attribute usage", "100%", 225)}}

## Specifications

This attribute is not currently a part of any specification. See [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144) for an ongoing discussion about it.

## Browser compatibility

{{Compat}}

## See also

- [CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning)
- [Using CSS Anchor Positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using)
