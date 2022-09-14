---
title: '<body>: The Document Body element'
slug: Web/HTML/Element/body
tags:
  - Element
  - HTML
  - Reference
  - Sectioning Root Element
  - Sections
  - Web
browser-compat: html.elements.body
---

{{HTMLRef}}

The **`<body>`** [HTML](/en-US/docs/Web/HTML) element represents the content of an HTML document. There can be only one `<body>` element in a document.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
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
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
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

- {{htmlattrdef("alink")}} {{deprecated_inline}}
  - : Color of text for hyperlinks when selected.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":active")}} pseudo-class instead.**
- {{htmlattrdef("background")}} {{deprecated_inline}}
  - : URI of a image to use as a background.
    **Do not use this attribute! Use the CSS {{cssxref("background")}} property on the element instead.**
- {{htmlattrdef("bgcolor")}} {{deprecated_inline}}
  - : Background color for the document.
    **Do not use this attribute! Use the CSS {{cssxref("background-color")}} property on the element instead.**
- {{htmlattrdef("bottommargin")}} {{deprecated_inline}}
  - : The margin of the bottom of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-bottom")}} property on the element instead.**
- {{htmlattrdef("leftmargin")}} {{deprecated_inline}}
  - : The margin of the left of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-left")}} property on the element instead.**
- {{htmlattrdef("link")}} {{deprecated_inline}}
  - : Color of text for unvisited hypertext links.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":link")}} pseudo-class instead.**
- {{htmlattrdef("onafterprint")}}
  - : Function to call after the user has printed the document.
- {{htmlattrdef("onbeforeprint")}}
  - : Function to call when the user requests printing of the document.
- {{htmlattrdef("onbeforeunload")}}
  - : Function to call when the document is about to be unloaded.
- {{htmlattrdef("onblur")}}
  - : Function to call when the document loses focus.
- {{htmlattrdef("onerror")}}
  - : Function to call when the document fails to load properly.
- {{htmlattrdef("onfocus")}}
  - : Function to call when the document receives focus.
- {{htmlattrdef("onhashchange")}}
  - : Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.
- {{htmlattrdef("onlanguagechange")}}
  - : Function to call when the preferred languages changed.
- {{htmlattrdef("onload")}}
  - : Function to call when the document has finished loading.
- {{htmlattrdef("onmessage")}}
  - : Function to call when the document has received a message.
- {{htmlattrdef("onoffline")}}
  - : Function to call when network communication has failed.
- {{htmlattrdef("ononline")}}
  - : Function to call when network communication has been restored.
- {{htmlattrdef("onpopstate")}}
  - : Function to call when the user has navigated session history.
- {{htmlattrdef("onredo")}}
  - : Function to call when the user has moved forward in undo transaction history.
- {{htmlattrdef("onresize")}}
  - : Function to call when the document has been resized.
- {{htmlattrdef("onstorage")}}
  - : Function to call when the storage area has changed.
- {{htmlattrdef("onundo")}}
  - : Function to call when the user has moved backward in undo transaction history.
- {{htmlattrdef("onunload")}}
  - : Function to call when the document is going away.
- {{htmlattrdef("rightmargin")}} {{deprecated_inline}}
  - : The margin of the right of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-right")}} property on the element instead.**
- {{htmlattrdef("text")}} {{deprecated_inline}}
  - : Foreground color of text.
    **Do not use this attribute! Use CSS {{cssxref("color")}} property on the element instead.**
- {{htmlattrdef("topmargin")}} {{deprecated_inline}}
  - : The margin of the top of the body.
    **Do not use this attribute! Use the CSS {{cssxref("margin-top")}} property on the element instead.**
- {{htmlattrdef("vlink")}} {{deprecated_inline}}
  - : Color of text for visited hypertext links.
    **Do not use this attribute! Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":visited")}} pseudo-class instead.**

## Example

```html
<html lang="en">
  <head>
    <title>Document title</title>
  </head>
  <body>
    <p>This is a paragraph</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
