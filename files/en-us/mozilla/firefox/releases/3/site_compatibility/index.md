---
title: Site compatibility for Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
tags:
  - Compatibility
  - Gecko
  - Web Development
---
{{FirefoxSidebar}}

This page tries to give an overview of the changes between [Gecko](/en-US/Gecko) 1.8 and Gecko 1.9, that could possibly affect websites in their behavior or rendering.

See also [Firefox 3 for developers](/en-US/Firefox_3_for_developers).

## Events

### Capturing load event listeners

In Gecko 1.8, it was not possible to set capturing load event listeners on images. In Gecko 1.9, this has been fixed by {{ Bug(234455) }}. But this can cause problems on websites that incorrectly have their event listeners set to capture the load event. See the discussion in {{ Bug(335251) }}. To fix this problem, the problematic page in question should not set a capturing load event listener.

For example, this:

```bash
window.addEventListener('load', yourFunction, true);
```

should be changed into this:

```bash
window.addEventListener('load', yourFunction, false);
```

For an explanation of how event capture works, see [DOM Level 2 Event capture](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture)

### `preventBubble` has been removed

In Gecko 1.8, the `preventBubble` method existed on events to prevent events from bubbling upwards. In Gecko 1.9 this method has been removed. Instead, you should use the standard [stopPropagation()](/en-US/docs/Web/API/Event/stopPropagation), which also works fine in Gecko 1.8. The patch in {{ Bug(330494) }} made this happen. See also {{ Bug(105280) }}.

### A few other old event APIs are no longer supported

[`window.captureEvents`](/en-US/docs/Web/API/Window/captureEvents), [`window.releaseEvents`](/en-US/docs/Web/API/Window/releaseEvents) and [`window.routeEvent`](/en-US/docs/Web/API/Window/routeEvent) are now considered deprecated since Gecko 1.9.

## DOM

### `WRONG_DOCUMENT_ERR`

Nodes from external documents should be cloned using [`document.importNode()`](/en-US/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/en-US/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/en-US/docs/Web/API/Node/ownerDocument) issues, see the [W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## Ranges

### `intersectsNode` has been removed

In Gecko 1.8 the function `intersectsNode` code be used to test if a node intersected a range. However the return values from this function were confusing and rarely useful and has therefore been removed in Gecko 1.9. Instead use the more precise and standard function [compareBoundaryPoints](/en-US/docs/Web/API/Range/compareBoundaryPoints). The patch in {{ Bug(358073) }} removed this function.

See the documentation for [intersectsNode](/en-US/docs/Web/API/Range/intersectsNode) for how to use `compareBoundaryPoints` instead.

### `compareNode` has been removed

In Gecko 1.8 the function `compareNode` code be used to test how a node intersected a range. However the return values from this function were confusing and rarely useful and has therefore been removed in Gecko 1.9. Instead use the more precise and standard function [compareBoundaryPoints](/en-US/docs/Web/API/Range/compareBoundaryPoints). The patch in {{ Bug(358073) }} removed this function.

See the documentation for [compareNode](/en-US/docs/Web/API/Range/compareNode) for how to use `compareBoundaryPoints` instead.

## HTML

### Many bugs in the `<object>` have been fixed

`object` and `embed` elements no longer need a `type` attribute to render. Changing the `src` attribute (of `<embed>`) or the `data` attribute (of `<object>`) via JavaScript now works correctly. The Content-Type header sent by the server (if any) now takes precedence over the `type` attribute of an `<object>` element as per the HTML specification (this is not the case for `embed`).
