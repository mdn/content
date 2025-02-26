---
title: "<noframes>: The Frame Fallback element"
slug: Web/HTML/Element/noframes
page-type: html-element
status:
  - deprecated
browser-compat: html.elements.noframes
---

{{HTMLSidebar}}{{deprecated_header}}

The **`<noframes>`** [HTML](/en-US/docs/Web/HTML) element provides content to be presented in browsers that don't support (or have disabled support for) the {{HTMLElement("frame")}} element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers.

A `<noframes>` element can contain any HTML elements that are allowed within the body of an HTML document, except for the {{HTMLElement("frameset")}} and {{HTMLElement("frame")}} elements, since using frames when they aren't supported doesn't make sense.

`<noframes>` can be used to present a message explaining that the user's browser doesn't support frames, but ideally should be used to present an alternate form of the site that doesn't use frames but still offers the same or similar functionality.

> [!NOTE]
> This element is obsolete and shouldn't be used, since the {{HTMLElement("frame")}} and {{HTMLElement("frameset")}} elements are also obsolete. When frames are needed at all, they should be presented using the {{HTMLElement("iframe")}} element.

## Attributes

Like all other HTML elements, this element supports the [global attributes](/en-US/docs/Web/HTML/Global_attributes). It has no other attributes available.

## Example

In this example, we see a frameset with two frames. In addition, `<noframes>` is used to present an explanatory message if the {{Glossary("user agent")}} doesn't support frames.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset rows="45%, 55%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
    <noframes>
      <p>
        It seems your browser does not support frames or is configured to not
        allow them.
      </p>
    </noframes>
  </frameset>
</html>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}
