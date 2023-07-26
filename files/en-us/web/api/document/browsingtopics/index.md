---
title: "Document: browsingTopics() method"
short-title: browsingTopics()
slug: Web/API/Document/browsingTopics
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.Document.browsingTopics
---

{{APIRef("Topics API")}}{{SeeCompatTable}}

The `browsingTopics()` method of the {{domxref("Document")}} interface returns an array of objects representing observed topics for the current user and site. It also triggers the browser to observe topics for the current user and site.

## Syntax

```js-nolint
browsingTopics()
browsingTopics(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An options object, which can contain the following properties:
    - `skipObservation`
      - : A boolean value that, if set to `true`, causes the browser to _not_ observe topics when `browsingTopics()` is invoked. The default is `false`, which causes topics to be observed.

### Return value

A {{jsxref("Promise")}} that fulfills with an array of objects representing the current user's top topics of interest for the current observing domain. Each object contains the following properties:

- `configVersion`
  - : A number representing the algorithm used to calculate the topic from keywords obtained from hostnames the user visits.
- `modelVersion`
  - : A number representing the model used to classify a string into topic IDs.
- `taxonomyVersion`
  - : A number representing the taxonomy version used.
- `topic`
  - : A number representing the ID of the topic, which can be used by the browser to retrieve the topic from the taxonomy (see an example [taxonomy of interests](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : The `configVersion`, `modelVersion`, and `taxonomyVersion`, concatenated with colons (`:`) between each.

The exact property values may vary by browser implementation. An example object from Chrome might look as follows:

```
{
  configVersion: "chrome.1",
  modelVersion: "1",
  taxonomyVersion: "1",
  topic: 43,
  version: "chrome.1:1:1"
}
```

### Exceptions

- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if usage of the [Topics API](/en-US/docs/Web/API/Topics_API) is specifically disallowed by a {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).

## Examples

```js
// Get an array of top topics for this user
const topics = await document.browsingTopics();

// Request an ad creative
const response = await fetch("https://ads.example/get-creative", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(topics),
});

// Get the JSON from the response
const creative = await response.json();

// Display ad
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
