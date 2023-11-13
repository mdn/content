---
title: SubmitEvent
slug: Web/API/SubmitEvent
page-type: web-api-interface
browser-compat: api.SubmitEvent
---

{{APIRef("HTML DOM")}}

The **`SubmitEvent`** interface defines the object used to represent an {{Glossary("HTML")}} form's {{domxref("HTMLFormElement.submit_event", "submit")}} event. This event is fired at the {{HTMLElement("form")}} when the form's submit action is invoked.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SubmitEvent.SubmitEvent", "SubmitEvent()")}}
  - : Creates and returns a new `SubmitEvent` object whose {{domxref("Event.type", "type")}} and other options are configured as specified. Note that currently the only valid `type` for a `SubmitEvent` is `submit`.

## Instance properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("Event")}}._

- {{domxref("SubmitEvent.submitter", "submitter")}} {{ReadOnlyInline}}
  - : An {{domxref("HTMLElement")}} object which identifies the button or other element which was invoked to trigger the form being submitted.

## Instance methods

_While `SubmitEvent` offers no methods of its own, it inherits any specified by its parent interface, {{domxref("Event")}}._

## Examples

In this example, a shopping cart may have an assortment of different submit buttons depending on factors such as the user's settings, the shop's settings, and any minimum or maximum shopping card totals established by the payment processors. Each of the submit elements' {{domxref("Element.id", "id")}} is used to identify which payment processor the button corresponds to.

```js
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  let submitter = event.submitter;
  let handler = submitter.id;

  if (handler) {
    processOrder(form, handler);
  } else {
    showAlertMessage(
      "An unknown or unaccepted payment type was selected. Please try again.",
      "OK",
    );
  }
});
```

The handler ID is obtained by using the `submit` event's {{domxref("SubmitEvent.submitter", "submitter")}} property to get the submit button, from which we then get the ID. With that in hand, we can call a `processOrder()` function to handle the order, passing along the form and the handler ID.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
