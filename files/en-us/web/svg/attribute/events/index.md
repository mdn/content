---
title: SVG Event Attributes
slug: Web/SVG/Attribute/Events
page-type: svg-attribute
browser-compat: svg.attributes.events.global
---

{{SVGRef}}

Event attributes always have their name starting with "on" followed by the name of the event for which they are intended. They specifies some script to run when the event of the given type is dispatched to the element on which the attributes are specified.

For every event type that the browser supports, SVG supports that as an event attribute, following the same requirements as for HTML event attributes.

The global event attributes are available on _all SVG elements_. Other event attributes are available on a case by case basis for each elements.

All event attribute are _not animatable_.

## Attributes

### Animation Event Attributes

**`onbegin`**, **`onend`**, **`onrepeat`**

### Document Event Attributes

**`onabort`**, **`onerror`**, **`onresize`**, **`onscroll`**, **`onunload`**

### Document Element Event Attributes

**`oncopy`**, **`oncut`**, **`onpaste`**

### Global Event Attributes

**`oncancel`**, **`oncanplay`**, **`oncanplaythrough`**, **`onchange`**, **`onclick`**, **`onclose`**, **`oncuechange`**, **`ondblclick`**, **`ondrag`**, **`ondragend`**, **`ondragenter`**, **`ondragleave`**, **`ondragover`**, **`ondragstart`**, **`ondrop`**, **`ondurationchange`**, **`onemptied`**, **`onended`**, **`onerror`**, **`onfocus`**, **`oninput`**, **`oninvalid`**, **`onkeydown`**, **`onkeypress`**, **`onkeyup`**, **`onload`**, **`onloadeddata`**, **`onloadedmetadata`**, **`onloadstart`**, **`onmousedown`**, **`onmouseenter`**, **`onmouseleave`**, **`onmousemove`**, **`onmouseout`**, **`onmouseover`**, **`onmouseup`**, **`onmousewheel`**, **`onpause`**, **`onplay`**, **`onplaying`**, **`onprogress`**, **`onratechange`**, **`onreset`**, **`onresize`**, **`onscroll`**, **`onseeked`**, **`onseeking`**, **`onselect`**, **`onshow`**, **`onstalled`**, **`onsubmit`**, **`onsuspend`**, **`ontimeupdate`**, **`ontoggle`**, **`onvolumechange`**, **`onwaiting`**

### Graphical Event Attributes

**`onactivate`**, **`onfocusin`**, **`onfocusout`**

## Browser compatibility

{{Compat}}
