---
title: Updating add-ons for Firefox 5
slug: Mozilla/Firefox/Releases/5/Updating_add-ons
page-type: guide
---

{{FirefoxSidebar}}

This article provides an overview of the changes you may need to make to your add-ons in order for them to work properly in Firefox 5. You can find a complete list of developer-related changes in Firefox 5 in [Firefox 5 for developers](/en-US/docs/Mozilla/Firefox/Releases/5).

## Do you need to do anything at all?

If your add-on is distributed on [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/) (AMO), it's been checked by an automated compatibility verification tool. Add-ons that don't use APIs that changed in Firefox 5, and have no binary components (which need to be recompiled for every major Firefox release), have automatically been updated on AMO to indicate that they work in Firefox 5.

So you should start by visiting AMO and looking to see if your add-on needs any work done at all.

> [!NOTE]
> You should still test your add-on on Firefox 5, even if it's been automatically upgraded. There are edge cases that may not be automatically detected.

Once you've confirmed that you need to make changes, come on back to this page and read on.

## User interface related changes

Due to the short development cycle (even for our rapid release cycle; Firefox 5 was on an extra-short schedule for timing reasons), there are very few UI related changes in Firefox 5.

### Determining the UI language

In the past, the {{ domxref("Navigator.language", "window.navigator.language") }} DOM property reflected the language of Firefox's user interface. This is no longer the case; instead, it reflects the value of the `Accept-Language` header for the current document. If you need to detect the UI language, you should instead look at the value of the `general.useragent.locale` preference.

## DOM changes

The behaviors of {{domxref("Window.setTimeout()")}}, {{domxref("WorkerGlobalScope.setTimeout()")}}, {{domxref("Window.setInterval()")}} and {{domxref("WorkerGlobalScope.setInterval()")}} have changed; the minimum allowed time has changed, and [varies depending on the situation](/en-US/docs/Web/API/Window/setTimeout#minimum_delay_and_timeout_nesting). In addition, timeouts and intervals are clamped to one per second in inactive tabs (that is, tabs the user isn't currently looking at).

## JavaScript changes

The following keywords are now reserved in JavaScript, even when you're not in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode):

- `class`
- `enum`
- `export`
- `extends`
- `import`
- `super`

Don't use those keywords anywhere in your code, even as object property names.

> [!NOTE]
> This is one of those things that AMO's automatically upgrade tool may not always catch, so check your code for these if your add-on was automatically upgraded but is still not working properly.

## Interface changes

Instantiating certain services, including the `nsICertOverrideService`, at startup can make Firefox unusable ([Firefox bug 650858](https://bugzil.la/650858)). This happens only if you try to instantiate a service before the `load` event is fired.

To fix this, move your instantiation of these services into your `load` event handler:

```js
var MyObject = {
  comp: null,
  init() {
    this.comp = Components.classes["…"].getService(/* … */);
  },
  // …
};
window.addEventListener(
  "load",
  function () {
    MyObject.init();
  },
  false,
);
```

An even better solution, of course, is to follow performance best practices and to not instantiate services until you need to use them.

## See also

- [Firefox 5 for developers](/en-US/docs/Mozilla/Firefox/Releases/5)
