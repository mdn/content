---
title: Mixed content
slug: Web/Security/Mixed_content
page-type: guide
spec_urls: https://www.w3.org/TR/mixed-content/
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

When a web page is loaded from a secure origin, over a secure channel such as {{Glossary("HTTPS")}}, the connection with the web server is encrypted, and is therefore protected from eavesdropping and modification by man-in-the-middle attacks.
A securely loaded web page is expected to only reference resources that are also hosted on secure origins, including images, scripts, stylesheets, and so on. Provided this is the case, users can be confident that the whole page is safe from these kinds of attacks.

In practice, some securely loaded web pages reference resources hosted on insecure origins, indicating that the content should be fetched via HTTP or another insecure protocol. This kind of content is referred to as "mixed content". Mixed content is potentially unsafe because any resources that are sent insecurely can be viewed, possibly revealing sensitive information, and/or modified by an attacker. The level of risk to users depends on the resource, but all types of files have some risk. For example, images can be modified to give the user false or misleading information, or to change the apparent function of a button.

The [Mixed content specification](https://www.w3.org/TR/mixed-content/) mitigates the risk of mixed content by requiring that browsers auto-upgrade image, video and audio mixed content from HTTP to HTTPS, and block insecure requests for all other file types.

This topic provides detail about what insecure content is upgraded, what content is blocked, and other mitigation strategies.

## Historical context

Browser vendors would much prefer to disallow any use of mixed content, as this is much safer for end users.
Unfortunately when mixed content was first recognised as a problem it was impossible to enforce such a restriction without making too much of the internet unusable — it was much harder and more expensive to set up a secure site, and many popular shared resources were only available from HTTP origins.

Earlier versions of the mixed-content specification compromised by dividing mixed-content into "optionally blockable content" and "blockable content".
This allowed most mixed content to still work, while forcing developers to only use secure content for the high risk cases:

- Blockable content types, also referred to as "active mixed content", were those that could modify other parts of the web page, such as scripts and stylesheets.
  The potential risk if these files are modified is very high, and browsers were required to block them.

- Optionally blockable content types, also known as "passive mixed content", were those that could not modify other content in the web page, such as images, videos, and audio files.
  The potential risk of allowing these files was lower, so browsers could choose to block or display them, or defer the decision to the user.

  > **Note:** "Lower risk" is not "no risk".
  > For example, modifying an image or other media type can change information, instructions, or the expected behaviour of a user interface.

The mixed content specification has since been updated (W3C Candidate Recommendation Draft, 23 February 2023) to categorize mixed content as _upgradable_ and _blockable_, where the types that were formerly "passive" are now upgradable and are automatically upgraded to HTTPS requests.
All other content types are blockable, including any new content types, even if they might formerly have been considered "passive".

This approach means that all content loaded into a secure context is loaded via a secure channel, which is safer than displaying insecure content, and less disruptive than blocking it.
Most pages that worked with the previous iteration of the specification will still do so (nowdays most sites can serve the same resource via either HTTP or HTTPS), and this approach creates an expectation that the list of upgradable content types may eventually strink to nothing.

## Types of mixed content

There are two categories of mixed content: **upgradable content** and **blockable content**.

### Upgradable content

Upgradable content requests are those where an insecure request will automatically be upgraded to a secure request, by modifying the origin scheme from `http` to `https`.
The remote server will either respond with the resource or not found.

The types in this category are those where the blocking the request would risk of breaking significant portions of the web.
This corresponds with the mixed content types that were previously "optionally blockable", since those types of content will have been displayed in those browsers where they where not previously blocked. 

The following elements are upgradable except in CORS requests:

- {{HTMLElement("img")}} where origin is set via `src` attribute, including SVG documents (but not when setting resources with `srcset` or `picture`). 
- CSS image elements such as: `background-image`, `border-image`, etc.
- {{HTMLElement("audio")}} where origin is set with `src` attribute.
- {{HTMLElement("video")}} where origin is set with `src` attribute
- {{HTMLElement("source")}} where video or origin resource is set.

All CORS-enabled mixed-content requests are blocked, whether or not they are upgradable.
So, for example, `<img crossorigin ...>` will be blocked.

### Blockable content

Blockable content is defined as "all mixed content that is not upgradable".

This includes HTTP requests resulting from the following elements (not exhaustive!):

- {{HTMLElement("script")}} where origin is set via `src` attribute
- {{HTMLElement("link")}}  where the origin is set in (`href` attribute, and includes CSS stylesheets
- {{HTMLElement("iframe")}} where origin is set via `src` attribute
- {{domxref("fetch()")}} requests
- {{domxref("XMLHttpRequest")}} requests
- All cases in CSS where a {{cssxref("url", "url()")}} value is used ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, and so forth).
- {{HTMLElement("object")}} (`data` attribute)
- {{domxref("Navigator.sendBeacon")}} (`url` attribute)
- {{HTMLElement("img")}} where origin is set via `srcset` or `picture`.
- Web fonts


<!-- up to here -->

Note that mixed-content requests made from other secure contexts such as plugins, or workers are also blockable for the blockable 

NOTE: Navigation requests might target top-level browsing contexts; these are not considered mixed content. See § 4.4 Should fetching request be blocked as mixed content? for details.

NOTE: Note that requests made on behalf of a plugin are blockable. We recognize, however, that user agents aren’t always in a position to mediate these requests. NPAPI plugins, for instance, often have direct network access, and can generally bypass the user agent entirely. We recommend that user agents block these requests when possible, and that plugin vendors implement mixed content checking themselves to mitigate the risks outlined in this document.


## Loading mixed-content resources

Most browsers prevent _mixed active content_ from loading, and some also block _mixed display content_.

### Loading locally delivered mixed-resources

Browsers _may_ allow locally-delivered mixed resources to be loaded. This includes `file:` URLs and content accessed from loopback addresses (e.g. `http://127.0.0.1/`).

- Firefox 55 and later allow loading of mixed content on the loopback address `http://127.0.0.1/` (see [Firefox bug 903966](https://bugzil.la/903966)),
- Firefox 84 and later allow loading of mixed content on `http://localhost/` and `http://*.localhost/` URLs, as these are now mapped to loopback addresses (see [Firefox bug 1220810](https://bugzil.la/1220810)).
- Chrome also allows mixed content on `http://127.0.0.1/` and `http://localhost/`.
- Safari does not allow any mixed content.

### Upgrading mixed-display resources

Browsers may support automatic upgrade of requests for display/media content from HTTP to HTTPS on secure pages (this prevents mixed-content conditions in which some content is loaded securely while other content is insecure).

Firefox supports this functionality as an experimental feature. It can be enabled using the preference `security.mixed_content.upgrade_display_content`).

- If the upgrade fails (because the media's host doesn't support HTTPS), the media is not loaded.
- Console warnings indicate when content has been successfully upgraded.
- For more information see [Experimental features in Firefox > Upgrading mixed display content](/en-US/docs/Mozilla/Firefox/Experimental_features#upgrading_mixed_display_content).

## Warnings in Firefox Web Console

The Firefox Web Console displays a mixed content warning message in the Net pane when a page on your website has this issue. The mixed content resource that was loaded via HTTP will show up in red, along with the text "mixed content", which links to this page.

![Screen shot of the web console displaying a mixed content warning.](mixed_content_-_net_pane.png)

As well as finding these warnings in the Web Console, you could use [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/CSP) to report issues. You could also use an online crawler like [SSL-check](https://www.jitbit.com/sslcheck/) or [Missing Padlock](https://www.missingpadlock.com/) that will check your website recursively and find links to insecure content.

Starting in Firefox 23, mixed active content is blocked by default (and mixed display content can be blocked by setting a preference). To make it easier for web developers to find mixed content errors, all blocked mixed content requests are logged to the Security pane of the Web Console, as seen below:

![A screenshot of blocked mixed content errors in the Security Pane of the Web Console](mixed_content_webconsole.png)

To fix this type of error, all requests to HTTP content should be removed and replaced with content served over HTTPS. Some common examples of mixed content include JavaScript files, stylesheets, images, videos, and other media.

> **Note:** The console will display a message indicating if mixed-display content is being successfully [upgraded from HTTP to HTTPS](#upgrading_mixed-display_resources) (instead of a warning about "Loading mixed (insecure) display content").

## Specifications

{{Specifications}}

## See also

- [Mixed Content - W3C Editor's Draft](https://w3c.github.io/webappsec/specs/mixedcontent/)
- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)















---------------------


### Mixed passive/display content

Mixed passive/display content is content served over HTTP that is included in an HTTPS webpage, but that cannot alter other portions of the webpage. For example, an attacker could replace an image served over HTTP with an inappropriate image or message to the user. The attacker could also infer information about the user's activities by watching which images are served to the user; often images are only served on a specific page within a website. If the attacker observes HTTP requests to certain images, they could determine which webpage the user is visiting.

#### Passive content list

This section lists all types of HTTP requests which are considered passive content:

- {{HTMLElement("img")}} (`src` attribute)
- {{HTMLElement("audio")}} (`src` attribute)
- {{HTMLElement("video")}} (`src` attribute)
- {{HTMLElement("object")}} subresources (when an `<object>` performs HTTP requests)

### Mixed active content

**Mixed active content** is content that has access to all or parts of the Document Object Model of the HTTPS page. This type of mixed content can alter the behavior of the HTTPS page and potentially steal sensitive data from the user. Hence, in addition to the risks described for mixed display content above, mixed active content is vulnerable to a few other attack vectors.

In the mixed active content case, a man-in-the-middle attacker can intercept the request for the HTTP content. The attacker can also rewrite the response to include malicious JavaScript code. Malicious active content can steal the user's credentials, acquire sensitive data about the user, or attempt to install malware on the user's system (by leveraging vulnerabilities in the browser or its plugins, for example).

The risk involved with mixed content does depend on the type of website the user is visiting and how sensitive the data exposed to that site may be. The webpage may have public data visible to the world or private data visible only when authenticated. If the webpage is public and has no sensitive data about the user, using mixed active content still provides the attacker with the opportunity to redirect the user to other HTTP pages and steal HTTP cookies from those sites.

#### Active content examples

This section lists some types of HTTP requests which are considered active content:

- {{HTMLElement("script")}} (`src` attribute)
- {{HTMLElement("link")}} (`href` attribute) (this includes CSS stylesheets)
- {{HTMLElement("iframe")}} (`src` attribute)
- {{domxref("fetch()")}} requests
- {{domxref("XMLHttpRequest")}} requests
- All cases in CSS where a {{cssxref("url", "url()")}} value is used ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, and so forth).
- {{HTMLElement("object")}} (`data` attribute)
- {{domxref("Navigator.sendBeacon")}} (`url` attribute)

Other resource types like web fonts and workers may be considered active mixed content, as they are in Chrome.
