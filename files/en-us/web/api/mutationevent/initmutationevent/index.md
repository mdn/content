---
title: "MutationEvent: initMutationEvent() method"
short-title: initMutationEvent()
slug: Web/API/MutationEvent/initMutationEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.MutationEvent.initMutationEvent
---

{{APIRef("UI Events")}}{{deprecated_header}}

The **`initMutationEvent()`** method of the {{domxref("MutationEvent")}} interface initializes the
value of a mutation event once it's been created (normally using the {{domxref("Document.createEvent()")}} method).

This method must be called to set the event before it is dispatched, using {{ domxref("EventTarget.dispatchEvent()") }}.

> **Note:** In general, you won't create these events yourself; they are created by the browser.

## Syntax

```js-nolint
initMutationEvent(type, canBubble, cancelable, relatedNode,
                  prevValue, newValue, attrName, attrChange)
```

### Parameters

- `type`
  - : A string to set the event's {{domxref("Event.type", "type")}} to. Browsers set the following values for {{domxref("MutationEvent")}}:
    `DOMAttrModified`, `DOMAttributeNameChanged`, `DOMCharacterDataModified`, `DOMElementNameChanged`, `DOMNodeInserted`, `DOMNodeInsertedIntoDocument`, `DOMNodeRemoved`, `DOMNodeRemovedFromDocument`,`DOMSubtreeModified`.
- `canBubble`
  - : A boolean indicating whether or not the event can bubble. Sets the value of {{domxref("Event.bubbles")}}.
- `cancelable`
  - : A boolean indicating whether or not the event's default action can be prevented. Sets the value of {{domxref("Event.cancelable")}}.
- `relatedNode`
  - : A string representing the new value of the modified node, if any. Sets the value of {{domxref("MutationEvent.relatedNode")}}.
- `prevValue`
  - : A string representing the previous value of the modified node, if any. Sets the value of {{domxref("MutationEvent.prevValue")}}.
- `newValue`
  - : A string representing the new value of the modified node, if any. Sets the value of {{domxref("MutationEvent.newValue")}}.
- `attrName`
  - : A string representing the name of the {{domxref("Attr")}} node changed, if any. Sets the value of {{domxref("MutationEvent.attrName")}}.
- `attrChange`
  - : A integer representing the reason attribute node changed. Sets the value of {{domxref("MutationEvent.attrChange")}}.

### Return value

None ({{jsxref("undefined")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
