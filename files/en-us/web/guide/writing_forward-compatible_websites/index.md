---
title: Writing forward-compatible websites
slug: Web/Guide/Writing_forward-compatible_websites
page-type: guide
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/en-US/docs/Web/Guide")}}
</section>

This page explains how to write websites that do not break when new browser versions are released.

This is especially important for intranets and other non-public websites; if we can't see your code, we can't see that it broke. It's not always possible to follow all of these, but following as many of them as possible will help future-proof your website.

## JavaScript

### Prefix all global variable access in `onfoo` attributes with "`window`."

When an event handler content attribute (`onclick`, `onmouseover`, and so forth) is used on HTML element, all name lookup in the attribute first happens on the element itself, then on the element's form if the element is a form control, then on the document, and then on the window (where the global variables you have defined are). For example, if you have this markup:

```html
<div onclick="alert(ownerDocument)">Click me</div>
```

then clicking on the text alerts the `ownerDocument` of the `div`. This happens even if there is an `ownerDocument` variable declared in the global scope.

What this means is that any time you access a global variable in an event handler content attribute, including calling any function declared globally, you can end up with a name collision if a specification adds a new DOM property to elements or documents which has the same name as your function or variable, and a browser implements it. If that happens, then suddenly your function stops being called. This has happened multiple times to various sites already during the evolution of HTML.

To avoid this, fully qualify global variable access using "window.", like so:

```html
<script>
  function localName() {
    alert("Function localName has been called");
  }
</script>
<div onclick="window.localName()">
  Clicking me should show an alert
  <div></div>
</div>
```

### Don't concatenate scripts you don't control

The `"use strict";` directive in ECMAScript, when used on the file level, applies to everything in the file. So appending a script that depends on non-strict-mode behavior to a strict-mode script will cause things to break.

### Ask the authors of any JavaScript libraries you use to also follow these guidelines

Suggest to the developers of your favorite libraries that they follow these guidelines too. If they don't, you can't rely on that library not breaking in the future. Unfortunately, libraries are common transgressors of these guidelines.

## Sniffing

### Sniff for specific features

If you plan to use some feature, use object-detection to sniff for that exact feature, if possible. As a simple example, don't assume that any browser in which `"filter" in body.style` tests true must be Opera and therefore e.g. will have a `window.event` object available in event handlers. Don't assume that browsers with support for a given DOM feature must also have some other, especially nonstandard, DOM feature. Or, conversely, that they _don't_ have support for some other feature (e.g., don't assume that a browser that supports `onload` on script elements will never support `onreadystatechange` on them). As browsers converge behavior, they both add features and remove them. They also fix bugs. All three of these have happened in the past and will happen again.

So don't sniff for one feature or object and then assume that, because it exists or doesn't exist, some other feature or object must also exist or not exist.

### Don't UA-sniff

This is really a particularly common instance of assuming that one feature (the presence of a particular substring in the user agent (UA) string) implies something about the presence or absence of other features.

#### If you have to UA-sniff, only sniff for past browser versions

If you have to resort to UA sniffing, only use it to target past browser versions of particular browsers. First, have a default code path that runs in unknown browsers and in the current and future versions of browsers you are testing with. Then, if the default code path doesn't work in past versions of particular browsers and the breakage cannot be detected by sniffing for the absence of certain features your default code path uses, it's OK to add hacks that are targeted to old versions of particular browsers by sniffing for those old browser versions.

For the purpose of this piece of advice, "current" means the most recent version of a browser you have tested. For example, if you have tested that your default code path runs properly in Firefox Aurora but Firefox Beta and the latest release have a bug that make your default code path fail, it is OK to treat the Firefox version number that is in Aurora at the moment of testing as "current", and consider the Beta version as a "past" version even though it hasn't been released to the general public yet.

### Don't unnecessarily create separate codepaths for different browsers

Don't go out of your way to run different code based on either object detection or UA sniffing if one of the codepaths involved actually works in all browsers. There is a good chance of browsers changing behavior to converge with each other and hence breaking the site for those you've sent down one or more of the alternative paths.

## Testing

### Test with all major engines

Test your code at least in Firefox, Chrome and Safari. If you are following the advice given above so that you have a single code path for all current and unknown browsers, testing that this single code path works in all the major engines makes it extremely probable that your code won't break in the future.

Sometimes browsers implement a given feature slightly differently. If you have a single code path that works in all the top engines, it means that you are either using features where browser behavior has already converged or, if the behavior hasn't quite converged yet, your code works regardless of which engine's behavior standards turn out to uphold.

## Browser-specific features and prefixes

### Don't target hacks at current or future versions of browsers

This is also a common instance of assuming that present correlation between bugs implies future correlation between bugs. Targeting hacks at **old** versions of browsers whose current versions no longer have the bug you're relying on for your hack is OK; once a browser has fixed bug X, you can know for certain that all releases that had bug X also had bug Y and use the presence of bug X to target workarounds for bug Y.

For the purpose of this piece of advice, "current" means the most recent version of a browser you have tested, as in the case of the UA sniffing advice above.

### Avoid depending on cutting-edge nonstandard features

Even if the feature is prefixed, using it could be dangerous: as the specification evolves the browser's prefixed implementation can likewise change to track the specification. And once the feature is standardized, the prefixed version is likely to be removed.

Prefixed, non-standard features are provided by browser developers for you to experiment with and offer feedback on, and aren't meant to be deployed. If you choose to use them, be prepared to need to frequently update your site to keep up with changes.

### When using cutting-edge features (even standard ones) that are not universally implemented, make sure to test fallback paths

Make sure to test what happens in a browser that doesn't implement the feature you're using, especially if you don't use such a browser day-to-day while working on the site. Also, use Javascript [feature detection](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) and CSS [@supports](/en-US/docs/Web/CSS/@supports).

### Don't use unprefixed versions of CSS properties or APIs until at least one browser supports them

Until there's decently widespread support of the unprefixed version of something, its behavior can still change in unexpected ways. Most especially, don't use the unprefixed version if no browser actually supports it. You can't assume that the syntax of the final version will be the same as the syntax of any of the prefixed versions.

## Code hygiene

### Use best practices when coding

Passing a validator is one way to ensure your code is valid. But even if your website doesn't validate entirely you should make sure there are no errors, such as ensuring all your `>` characters are present. Missing those can lead to unexpected situations due to a following tag name being treated as an attribute on a previous tag. This can work for a bit, then break if a specification attaches a meaning to that attribute. Here's an example that worked in older browsers but breaks in all modern browsers:

```html
<form action="http://www.example.com">
  <input type="submit" value="Submit the form"
</form>
```

due to the missing `>` on the `input` tag.

### Don't leave experiments that didn't work in your code

If you try using a CSS property to do something you want, but it has no effect, remove it. It might start doing something you don't expect in the future
