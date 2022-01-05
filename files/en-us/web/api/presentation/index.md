---
title: Presentation
slug: Web/API/Presentation
tags:
  - API
  - Experimental
  - Interface
  - Presentation
  - Presentation API
  - Reference
browser-compat: api.Presentation
---
{{SeeCompatTable}}{{securecontext_header}}{{APIRef("Presentation API")}}

The _`Presentation`_ can be defined as two possible user agents in the context: _Controlling user agent_ and _Receiving user agent_.

In controlling browsing context, the `Presentation` interface provides a mechanism to override the browser default behavior of launching presentation to external screen. In receiving browsing context, `Presentation` interface provides the access to the available presentation connections.

## Properties

- {{DOMxRef("Presentation.defaultRequest")}}
  - : In a [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent), the _`defaultRequest`_ attribute _MUST_ return the [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) if any, `null` otherwise. In a [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context), it _MUST_ return `null`.
- {{DOMxRef("Presentation.receiver")}}
  - : In a [receiving user agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent), the _`receiver`_ attribute _MUST_ return the {{DOMxRef("PresentationReceiver")}} instance associated with the [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) and created by the [receiving user agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) when the [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) is created.

## Methods

None.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
