---
title: "TaskAttributionTiming: containerName property"
short-title: containerName
slug: Web/API/TaskAttributionTiming/containerName
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TaskAttributionTiming.containerName
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`containerName`** readonly property of the {{domxref("TaskAttributionTiming")}} interface returns the container's `name`
attribute. A container is the iframe, embed or object etc. that is being implicated, on the whole, for a long task.

## Value

A string containing the container's `name` HTML content attribute (e.g. [`<iframe name="myIframe"`](/en-US/docs/Web/HTML/Element/iframe#name) or [`<object name="myObject"`](/en-US/docs/Web/HTML/Element/object#name)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
