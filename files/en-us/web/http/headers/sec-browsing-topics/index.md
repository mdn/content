---
title: Sec-Browsing-Topics
slug: Web/HTTP/Headers/Sec-Browsing-Topics
page-type: http-header
status:
  - experimental
  - non-standard
browser-compat: http.headers.Sec-Browsing-Topics
---

{{HTTPSidebar}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> This feature is currently opposed by two browser vendors. See the [Standards positions](/en-US/docs/Web/API/Topics_API#standards_positions) section for details of opposition.

> [!NOTE]
> An [Enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment) is required to use this feature in your applications.

The HTTP **`Sec-Browsing-Topics`** {{Glossary("request header")}} sends the selected topics for the current user along with the associated request, which are used by an ad tech platform to choose a personalized ad to display.

If the calling site does not have the Topics API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment), attempting to create or modify `Sec-Browsing-Topics` fails silently, and any existing `Sec-Browsing-Topics` header is deleted.

See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for more details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes (<code>Sec-</code> prefix)</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-Browsing-Topics: <array-of-observed-topics>
```

## Directives

A JSON object representing an array of up to three objects representing the current user's selected topics for the last three epochs. Each object contains the following properties:

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

## Examples

The exact property values may vary by browser implementation. An example header from Chrome might look as follows:

```http
Sec-Browsing-Topics: [{configVersion: "chrome.1", modelVersion: "1", taxonomyVersion: "1", topic: 43, version: "chrome.1:1:1"}]
```

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
