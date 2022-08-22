---
title: HTMLProgressElement
slug: Web/API/HTMLProgressElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLProgressElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLProgressElement`** interface provides special properties and methods (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of {{HTMLElement("progress")}} elements.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLProgressElement.max")}}
  - : A `double` value reflecting the content attribute of the same name, limited to numbers greater than zero. Its default value is `1.0`.
- {{domxref("HTMLProgressElement.position")}} {{ReadOnlyInline}}
  - : Returns a `double` value returning the result of dividing the current value (`value`) by the maximum value (`max`); if the progress bar is an indeterminate progress bar, it returns `-1`.
- {{domxref("HTMLProgressElement.value")}}
  - : A `double` value that reflects the current value; if the progress bar is an indeterminate progress bar, it returns `0`.
- {{domxref("HTMLProgressElement.labels")}} {{ReadOnlyInline}}
  - : Returns {{domxref("NodeList")}} containing the list of {{HTMLElement("label")}} elements that are labels for this element.

## Methods

_No specific method; inherits properties from its parent, {{domxref("HTMLElement")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("progress")}}
