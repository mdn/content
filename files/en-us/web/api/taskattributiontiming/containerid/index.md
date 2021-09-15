---
title: TaskAttributionTiming.containerId
slug: Web/API/TaskAttributionTiming/containerId
tags:
  - API
  - Long Tasks API
  - Performance
  - Property
  - Reference
  - TaskAttributionTiming
browser-compat: api.TaskAttributionTiming.containerId
---
{{SeeCompatTable}}{{APIRef("Long Tasks")}}

The **`containerId`** readonly property of the
{{domxref("TaskAttributionTiming")}} interface returns the container's `id`
attribute. A container is the iframe, embed or object etc. that is being implicated, on
the whole, for a long task.

## Syntax

```js
var containerId = TaskAttributionTiming.containerId;
```

### Value

A {{domxref("DOMString")}} containing the containers `id` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
