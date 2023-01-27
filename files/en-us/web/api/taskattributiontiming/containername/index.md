---
title: TaskAttributionTiming.containerName
slug: Web/API/TaskAttributionTiming/containerName
page-type: web-api-instance-property
tags:
  - API
  - Long Tasks API
  - Performance
  - Property
  - Reference
  - TaskAttributionTiming
  - Experimental
browser-compat: api.TaskAttributionTiming.containerName
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`containerName`** readonly property of the {{domxref("TaskAttributionTiming")}} interface returns the container's `name`
attribute. A container is the iframe, embed or object etc. that is being implicated, on the whole, for a long task.

## Value

A string containing the container's `name` HTML content attribute (e.g. [`<iframe name="myIframe"`](/en-US/docs/Web/HTML/Element/iframe#attr-name) or [`<object name="myObject"`](/en-US/docs/Web/HTML/Element/object#attr-name)).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
