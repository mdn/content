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

> **Note:** An [Enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment) is required to use this feature in your applications.

The `browsingTopics()` method of the {{domxref("Document")}} interface returns a promise that fulfills with an array of objects representing observed topics for the current user and site, for the three most recent epochs. It also triggers the browser to observe topics for the current user and site.

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

A {{jsxref("Promise")}} that fulfills with an array of up to three objects representing the current user's top topics of interest for the current observing domain. Each object contains the following properties:

- `configVersion`
  - : A string identifying the algorithm (other than the model part) used to calculate the topic.
- `modelVersion`
  - : A string representing the model used to classify a string (such as a web page's hostname) into topic IDs.
- `taxonomyVersion`
  - : A string representing the taxonomy version used.
- `topic`
  - : A number representing the ID of the topic, which can be used by the browser to retrieve the topic from the taxonomy (see an example [taxonomy of interests](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md)).
- `version`
  - : The `configVersion`, `modelVersion`, and `taxonomyVersion`, concatenated with colons (`:`) between each.

> **Note:** The method returns a random topic from the top five for each of the three most recent epochs (an epoch is a week by default), with a 5% chance that any of these may be randomly chosen from the full [taxonomy of topics](https://github.com/patcg-individual-drafts/topics/blob/main/taxonomy_v1.md).

The exact property values may vary by browser implementation. An example object from Chrome might look as follows:

```js
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
  - : Thrown if:
    - Usage of the [Topics API](/en-US/docs/Web/API/Topics_API) is specifically disallowed by a {{httpheader('Permissions-Policy/browsing-topics','browsing-topics')}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
    - The calling site does not have the Topics API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

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

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
