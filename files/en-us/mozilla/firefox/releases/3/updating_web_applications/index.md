---
title: Updating web applications for Firefox 3
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
tags:
  - Firefox 3
---
{{FirefoxSidebar}}

There are a number of changes in the upcoming Firefox 3 that may affect your web site or web application, as well as new features you may wish to take advantage of. This article will serve as a starting point as you work on updating your content to take the fullest possible advantage of Firefox 3.

## DOM changes

Nodes from external documents should be cloned using [`document.importNode()`](/en-US/docs/Web/API/Document/importNode) (or adopted using [`document.adoptNode()`](/en-US/docs/Web/API/Document/adoptNode)) before they can be inserted into the current document. For more on the [`Node.ownerDocument`](/en-US/docs/Web/API/Node/ownerDocument) issues, see the
[W3C DOM FAQ](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for improved future compatibility.

## HTML changes

### Changes to character set inheritance

Firefox 3 closes a security bug in frames and iframes that allowed them to inherit the parent's character set. This could cause problems in certain cases. Now, frames are only allowed to inherit the parent's character set if both frame and parent were loaded from the same server. If you have pages that assume that frames loaded from other servers will inherit the same character set, you should update the frames' HTML to indicate their character set specifically.

### Change to the SCRIPT element

The `<script>` element in `text/html` documents now requires a closing `</script>` in HTML 4 documents, even if you're not including any content in between. While in previous versions of Firefox, you could do:

```html
<script … />
```

Now the markup must comply with the HTML specifications (if it's actually HTML), and hence you must actually close it, like this:

```html
<script …></script>
```

This improves both compatibility and security.

## CSS changes

### Change to font-size based on em, ex units

font-size values in em and ex units used to be affected by the user's minimum font size setting: if a font was displayed larger due to the minimum font size, the em and ex units for font-size settings based on this one would be enlarged accordingly. This was inconsistent with the way percentage-based font sizes behaved.

font-size values in em and ex units are now based on an "intended font size" that is not affected by the user's minimum font size. In other words, font sizes are always calculated according to the designer's intention and are adjusted for minimum font size afterwards.

See {{Bug(434718)}}, especially its NOT A CASE FOR THE BUG TEMPLATE - The following link points to a Bugzilla attachment, not a Bugzilla bug; if you use the attachment number as a bug number, it becomes nonsense [attachment 322943](https://bug434718.bmoattachments.org/attachment.cgi?id=322943) NOT A CASE FOR THE BUG TEMPLATE for a demonstration (must be watched with a minimum font size >= 6 to see the difference: the two box cascades behave differently in Firefox 2, because the em-based font-size "bounces" off the minimum font size).

## Security changes

### Chrome access

In prior versions of Firefox, any web page could load scripts or images from chrome using the `chrome://` protocol. Among other things, this made it possible for sites to detect the presence of add-ons — which could be used to breach a user's security by bypassing add-ons that add security features to the browser.

Firefox 3 only allows web content to access items in the `chrome://browser/` and `chrome://toolkit/` spaces. These files are intended to be accessible by web content. All other chrome content is now blocked from access by the web.

There is, however, a way for extensions to make their content web-accessible. They can specify a special flag in their `chrome.manifest` file, like this:

```
content mypackage location/ contentaccessible=yes
```

This shouldn't be something you need to do very often, but it's available for those rare cases in which it's needed. Note that it's possible that Firefox may alert the user that your extension uses the `contentaccessible` flag in this way, as it does constitute a potential security risk.

> **Note:** Because Firefox 2 doesn't understand the `contentaccessible` flag (it will ignore the entire line containing the flag), if you want your add-on to be compatible with both Firefox 2 and Firefox 3, you should do something like this:
>
> ```bash
> content mypackage location/
> content mypackage location/ contentaccessible=yes
>
> ```

### File upload fields

In prior versions of Firefox, there were cases in which when the user submitted a file for uploading, the entire path of the file was available to the web application. This privacy concern has been resolved in Firefox 3; now only the filename itself is available to the web application.

### Using remote JARs in frames

Using code in JAR files loaded from other domains is no longer allowed in frames; this mitigates a [potential attack vector](https://www.mozilla.org/en-US/security/advisories/mfsa2008-23/).

### Changes to same-origin policy for file: URIs

The same-origin policy for file: URIs has changed in Firefox 3. This may affect your content; please see [Same-origin policy for file: URIs](/en-US/docs/Same-origin_policy_for_file:_URIs) for details.

## JavaScript changes

Firefox 3 supports [JavaScript 1.8](/en-US/docs/New_in_JavaScript_1.8). One important change that may require updates to your web site or application is that the obsolete and non-standard `Script` object is no longer supported. This is not the `<script>` tag, but a JavaScript object that was never standardized. It is unlikely this is something you ever used anyway, so you're probably fine.

## See also

- [Firefox 3 for developers](/en-US/docs/Mozilla/Firefox/Releases/3)
- [New in JavaScript 1.8](/en-US/docs/New_in_JavaScript_1.8)
- [Updating extensions for Firefox 3](/en-US/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
