---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
page-type: web-api-interface
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
browser-compat: api.HTMLObjectElement
---
{{ APIRef("HTML DOM") }}

The **`HTMLObjectElement`** interface provides special properties and methods (beyond those on the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of {{HTMLElement("object")}} element, representing external resources.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLObjectElement.align")}} {{deprecated_inline}}
  - : A string representing an enumerated property indicating alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, `"justify"`, and `"center"`.
- {{domxref("HTMLObjectElement.archive")}} {{deprecated_inline}}
  - : A string that reflects the {{htmlattrxref("archive", "object")}} HTML attribute, containing a list of archives for resources for this object.
- {{domxref("HTMLObjectElement.border")}} {{deprecated_inline}}
  - : A string that reflects the {{htmlattrxref("border", "object")}} HTML attribute, specifying the width of a border around the object.
- {{domxref("HTMLObjectElement.code")}} {{deprecated_inline}}
  - : A string representing the name of an applet class file, containing either the applet's subclass, or the path to get to the class, including the class file itself.
- {{domxref("HTMLObjectElement.codeBase")}} {{deprecated_inline}}
  - : A string that reflects the {{htmlattrxref("codebase", "object")}} HTML attribute, specifying the base path to use to resolve relative URIs.
- {{domxref("HTMLObjectElement.codeType")}} {{deprecated_inline}}
  - : A string that reflects the {{htmlattrxref("codetype", "object")}} HTML attribute, specifying the content type of the data.
- {{domxref("HTMLObjectElement.contentDocument")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("Document")}} representing the active document of the object element's nested browsing context, if any; otherwise `null`.
- {{domxref("HTMLObjectElement.contentWindow")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("WindowProxy")}} representing the window proxy of the object element's nested browsing context, if any; otherwise `null`.
- {{domxref("HTMLObjectElement.data")}}
  - : Returns a string that reflects the {{htmlattrxref("data", "object")}} HTML attribute, specifying the address of a resource's data.
- {{domxref("HTMLObjectElement.declare")}} {{deprecated_inline}}
  - : A boolean value that reflects the {{htmlattrxref("declare", "object")}} HTML attribute, indicating that this is a declaration, not an instantiation, of the object.
- {{domxref("HTMLObjectElement.form")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("HTMLFormElement")}} representing the object element's form owner, or null if there isn't one.
- {{domxref("HTMLObjectElement.height")}}
  - : Returns a string that reflects the {{htmlattrxref("height", "object")}} HTML attribute, specifying the displayed height of the resource in CSS pixels.
- {{domxref("HTMLObjectElement.hspace")}} {{deprecated_inline}}
  - : A `long` representing the horizontal space in pixels around the control.
- {{domxref("HTMLObjectElement.name")}}
  - : Returns a string that reflects the {{htmlattrxref("name", "object")}} HTML attribute, specifying the name of the browsing context.
- {{domxref("HTMLObjectElement.standby")}} {{deprecated_inline}}
  - : A string that reflects the {{htmlattrxref("standby", "object")}} HTML attribute, specifying a message to display while the object loads.
- {{domxref("HTMLObjectElement.type")}}
  - : A string that reflects the {{htmlattrxref("type", "object")}} HTML attribute, specifying the MIME type of the resource.
- {{domxref("HTMLObjectElement.useMap")}}
  - : A string that reflects the {{htmlattrxref("usemap", "object")}} HTML attribute, specifying a {{HTMLElement("map")}} element to use.
- {{domxref("HTMLObjectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Returns a string representing a localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (`willValidate` is `false`), or it satisfies its constraints.
- {{domxref("HTMLObjectElement.validity")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("ValidityState")}} with the validity states that this element is in.
- {{domxref("HTMLObjectElement.vspace")}} {{deprecated_inline}}
  - : A `long` representing the horizontal space in pixels around the control.
- {{domxref("HTMLObjectElement.width")}}
  - : A string that reflects the {{htmlattrxref("width", "object")}} HTML attribute, specifying the displayed width of the resource in CSS pixels.
- {{domxref("HTMLObjectElement.willValidate")}} {{ReadOnlyInline}}
  - : Returns a boolean value that indicates whether the element is a candidate for constraint validation. Always `false` for `HTMLObjectElement` objects.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLObjectElement.checkValidity()")}}
  - : Returns a boolean value that always is `true`, because `object` objects are never candidates for constraint validation.
- {{domxref("HTMLObjectElement.setCustomValidity()")}}
  - : Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("object")}}
