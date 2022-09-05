---
title: '<marquee>: The Marquee element'
slug: Web/HTML/Element/marquee
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
  - marquee
browser-compat: html.elements.marquee
---

{{Deprecated_Header}}

The **`<marquee>`** [HTML](/en-US/docs/Web/HTML) element is used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

- {{htmlattrdef("behavior")}} {{Deprecated_Inline}}
  - : Sets how the text is scrolled within the marquee. Possible values are `scroll`, `slide` and `alternate`. If no value is specified, the default value is `scroll`.
- {{htmlattrdef("bgcolor")}} {{Deprecated_Inline}}
  - : Sets the background color through color name or hexadecimal value.
- {{htmlattrdef("direction")}} {{Deprecated_Inline}}
  - : Sets the direction of the scrolling within the marquee. Possible values are `left`, `right`, `up` and `down`. If no value is specified, the default value is `left`.
- {{htmlattrdef("height")}} {{Deprecated_Inline}}
  - : Sets the height in pixels or percentage value.
- {{htmlattrdef("hspace")}} {{Deprecated_Inline}}
  - : Sets the horizontal margin
- {{htmlattrdef("loop")}} {{Deprecated_Inline}}
  - : Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously.
- {{htmlattrdef("scrollamount")}} {{Deprecated_Inline}}
  - : Sets the amount of scrolling at each interval in pixels. The default value is 6.
- {{htmlattrdef("scrolldelay")}} {{Deprecated_Inline}}
  - : Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unless` truespeed `is specified.
- {{htmlattrdef("truespeed")}} {{Deprecated_Inline}}
  - : By default,` scrolldelay `values lower than 60 are ignored. If` truespeed `is present, those values are not ignored.
- {{htmlattrdef("vspace")}} {{Deprecated_Inline}}
  - : Sets the vertical margin in pixels or percentage value.
- {{htmlattrdef("width")}} {{Deprecated_Inline}}
  - : Sets the width in pixels or percentage value.

## Event handlers

- {{htmlattrdef("onbounce")}}
  - : Fires when the marquee has reached the end of its scroll position. It can only fire when the behavior attribute is set to `alternate`.
- {{htmlattrdef("onfinish")}}
  - : Fires when the marquee has finished the amount of scrolling that is set by the loop attribute. It can only fire when the loop attribute is set to some number that is greater than 0.
- {{htmlattrdef("onstart")}}
  - : Fires when the marquee starts scrolling.

## Methods

- `start()`
  - : Starts scrolling of the marquee.
- `stop()`
  - : Stops scrolling of the marquee.

## Examples

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
  <marquee behavior="alternate">
    This text will bounce
  </marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{DOMxRef("HTMLMarqueeElement")}}
