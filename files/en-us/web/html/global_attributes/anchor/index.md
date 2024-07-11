---
title: anchor
slug: Web/HTML/Global_attributes/anchor
page-type: html-attribute
status:
  - experimental
  - non-standard
browser-compat: html.global_attributes.anchor
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}{{SeeCompatTable}}

The **`anchor`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is used to associate a positioned element with an anchor element. The attribute's value is the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) value of the element you want to anchor the positioned element to. The element can then be positioned using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using).

> **Note:** Alternatively, you can associate a positioned element with an anchor element via CSS, using the {{cssxref("anchor-name")}} and {{cssxref("position-anchor")}} properties. If both anchoring techniques are used on the same element, the CSS technique takes precedence over the HTML technique.

## Examples

### Basic `anchor` attribute usage

The following example uses HTML to associate a positioned element with an anchor. CSS is then used to tether the positioned element to the right of the anchor.

#### HTML

We create a {{htmlelement("div")}} element with an `id` of `example-anchor`. This is our anchor element. We then include another `<div>` with the `anchor` attribute set to `example-anchor`. This designates the first `<div>` as the anchor for the second `<div>`, associating the two together.

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

We use CSS to convert the `infobox` element into an _anchor-positioned element_ and position it relative to its anchor. We set its:

- {{cssxref("position")}} property to `fixed`, converting it to a positioned element so it can be positioned relative to the anchor's position.
- {{cssxref("left")}} property to an {{cssxref("anchor()")}} function with a value of `right`. This tethers the positioned element to its anchor, positioning its left edge flush to the anchor's right edge.
- {{cssxref("align-self")}} property to [`anchor-center`](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). This causes the infobox to be aligned centrally to the center of the anchor in the inline direction.
- {{cssxref("margin-left")}} to `10px`, creating space between the anchor-positioned element and its anchor.

```css
.infobox {
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}
```

#### Result

Scroll the example to see how the infobox is tethered to the anchor. When the `anchor` attribute is supported, the infobox will be fixed to the right of the anchor. If not supported, the infobox will be fixed to the viewport.

{{EmbedLiveSample("Basic `anchor` attribute usage", "100%", 225)}}

## Specifications

This attribute is not currently part of the HTML specification. Read the discussion about adding the `anchor` attribute at [https://github.com/whatwg/html/pull/9144](https://github.com/whatwg/html/pull/9144).

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLElement.anchorElement")}}
- CSS {{cssxref("anchor-name")}} property
- CSS {{cssxref("position-anchor")}} property
- [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning) module
- [Using CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using) guide
