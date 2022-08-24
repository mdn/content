---
title: PresentationConnection.state
slug: Web/API/PresentationConnection/state
page-type: web-api-instance-property
tags:
  - API
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsMarkupWork
  - Presentation
  - Presentation API
  - PresentationConnection
  - Property
  - Reference
  - state
  - Experimental
browser-compat: api.PresentationConnection.state
---
{{APIRef("Presentation API")}}{{SeeCompatTable}}

The **`state`** attribute reflects the [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)'s current state. Depending on the current [`PresentationConnectionState`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnectionstate), the `state` attribute can hold one of the following values.

- **`connecting`**: The user agent is attempting to [establish a presentation connection](https://www.w3.org/TR/presentation-api/#dfn-establish-a-presentation-connection) with the [destination browsing context](https://www.w3.org/TR/presentation-api/#dfn-destination-browsing-context). This is the initial state when a [`PresentationConnection`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection) object is created.
- **`connected`**: The [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) is established and communication is possible.
- **`closed`**: The [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) has been closed or could not be opened. The connection may be reopened by calling [`reconnect()`](https://www.w3.org/TR/presentation-api/#dom-presentationrequest-reconnect). No communication is possible in this state.
- **`terminated`**: The [receiving browsing context](https://www.w3.org/TR/presentation-api/#dfn-receiving-browsing-context) has terminated. Any [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) to that [presentation](https://www.w3.org/TR/presentation-api/#dfn-presentation) has also terminated and cannot be reopened. No communication is possible.

## Browser compatibility

{{Compat}}
