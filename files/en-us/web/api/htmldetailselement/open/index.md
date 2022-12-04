---
title: HTMLDetailsElement.open
slug: Web/API/HTMLDetailsElement/open
page-type: web-api-instance-property
tags:
  - API
  - HTML DOM
  - HTMLDetailsElement
  - Property
  - Reference
  - open
browser-compat: api.HTMLDetailsElement.open
---

{{ APIRef("HTML DOM") }}

The **`open`** property of the
{{domxref("HTMLDetailsElement")}} interface is a boolean value reflecting the
{{htmlattrxref("open", "details")}} HTML attribute, indicating whether the {{htmlelement("details")}}'s contents (not counting the {{htmlelement("summary")}}) is to be shown to the user.

## Value

A boolean value representing the state of the {{htmlattrxref("open", "details")}} HTML attribute. `true` means it is set, and therefore the details, including the summary and the additional information, are to be shown to the user. `false` means it not set, with only the summary being shown.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{htmlelement("details")}} and {{htmlelement("summary")}} elements
