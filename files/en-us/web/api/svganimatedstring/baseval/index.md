---
title: "SVGAnimatedString: baseVal property"
short-title: baseVal
slug: Web/API/SVGAnimatedString/baseVal
page-type: web-api-instance-property
browser-compat: api.SVGAnimatedString.baseVal
---

{{APIRef("SVG")}}

> [!WARNING]
> The `baseVal` property can be used to set the non-animated value of a reflected attribute.
> In the case of {{domxref("SVGScriptElement/href","SVGScriptElement.href.baseVal")}} this property represents the URL of an external script loaded into the SVG script element.
> APIs like this are known as [injection sinks](/en-US/docs/Web/API/Trusted_Types_API#concepts_and_usage), and are potentially a vector for [cross-site scripting (XSS)](/en-US/docs/Web/Security/Attacks/XSS) attacks.
>
> You can mitigate this risk by having a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that restricts the locations from which scripts can be loaded, and by always assigning {{domxref("TrustedScriptURL")}} objects instead of strings, and [enforcing trusted types](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> See [Security considerations](/en-US/docs/Web/API/SVGScriptElement/href#security_considerations) in {{domxref("SVGScriptElement.href")}} for more information.

The **`baseVal`** property of the {{domxref("SVGAnimatedString")}} interface gets or sets the base value of the given attribute.

This is the value of the reflected attribute before any animations are applied.

## Value

Getting the property returns a string that represents the non-animated value of the reflected attribute, if it has been set.
If the reflected attribute is not specified but has an alternative deprecated version that has been set, then its value will be returned instead.
If neither reflected attribute is set, then the property will return an initial value for the reflected attribute if one exists, and otherwise the empty string (`""`).

The property must be set to a {{domxref("TrustedScriptURL")}} if the reflected attribute's element is an {{domxref("SVGScriptElement")}} and [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
For all other cases, the value can be a string (or an object that can be resolved to a string).
The property sets the value of the reflected attribute if it is defined, but will set the alternative deprecated version of the reflected attribute if it is defined and the reflected attribute is not.

Note that {{domxref("TrustedScriptURL")}} or any other trusted type can be set for `baseVal` on any element, because the trusted types resolve to strings.
However {{domxref("TrustedScriptURL")}} _must_ be used for {{domxref("SVGScriptElement/href","SVGScriptElement.href.baseVal")}} when trusted types are enforced.

## Exceptions

- `TypeError`
  - : Thrown if the reflected attribute's element is {{domxref("SVGScriptElement")}}, and the property is set to a string when [Trusted Types](/en-US/docs/Web/API/Trusted_Types_API) are [enforced by a CSP](/en-US/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), and no default policy is defined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
