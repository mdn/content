---
title: "HTMLTemplateElement: shadowRootMode property"
short-title: shadowRootMode
slug: Web/API/HTMLTemplateElement/shadowRootMode
page-type: web-api-instance-property
browser-compat: api.HTMLTemplateElement.shadowRootMode
---

{{APIRef("Web Components")}}

The **`shadowRootMode`** property of the {{domxref("HTMLTemplateElement")}} interface indicates whether a [shadow root](/en-US/docs/Glossary/Shadow_tree) that that was [declaratively created](/en-US/docs/Web/HTML/Element/template#declarative_shadow_dom) is open or closed to inspection via JavaScript.

This property reflects the value of the [`shadowrootmode`](/en-US/docs/Web/HTML/Element/template#shadowrootmode) attribute of the associated [`<template>`](/en-US/docs/Web/HTML/Element/template) element.

<!--
    > **Note:** This is a feature of the HTML parser that cannot be used post-parsing by setting the `shadowrootmode` attribute through JavaScript. Only allowed values will create the shadow root; any other values, including empty ones, won't trigger this behavior.
-->

## Value

- `open`

  - : The internal shadow root DOM is exposed to JavaScript (recommended for most use cases).

- `closed`

  - : The internal shadow root DOM is hidden from JavaScript.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLTemplateElement")}}
