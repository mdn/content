---
title: Enumerated
slug: Glossary/Enumerated
page-type: glossary-definition
---

{{GlossarySidebar}}

In computer science, an **enumerated** type is a data type consisting of a limited set of named values.

## HTML enumerated attributes

In HTML, [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) are attributes with a limited, predefined set of text values. For example, the global HTML [`dir`](/en-US/docs/Web/HTML/Global_attributes/dir) attribute has three valid values: `ltr`, `rtl`, and `auto`.

Each enumerated attribute has a default value for when the attribute is present without a value (the value is missing), and a default value for when the attribute is assigned an invalid value. Unlike {{Glossary("Boolean/HTML", "Boolean attribute")}} HTML attributes — which are always true when the attribute is present whether the value is present, omitted, or invalid — with enumerated HTML attributes, the default for an omitted value may be different from the default for invalid values. For example, the global HTML [`contenteditable`](/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute has two valid keywords: `true` and `false`. If the attribute is present but no value is set, the value is `true`. If a value is set, but is invalid, such as `contenteditable="contenteditable"`, the value maps to a third state, `inherit`.

## ARIA enumerated attributes

ARIA states and properties, being HTML, also have enumerated attributes. If an ARIA attribute includes a both a `true` and `false` value in the enumerated list, it generally treats an omitted attribute as `false` and an invalid value as `true`, while the default value for the empty string or omitted value depends on the attribute.

For example, the `aria-current` attribute accepts a limited list of values that includes `page`, `step`, `location`, `date`, `time`, `true`, and `false`. In this case, if the attribute is not present, is an empty string, is present with no value, or is set to `aria-current="false"` the attribute is false and is not exposed to the user. Any non-empty string value not in the list of enumerated values is treated as if `aria-current="true"` were set.

## JavaScript enumerable properties

In JavaScript, enumerable properties are those properties whose internal enumerable flag is set to true, which is the default for properties created via simple assignment or via a property initializer. Most iteration mechanisms (such as [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops and [`Object.keys`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) only visit enumerable keys.

## See also

- {{Glossary("Boolean")}}
- [JavaScript data types and data structures](/en-US/docs/Web/JavaScript/Data_structures)
- [enumerated attributes](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) in the HTML Standard
