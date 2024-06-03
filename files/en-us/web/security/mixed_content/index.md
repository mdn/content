---
title: Mixed content
slug: Web/Security/Mixed_content
page-type: guide
browser-compat: http.mixed_content
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

When a web page is loaded from a secure origin, over a secure channel such as {{Glossary("HTTPS")}}, the connection with the web server is encrypted, and is therefore protected from eavesdropping and modification by man-in-the-middle attacks.
If the securely loaded web page only includes images, scripts, and other resources that are also hosted on secure origins, users can be confident that the whole page is safe from these kinds of attacks.

"Mixed content" refers to securely loaded web pages that use resources to be fetched via HTTP or another insecure protocol.
This kind of web page is potentially unsafe because any resources that are sent insecurely can be viewed, possibly revealing sensitive information, and/or modified by an attacker.
Scripts are particularly dangerous because they can modify any aspect of the page, but all types of resources have some risk.
For example, images can be modified to give the user false or misleading information, or to change the apparent function of a button.

"Mixed downloads" refer to resource downloads initiated from a secure context, but fetched over an insecure connection.
These are share the same risks as mixed content: downloads appears to come secure origin, but could have been modified or viewed en-route.

You should avoid using mixed content and downloads in your websites!
Browsers mitigate the risks of mixed content by requiring that browsers auto-upgrade image, video, and audio mixed content from HTTP to HTTPS, and block insecure requests for all other resource types.
They should also block _mixed downloads_.

## Types of mixed content

Mixed content in a web page is divided into two categories: "upgradable content", which browsers should automatically upgraded from HTTP to HTTPS, and "blockable content", which should be blocked.

This approach ensures that all content in a secure context is either loaded via a secure channel or blocked, which is safer for users than displaying a mix of secure and insecure content, and less disruptive than breaking web pages by blocking absolutely all insecure content.

> **Note:** Earlier versions of the specification divided mixed content into "blockable" and "optionally blockable" categories:
>
> - Blockable content types, also referred to as "active mixed content", were those that could modify other parts of the web page, such as scripts and stylesheets.
>   The potential risk if these files are modified is very high, and browsers were required to block them.
> - Optionally blockable content types, also known as "passive mixed content", were those that could not modify other content in the web page, such as images, videos, and audio files.
>   The potential risk of allowing these files was lower, so browsers could choose to block or display them, or defer the decision to the user.

The set of resource types that comprise "upgradable content" was seeded from the set of "optionally blockable" mixed content.
The expectation is that any new file types will be defined as blockable content, and some upgradable content may become blockable in future.

### Upgradable content

Upgradable content requests are those where an insecure request will automatically be upgraded to a secure request, by modifying the origin scheme from `http` to `https`.
The remote server will either respond with the resource, or a status code indicating that it was not found.

The resource types in this category are those where the blocking the request would risk of breaking significant portions of the web.
These currently correspond to the mixed content types that were previously "optionally blockable", as these are still used on some websites.

The following elements are upgradable (except in CORS requests — see the following section):

- {{HTMLElement("img")}} where origin is set via `src` attribute, including SVG documents (but not when setting resources with `srcset` or `picture`).
- CSS image elements such as: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}} where origin is set with `src` attribute.
- {{HTMLElement("video")}} where origin is set with `src` attribute
- {{HTMLElement("source")}} where video or origin resource is set.

### Blockable content

Blockable content is defined as "all mixed content that is not upgradable".

This includes HTTP requests resulting from the following elements (this list is not exhaustive):

- {{HTMLElement("script")}} where origin is set via `src` attribute
- {{HTMLElement("link")}} where the origin is set in the `href` attribute, and includes CSS stylesheets
- {{HTMLElement("iframe")}} where origin is set via `src` attribute
- {{domxref("fetch()")}} requests
- {{domxref("XMLHttpRequest")}} requests
- All cases in CSS where a {{cssxref("url", "url()")}} value is used ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, and so forth).
- {{HTMLElement("object")}} (`data` attribute)
- {{domxref("Navigator.sendBeacon")}} (`url` attribute)
- {{HTMLElement("img")}} where origin is set via `srcset` or `picture`.
- Web fonts

All CORS-enabled mixed-content requests are blocked, whether or not the request would be upgradable if not using CORS.
For example, `<img crossorigin src=...>` will be blocked, while `<img src=...>` is not.

## Mixed content requests

Mixed content requests are insecure requests for resources from a [secure context](/en-US/docs/Web/Security/Secure_Contexts):

Here are some examples:

- `http://a.com` loads resource from `http://b.com`: `b.com` is not a mixed content request as both resources are loaded insecurely.
- `https://a.com` loads resource from `http://b.com`: `b.com` is a mixed content request, because it is insecure content being loaded into secure content.
- `http://a.com` frames `https://b.com`, which loads `http://c.com`: `a.com` will load `b.com` as both are secure content, but `c.com` is a mixed content request.
- `https://a.com` frames a `data:` URL, which loads `http://b.com`: `b.com` is a mixed content request, because `a.com` (and hence `data:`) were securely loaded.

Mixed context requests can also be made from secure contexts such as plugins or workers, and will be upgraded/blocked in the same way.

Note however that navigation requests from a secure context that target insecure target top-level browsing contexts are not considered mixed content as they create a new context that will either be secure or insecure independent of the origin of the request.

### Loading locally delivered mixed-resources

Local resources are considered to be secure origins, in the same way as HTTPS.
This includes `file:` URLs and content accessed from loopback addresses such as `http://127.0.0.1/` or `http://localhost/`.

You can load these files from secure contexts, and you will still have a secure context.
However if a local file loads insecure resource via `http:`, it would be a mixed content request.

Support for loading local content can be checked in the [Browser compatibility](#browser-compatibility) section.

## Mixed downloads

A mixed download is when a resource is downloaded from a secure context over an insecure connection.
This could happen if a secure origin includes download links for files at an insecure origin.
Less obviously, if you downloaded a resource that was upgradeable mixed content, it will be fetched insecurely from the original HTTP URL.

Mixed downloads are risky for the same reasons as mixed content: the site looks safe with its HTTP URL and secure site icon, but a user can't be sure that the downloaded content isn't being intercepted and/or modified by an attacker.
Your site should not include mixed downloads!

Browsers are expected to block all mixed downloads, but at the time of writing most do not, or prompt the user.
Check the browser compatibility section for up to date information.

## Developer console

The developer console shows warnings when mixed content is upgraded or blocked.
These can be used to debug and fix mixed-content in your websites.

The screenshot below shows the console warning when an image is upgraded on Firefox (Chrome has a similar warning).

![Screen shot of the web console displaying upgrade warning for mixed content image.](mixed_content_console_upgradable.png)

On browser versions that still display "optionally blockable" content, an icon is used to indicate that there is mixed content in the displayed content, along with a console warning.
The screenshot below shows the icon and console warning for Firebox starting supporting upgradable mixed-content.

![Screen shot of the web console displaying display warning for mixed content image.](mixed_content_console_displayed.png)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
