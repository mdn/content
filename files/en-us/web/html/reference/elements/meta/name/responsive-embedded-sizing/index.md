---
title: <meta name="responsive-embedded-sizing">
short-title: responsive-embedded-sizing
slug: Web/HTML/Reference/Elements/meta/name/responsive-embedded-sizing
page-type: html-attribute-value
status:
  - experimental
browser-compat: html.elements.meta.name.responsive-embedded-sizing
sidebar: htmlsidebar
---

{{SeeCompatTable}}

The **`responsive-embedded-sizing`** value for the [`name`](/en-US/docs/Web/HTML/Reference/Elements/meta/name) attribute of a {{htmlelement("meta")}} element opts in an embedded document to sharing its size information with the parent document. The embedding {{htmlelement("iframe")}} can then be sized relative to the embedded document's layout size using the {{cssxref("frame-sizing")}} CSS property.

## Description

For security and privacy reasons, {{htmlelement("iframe")}} elements do not by default expose any information to the parent document about the size of the content in the document they are embedding.

To enable responsive sizing of {{htmlelement("iframe")}} elements based on their content, the `<meta name="responsive-embedded-sizing">` tag can be included in an embedded document to opt it in to sharing its size information with the parent document.

The {{cssxref("frame-sizing")}} CSS property can then be set on the `<iframe>` to cause it to adopt the same horizontal or vertical size as the embedded document's actual content size (termed the **internal layout intrinsic size** in the spec, but abbreviated to "layout size" in our documentation). This is useful for avoiding scrollbars on `<iframe>` content so that it fits more seamlessly with its embedder.

To resize the `<iframe>` dynamically as the embedded document changes layout size, you can call the {{domxref("Window.requestResize()")}} method from the embedded document to make it report an updated size.

## Examples

See the {{cssxref("frame-sizing")}} and {{domxref("Window.requestResize()")}} pages for complete examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.requestResize()")}}
- {{cssxref("frame-sizing")}} CSS property
- [CSS box sizing](/en-US/docs/Web/CSS/Guides/Box_sizing) module
