---
title: ScrollToOptions
slug: Web/API/ScrollToOptions
tags:
  - API
  - CSSOM View
  - Dictionary
  - Reference
  - ScrollToOptions
browser-compat: api.ScrollToOptions
---
{{ APIRef("CSSOM View") }}

The **`ScrollToOptions`** dictionary of the CSSOM View spec contains properties specifying where an element should be scrolled to, and whether the scrolling should be smooth.

A `ScrollToOptions` dictionary can be provided as a parameter for the following methods:

- {{domxref("Window.scroll()")}}
- {{domxref("Window.scrollBy()")}}
- {{domxref("Window.scrollTo()")}}
- {{domxref("Element.scroll()")}}
- {{domxref("Element.scrollBy()")}}
- {{domxref("Element.scrollTo()")}}

## Properties

- {{domxref("ScrollToOptions.top")}}
  - : Specifies the number of pixels along the Y axis to scroll the window or element.
- {{domxref("ScrollToOptions.left")}}
  - : Specifies the number of pixels along the X axis to scroll the window or element.
- {{domxref("ScrollToOptions.behavior")}}
  - : Specifies whether the scrolling should animate smoothly, or happen instantly in a single jump. This is actually defined on the `ScrollOptions` dictionary, which is implemented by `ScrollToOptions`.

## Examples

In our [scrolltooptions example](https://github.com/mdn/dom-examples/tree/master/scrolltooptions) ([see it live](https://mdn.github.io/dom-examples/scrolltooptions/)) we include a form that allows the user to enter three values — two numbers representing the left and top properties (i.e. the positions to scroll to along the X and Y axes), and a checkbox indicating whether they want smooth scrolling enabled or not.

When the form is submitted, an event handler is run that puts the entered values into a ScrollToOptions dictionary, and then invokes the {{domxref("Window.ScrollTo()")}} method, passing the dictionary as a parameter:

```js
form.addEventListener('submit', (e) => {
  e.preventDefault();
  var scrollOptions = {
    left: leftInput.value,
    top: topInput.value,
    behavior: scrollInput.checked ? 'smooth' : 'auto'
  }

  window.scrollTo(scrollOptions);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
