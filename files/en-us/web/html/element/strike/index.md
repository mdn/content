---
title: <strike>
slug: Web/HTML/Element/strike
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.strike
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<strike>`** [HTML](/en-US/docs/Web/HTML) element places a strikethrough (horizontal line) over text.

> **Warning:** This element is deprecated in HTML 4 and XHTML 1, and obsoleted in the [HTML Living Standard](https://html.spec.whatwg.org/multipage/obsolete.html#strike). If semantically appropriate, i.e., if it represents _deleted_ content, use {{HTMLElement("del")}} instead. In all other cases use {{HTMLElement("s")}}.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

## Examples

```html
&lt;strike&gt;: <strike>Today's Special: Salmon</strike> SOLD OUT<br />
&lt;s&gt;: <s>Today's Special: Salmon</s> SOLD OUT
```

### Result

{{EmbedLiveSample("Example")}}

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{HTMLElement("s")}} element.
- The {{HTMLElement("del")}} element should be used if the data has been _deleted_.
- The CSS {{CSSxRef("text-decoration")}} property can be used to style text with a strikethrough.
