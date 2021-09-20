---
title: StorageEvent
slug: Web/API/StorageEvent
tags:
  - API
  - Interface
  - Reference
  - StorageEvent
  - Web Storage API
browser-compat: api.StorageEvent
---
{{APIRef("Web Storage API")}}

The **`StorageEvent`** interface is implemented by the {{domxref("Window/storage_event", "storage")}} event, which is
sent to a window
when a storage area the window has access to is changed within the context of another document.

{{InheritanceDiagram}}

## Constructor

- {{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}
  - : Returns a newly constructed `StorageEvent` object.

## Properties

_In addition to the properties listed below, this interface inherits the properties of its parent interface, {{domxref("Event")}}._

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMString")}} that represents the key changed.
    The `key` attribute is {{jsxref("null")}}
    when the change is caused by the storage `clear()` method.
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMString")}} with the new value of the `key`.
    This value is `null`
    when the change has been invoked by storage `clear()` method,
    or the `key` has been removed from the storage.
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("DOMString")}} with the original value of the `key`.
    This value is `null` when the `key` has been newly added
    and therefore doesn't have any previous value.
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : Returns a {{DOMxRef("Storage")}} object that represents the storage that was affected.
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : Returns {{DOMxRef("DOMString")}} with the URL of the document whose `key` changed.

## Methods

_In addition to the methods listed below, this interface inherits the methods of its parent interface, {{domxref("Event")}}._

- {{domxref("StorageEvent.initStorageEvent", "initStorageEvent()")}} {{deprecated_inline}}
  - : Initializes the event in a manner analogous to the similarly-named {{domxref("Event.initEvent", "initEvent()")}} } method in the DOM
    Events interfaces. Use the constructor instead.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
