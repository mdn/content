---
title: Element.msRegionOverflow
slug: Web/API/Element/msRegionOverflow
page-type: web-api-instance-property
tags:
  - Internet Explorer
  - msRegionOverflow
  - Non-standard
  - Property
  - Read-only
---
{{APIRef("DOM")}}

{{Non-standard_header()}}

The **`msRegionOverflow`** read-only property determines if content fully fits into the region or not.

This proprietary property is specific to Internet Explorer.

## Value

Returns one of the following strings:

- `"overflow"`
  - : The region element's content overflows the region's content box. Note that the region's overflow property value can be used to control the visibility of the overflowing content. This means that the region is the last one in the region chain and not able to fit the remaining content from the named flow.
- `"fit"`
  - : The region element's content fits into the region's content box. It does not overflow. If the region is the last one in the region chain, it means that the content fits without overflowing. If the region is not the last one in the region chain, that means the named flow content is further fitted in subsequent regions. In particular, in this last case, that means the region may have received no content from the named flow (for example if the region is too small to accommodate any content).
- `"empty"`
  - : The region element has no content and is empty. All content from the named flow was fitted in regions with a lower content-order value.
- `"undefined"`
  - : The element is not a region.

When the region is an actual element, msRegionOverflow provides the ability to find out if content fully fits into the region or not. However, it is only available to regions that are document elements and not to regions that are pseudo-elements.

## See also

- [Microsoft API extensions](/en-US/docs/Web/API/Microsoft_Extensions)
