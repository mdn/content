---
title: Attribute
slug: Glossary/Attribute
page-type: glossary-definition
sidebar: glossarysidebar
---

An **attribute** extends an {{Glossary("HTML")}} or {{Glossary("XML")}} {{Glossary("element")}}, changing its behavior or providing metadata.

An attribute always has the form `name="value"` (the attribute's identifier followed by its associated value). You may see attributes without an equals sign or a value. That is a shorthand for providing the empty string in HTML. However, this is not valid in XML: XML requires all attributes to have an explicit value.

A number of HTML attributes are {{Glossary("Boolean/HTML", "boolean attributes")}}. These attributes' values are only controlled by the presence or absence of the attribute. See {{Glossary("Boolean/HTML", "boolean attributes")}} for more information.

## Reflection of an attribute

Attributes may be _reflected_ into a particular property of the specific interface.

This means that the value of the attribute can be read or written directly in JavaScript through a property on the corresponding interface, and vice versa.
The reflected properties offer a more natural programming approach than getting and setting attributes using the {{domxref("Element.getAttribute()","getAttribute()")}} and {{domxref("Element.setAttribute()","setAttribute()")}} methods of the {{domxref("Element")}} interface.

For more information see [Attribute reflection](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes).

## See also

- [HTML attribute reference](/en-US/docs/Web/HTML/Reference/Attributes)
- [Attribute reflection](/en-US/docs/Web/API/Document_Object_Model/Reflected_attributes)
- Information about HTML's [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes)
- XML StartTag Attribute Recommendation in [W3C XML Recommendation](https://www.w3.org/TR/xml/#sec-starttags)
- Related glossary terms:
  - {{Glossary("Element")}}
  - {{Glossary("Tag")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "Boolean attributes")}}
  - {{Glossary("Enumerated", "Enumerated attributes")}}
