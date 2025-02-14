---
title: "HTMLElement: showPopover() method"
short-title: showPopover()
slug: Web/API/HTMLElement/showPopover
page-type: web-api-instance-method
browser-compat: api.HTMLElement.showPopover
---

{{APIRef("Popover API")}}

The **`showPopover()`** method of the {{domxref("HTMLElement")}} interface shows a {{domxref("Popover_API", "popover", "", "nocode")}} element (i.e. one that has a valid [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute) by adding it to the {{glossary("top layer")}}.

When `showPopover()` is called on an element with the [`popover`](/en-US/docs/Web/HTML/Global_attributes/popover) attribute that is currently hidden, a {{domxref("HTMLElement/beforetoggle_event", "beforetoggle")}} event will be fired, followed by the popover showing, and then the {{domxref("HTMLElement/toggle_event", "toggle")}} event firing. If the element is already showing, an error will be thrown.

## Syntax

```js-nolint
showPopover()
showPopover(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that can contain the following properties:
    - `source` {{optional_inline}}
      - : An {{domxref("HTMLElement")}} reference; programmatically defines the invoker of the popover associated with the toggle action, that is, the control button or link associated with the popover.

Associating a popover with a control using the `source` option creates an implicit anchor reference between the two. This makes it very convenient to position popovers relative to their controls using [CSS anchor positioning](/en-US/docs/Web/CSS/CSS_anchor_positioning). Explicit associations do not need to be made using the {{cssxref("anchor-name")}} and {{cssxref("position-anchor")}} properties.

See [Associating anchor and positioned elements](/en-US/docs/Web/CSS/CSS_anchor_positioning/Using#associating_anchor_and_positioned_elements) for more details on anchor references.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the popover is already showing.

## Examples

The following example provides functionality to show a popover by pressing a particular key on the keyboard.

First, some HTML:

```html
<div id="mypopover" popover>
  <h2>Help!</h2>

  <p>You can use the following commands to control the app</p>

  <ul>
    <li>Press <ins>C</ins> to order cheese</li>
    <li>Press <ins>T</ins> to order tofu</li>
    <li>Press <ins>B</ins> to order bacon</li>
    <hr />
    <li>Say "Service" to summon the robot waiter to take your order</li>
    <li>Say "Escape" to engage the ejector seat</li>
  </ul>
</div>
```

And now the JavaScript to wire up the functionality:

```js
const popover = document.getElementById("mypopover");

document.addEventListener("keydown", (event) => {
  if (event.key === "h") {
    popover.showPopover();
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Popover API](/en-US/docs/Web/API/Popover_API)
