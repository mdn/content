---
title: contextualIdentities.move()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/move
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.move
---

{{AddonSidebar()}}

Moves one or more contextual identities to a new position within the list of contextual identities.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js-nolint
let moveContainers = browser.contextualIdentities.move(
  cookieStoreIds,                  // string or array of string
  position                         // integer
)
```

### Parameters

- `cookieStoreIds`
  - : `string` or `array` of `string`. An ordered list of the contextual identity cookie store IDs to move.
- `position`
  - : `integer`. The position to move `cookieStoreIds` to in the list of contextual identities. `-1` indicates that the items are moved to the end of the list.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled with an array of cookie store IDs representing the re-ordered list. If the request is for an invalid move or the contextual identities feature is not enabled, the promise is rejected.

## Examples

Starting with this list of contextual identities `[id0, id1, id2, id3]`:

```js
browser.contextualIdentities.move("id3", 0);
```

This moves `id3` to the first position in the list, resulting in the list `[id3, id0, id1, id2]`.`

```js
browser.contextualIdentities.move("id0", -1);
```

This moves `id0` to the last position in the list, resulting in the list `[id1, id2, id3, id0]`.

```js
browser.contextualIdentities.move("id0, id3", 1);
```

This moves `id0` to the second position in the list and `id3` to the third position, resulting in the list `[id1, id0, id3, id2]`.

```js
browser.contextualIdentities.move("foobar", 2);
```

This is an attempt to move an invalid contextual identity and is therefore rejected.

```js
browser.contextualIdentities.move("id0", -2);
```

This is an attempt to move a contextual identity to an invalid position and is therefore rejected.

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
