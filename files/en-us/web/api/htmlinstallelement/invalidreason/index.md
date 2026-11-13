---
title: "HTMLInstallElement: invalidReason property"
short-title: invalidReason
slug: Web/API/HTMLInstallElement/invalidReason
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInstallElement.invalidReason
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`invalidReason`** read-only property of the {{domxref("HTMLInstallElement")}} interface is an enumerated value representing the reason why the associated {{htmlelement("install")}} element is invalid ([blocked](/en-US/docs/Web/HTML/Reference/Elements/install#install_blocking)), if it is blocked at all.
When an element is blocked, it is prevented from functioning, either temporarily or permanently, depending on the reason.

You can query the {{domxref("HTMLInstallElement.isValid")}} property to check whether the `<install>` element is valid or not, and detect when `invalidReason` or `isValid` change using the {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event.

## Value

The empty string (`""`) if the element is not blocked, or one of the following values:

- `illegal_subframe`
  - : The `<install>` element is nested inside an {{htmlelement("iframe")}} or {{htmlelement("fencedframe")}} element.

    Permanent blocker.

- `illegal_sandbox`
  - : The `<install>` element is inside sandboxed content (for example, content restricted via the {{httpheader("Content-Security-Policy")}} sandbox directive).

    Permanent blocker.

- `unsuccessful_registration`
  - : Too many `<install>` elements have been inserted into the same document. The allowed number can vary by implementation; in Chromium it is 24.

    Temporary blocker.

- `recently_attached`
  - : The `<install>` element has only recently been attached to the DOM.

    Expiring blocker.

- `intersection_changed`
  - : The `<install>` element is being moved.

    Expiring blocker.

- `intersection_out_of_viewport_or_clipped`
  - : The `<install>` element is rendered outside or partially inside the viewport.

    Temporary blocker.

- `intersection_occluded_or_distorted`
  - : The `<install>` element is rendered completely inside the viewport, but it is obscured in some way, for example rendered behind other content.

    Temporary blocker.

- `style_invalid`
  - : The `<install>` element has some restricted styles applied to it (see [`<gelocation>` > Styling restrictions](/en-US/docs/Web/HTML/Reference/Elements/geolocation#styling_restrictions)).

    Temporary blocker.

The descriptions above include a "blocker type" for each invalid reason, which is one of the following:

- Permanent
  - : The `<install>` element is permanently invalid until the developer updates the code to stop the blocker occurring.
- Temporary
  - : The `<install>` element is invalid until the blocking condition no longer occurs. After that, the temporary blocker will turn into an expiring blocker.
- Expiring
  - : The `<install>` element is invalid for a short period of time, after which it becomes valid again.

## Examples

### Blocking due to bad contrast

If we include the following `<install>` element inside a PWA:

```html
<install class="bad-contrast"></install>
```

And style it using the following CSS:

```css
.bad-contrast {
  background-color: red;
  color: orange;
}
```

The `<install>` element will not install the PWA and its `invalidReason` property will return `style_invalid`. You could log it like this:

```js
const installElem = document.querySelector("install");
console.log(installElem.invalidReason);
```

### Blocking due to usage in an `<iframe>`

If we include the following `<install>` element in a page:

```html
<install></install>
```

Then embed that page inside a PWA using an `<iframe>`:

```html
<iframe src="install-content.html"></iframe>
```

The `<install>` element will not install the PWA and its `invalidReason` property will return `illegal_subframe`.

### Exploring invalid reasons

In our [Exploring invalid reasons example](https://mdn.github.io/pwa-examples/install-demos/exploring-invalid-reasons/) ([source code](https://github.com/mdn/pwa-examples/tree/main/install-demos/exploring-invalid-reasons)), you can see some of the different ways in which an `<install>` element can be invalid.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLInstallElement.isValid")}}
- {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event
- {{htmlelement("install")}} element
