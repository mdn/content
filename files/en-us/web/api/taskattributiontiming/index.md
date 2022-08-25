---
title: TaskAttributionTiming
slug: Web/API/TaskAttributionTiming
page-type: web-api-interface
tags:
  - API
  - Experimental
  - Interface
  - Long Tasks API
  - Performance
  - TaskAttributionTiming
browser-compat: api.TaskAttributionTiming
---
{{SeeCompatTable}}{{APIRef("Long Tasks")}}

The **`TaskAttributionTiming`** interface of the [Long Tasks API](/en-US/docs/Web/API/Long_Tasks_API) returns information about the work involved in a long task and its associate frame context. The frame context, also called the container, is the iframe, embed or object that is being implicated, on the whole, for a long task.

{{InheritanceDiagram}}

## Properties

- {{domxref('TaskAttributionTiming.containerType')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the type of frame container, one of `iframe`, `embed`, or `object`.
- {{domxref('TaskAttributionTiming.containerSrc')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `src` attribute.
- {{domxref('TaskAttributionTiming.containerId')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `id` attribute.
- {{domxref('TaskAttributionTiming.containerName')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the container's `name` attribute.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
