---
title: SVGElement
slug: Web/API/SVGElement
page-type: web-api-interface
browser-compat: api.SVGElement
---

{{APIRef("SVG")}}

All of the SVG DOM interfaces that correspond directly to elements in the SVG language derive from the `SVGElement` interface.

{{InheritanceDiagram}}

## Instance properties

_Also inherits properties from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("SVGElementInstance")}}._

- {{DOMxRef("SVGElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("StylePropertyMap")}} representing the declarations of the element's {{SVGAttr("style")}} attribute.
- {{DOMxRef("SVGElement.dataset")}} {{ReadOnlyInline}}
  - : A {{DOMxRef("DOMStringMap")}} object which provides a list of key/value pairs of named data attributes which correspond to [custom data attributes](/en-US/docs/Learn/HTML/Howto/Use_data_attributes) attached to the element. These can also be defined in SVG using attributes of the form {{SVGAttr("data-*")}}, where `*` is the key name for the pair. This works just like HTML's {{DOMxRef("HTMLElement.dataset")}} property and HTML's [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) global attribute.
- {{DOMxRef("SVGElement.className")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : An {{DOMxRef("SVGAnimatedString")}} that reflects the value of the {{SVGAttr("class")}} attribute on the given element, or the empty string if `class` is not present. This attribute is deprecated and may be removed in a future version of this specification. Authors are advised to use {{DOMxRef("Element.classList")}} instead.
- {{DOMxRef("SVGElement.nonce")}}
  - : Returns the cryptographic number used once that is used by Content Security Policy to determine whether a given fetch will be allowed to proceed.
- {{DOMxRef("SVGElement.ownerSVGElement")}} {{ReadOnlyInline}}
  - : An {{DOMxRef("SVGSVGElement")}} referring to the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.
- {{DOMxRef("SVGElement.style")}}
  - : A {{DOMxRef("CSSStyleDeclaration")}} representing the declarations of the element's {{SVGAttr("style")}} attribute.
- {{DOMxRef("SVGElement.tabIndex")}}
  - : The position of the element in the tabbing order.
- {{DOMxRef("SVGElement.viewportElement")}} {{ReadOnlyInline}}
  - : The {{DOMxRef("SVGElement")}} which established the current viewport. Often the nearest ancestor {{SVGElement("svg")}} element. `null` if the given element is the outermost `<svg>` element.

## Instance methods

_This interface has no methods, but inherits methods from: {{DOMxRef("DocumentAndElementEventHandlers")}}, {{DOMxRef("Element")}}, {{DOMxRef("SVGElementInstance")}}_.

## Events

Listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the equivalent `on...` handler property.

- [`abort`](/en-US/docs/Web/API/SVGElement/abort_event)
  - : Fired when page loading is stopped before an SVG element has been allowed to load completely.
- [`error`](/en-US/docs/Web/API/SVGElement/error_event)
  - : Fired when an SVG element does not load properly or when an error occurs during script execution.
- [`load`](/en-US/docs/Web/API/SVGElement/load_event)
  - : Fires on an `SVGElement` when it is loaded in the browser.
- [`resize`](/en-US/docs/Web/API/SVGElement/resize_event)
  - : Fired when an SVG document is being resized.
- [`scroll`](/en-US/docs/Web/API/SVGElement/scroll_event)
  - : Fired when an SVG document view is being shifted along the X and/or Y axes.
- [`unload`](/en-US/docs/Web/API/SVGElement/unload_event)
  - : Fired when the DOM implementation removes an SVG document from a window or frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- HTML [`data-*`](/en-US/docs/Web/HTML/Global_attributes/data-*) attribute
- SVG {{SVGAttr("data-*")}} attribute
- [Using custom data attributes in HTML](/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
