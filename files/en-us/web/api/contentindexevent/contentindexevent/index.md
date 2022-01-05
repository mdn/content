---
title: ContentIndexEvent()
slug: Web/API/ContentIndexEvent/ContentIndexEvent
tags:
  - Constructor
  - Content
  - Content Index API
  - Index
  - PWA
  - content index
  - content indexing
  - events
browser-compat: api.ContentIndexEvent.ContentIndexEvent
---
{{draft}}{{DefaultAPISidebar("Content Index API")}}

The **`ContentIndexEvent()`** constructor
creates a new {{domxref("ContentIndexEvent")}} object whose type and other options are
configured as specified.

## Syntax

```js
var ContentIndexEvent = new ContentIndexEvent(type, ContentIndexEventInit);
```

### Parameters

- _type_
  - : A {{domxref("DOMString")}} indicating the event which occurred. For
    `ContentIndexEvent`, this is always `delete`.
- _eventInitDict_ {{optional_inline}}

  - : An options object containing any initialization data you want to populate the
    `ContentIndexEvent` object with. The options are:

    - `id`: The id of the indexed content you want the
      `ContentIndexEvent` to remove.

### Return value

A {{domxref("ContentIndexEvent")}} object configured using the given inputs.

## Examples

This examples constructs a new {{domxref('ContentIndexEvent')}} with the relevant id.

```js
var removeData = {
  id : 'unique-content-id'
}

var ciEvent = new ContentIndexEvent('contentdelete', removeData);

ciEvent.id; // should return 'unique-content-id'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the
  Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list
  and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with
  information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
