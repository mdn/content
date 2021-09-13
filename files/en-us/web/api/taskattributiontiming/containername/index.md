---
title: TaskAttributionTiming.containerName
slug: Web/API/TaskAttributionTiming/containerName
tags:
  - API
  - Long Tasks API
  - Performance
  - Property
  - Reference
  - TaskAttributionTiming
browser-compat: api.TaskAttributionTiming.containerName
---
{{SeeCompatTable}}{{APIRef("Long Tasks")}}

The **`containerName`** readonly property of the
{{domxref("TaskAttributionTiming")}} interface returns the container's `name`
attribute. A container is the iframe, embed or object etc. that is being implicated, on
the whole, for a long task.

## Syntax

```js
var containerName = TaskAttributionTiming.containerName;
```

### Value

A {{domxref("DOMString")}} containing the container's `name` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
