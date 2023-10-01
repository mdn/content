---
title: "Presentation: defaultRequest property"
short-title: defaultRequest
slug: Web/API/Presentation/defaultRequest
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Presentation.defaultRequest
---

{{APIRef("Presentation API")}}{{SeeCompatTable}}{{SecureContext_Header}}

In a [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent), the **`defaultRequest`** attribute _MUST_ return the [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) if any, otherwise `null`. In a [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context), it _MUST_ return `null`.

If set by the [controller](https://www.w3.org/TR/presentation-api/#dfn-controller), the value of the `defaultRequest` attribute _SHOULD_ be used by the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) as the _default presentation request_ for that [controlling browsing context](https://www.w3.org/TR/presentation-api/#dfn-controlling-browsing-context). If the document object's [active sandboxing flag set](https://www.w3.org/TR/presentation-api/#dfn-active-sandboxing-flag-set) has the [sandboxed presentation browsing context flag](https://www.w3.org/TR/presentation-api/#sandboxed-presentation-browsing-context-flag) set, the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SHOULD_ act as if the default request is not set for that browsing context. When the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) wishes to initiate a {{DOMxRef("PresentationConnection")}} on the behalf of that browsing context, it _MUST_ [start a presentation](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation) using the [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request) for the [controller](https://www.w3.org/TR/presentation-api/#dfn-controller) (as if the controller had called {{DOMxRef("PresentationRequest.start","defaultRequest.start()")}}).

The [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) _SHOULD_ initiate presentation using the [default presentation request](https://www.w3.org/TR/presentation-api/#dfn-default-presentation-request), only when the user has expressed an intention to do so via a user gesture. For example, by clicking a button in the browser.

> **Note:** Some [controlling user agents](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) may allow the user to initiate a default [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) and select a [presentation display](https://www.w3.org/TR/presentation-api/#dfn-presentation-display) with the same user gesture. For example, the browser chrome could allow the user to pick a display from a menu, or allow the user to tap on an [Near Field Communications (NFC)](https://nfc-forum.org/) enabled display. In this case, when the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) asks for permission while [starting a presentation](https://www.w3.org/TR/presentation-api/#dfn-start-a-presentation), the browser could offer that display as the default choice, or consider the gesture as granting permission for the display and bypass display selection entirely.

> **Note:** If a [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) does not support initiation of a [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) from the browser chrome, setting `defaultRequest` will have no effect.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
