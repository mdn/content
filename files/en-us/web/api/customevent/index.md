---
title: CustomEvent
slug: Web/API/CustomEvent
tags:
  - API
  - CustomEvent
  - DOM
  - Interface
  - NeedsExample
  - Reference
browser-compat: api.CustomEvent
---
{{APIRef("DOM")}}

The **`CustomEvent`** interface represents events initialized by an application for any purpose.

{{AvailableInWorkers}}

## Constructor

- {{domxref("CustomEvent.CustomEvent", "CustomEvent()")}}
  - : Creates a `CustomEvent`.

## Properties

_This interface inherits properties from its parent,_ {{domxref("Event")}}.

- {{domxref("CustomEvent.detail")}} {{readonlyinline}}
  - : Any data passed when initializing the event.

## Methods

_This interface inherits methods from its parent,_ {{domxref("Event")}}.

- {{domxref("CustomEvent.initCustomEvent()")}} {{deprecated_inline}}
  - : Initializes a `CustomEvent` object. If the event has already being dispatched, this method does nothing.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## Firing from privileged code to non-privileged code

When firing a `CustomEvent` from privileged code (i.e. an extension) to non-privileged code (i.e. a webpage), security issues should be considered. Firefox and other Gecko applications restrict an object created in one context from being directly used for another, which will automatically prevent security holes, but these restrictions may also prevent your code from running as expected.

While creating a `CustomEvent` object, you must create the object from the same [window](/en-US/docs/XUL/window). The `detail` attribute of your `CustomEvent` will be subjected to the same restrictions. `String` and `Array` values will be readable by the content without restrictions, but custom `Object` will not. While using a custom object, you will need to define the attributes of that object that are readable from the content script using [Components.utils.cloneInto()](/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.cloneInto).

```js
// doc is a reference to the content document
function dispatchCustomEvent(doc) {
  var eventDetail = Components.utils.cloneInto({foo: 'bar'}, doc.defaultView);
  var myEvent = doc.defaultView.CustomEvent("mytype", eventDetail);
  doc.dispatchEvent(myEvent);
}
```

But one needs to keep in mind that exposing a function will allow the content script to run it with chrome privileges, which can open a security vulnerability.

## See also

- {{domxref("Window.postMessage()")}}
- [Interaction between privileged and non-privileged pages](/en-US/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages)
- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
