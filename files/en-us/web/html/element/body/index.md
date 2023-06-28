---
title: "<body>: The Document Body element"
slug: Web/HTML/Element/body
page-type: html-element
browser-compat: html.elements.body
---

{{HTMLSidebar}}

The **`<body>`** [HTML](/en-US/docs/Web/HTML) element represents the content of an HTML document. There can be only one `<body>` element in a document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Element/Heading_Elements#sectioning_roots"
          >Sectioning root</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a href="/en-US/docs/Web/HTML/Content_categories#flow_content"
          >Flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>
        The start tag may be omitted if the first thing inside it is not a space
        character, comment, {{HTMLElement("script")}} element or
        {{HTMLElement("style")}} element. The end tag may be omitted if
        the <code>&#x3C;body></code> element has contents or has a start tag,
        and is not immediately followed by a comment.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        It must be the second element of an {{HTMLElement("html")}}
        element.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/Generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>
        {{domxref("HTMLBodyElement")}}
        <ul>
          <li>
            The <code>&#x3C;body></code> element exposes the
            {{domxref("HTMLBodyElement")}} interface.
          </li>
          <li>
            You can access the <code>&#x3C;body></code> element through the
            {{domxref("document.body")}} property.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- `alink` {{deprecated_inline}}
  - : Color of text for hyperlinks when selected.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":active")}} pseudo-class instead.**
- `background` {{deprecated_inline}}
  - : URI of an image to use as a background.
    **Do not use this attribute! Use the CSS {{cssxref("background")}} property on the element instead.**
- `bgcolor` {{deprecated_inline}}
  - : Background color for the document.
    **Do not use this attribute! Use the CSS {{cssxref("background-color")}} property on the element instead.**
- `bottommargin` {{deprecated_inline}}
  - : The margin of the bottom of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-bottom")}} property on the element instead.**
- `leftmargin` {{deprecated_inline}}
  - : The margin of the left of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-left")}} property on the element instead.**
- `link` {{deprecated_inline}}
  - : Color of text for unvisited hypertext links.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":link")}} pseudo-class instead.**
- `onafterprint`
  - : Function to call after the user has printed the document.
- `onbeforeprint`
  - : Function to call when the user requests printing of the document.
- `onbeforeunload`
  - : Function to call when the document is about to be unloaded.
- `onblur`
  - : Function to call when the document loses focus.
- `onerror`
  - : Function to call when the document fails to load properly.
- `onfocus`
  - : Function to call when the document receives focus.
- `onhashchange`
  - : Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.
- `onlanguagechange`
  - : Function to call when the preferred languages changed.
- `onload`
  - : Function to call when the document has finished loading.
- `onmessage`
  - : Function to call when the document has received a message.
- `onoffline`
  - : Function to call when network communication has failed.
- `ononline`
  - : Function to call when network communication has been restored.
- `onpopstate`
  - : Function to call when the user has navigated session history.
- `onredo`
  - : Function to call when the user has moved forward in undo transaction history.
- `onresize`
  - : Function to call when the document has been resized.
- `onstorage`
  - : Function to call when the storage area has changed.
- `onundo`
  - : Function to call when the user has moved backward in undo transaction history.
- `onunload`
  - : Function to call when the document is going away.
- `rightmargin` {{deprecated_inline}}
  - : The margin of the right of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-right")}} property on the element instead.**
- `text` {{deprecated_inline}}
  - : Foreground color of text.
    **Do not use this attribute! Use CSS {{cssxref("color")}} property on the element instead.**
- `topmargin` {{deprecated_inline}}
  - : The margin of the top of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-top")}} property on the element instead.**
- `vlink` {{deprecated_inline}}
  - : Color of text for visited hypertext links.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":visited")}} pseudo-class instead.**

## Examples

```html
<html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>
      The <code>&lt;body&gt;</code> HTML element represents the content of an
      HTML document. There can be only one <code>&lt;body&gt;</code> element in
      a document.
    </p>
  </body>
</html>
```

### Result

{{EmbedLiveSample('Example')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
