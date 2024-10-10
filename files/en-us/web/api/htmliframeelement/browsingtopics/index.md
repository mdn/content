---
title: "HTMLIFrameElement: browsingTopics property"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
page-type: web-api-instance-property
status:
  - experimental
  - non-standard
browser-compat: api.HTMLIFrameElement.browsingTopics
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{non-standard_header}}

> [!WARNING]
> This feature is currently opposed by two browser vendors. See the [Standards positions](/en-US/docs/Web/API/Topics_API#standards_positions) section for details of opposition.

The **`browsingTopics`** property of the {{domxref("HTMLIFrameElement")}} interface is a boolean specifying that the selected topics for the current user should be sent with the request for the associated {{htmlelement("iframe")}}'s source in a {{httpheader("Sec-Browsing-Topics")}} header. This reflects the `browsingtopics` HTML attribute.

See [Using the Topics API](/en-US/docs/Web/API/Topics_API/Using) for more details.

## Value

A boolean. The default value is `false`; set it to `true` to send the associated `<iframe>` source request with a {{httpheader("Sec-Browsing-Topics")}} header containing the selected topics for the current user.

## Examples

### Get

Set `browsingtopics` to `true` then load the `<iframe>` contents declaratively:

```html
<iframe browsingtopics title="Advertising container" src="ad-tech1.example">
  ...
</iframe>
```

Log the `browsingTopics` value via script:

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.browsingTopics); // will return true in supporting browsers
```

### Set

Specify a minimum `<iframe>`:

```html
<iframe> ... </iframe>
```

Set `browsingtopics` to `true` then load the `<iframe>` contents via script:

```js
const iframeElem = document.querySelector("iframe");

iframeElem.browsingTopics = true;
iframeElem.title = "Advertising container";
iframeElem.src = "ad-tech1.example";
```

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
