---
title: Element.createShadowRoot()
slug: Web/API/Element/createShadowRoot
tags:
  - API
  - Deprecated
  - Element
  - Method
  - Non-standard
  - Reference
  - shadow dom
browser-compat: api.Element.createShadowRoot
---
{{APIRef('Shadow DOM')}}{{non-standard_header}}{{deprecated_header}}{{draft}}

Use `Element.createShadowRoot` to create an instance of [shadow DOM](/en-US/docs/Web/Web_Components/Using_shadow_DOM). When shadow DOM is
created, it is always attached to an existing element. After the shadow DOM is created,
the element that it is attached to is called the {{glossary("shadow root")}}.

> **Note:** This method has been deprecated in favor of
> {{DOMxRef("Element.attachShadow()","attachShadow()")}}.

## Syntax

```js
var shadowroot = element.createShadowRoot();
```

### Parameters

No parameters.

### Result value

Returns a {{DOMxRef("ShadowRoot")}}.

## Specifications

This feature is no longer defined by any specifications.

## Browser compatibility

{{Compat}}
