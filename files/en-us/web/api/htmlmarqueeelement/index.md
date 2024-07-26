---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
page-type: web-api-interface
status:
  - deprecated
browser-compat: api.HTMLMarqueeElement
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLMarqueeElement`** interface provides methods to manipulate {{HTMLElement("marquee")}} elements.

It inherits properties and methods from the {{DOMxRef("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.behavior` {{Deprecated_Inline}}
  - : Sets how the text is scrolled within the marquee. Possible values are `scroll`, `slide` and `alternate`. If no value is specified, the default value is `scroll`.
- `HTMLMarqueeElement.bgColor` {{Deprecated_Inline}}
  - : Sets the background color through color name or hexadecimal value.
- `HTMLMarqueeElement.direction` {{Deprecated_Inline}}
  - : Sets the direction of the scrolling within the marquee. Possible values are `left`, `right`, `up` and `down`. If no value is specified, the default value is `left`.
- `HTMLMarqueeElement.height` {{Deprecated_Inline}}
  - : Sets the height in pixels or percentage value.
- `HTMLMarqueeElement.hspace` {{Deprecated_Inline}}
  - : Sets the horizontal margin.
- `HTMLMarqueeElement.loop` {{Deprecated_Inline}}
  - : Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously.
- `HTMLMarqueeElement.scrollAmount` {{Deprecated_Inline}}
  - : Sets the amount of scrolling at each interval in pixels. The default value is 6.
- `HTMLMarqueeElement.scrollDelay` {{Deprecated_Inline}}
  - : Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unless `trueSpeed` is `true`.
- `HTMLMarqueeElement.trueSpeed` {{Deprecated_Inline}}
  - : By default, `scrollDelay` values lower than 60 are ignored. If `trueSpeed` is `true`, then those values are not ignored.
- `"HTMLMarqueeElement.vspace` {{Deprecated_Inline}}
  - : Sets the vertical margin.
- `HTMLMarqueeElement.width` {{Deprecated_Inline}}
  - : Sets the width in pixels or percentage value.

## Instance methods

_Inherits methods from its parent, {{DOMxRef("HTMLElement")}}._

- `HTMLMarqueeElement.start()` {{Deprecated_Inline}}
  - : Starts scrolling of the marquee.
- `HTMLMarqueeElement.stop()` {{Deprecated_Inline}}
  - : Stops scrolling of the marquee.

## Events

- `bounce` {{Deprecated_Inline}}
  - : Fires when the marquee has reached the end of its scroll position. It can only fire when the behavior attribute is set to `alternate`.
- `finish` {{Deprecated_Inline}}
  - : Fires when the marquee has finished the amount of scrolling that is set by the loop attribute. It can only fire when the loop attribute is set to some number that is greater than 0.
- `start` {{Deprecated_Inline}}
  - : Fires when the marquee starts scrolling.

## Examples

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("marquee")}}
