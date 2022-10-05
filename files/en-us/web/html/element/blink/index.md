---
title: '<blink>: The Blinking Text element'
slug: Web/HTML/Element/blink
tags:
  - Blink
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
browser-compat: html.elements.blink
---

{{HTMLRef}}{{Deprecated_header}}

The **`<blink>`** [HTML](/en-US/docs/Web/HTML) element is a non-standard element which causes the enclosed text to flash slowly.

> **Warning:** Do not use this element as it is **obsolete** and is bad design practice. Blinking text is frowned upon by several accessibility standards and the CSS specification allows browsers to ignore the `<blink>` element.

## DOM interface

This element is unsupported and thus implements the {{domxref("HTMLUnknownElement")}} interface.

## Example

```html
<blink>Why would somebody use this?</blink>
```

### Result (toned down!)

![Text "why would somebody use this" flashing on and off.](htmlblinkelement.gif)

## CSS polyfill

If you really do need a polyfill, then you can use the following CSS polyfill. Works in IE10+.

```css
blink {
  animation: 2s linear infinite condemned_blink_effect;
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [History of the creation of the HTML `<blink>` element](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag).
- {{cssxref("text-decoration")}}, where a blink value exists, though browsers are not required to effectively make it blink.
- {{htmlelement("marquee")}}, another similar non-standard element.
- [CSS animations](/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) are the way to go to create such an effect.
