---
title: aria-details
slug: Web/Accessibility/ARIA/Attributes/aria-details
page-type: aria-attribute
spec-urls: https://w3c.github.io/aria/#aria-details
---

The global `aria-details` attribute identifies the element (or elements) that provide additional information related to the object.

## Description

The `aria-details` attribute can be used to provide additional information or complex descriptions to an object. It is used to inform assistive technology users about the content by providing more in-depth information, whether that content is within the current document or a link to additional assets.

There are other HTML and WAI-ARIA properties that have similar purposes. The HTML {{HTMLElement('label')}} element and the [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label) and [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) properties are used to provide short labels for an object. The HTML `title` attribute and the [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description) and [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) properties provide for longer plain text descriptions of an object. However, when additional information, complex descriptions, or navigable content related to the object is necessary and available, the `aria-details` attribute should be used.

The `aria-details` attribute serves a similar purpose as HTML's never fully-supported `longdesc` attribute － a URL of a long description to a replaced element's content － which was deprecated due to lack of support and misuse.

The `aria-details` attribute takes the [`id`](/en-US/docs/Web/HTML/Global_attributes#id), or space separated list of `id`s of the elements to get more detailed information as its values. When `aria-details` is included on an element, assistive technologies inform users of the availability of extended information, enabling the user to navigate to the referenced content.

Elements referenced by `aria-details` are intended to contain more information than would normally be provided via [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby).

The elements referenced by `aria-details` should be visible to all users. `aria-details` informs users that otherwise might not be able to scan a screen and discern quickly that the explanatory content is available.

> **Note:** `aria-details` has no impact on the accessible description.

Unlike `aria-describedby`, elements referenced by `aria-details` are not used in accessible descriptions and are not turned into a plain string when presented to assistive technology users. If the associated content is not too long and flattening the contents of the referenced element to a simple string of text wouldn't cause loss of information, consider using `aria-describedby` instead. That said, it is valid for an element to have both `aria-details` and a description specified with either `aria-describedby` or `aria-description`.

## Example

When it comes to definition and term roles, the `aria-details` would be included on the [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/term_role) element with the `id` of the element with a [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/definition_role) role.

```html
<p>The <strong>cubic-bezier()<strong> functional notation defines a cubic
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As
  these curves are continuous, they are often used to smooth down the start and
  end of the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">A <strong>Bézier curve</strong>,
 (Pronounced \ ˈbe-zē-ˌā \)
 <i aria-description="English pronunciation">BEH-zee-ay</i>) is a mathematically
 described curve used in computer graphics and animation. The curve is defined
 by a set of control points with a minimum of two. Web related graphics
 and animations use Cubic Béziers, which are curves with four control
 points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a href="bezierExplanation.html" id="bezImg"
  aria-label="Explanation of Bézier curve in CSS easing functions">
  <img alt="Animated Bézier curve showing 4 control points." src="bezier.gif">
</a>
```

## Values

- ID reference list
  - : An `id` or space separated list of ids of elements that provide or link to additional related information.

## Associated roles

Used in **ALL** roles.

## Specifications

{{Specifications}}

## See Also

- HTML [id](/en-US/docs/Web/HTML/Global_attributes/id) attribute
- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description)
- [The image `alt` attribute](/en-US/docs/Web/API/HTMLImageElement/alt)
- HTML [title](/en-US/docs/Web/HTML/Global_attributes/title) attribute

<section id="Quick_links">
<strong><a href="/en-US/docs/Web/Accessibility/ARIA/Attributes">WAI-ARIA states and properties</a></strong>
{{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/aria/Attributes")}}
</section>
