---
title: "<body>: The Document Body element"
slug: Web/HTML/Element/body
page-type: html-element
browser-compat: html.elements.body
---

{{HTMLSidebar}}

The **`<body>`** [HTML](/en-US/docs/Web/HTML) element represents the content of an HTML document. There can be only one `<body>` element in a document.

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes), event attributes, and deprecated attributes:

### Event attributes

> [!NOTE]
> Each of the below event attribute names is linked to its equivalent {{domxref("Window")}} interface event. You can listen to these events using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) instead of adding the `oneventname` attribute to the `<body>` element.

- [`onafterprint`](/en-US/docs/Web/API/Window/afterprint_event)
  - : Function to call after the user has printed the document.
- [`onbeforeprint`](/en-US/docs/Web/API/Window/beforeprint_event)
  - : Function to call when the user requests printing of the document.
- [`onbeforeunload`](/en-US/docs/Web/API/Window/beforeunload_event)
  - : Function to call when the document is about to be unloaded.
- [`onblur`](/en-US/docs/Web/API/Window/blur_event)
  - : Function to call when the document loses focus.
- [`onerror`](/en-US/docs/Web/API/Window/error_event)
  - : Function to call when the document fails to load properly.
- [`onfocus`](/en-US/docs/Web/API/Window/focus_event)
  - : Function to call when the document receives focus.
- [`onhashchange`](/en-US/docs/Web/API/Window/hashchange_event)
  - : Function to call when the fragment identifier part (starting with the hash (`'#'`) character) of the document's current address has changed.
- [`onlanguagechange`](/en-US/docs/Web/API/Window/languagechange_event)
  - : Function to call when the preferred languages changed.
- [`onload`](/en-US/docs/Web/API/Window/load_event)
  - : Function to call when the document has finished loading.
- [`onmessage`](/en-US/docs/Web/API/Window/message_event)
  - : Function to call when the document has received a message.
- [`onmessageerror`](/en-US/docs/Web/API/Window/messageerror_event)
  - : Function to call when the document has received a message that cannot be deserialized.
- [`onoffline`](/en-US/docs/Web/API/Window/offline_event)
  - : Function to call when network communication has failed.
- [`ononline`](/en-US/docs/Web/API/Window/online_event)
  - : Function to call when network communication has been restored.
- [`onpageswap`](/en-US/docs/Web/API/Window/pageswap_event)
  - : Function to call when you navigate across documents, when the previous document is about to unload.
- [`onpagehide`](/en-US/docs/Web/API/Window/pagehide_event)
  - : Function to call when the browser hides the current page in the process of presenting a different page from the session's history.
- [`onpagereveal`](/en-US/docs/Web/API/Window/pagereveal_event)
  - : Function to call when a document is first rendered, either when loading a fresh document from the network or activating a document.
- [`onpageshow`](/en-US/docs/Web/API/Window/pageshow_event)
  - : Function to call when the browser displays the window's document due to navigation.
- [`onpopstate`](/en-US/docs/Web/API/Window/popstate_event)
  - : Function to call when the user has navigated session history.
- [`onresize`](/en-US/docs/Web/API/Window/resize_event)
  - : Function to call when the document has been resized.
- [`onrejectionhandled`](/en-US/docs/Web/API/Window/rejectionhandled_event)
  - : Function to call when a JavaScript {{jsxref("Promise")}} is handled late.
- [`onstorage`](/en-US/docs/Web/API/Window/storage_event)
  - : Function to call when the storage area has changed.
- [`onunhandledrejection`](/en-US/docs/Web/API/Window/unhandledrejection_event)
  - : Function to call when a JavaScript {{jsxref("Promise")}} that has no rejection handler is rejected.
- [`onunload`](/en-US/docs/Web/API/Window/unload_event)
  - : Function to call when the document is going away.

### Deprecated attributes

> [!WARNING]
> Do not use these deprecated attributes; opt for the CSS alternatives listed with each deprecated attribute instead.

- `alink` {{deprecated_inline}}
  - : Color of text for hyperlinks when selected.
    Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":active")}} and {{cssxref(":focus")}} pseudo-classes instead.
- `background` {{deprecated_inline}}
  - : URI of an image to use as a background.
    Use the CSS {{cssxref("background-image")}} property instead.
- `bgcolor` {{deprecated_inline}}
  - : Background color for the document.
    Use the CSS {{cssxref("background-color")}} property instead.
- `bottommargin` {{deprecated_inline}}
  - : The margin of the bottom of the body.
    Use the CSS {{cssxref("margin-bottom")}} property (or the logical {{cssxref("margin-block-end")}} property) instead.
- `leftmargin` {{deprecated_inline}}
  - : The margin of the left of the body.
    Use the CSS {{cssxref("margin-left")}} property (or the logical {{cssxref("margin-inline-start")}} property) instead.
- `link` {{deprecated_inline}}
  - : Color of text for unvisited hypertext links.
    Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":link")}} pseudo-class instead.
- `rightmargin` {{deprecated_inline}}
  - : The margin of the right of the body.
    Use the CSS {{cssxref("margin-right")}} property or the logical {{cssxref("margin-inline-end")}} property) instead.
- `text` {{deprecated_inline}}
  - : Foreground color of text.
    Use the CSS {{cssxref("color")}} property instead.
- `topmargin` {{deprecated_inline}}
  - : The margin of the top of the body.
    Use the CSS {{cssxref("margin-top")}} property (or the logical {{cssxref("margin-block-start")}} property) instead.
- `vlink` {{deprecated_inline}}
  - : Color of text for visited hypertext links.
    Use the CSS {{cssxref("color")}} property in conjunction with the {{cssxref(":visited")}} pseudo-class instead.

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

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        None.
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
          ><a href="/en-US/docs/Web/Accessibility/ARIA/Roles/generic_role"
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("html")}}
- {{HTMLElement("head")}}
- [Event handling overview](/en-US/docs/Web/Events/Event_handlers)
