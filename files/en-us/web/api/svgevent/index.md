---
title: SVGEvent
slug: Web/API/SVGEvent
page-type: web-api-interface
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
| `target` {{ReadOnlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{ReadOnlyInline}}       | string     | The type of event.                                     |
| `bubbles` {{ReadOnlyInline}}    | A boolean value                      | Whether the event normally bubbles or not.             |
| `cancelable` {{ReadOnlyInline}} | A boolean value                      | Whether the event is cancellable or not.               |
