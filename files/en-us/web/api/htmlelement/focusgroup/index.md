---
title: "HTMLElement: focusGroup property"
short-title: focusGroup
slug: Web/API/HTMLElement/focusGroup
page-type: web-api-instance-property
browser-compat: api.HTMLElement.focusGroup
---

{{ApiRef("HTML DOM")}}

The **`focusGroup`** read-only property of the {{domxref("HTMLElement")}} interface specifies the "roving tabindex" keyboard navigation behavior of the associated element. It reflects the element's [`focusgroup`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup) attribute.

## Value

A {{domxref("DOMTokenList")}} containing the tokens set in the `focusgroup` attribute value (see [`focusgroup` > Values](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#values)).

Note that, even though the property is read-only, you can modify the tokens contained inside the `DOMTokenList` using the methods available on it.

## Examples

### Feature detection

This example grabs a reference to a focusgroup element — that is, one with the `focusgroup` attribute set on it. It then detects whether the focusgroup element has a `focusGroup` property. If not, the attribute is not supported, so it adds a `no-focusgroup` class to the {{htmlelement("body")}} element that could be used for example to adjust the document's styling and display a "not supported" banner.

```js
const focusgroupElem = document.querySelector("[focusgroup]");
if (!focusgroupElem.focusGroup) {
  document.body.className = "no-focusgroup";
}
```

See this in action in our [`focusgroup` examples](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#examples).

### Changing focusgroup behavior

Following on from the previous example, once you've grabbed a reference to a focusgroup element, you can change the tokens in the `focusgroup` attribute using the methods available on the `focusGroup` property {{domxref("DOMTokenList")}} object. For example, here we are using the {{domxref("DOMTokenList.replace()")}} method to swap out the [`toolbar`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#toolbar) token for a [`menu`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#menu) token:

```js
focusgroupElem.focusGroup.replace("toolbar", "menu");
```

The result of this is that the widget will change from inline cursor key navigation and no wrapping behavior to block cursor key navigation and wrapping, as well as adopting [`menu`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role)/[`menuitem`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role) semantics instead of [`toolbar`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role) semantics. You may wish to do this in situations where different widgets are seen as appropriate in different responsive views of the same website, but you should proceed with caution — changing behavior and semantics may confuse both assistive technology (AT) users and non-AT users.

It may be better to restrict such code to making smaller changes, for example adding a [`wrap`](/en-US/docs/Web/HTML/Reference/Global_attributes/focusgroup#wrap_2) token to make your `toolbar` widget cursor key navigation wrap:

```js
focusgroupElem.focusGroup.add("wrap");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`focusgroup`](/docs/Web/HTML/Reference/Global_attributes/focusgroup) attribute
- {{domxref("HTMLElement.focusGroupStart")}}
- [ARIA roles](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles)
