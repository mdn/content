---
title: SVGEvent
slug: Web/API/SVGEvent
tags:
  - API
  - Reference
  - SVG
  - WebAPI
---
{{deprecated_header}}{{APIRef("SVG")}}

The {{domxref("SVGEvent")}} interface represents the event object for most SVG-related events.

## Properties

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | A boolean value                      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | A boolean value                      | Whether the event is cancellable or not.               |
