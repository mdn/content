---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
tags:
  - AJAX
  - API
  - NeedsBrowserCompatibility
  - NeedsContent
  - Reference
  - XMLHttpRequest
browser-compat: api.XMLHttpRequestEventTarget
---
{{APIRef("XMLHttpRequest")}}

`XMLHttpRequestEventTarget` is the interface that describes the event handlers you can implement in an object that will handle events for an {{ domxref("XMLHttpRequest") }}.

{{InheritanceDiagram}}

## Properties

- {{ domxref("XMLHttpRequestEventTarget.onabort") }}
  - : Contains the function to call when a request is aborted and the {{event('abort')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onerror") }}
  - : Contains the function to call when a request encounters an error and the {{event('error')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onload") }}
  - : Contains the function to call when an HTTP request returns after successfully fetching content and the {{event('load')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onloadstart") }}
  - : Contains the function that gets called when the HTTP request first begins loading data and the {{event('loadstart')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.onprogress") }}
  - : Contains the function that is called periodically with information about the progress of the request and the {{event('progress')}} event is received by this object.
- {{ domxref("XMLHttpRequestEventTarget.ontimeout") }}
  - : Contains the function that is called if the event times out and the {{event("timeout")}} event is received by this object; this only happens if a timeout has been previously established by setting the value of the `XMLHttpRequest` object's `timeout` attribute.
- {{ domxref("XMLHttpRequestEventTarget.onloadend") }}
  - : Contains the function that is called when the load is completed, even if the request failed, and the {{event('loadend')}} event is received by this object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ domxref("XMLHttpRequest") }}
- [Using XMLHttpRequest](/en-US/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest "Using XMLHttpRequest")
