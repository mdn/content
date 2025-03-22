---
title: "Event: returnValue property"
short-title: returnValue
slug: Web/API/Event/returnValue
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Event.returnValue
---

{{APIRef("DOM")}}{{Deprecated_Header}}{{AvailableInWorkers}}

The {{domxref("Event")}} property
**`returnValue`** indicates whether the default action for
this event has been prevented or not.

It is set to `true` by
default, allowing the default action to occur. Setting this property to
`false` prevents the default action.

> [!NOTE]
> While `returnValue` has been adopted into the DOM
> standard, it is present primarily to support existing code. Use
> {{DOMxRef("Event.preventDefault", "preventDefault()")}}, and
> {{domxref("Event.defaultPrevented", "defaultPrevented")}} instead of this historical
> property.

## Value

A boolean value which is `true` if the event has not been
canceled; otherwise, if the event has been canceled or the default has been prevented,
the value is `false`.

The value of `returnValue` is the opposite of the value returned by
{{domxref("Event.defaultPrevented", "defaultPrevented")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLDialogElement.returnValue")}}: the return value for the {{HTMLElement("dialog")}}.
