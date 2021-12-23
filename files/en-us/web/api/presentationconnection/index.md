---
title: PresentationConnection
slug: Web/API/PresentationConnection
tags:
  - API
  - Experimental
  - Interface
  - Presentation API
  - PresentationConnection
  - Reference
browser-compat: api.PresentationConnection
---
{{SeeCompatTable}}{{securecontext_header}}{{DefaultAPISidebar("Presentation API")}}

The **`PresentationConnection`** interface of the [Presentation API](/en-US/docs/Web/API/Presentation_API) provides methods and properties for managing a single presentation. Each [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection) is represented by a `PresentationConnection` object. Both the [controlling user agent](https://www.w3.org/TR/presentation-api/#dfn-controlling-user-agent) and [receiving user agent](https://www.w3.org/TR/presentation-api/#dfn-receiving-user-agent) _MUST_ implement `PresentationConnection`.

## Properties

- {{domxref("PresentationConnection.binaryType")}}
  - : Returns either blob or arrayBuffer. When a `PresentationConnection` object is created, its [`binaryType`](https://www.w3.org/TR/presentation-api/#idl-def-presentationconnection-binarytype) IDL attribute _MUST_ be set to the string " [`arraybuffer`](https://www.w3.org/TR/presentation-api/#dom-binarytype-arraybuffer)".
- {{domxref("PresentationConnection.id")}} {{readonlyInline}}
  - : Provides the presentation connection identifier.
- {{domxref("PresentationConnection.state")}} {{readonlyInline}}
  - : Returns the [presentation connection](https://www.w3.org/TR/presentation-api/#dfn-presentation-connection)'s current state.
- {{domxref("PresentationConnection.url")}} {{readonlyinline}}
  - : Returns the URL used to create or reconnect to the presentation.

### Event handlers

- {{domxref("PresentationConnection.onclose")}}
  - : Fired when there is a call to {{DOMxRef("PresentationConnection.close", "PresentationConnection.close()")}}.
- {{domxref("PresentationConnection.onconnect")}}
  - : Fired when a presentation connection is established.
- {{domxref("PresentationConnection.onmessage")}}
  - : Fired when there is a call to {{DOMxRef("PresentationConnection.send", "PresentationConnection.send()")}}.
- {{domxref("PresentationConnection.onterminated")}}
  - : Fired when there is a call to {{DOMxRef("PresentationConnection.terminate", "PresentationConnection.terminate()")}}.

## Methods

- {{domxref("PresentationConnection.close()")}}
  - : Closes the current connection and sends a {{domxref("PresentationConnectionCloseEvent")}} to {{DOMxRef("PresentationConnection.onclosed")}}.
- {{domxref("PresentationConnection.send()")}}
  - : Sends either binary or text data between a controlling browsing context and a presenting browsing context.
- {{domxref("PresentationConnection.terminate()")}}
  - : Terminates the current connection and fires {{DOMxRef("PresentationConnection.onterminated")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
