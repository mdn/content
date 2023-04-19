---
title: popover
slug: Web/HTML/Global_attributes/popover
page-type: html-attribute
status:
  - experimental
browser-compat: html.global_attributes.popover
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

The **`popover`** [global attribute](/en-US/docs/Web/HTML/Global_attributes) is used to specify that the element should be hidden on the page until it is opened by interacting with an _invoking element_ (a `<button>` or `<input type="button">` with a [`popovertarget`](/en-US/docs/Web/HTML/button#popovertarget)), or manually via [`showPopover()`](/en-US/docs/Web/API/HTMLElement/showPopover/).

## Usage notes

- When open, the element will appear above all other elements on a separate top layer, and won't be influenced by parent elements {{cssxref('position')}} or {{cssxref('overflow')}} styling.

- The {{cssxref(':popover-open')}} CSS pseudo-selector can be used to style the element when it is open.

- The {{cssxref('::backdrop')}} CSS pseudo-element can be used to style the backdrop that is displayed behind the element; for example, to dim unreachable content behind the modal dialog.

- {{HTMLElement('button')}} elements can open a popover by adding the [`popovertarget`](/en-US/docs/Web/HTML/Element/button#popovertarget) attribute, with a value matching the [`id`](/en-US/docs/Web/HTML/Global_attributes#id) of the element with the `popover` attribute.

- The {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} and {{domxref("HTMLElement/toggle_event", "toggle")}} events can be used to determine when an element with `popover` will change from an open or closed state.

## Examples

## Simple example

The following will render a button which will open a popover element.

```html
<button popovertarget="my-popover">Open Popover</button>

<div popover id="my-popover">Greetings, one and all!</div>
```

{{EmbedLiveSample("Simple_example", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} event
- The {{domxref("HTMLElement/toggle_event", "toggle")}} event
- {{domxref("HTMLElement/hidePopover", "element.hidePopover()")}}
- {{domxref("HTMLElement/showPopover", "element.showPopover()")}}
- {{domxref("HTMLElement/togglePopover", "element.togglePopover()")}}
- The {{cssxref(":popover-open")}} pseudo-element
- The {{cssxref("::backdrop")}} pseudo-element
- [popover-polyfill](https://github.com/oddbird/popover-polyfill)
