---
title: 'aria-details'
slug: Web/Accessibility/ARIA/Attributes/aria-details
tags: 
  - Accessibility
  - ARIA
  - ARIA attribute
  - ARIA property
  - aria-details
  - Reference
  - longdesc
---

The global `aria-details` attribute identifies the element (or elements) that provide additional information related to the object.

## Description

The HTML {{HTMLElement('label')}}, [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label), and [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) enable us to provide short labels for an object. The HTML `title` attribute, [`aria-description`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-description), and [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) provide for longer plain text descriptions for an object. When additional information, complex descriptions, or navigable content related to the object is necessary, we can use `aria-details` to identify the content providing that information, whether that content is within the current document or a link to additional assets.

The `aria-details` property takes as its values the `id` or space separated list of `id`s of the elements that can be accessed to provide more detailed information to the user. These referenced elements contain more information than would normally be provided via `aria-describedby`. When `aria-details` is included on an element, assistive technologies inform users of the availability of extended information and enable them to navigate to it but has no impact on the Accessible Description. The `aria-details` attribute serves a similar purpose as HTML's never fully supported `longdesc` attribute - a URL of a long description to a replaced element's content - which was deprecated due to lack of support and misuse. 

The elements referenced by `aria-details` should be visible to all users; `aria-details` informs the user that might not be able to scan all the content to know that the content is available.

Unlike `aria-describedby`, elements referenced by `aria-details` are not used in accessible descriptions and are not stringified when presented to assistive technology users. If flattening the contents of the referenced element, as is done with `aria-describedby`, would cause a loss of information, use `aria-details` instead. 

The aria-details property supports referring to multiple elements. For example, a paragraph in a document editor may reference multiple comments that are not related to each other. If a user agent relies on an accessibility API that does not support exposing multiple descriptive relations, the user agent SHOULD expose the relationship to the first element referenced by aria-details.

It is valid for an element to have both aria-details and a description specified with either aria-describedby or aria-description. If a user agent relies on an accessibility API that does not support exposing multiple descriptive relations, and if an element has both aria-details and aria-describedby, the user agent SHOULD expose the aria-details relation and the description string computed from the aria-describedby relationship.

## Example

When it comes to definiton and term roles, the `aria-details` would be included on the [`term`](/en-US/docs/Web/Accessibility/ARIA/Roles/Term_role) element with the `id` of the element with a [`definition`](/en-US/docs/Web/Accessibility/ARIA/Roles/Definition_role) role.

```html
<p>The <strong>cubic-bezier()<strong> functional notation defines a cubic 
  <span role="term" aria-details="bezier bezImg">Bézier curve</span>. As 
  these curves are continuous, they are often used to smooth down the start and 
  end of the curve and are therefore sometimes called easing functions.
</p>

<p role="definition" id="bezier">A <strong>Bézier curve</strong>,
 (pronounced /<span title="primary stress syllable">ˈb<span title="/ɛ/: 'e' in 'dress'">ɛ</span>z'</span>-y-<span title="/eɪ/: 'a' in 'face'">eɪ</span>/ 
 <i title="English pronunciation respelling">BEH-zee-ay</i>) is a mathematically 
 described curve used in computer graphics and animation. The curve is defined 
 by a set of control points with a minimum of two. Web related graphics 
 and animations use Cubic Béziers, which are curves with four control 
 points P<sub>0</sub>, P<sub>1</sub>, P<sub>2</sub>, and P<sub>3</sub>.
</p>

<a href="bezierExplanation.html" id="bezImg" 
  aria-label="Explanation of Bézier curve in CSS timing functions">
  <img alt="Animated Bézier curve" src="bezier.gif">
</a>
```

## Values

- ID reference list
  - : An `id` or space separated list of ids of elements that provide or link to additional related information.

## Associated roles

Used in **ALL** roles. 

## Specifications

| Specification | Status | 
| ------------- | ------  |
| {{SpecName("ARIA","#aria-details","ARIA: aria-details Attribute")}}  | {{Spec2('ARIA')}} |

## See Also

- [`aria-labelledby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby)
- [`aria-describedby`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby)
- 
