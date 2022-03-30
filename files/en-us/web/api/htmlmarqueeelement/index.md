---
title: HTMLMarqueeElement
slug: Web/API/HTMLMarqueeElement
tags:
  - API
  - Deprecated
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLMarqueeElement
---
{{APIRef("HTML DOM")}}{{Deprecated_Header}}

The **`HTMLMarqueeElement`** interface provides methods to manipulate {{HTMLElement("marquee")}} elements.

It inherits properties and methods from the {{DOMxRef("HTMLElement")}} interface.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLMarqueeElement.behavior")}}
  - : Sets how the text is scrolled within the marquee. Possible values are `scroll`, `slide` and `alternate`. If no value is specified, the default value is `scroll`.
- {{DOMxRef("HTMLMarqueeElement.bgColor")}}
  - : Sets the background color through color name or hexadecimal value.
- {{DOMxRef("HTMLMarqueeElement.direction")}}
  - : Sets the direction of the scrolling within the marquee. Possible values are `left`, `right`, `up` and `down`. If no value is specified, the default value is `left`.
- {{DOMxRef("HTMLMarqueeElement.height")}}
  - : Sets the height in pixels or percentage value.
- {{DOMxRef("HTMLMarqueeElement.hspace")}}
  - : Sets the horizontal margin.
- {{DOMxRef("HTMLMarqueeElement.loop")}}
  - : Sets the number of times the marquee will scroll. If no value is specified, the default value is −1, which means the marquee will scroll continuously.
- {{DOMxRef("HTMLMarqueeElement.scrollAmount")}}
  - : Sets the amount of scrolling at each interval in pixels. The default value is 6.
- {{DOMxRef("HTMLMarqueeElement.scrollDelay")}}
  - : Sets the interval between each scroll movement in milliseconds. The default value is 85. Note that any value smaller than 60 is ignored and the value 60 is used instead, unless `trueSpeed` is `true`.
- {{DOMxRef("HTMLMarqueeElement.trueSpeed")}}
  - : By default, `scrollDelay` values lower than 60 are ignored. If `trueSpeed` is `true`, then those values are not ignored.
- {{DOMxRef("HTMLMarqueeElement.vspace")}}
  - : Sets the vertical margin.
- {{DOMxRef("HTMLMarqueeElement.width")}}
  - : Sets the width in pixels or percentage value.

### Event handlers

- {{DOMxRef("HTMLMarqueeElement.onbounce")}}
  - : Fires when the marquee has reached the end of its scroll position. It can only fire when the behavior attribute is set to `alternate`.
- {{DOMxRef("HTMLMarqueeElement.onfinish")}}
  - : Fires when the marquee has finished the amount of scrolling that is set by the loop attribute. It can only fire when the loop attribute is set to some number that is greater than 0.
- {{DOMxRef("HTMLMarqueeElement.onstart")}}
  - : Fires when the marquee starts scrolling.

## Methods

_Inherits methods from its parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLMarqueeElement.start()")}}
  - : Starts scrolling of the marquee.
- {{DOMxRef("HTMLMarqueeElement.stop()")}}
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

- {{HTMLElement("marquee")}}
