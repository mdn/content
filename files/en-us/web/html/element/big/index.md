---
title: "<big>: The Bigger Text element"
slug: Web/HTML/Element/big
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.big
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<big>`** [HTML](/en-US/docs/Web/HTML) deprecated element renders the enclosed text at a font size one level larger than the surrounding text (`medium` becomes `large`, for example). The size is capped at the browser's maximum permitted font size.

> **Warning:** This element has been removed from the specification and shouldn't be used anymore. Use the CSS {{cssxref("font-size")}} property to adjust the font size.

## Attributes

This element has no other attributes than the [global attributes](/en-US/docs/Web/HTML/Global_attributes), common to all elements.

## Examples

Here we see examples showing the use of `<big>` followed by an example showing how to accomplish the same results using modern CSS syntax instead.

### Using big

This example uses the obsolete `<big>` element to increase the size of some text.

#### HTML

```html
<p>
  This is the first sentence.
  <big>This whole sentence is in bigger letters.</big>
</p>
```

#### Result

{{EmbedLiveSample("Using_big", 640, 60)}}

### Using CSS `font-size`

This example uses the CSS {{cssxref("font-size")}} property to increase the font size by one level.

#### CSS

```css
.bigger {
  font-size: larger;
}
```

#### HTML

```html
<p>
  This is the first sentence.
  <span class="bigger">This whole sentence is in bigger letters.</span>
</p>
```

#### Result

{{EmbedLiveSample("Using_CSS_font-size", 640, 60)}}

## DOM interface

This element implements the {{domxref('HTMLElement')}} interface.

<!-- ## Technical summary -->

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- CSS: {{cssxref("font-size")}}, {{cssxref("font")}}
- HTML: {{htmlelement("small")}}, {{htmlelement("font")}}, {{htmlelement("style")}}
- HTML 4.01 Specification: [Font Styles](https://www.w3.org/TR/html4/present/graphics.html#h-15.2)
