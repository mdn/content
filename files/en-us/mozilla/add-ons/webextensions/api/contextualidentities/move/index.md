---
title: contextualIdentities.move()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/move
page-type: webextension-api-function
browser-compat: webextensions.api.contextualIdentities.move
---

{{AddonSidebar}}

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
  - : `integer`. The position to move `cookieStoreIds` to in the list of contextual identities. Zero-based; `0` indicates the first position. `-1` indicates that the items are moved to the end of the list.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that is fulfilled when the contextual identities are reordered. The promise is rejected if the request is for an invalid move or the contextual identities feature is not enabled.

## Examples

This example moves the first identity to the end and then back to the start.

```js
let identities = await browser.contextualIdentities.query({});
let firstId = identities[0].cookieStoreId;

// Moves first identity to the end.
await browser.contextualIdentities.move(firstId, -1);

// Move identity to the start again.
await browser.contextualIdentities.move(firstId, 0);
```

Another way of moving the first identity to the end is by moving all other identities to the start.

```js
let identities = await browser.contextualIdentities.query({});
let ids = identities.map((identity) => identity.cookieStoreId);
// Create an array without the first item:
let otherIds = ids.slice(1);

// Move other identities to the start,
// effectively putting the first identity at the end.
await browser.contextualIdentities.move(otherIds, 0);
```

This example moves the "Personal" identity to before "Work". The example assumes containers with these names to exist. This may not be the case in customized or localized (non-English) Firefox instances.

```js
let identities = await browser.contextualIdentities.query({});

// Find the index and ID of the container with the name "Personal".
let personalIndex = identities.findIndex((ci) => ci.name === "Personal");
if (personalIndex === -1) {
  throw new Error("Personal container not found");
}
let personalId = identities[personalIndex].cookieStoreId;

// Find the index of the container with the name "Work".
let workIndex = identities.findIndex((identity) => identity.name === "Work");
if (workIndex === -1) {
  throw new Error("Work container not found!");
}

if (personalIndex < workIndex) {
  // When the Personal identity moves, all following
  // identities shift to the left by one. To place
  // the Personal identity before the Work identity,
  // we should therefore subtract one.
  workIndex--;
}
await browser.contextualIdentities.move(personalId, workIndex);
```

{{WebExtExamples}}

## Browser compatibility

{{Compat}}
