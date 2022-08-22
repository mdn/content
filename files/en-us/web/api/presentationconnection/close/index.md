---
title: PresentationConnection.close()
slug: Web/API/PresentationConnection/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - NeedsBrowserCompatibility
  - NeedsContent
  - NeedsMarkupWork
  - Presentation
  - PresentationConnection
  - Reference
  - Experimental
browser-compat: api.PresentationConnection.close
---
{{APIRef("Presentation API")}}{{SeeCompatTable}}

When the `close()` method is called on a {{domxref("PresentationConnection")}}, the {{Glossary("user agent")}} begins the process of closing the connection by sending an empty `closeMessage` with the `closeReason` set to `closed`.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Browser compatibility

{{Compat}}
