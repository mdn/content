---
title: Document.createEvent()
slug: Web/API/Document/createEvent
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Method
  - Reference
browser-compat: api.Document.createEvent
---
{{APIRef("DOM")}}

> **Warning:** Many methods used with `createEvent`, such as `initCustomEvent`, are deprecated.
> Use [event constructors](/en-US/docs/Web/API/CustomEvent) instead.

Creates an [event](/en-US/docs/Web/API/Event) of the type specified. The
returned object should be first initialized and can then be passed to
{{domxref("EventTarget.dispatchEvent")}}.

## Syntax

```js
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
const event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', (e) => {
  // e.target matches elem
}, false);

// Target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

## Notes

Event type strings suitable for passing to `createEvent()` are listed in the
[DOM standard — see the table in step 2](https://dom.spec.whatwg.org/#dom-document-createevent). Bear in mind that most event objects now have constructors, which
are the modern recommended way to create event object instances.

Gecko supports some non-standard event object aliases, which are listed below.

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th>Event Module</th>
      <th>Standard event object</th>
      <th>Gecko also supports</th>
    </tr>
    <tr>
      <td>Text event module</td>
      <td><code>TextEvent</code></td>
      <td><code>TextEvents</code></td>
    </tr>
    <tr>
      <td>Keyboard event module</td>
      <td><code>KeyboardEvent</code></td>
      <td><code>KeyEvents</code></td>
    </tr>
    <tr>
      <td>Basic events module</td>
      <td><code>Event</code></td>
      <td><code>Events</code></td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Creating and triggering events](/en-US/docs/Web/Events/Creating_and_triggering_events)
