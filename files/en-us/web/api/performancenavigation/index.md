---
title: PerformanceNavigation
slug: Web/API/PerformanceNavigation
page-type: web-api-interface
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Interface
  - Navigation Timing
  - Navigation Timing API
  - Performance
  - PerformanceNavigation
  - Reference
  - Timing
  - legacy
browser-compat: api.PerformanceNavigation
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

The legacy **`PerformanceNavigation`** interface represents information about how the navigation to the current document was done.

> **Warning:** This interface is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).
> Please use the {{domxref("PerformanceNavigationTiming")}} interface instead.

An object of this type can be obtained by calling the {{domxref("Performance.navigation")}} read-only attribute.

## Properties

_The `PerformanceNavigation` interface doesn't inherit any properties._

- {{domxref("PerformanceNavigation.type")}} {{ReadOnlyInline}} {{deprecated_inline}}

  - : An `unsigned short` which indicates how the navigation to this page was done. Possible values are:

    - `TYPE_NAVIGATE` (0)
      - : The page was accessed by following a link, a bookmark, a form submission, or a script, or by typing the URL in the address bar.
    - `TYPE_RELOAD` (1)
      - : The page was accessed by clicking the Reload button or via the {{domxref("Location.reload()")}} method.
    - `TYPE_BACK_FORWARD` (2)
      - : The page was accessed by navigating into the history.
    - `TYPE_RESERVED` (255)
      - : Any other way.

- {{domxref("PerformanceNavigation.redirectCount")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : An `unsigned short` representing the number of REDIRECTs done before reaching the page.

## Methods

_The `Performance` interface doesn't inherit any methods._

- {{deprecated_inline}} {{domxref("PerformanceNavigation.toJSON()")}}
  - : A jsonizer returning a JSON object representing the `PerformanceNavigation` object.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} that allows access to an object of this type.
- {{domxref("PerformanceNavigationTiming")}} (part of Navigation Timing Level 2) {{experimental_inline}}
