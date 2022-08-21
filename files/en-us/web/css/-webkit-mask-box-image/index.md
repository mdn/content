---
title: '-webkit-mask-box-image'
slug: Web/CSS/-webkit-mask-box-image
tags:
  - CSS
  - Layout
  - Non-standard
  - Reference
  - Web
  - recipe:css-property
browser-compat: css.properties.-webkit-mask-box-image
---
{{ CSSRef() }} {{ Non-standard_header() }}

`-webkit-mask-box-image` sets the mask image for an element's border box.

- {{ Xref_cssinitial() }}: none
- Applies to: all elements
- {{ Xref_cssinherited() }}: no
- Media: {{ Xref_cssvisual() }}
- {{ Xref_csscomputed() }}: as specified

## Syntax

```
-webkit-mask-box-image: <mask-box-image> [<top> <right> <bottom> <left> <x-repeat> <y-repeat>]
```

Where:

- \<mask-box-image>
  - : `{{cssxref("url", "&lt;uri&gt;")}} | <gradient> | none`
- \<top> \<right> \<bottom> \<left>
  - : `<length> | <percentage>`
- \<x-repeat> \<y-repeat>
  - : `repeat | stretch | round | space`

### Values

- \<uri>
  - : The location of the image resource to be used as a mask image.
- \<gradient>
  - : A `-webkit-gradient` function to be used as a mask image.
- none
  - : Used to specify that a border box is to have no mask image.
- \<length>
  - : The size of the mask image's offset. See {{cssxref("&lt;length&gt;")}} for possible units.
- \<percentage>
  - : The mask image's offset has a percentage value relative to the border box's corresponding dimension (width or height).
- repeat
  - : The mask image is repeated as many times as is necessary to span the border box. May include a partial image if the mask image does not divide evenly into the border box.
- stretch
  - : The mask image is stretched to contain the border box exactly.
- round
  - : The mask image is stretched somewhat and repeated such that there is no partial mask image at the end of the border box.
- space
  - : The mask image is repeated as many times as possible without stretching. There is no partial mask image at the end of the border box.

## Formal definition

{{CSSInfo}}

## Formal syntax

{{CSSSyntax}}

## Examples

### Setting an image

```css
.exampleone {
  -webkit-mask-box-image: url('mask.png');
}
```

### Offsetting and filling an image

```css
.exampletwo {
  -webkit-mask-box-image: url('logo.png') 100 100 0 0 round round;
}
```

## Specifications

Not part of any standard.

## Browser compatibility

{{Compat}}

## See also

{{ cssxref("mask") }}, {{ cssxref("mask-origin") }}, {{ cssxref("-webkit-mask-attachment") }}, {{ cssxref("mask-clip") }}, {{ cssxref("mask-image") }}, {{ cssxref("-webkit-mask-composite") }}, {{ cssxref("mask-repeat") }}
