---
title: WindowEventHandlers
slug: Web/API/WindowEventHandlers
tags:
  - API
  - HTML-DOM
  - Interface
  - Mixin
  - Reference
  - WindowEventHandlers
browser-compat: api.WindowEventHandlers
---
{{APIRef("HTML DOM")}}

The **`WindowEventHandlers`** mixin describes the event handlers common to several interfaces like {{domxref("Window")}}, or {{domxref("HTMLBodyElement")}} and {{domxref("HTMLFrameSetElement")}}. Each of these interfaces can implement additional specific event handlers.

> **Note:** `WindowEventHandlers` is a mixin and not an interface; you can't actually create an object of type `WindowEventHandlers`.

## Properties

_The events properties, of the form `onXYZ`, are defined on the {{domxref("WindowEventHandlers")}}, and implemented by {{domxref("Window")}}, and {{domxref("WorkerGlobalScope")}} for Web Workers._

## Methods

_This interface defines no method._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window")}} and {{domxref("WorkerGlobalScope")}}
