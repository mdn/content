---
title: Mixed content
slug: Web/Security/Mixed_content
page-type: guide
---

{{QuickLinksWithSubpages("/en-US/docs/Web/Security")}}

When a user visits a page served over {{Glossary("HTTPS")}}, their connection with the web server is encrypted with {{Glossary("TLS")}} and is therefore safeguarded from most sniffers and man-in-the-middle attacks. An HTTPS page that includes content fetched using cleartext HTTP is called a **mixed content** page. Pages like this are only partially encrypted, leaving the unencrypted content accessible to sniffers and man-in-the-middle attackers. That leaves the pages unsafe.

## Types of mixed content

There are two categories for mixed content: **mixed passive/display content** and **mixed active content**. The difference lies in the threat level of the worst case scenario if content is rewritten as part of a man-in-the-middle attack. In the case of passive content, the threat is lower (the page may contain misleading content, or the user's cookies may be stolen). In the case of active content, the threat can lead to phishing, sensitive data disclosure, redirection to malicious sites, etc.

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
- {{domxref("XMLHttpRequest")}} requests
- {{domxref("fetch()")}} requests
- All cases in CSS where a {{cssxref("url", "url()")}} value is used ({{cssxref("@font-face")}}, {{cssxref("cursor")}}, {{cssxref("background-image")}}, and so forth).
- {{HTMLElement("object")}} (`data` attribute)
- {{domxref("Navigator.sendBeacon")}} (`url` attribute)

Other resource types like web fonts and workers may be considered active mixed content, as they are in Chrome.

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

## See also

- [Mixed Content - W3C Editor's Draft](https://w3c.github.io/webappsec/specs/mixedcontent/)
- [How to fix a website with blocked mixed content](/en-US/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
