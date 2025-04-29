---
title: "<details>: The Details disclosure element"
slug: Web/HTML/Reference/Elements/details
page-type: html-element
browser-compat: html.elements.details
---

{{HTMLSidebar}}

The **`<details>`** [HTML](/en-US/docs/Web/HTML) element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the {{HTMLElement("summary")}} element.

A disclosure widget is typically presented onscreen using a small triangle that rotates (or twists) to indicate open/closed state, with a label next to the triangle. The contents of the `<summary>` element are used as the label for the disclosure widget. The contents of the `<details>` provide the {{glossary("accessible description")}} for the `<summary>`.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

A `<details>` widget can be in one of two states. The default _closed_ state displays only the triangle and the label inside `<summary>` (or a {{Glossary("user agent")}}-defined default string if no `<summary>`).

When the user clicks on the widget or focuses it then presses the space bar, it "twists" open, revealing its contents. The common use of a triangle which rotates or twists around to represent opening or closing the widget is why these are sometimes called "twisty".

You can use CSS to style the disclosure widget, and you can programmatically open and close the widget by setting/removing its [`open`](#open) attribute. Unfortunately, at this time, there's no built-in way to animate the transition between open and closed.

By default when closed, the widget is only tall enough to display the disclosure triangle and summary. When open, it expands to display the details contained within.

Fully standards-compliant implementations automatically apply the CSS `{{cssxref("display")}}: list-item` to the {{HTMLElement("summary")}} element. You can use this or the {{cssxref("::marker")}} pseudo-element to [customize the disclosure widget](/en-US/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Attributes

This element includes the [global attributes](/en-US/docs/Web/HTML/Reference/Global_attributes).

- `open`

  - : This Boolean attribute indicates whether the details — that is, the contents of the `<details>` element — are currently visible. The details are shown when this attribute exists, or hidden when this attribute is absent. By default this attribute is absent which means the details are not visible.

    > [!NOTE]
    > You have to remove this attribute entirely to make the details hidden. `open="false"` makes the details visible because this attribute is Boolean.

- `name`

  - : This attribute enables multiple `<details>` elements to be connected, with only one open at a time. This allows developers to easily create UI features such as accordions without scripting.

    The `name` attribute specifies a group name — give multiple `<details>` elements the same `name` value to group them. Only one of the grouped `<details>` elements can be open at a time — opening one will cause another to close. If multiple grouped `<details>` elements are given the `open` attribute, only the first one in the source order will be rendered open.

    > **Note:** `<details>` elements don't have to be adjacent to one another in the source to be part of the same group.

## Events

In addition to the usual events supported by HTML elements, the `<details>` element supports the {{domxref("HTMLElement/toggle_event", "toggle")}} event, which is dispatched to the `<details>` element whenever its state changes between open and closed. It is sent _after_ the state is changed, although if the state changes multiple times before the browser can dispatch the event, the events are coalesced so that only one is sent.

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

### A basic disclosure example

This example shows a basic `<details>` element with a `<summary>`.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Result

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### Creating an open disclosure box

To start the `<details>` box in its open state, add the Boolean `open` attribute:

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Result

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### Multiple named disclosure boxes

We include several `<details>` boxes, all with the same name so only one can be open at a time:

```html
<details name="requirements">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="requirements">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="requirements">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### Result

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

Try opening all the disclosure widgets. When you open one, all the others automatically close.

### Customizing the appearance

Now let's apply some CSS to customize the appearance of the disclosure box.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
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

details:open > summary {
  background-color: #ccf;
}
```

This CSS creates a look similar to a tabbed interface, where clicking the tab opens it to reveal its contents.

> [!NOTE]
> In browsers that don't support the {{cssxref(":open")}} pseudo-class, you can use the attribute selector `details[open]` to style the `<details>` element when it is in the open state.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### Result

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

See the {{htmlelement("summary")}} page for an [example of customizing the disclosure widget](/en-US/docs/Web/HTML/Reference/Elements/summary#changing_the_summarys_icon).

## Technical summary

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories"
          >Content categories</a
        >
      </th>
      <td>
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Flow content</a
        >, sectioning root, interactive content, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        One {{HTMLElement("summary")}} element followed by
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>None, both the starting and ending tag are mandatory.</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/en-US/docs/Web/HTML/Guides/Content_categories#flow_content"
          >flow content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td><a href="/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("summary")}}
- {{cssxref("::details-content")}}
