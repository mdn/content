---
title: "HTMLIFrameElement: browsingTopics property"
short-title: browsingTopics
slug: Web/API/HTMLIFrameElement/browsingTopics
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLIFrameElement.browsingTopics
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`browsingTopics`** property of the {{domxref("HTMLIFrameElement")}} interface is a boolean that specifies whether observed topics should be sent in a {{httpheader("Sec-Browsing-Topics")}} header with the request for the associated {{htmlelement("iframe")}}'s source. This reflects the `browsingtopics` content attribute value.

See the [Topics API](/en-US/docs/Web/API/Topics_API) for more details.

## Value

A boolean. The default value is `false`; set it to `true` to send the associated `<iframe>` source request with a {{httpheader("Sec-Browsing-Topics")}} header containing observed topics for the current site and user.

## Examples

### Get

Set `browsingtopics` to `true` then load the `<iframe>` contents declaratively:

```html
<iframe browsingtopics title="Advertising container" src="adtech1.example">
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
iframeElem.src = "adtech1.example";
```

## Specifications

This feature is not part of an official standard, although it is specified in the [Topics API Unofficial Proposal Draft](https://patcg-individual-drafts.github.io/topics/).

## Browser compatibility

{{Compat}}

## See also

- [Topics API](/en-US/docs/Web/API/Topics_API)
