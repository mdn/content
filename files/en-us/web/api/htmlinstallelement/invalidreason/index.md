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

The **`invalidReason`** read-only property of the {{domxref("HTMLInstallElement")}} interface is an enumerated value representing the reason why the associated {{htmlelement("install")}} element is invalid (see [invalidation and blocking](/en-US/docs/Web/HTML/Guides/Permission_elements#validation_and_blocking)).
When an element is invalid, it is prevented from functioning.

You can query the {{domxref("HTMLInstallElement.isValid")}} property to check whether the `<install>` element is valid or not, and detect when `invalidReason` or `isValid` change using the {{domxref("HTMLInstallElement.validationstatuschange_event", "validationstatuschange")}} event.

## Value

An enumerated value representing an [invalid reason](/en-US/docs/Web/HTML/Guides/Permission_elements#invalid_reasons), or the empty string (`""`) if the element is valid.

## Examples

### Invalidation due to bad contrast

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

### Invalidation due to usage in an `<iframe>`

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
