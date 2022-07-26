---
title: '<details>: The Details disclosure element'
slug: Web/HTML/Element/details
tags:
  - Disclosure Box
  - Disclosure Widget
  - Element
  - HTML
  - HTML interactive elements
  - Reference
  - Web
  - details
browser-compat: html.elements.details
---

{{HTMLRef}}

The **`<details>`** [HTML](/en-US/docs/Web/HTML) element creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the {{HTMLElement("summary")}} element.

A disclosure widget is typically presented onscreen using a small triangle which rotates (or twists) to indicate open/closed status, with a label next to the triangle. The contents of the `<summary>` element are used as the label for the disclosure widget.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

A `<details>` widget can be in one of two states. The default _closed_ state displays only the triangle and the label inside `<summary>` (or a {{Glossary("user agent")}}-defined default string if no `<summary>`).

When the user clicks on the widget or focuses it then presses the space bar, it "twists" open, revealing its contents. The common use of a triangle which rotates or twists around to represent opening or closing the widget is why these are sometimes called "twisty".

You can use CSS to style the disclosure widget, and you can programmatically open and close the widget by setting/removing its {{htmlattrxref("open", "details")}} attribute. Unfortunately, at this time there's no built-in way to animate the transition between open and closed.

By default when closed, the widget is only tall enough to display the disclosure triangle and summary. When open, it expands to display the details contained within.

Fully standards-compliant implementations automatically apply the CSS `{{cssxref("display")}}: list-item` to the {{HTMLElement("summary")}} element. You can use this to customize its appearance further. See [Customizing the disclosure widget](#customizing_the_disclosure_widget) for further details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Flow content</a
        >, sectioning root, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        One {{HTMLElement("summary")}} element followed by
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/Guide/HTML/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>{{ARIARole("group")}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>No <code>role</code> permitted</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("open")}}

  - : This Boolean attribute indicates whether or not the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.

    > **Note:** You have to remove this attribute entirely to make the details hidden. `open="false"` makes the details visible because this attribute is Boolean.

## Events

In addition to the usual events supported by HTML elements, the `<details>` element supports the {{domxref("HTMLDetailsElement/toggle_event", "toggle")}} event, which is dispatched to the `<details>` element whenever its state changes between open and closed. It is sent _after_ the state is changed, although if the state changes multiple times before the browser can dispatch the event, the events are coalesced so that only one is sent.

You can use an event listener for the `toggle` event to detect when the widget changes state:

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## Examples

### A simple disclosure example

This example shows a simple `<details>` element with a `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

The result of this HTML is:

{{EmbedLiveSample("A_simple_disclosure_example", 650, 150)}}

### Creating an open disclosure box

To start the `<details>` box in its open state, add the Boolean `open` attribute:

```html
<details open>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

This results in:

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Customizing the appearance

Now let's apply some CSS to customize the appearance of the disclosure box.

#### CSS

```css
details {
  font: 16px "Open Sans", Calibri, sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}

details[open] > summary {
  background-color: #ccf;
}
```

This CSS creates a look similar to a tabbed interface, where clicking the tab opens it to reveal its contents.

The selector `details[open]` can be used to style the element which is open.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

#### Result

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

### Customizing the disclosure widget

The disclosure triangle itself can be customized, although this is not as broadly supported. There are variations in how browsers support this customization due to experimental implementations as the element was standardized, so we'll have to use multiple approaches for a while.

The {{HTMLElement("summary")}} element supports the {{cssxref("list-style")}} shorthand property and its longhand properties, such as {{cssxref("list-style-type")}}, to change the disclosure triangle to whatever you choose (usually with {{cssxref("list-style-image")}}). For example, we can remove the disclosure widget icon by setting `list-style: none`.

#### CSS

```css
details {
  font: 16px "Open Sans", Calibri, sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

This CSS creates a look similar to a tabbed interface, where activating the tab expands and opens it to reveal its contents.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

#### Result

{{EmbedLiveSample("Customizing_the_disclosure_widget", 650, 150)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("summary")}}
