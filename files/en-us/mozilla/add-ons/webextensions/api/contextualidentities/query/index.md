---
title: contextualIdentities.query()
slug: Mozilla/Add-ons/WebExtensions/API/contextualIdentities/query
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - contextualIdentities
  - query
browser-compat: webextensions.api.contextualIdentities.query
---
{{AddonSidebar()}}

Gets information about all contextual identities, or about those contextual identities that match a given filter argument.

This is an asynchronous function that returns a [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

## Syntax

```js
var getContext = browser.contextualIdentities.query(
  details                  // object
)
```

### Parameters

- `details`

  - : `object`. An object that can be used to filter the contextual identities returned. This may contain any of the following properties:

    - `name` {{optional_inline}}
      - : `string`. Return only contextual identities with this name.

### Return value

A [`Promise`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that will be fulfilled with an array of {{WebExtAPIRef('contextualIdentities.ContextualIdentity', 'ContextualIdentity')}} objects, each describing a single identity. If the contextual identities feature is not enabled, the promise is rejected.

## Browser compatibility

{{Compat}}

## Examples

Retrieve all contextual identities, and log their names:

```js
function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.query({}).then(onGot, onError);
```

Retrieve all contextual identities whose names are "my-thing", and log their names:

```js
function onGot(contexts) {
  for (let context of contexts) {
    console.log(`Name: ${context.name}`);
  }
}

function onError(e) {
  console.error(e);
}

browser.contextualIdentities.query({
  name: "my-thing"
}).then(onGot, onError);
```

{{WebExtExamples}}
