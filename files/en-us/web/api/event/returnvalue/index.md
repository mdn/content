---
title: Event.returnValue
slug: Web/API/Event/returnValue
tags:
  - API
  - DOM
  - Event
  - Property
  - Reference
  - action
  - default
  - returnValue
  - Deprecated
browser-compat: api.Event.returnValue
---
{{APIRef("DOM Events")}}{{Deprecated_Header}}

The {{domxref("Event")}} property
**`returnValue`** indicates whether the default action for
this event has been prevented or not.

It is set to `true` by
default, allowing the default action to occur. Setting this property to
`false` prevents the default action.

> **Note:** While `returnValue` has been adopted into the DOM
> standard, it is present primarily to support existing code. You should use
> {{DOMxRef("Event.preventDefault", "preventDefault()")}}, and
> {{domxref("Event.defaultPrevented", "defaultPrevented")}} instead of this historical
> property.

## Syntax

```js
event.returnValue = bool;

var bool = event.returnValue;
```

### Value

A boolean value which is `true` if the event has not been
canceled; otherwise, if the event has been canceled or the default has been prevented,
the value is `false`.

The value returned by `returnValue` is the opposite of the value returned by
{{domxref("Event.defaultPrevented", "defaultPrevented")}}.

## Usage notes

`returnValue` was introduced into the DOM by Internet Explorer 6, and due to
that browser's ubiquity became so commonly used that other browsers eventually
implemented it as well. It has been adopted into the DOM specification, primarily to
ensure that existing web content continues to function going forward.

New projects should generally avoid using `returnValue`, although they may
if they choose to do so.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
