---
title: TaskAttributionTiming.containerSrc
slug: Web/API/TaskAttributionTiming/containerSrc
tags:
  - API
  - Long Tasks API
  - Performance
  - Property
  - Reference
  - TaskAttributionTiming
browser-compat: api.TaskAttributionTiming.containerSrc
---
{{SeeCompatTable}}{{APIRef("Long Tasks")}}

The **`containerSrc`** readonly property of the
{{domxref("TaskAttributionTiming")}} interface returns the container's `src`
attribute. A container is the iframe, embed or object etc. that is being implicated, on
the whole, for a long task.

## Syntax

```js
var containerSrc = TaskAttributionTiming.containerSrc;
```

### Value

A {{domxref("DOMString")}} containing the container's `src` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
