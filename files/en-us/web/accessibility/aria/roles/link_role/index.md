---
title: "ARIA: link role"
slug: Web/Accessibility/ARIA/Roles/link_role
page-type: aria-role
spec-urls: https://w3c.github.io/aria/#link
---

A `link` widget provides an interactive reference to a resource. The target resource can be either external or local; i.e., either outside or within the current page or application.

> **Note:** Where possible, it is recommended that you use a native {{HTMLElement("a")}} element rather than the `link` role, as native elements are more widely supported by user agents and assistive technology. Native {{HTMLElement("a")}} elements also support keyboard and focus requirements by default, without need for additional customization.

## Description

The `link` role is used to identify an element that creates a hyperlink to a resource that is in the application or external.

When not using semantic HTML for its intended purpose, interactive features must be re-implemented. For example, when `role="link"` is added to an element, the <kbd>tab</kbd> key should enable giving focus to the link and the <kbd>enter</kbd> key should execute the link when focused.

Use the [`tabindex`](/en-US/docs/Web/HTML/Global_attributes#tabindex) attribute with a value of `0` to ensure the link is in the correct tab focus order.

> **Warning:** Applying the `link` role to an element will not cause browsers to enhance the element with standard link appearance or behaviors, such as underlining, focus rings, navigation to the link target, or context menu actions. That's the developer's responsibility.

## Examples

To recreate an accessible link using the `link` role on an element that is not an {{HTMLElement('a')}}, you need to ensure the link receives focus in the correct tab order, that the element looks like a link, and that the "link" behaves like a link.

```html
<span data-href="https://mozilla.org" tabindex="0" role="link">
  Fake accessible link created using a span
</span>
```

### CSS

```css
span[role="link"] {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
span[role="link"]:hover,
span[role="link"]:active,
span[role="link"]:focus {
  color: purple;
}

span[role="link"]:focus {
  background-color: palegoldenrod;
  outline: 1px dotted;
}
```

### JavaScript

```js
const fakeLinks = document.querySelectorAll('[role="link"]');

for (let i = 0; i < fakeLinks.length; i++) {
  fakeLinks[i].addEventListener("click", navigateLink);
  fakeLinks[i].addEventListener("keydown", navigateLink);
}

//handles clicks and keydowns on the link
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}
```

If the element with `role="link"` receives an <kbd>Enter</kbd> key event, this executes the link, going to the linked page or moving focus to the in page target.

Optionally, <kbd>Shift</kbd> + <kbd>F10</kbd> opens a context menu for the link.

## Best practices

The various widget roles are used to define common interactive patterns. Similar to the document-structure roles, some of these roles, including the `link` role, duplicate the semantics of native HTML elements that are well supported, and should not be used.

Avoid using `link`, which we've included for completeness. The {{HTMLElement('a')}} semantic equivalent with accessible interactivity is available and supported.

### Prefer HTML

Using the {{HTMLElement('a')}} instead.

> **Note:** There is no need to include `role="link"` on an HTML link as the `<a>`, by default, has that role already.

## Specifications

{{Specifications}}

## See also

- The {{HTMLElement('a')}} element
- The {{HTMLElement('button')}} element
- [`aria-label`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
- [ARIA practices `link` role examples](https://w3c.github.io/aria-practices/examples/link/link.html)

<section id="Quick_links">

1. [**WAI-ARIA roles**](/en-US/docs/Web/Accessibility/ARIA/Roles)

   {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Roles")}}

</section>
