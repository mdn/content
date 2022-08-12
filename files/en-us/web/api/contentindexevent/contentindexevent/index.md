---
title: ContentIndexEvent()
slug: Web/API/ContentIndexEvent/ContentIndexEvent
page-type: web-api-constructor
tags:
  - Constructor
  - Content
  - Content Index API
  - Index
  - PWA
  - content index
  - content indexing
  - events
  - Experimental
browser-compat: api.ContentIndexEvent.ContentIndexEvent
---
{{APIRef("Content Index API")}}{{SeeCompatTable}}

The **`ContentIndexEvent()`** constructor creates a new {{domxref("ContentIndexEvent")}} object
whose type and other options are configured as specified.

## Syntax

```js
new ContentIndexEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `contentdelete`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, has the following properties:
    - `id`
      - : The id of the indexed content you want the {{domxref("ContentIndex")}} object to remove.

### Return value

A new {{domxref("ContentIndexEvent")}} object configured using the given options.

## Examples

This examples constructs a new {{domxref('ContentIndexEvent')}} with the relevant id.

```js
const removeData = {
  id : 'unique-content-id'
}

const ciEvent = new ContentIndexEvent('contentdelete', removeData);

ciEvent.id; // should return 'unique-content-id'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [An introductory article on the Content Index API](https://web.dev/content-indexing-api/)
- [An app which uses the Content Index API to list and remove 'save for later' content](https://contentindex.dev/)
- [Service Worker API, along with information about Cache and CacheStorage](/en-US/docs/Web/API/Service_Worker_API)
