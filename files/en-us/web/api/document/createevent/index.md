---
title: "Document: createEvent() method"
short-title: createEvent()
slug: Web/API/Document/createEvent
page-type: web-api-instance-method
status:
  - deprecated
browser-compat: api.Document.createEvent
---

{{APIRef("DOM")}}{{deprecated_header}}

> [!WARNING]
> Many methods used with `createEvent`, such as `initCustomEvent`, are deprecated.
> Use [event constructors](/en-US/docs/Web/API/CustomEvent) instead.

Creates an [event](/en-US/docs/Web/API/Event) of the type specified. The
returned object should be first initialized and can then be passed to
{{domxref("EventTarget.dispatchEvent")}}.

## Syntax

```js-nolint
createEvent(type)
```

### Parameters

- `type`
  - : A string that represents the type of event to be created. Possible event types include `"UIEvents"`, `"MouseEvents"`, `"MutationEvents"`, and `"HTMLEvents"`. See [Notes](#notes) section for details.

### Return value

An [Event](/en-US/docs/Web/API/Event) object.

## Examples

```js
// Create the event.
const event = document.createEvent("Event");

// Define that the event name is 'build'.
event.initEvent("build", true, true);

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    // e.target matches elem
  },
  false,
);

// Target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

## Notes

Event type strings suitable for passing to `createEvent()` are listed in the
[DOM standard — see the table in step 2](https://dom.spec.whatwg.org/#dom-document-createevent). Bear in mind that most event objects now have constructors, which
are the modern recommended way to create event object instances.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
