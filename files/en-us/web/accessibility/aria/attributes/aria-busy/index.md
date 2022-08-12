---
title: aria-busy
slug: Web/Accessibility/ARIA/Attributes/aria-busy
tags:
  - Accessibility
  - ARIA
  - ARIA attribute
  - aria-busy
  - aria live regions
  - aria state
spec-urls:
  - https://w3c.github.io/aria/#aria-busy
  - https://w3c.github.io/aria-practices/#feed
---
Used in [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions), the global `aria-busy` state indicates an element is being modified and that assistive technologies may want to wait until the changes are complete before informing the user about the update.

When multiple parts of a live region need to be loaded before changes are announced to the user, set `aria-busy="true"` until loading is complete. Then set to `aria-busy="false"`. This prevents assistive technologies from announcing changes before updates are done.

## Description

There is a section of content that updates. The updates are important and you want to let the user know when it has been modified, so you have converted it into an [ARIA live region](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) with the [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live) attribute. You may want to update several components of that section at the same time, but you can't be sure that everything will update simultaneously. Even if it is a very important live region with `aria-live="assertive"`, you don't want to interrupt the user multiple times as different parts of the content load. This is where `aria-busy` can help.

The `aria-busy` property is an optional property of live regions that can have the value `true` or `false`. The `aria-busy` attribute with a value of `true` can be added to an element currently being updated or modified, to inform the assistive technology that it should wait until the modifications or changes are complete before exposing the content to the user. Use the [`ariaBusy`](/en-US/docs/Web/API/Element/ariaBusy) property of the {{domxref("ARIAMixin")}} interface to change the value to `false` when downloading is complete.

```js
ariaLiveElement.ariaBusy = "false";
```

[`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)'s value dictates whether the changes are announced immediately upon changing the value to `false`, or the assistive technology waits until the current task is complete before interrupting the user.

### Within a `feed`

If an element with [`feed`](/en-US/docs/Web/Accessibility/ARIA/Roles/feed_role) role has `aria-busy` set to `true`, the rendering changes that occur inside the feed will not be announced with the exception of user-initiated changes.

### Within a `widget`

If changes to a rendered widget would create a state where the widget is missing required owned elements during script execution, set `aria-busy` to `true` on the widget during the update process. For example, if a rendered tree grid updates multiple branches not necessarily rendered simultaneously, an alternative to replacing the whole tree in a single update would be to mark the tree busy while each of the branches are modified.

## Values

- false (default):
  - : There are no expected updates for the element.
- true
  - : The element is being updated.

## ARIAMixin API

- {{domxref("Element.ariaBusy")}}
  - : The [`ariaBusy`](/en-US/docs/Web/API/Element/ariaBusy) property, part of the {{domxref("ARIAMixin")}} interface, reflects the value of the `aria-busy` attribute, which indicates whether an element is being modified.

```html
<div id="clock" role="timer" aria-live="polite" aria-atomic="true" aria-busy="false"></div>
```

```js
let el = document.getElementById('clock');
console.log(el.ariaBusy); // false
el.ariaBusy = "true"
console.log(el.ariaBusy); // true
```

## Associated roles

Used in **ALL** roles

## Specifications

{{Specifications}}

## See Also

- [ARIA live regions](/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)
- [`aria-live`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-relevant)
- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-atomic)

<section id="Quick_links">

1. [**WAI-ARIA states and properties**](/en-US/docs/Web/Accessibility/ARIA/Attributes)

    {{ListSubpagesForSidebar("/en-US/docs/Web/Accessibility/ARIA/Attributes")}}

</section>
