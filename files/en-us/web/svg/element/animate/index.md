---
title: <animate>
slug: Web/SVG/Element/animate
page-type: svg-element
browser-compat: svg.elements.animate
---

{{SVGRef}}

The SVG **`<animate>`** element provides a way to animate an attribute of an element over time.

## Example

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attributes

### Animation Attributes

- [Animation timing attributes](/en-US/docs/Web/SVG/Attribute#animation_timing_attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Animation value attributes](/en-US/docs/Web/SVG/Attribute#animation_value_attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Other Animation attributes](/en-US/docs/Web/SVG/Attribute#animation_attributes)
  - : Most notably: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Animation event attributes](/en-US/docs/Web/SVG/Attribute/Events#animation_event_attributes)
  - : Most notably: {{SVGAttr("onbegin")}}, {{SVGAttr("onend")}}, {{SVGAttr("onrepeat")}}

### Global attributes

- [Core Attributes](/en-US/docs/Web/SVG/Attribute/Core)
  - : Most notably: {{SVGAttr('id')}}
- [Styling Attributes](/en-US/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- Event Attributes
  - : [Global event attributes](/en-US/docs/Web/SVG/Attribute/Events#global_event_attributes), [Document element event attributes](/en-US/docs/Web/SVG/Attribute/Events#document_element_event_attributes)

## Usage notes

This element implements the {{domxref("SVGAnimateElement")}} interface.

## Accessibility concerns

Blinking and flashing animation can be problematic for people with cognitive concerns such as Attention Deficit Hyperactivity Disorder (ADHD). Additionally, certain kinds of motion can be a trigger for Vestibular disorders, epilepsy, and migraine and Scotopic sensitivity.

Consider providing a mechanism for pausing or disabling animation, as well as using the [Reduced Motion Media Query](/en-US/docs/Web/CSS/@media/prefers-reduced-motion) or equivalent [User Agent client hint](/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} to create a complimentary experience for users who have expressed a preference for no animated experiences.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
