---
title: Cross-site leaks (XS-leaks)
slug: Web/Security/Attacks/XS-leaks
page-type: guide
---

Cross-site leaks (also called XS-leaks) are a class of attack which exploit the ways in which a target site can leak information to an attacker's site, either through web platform APIs or through {{glossary("side channels")}} such as timing attacks. The information leaked could include, for example:

- Whether the user has visited the target site.
- Whether the user is logged into the target site.
- What the user's ID on the site is.
- What the user has recently searched for on the site.

Unlike other attacks such as [XSS](/en-US/docs/Web/Security/Attacks/XSS) or [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking), cross-site leaks are not a single technique. Instead, they are a term for a whole class of attack which exploit weaknesses in the ways that browsers isolate websites from each other.

In this guide we will not attempt to describe every cross-site leak attack and defense. Instead, we'll start by describing a few example attacks, then outline the common underlying weaknesses that enable them, then describe some general defenses that can work against many known attacks.

## Sample cross-site leaks

In this section we'll describe three different cross-site leaks, to give an idea of how they work.

- [Leaking page existence using error events](#leaking_page_existence_using_error_events): in this attack, an attacker can determine whether particular pages in the target site exist, by attempting to load them as resources and listening for the {{domxref("HTMLElement/error_event", "error")}} and {{domxref("HTMLElement/load_event", "load")}} events. If certain pages are only available to logged-in users, the attacker can determine whether the user is signed into the target site.
- [Frame counting using window references](frame_counting_using_window_references): in this attack, the attacker gets a reference to a {{domxref("Window", "window")}} object hosting a page in the target site, for example as the return value of a call to {{domxref("Window.open()", "window.open()")}}. The attacker can then determine the number of {{htmlelement("iframe")}} elements in the target page, which again might reveal whether the user is signed into the target.
- [Leaking redirects with a CSP](#leaking_redirects_with_a_csp): in this attack, the attacker creates a [Content Security Policy](/en-US/docs/Web/HTTP/Guides/CSP) which effectively blocks redirects, then tries to load a page in the target site. If the page is blocked, the attacker knows that the target redirected the request, and again, this may reveal that the user is signed in.

In the rest of this section we'll describe these attacks in a little more detail, to give you a concrete sense of how they work. Although the three attacks target quite different parts of the web platform, they have a common underlying cause: the extent to which the browser enables websites to connect to and interact with each other by mechanisms such as framing, loading subresources, or opening new windows.

> [!NOTE]
> For a more complete catalog of cross-site leaks, see the [XS-Leaks Wiki](https://xsleaks.dev/) and the [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

### Leaking page existence using error events

In this attack, the attacker tests whether specific pages in the target site can be loaded, by seeing whether attempts to embed them as resources generate an error. If these pages are only available to logged-in users, an attacker could determine whether a user is logged in.

The attack relies on the ability of a website to load a resource from another site, for example by setting the `src` attribute of a {{htmlelement("script")}} element to the URL of the resource:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

This results in an HTTP request to the `https://example.org/` website. If the request includes cookies that the site uses to identify users, and the page requested is only available to logged-in users, then the success or failure of the request reveals whether or not the user is logged in.

If the request fails, then the element fires an {{domxref("HTMLElement.error_event", "error")}} event. If the request succeeds, the element fires a {{domxref("HTMLElement.load_event", "load")}} event. By listening for these events, the attacker can discover whether the user is logged in.

```js
const url = "https://example.org/admin";
const script = document.createElement("script");

script.addEventListener("load", (e) => {
  console.log(`${url} exists`);
});

script.addEventListener("error", (e) => {
  console.log(`${url} does not exist`);
});

script.src = url;
document.head.appendChild(script);
```

An attacker may even be able to discover a user's ID, by iteratively trying to load pages to see if pages like `https://example.org/users/my_username` exist.

### Frame counting using window references

In a frame counting attack, the attacker finds out the number of frames currently loaded in the target page. In turn, that leaks information about the state of the target site, which may enable to attacker to learn, for example, whether the user is currently logged into the site.

If an attacker site gets a reference to a {{domxref("Window")}} object containing the target site, the attacker can count the number of frames in the target site by reading the {{domxref("Window.length", "window.length")}} property.

The attacker can get a `Window` object by calling {{domxref("Window.open()", "window.open()")}}:

```js
const target = window.open("https://example.org");
const frames = target.length;
```

Alternatively, the attacker can embed the target site in an {{htmlelement("iframe")}}, and retrieve the frame's {{domxref("HTMLIFrameElement.contentWindow", "contentWindow")}} property:

```html
<iframe src="https://example.org"></iframe>
```

```js
const target = document.querySelector("iframe").contentWindow;
const frames = target.length;
```

### Leaking redirects with a CSP

In this attack, the attacker creates a page with a [Content Security Policy (CSP)](/en-US/docs/Web/HTTP/Guides/CSP) that will generate a {{domxref("Element.securitypolicyviolation_event", "securitypolicyviolation")}} event if the page tries to embed a document that is not from the target URL.

The attacker's page then creates an {{htmlelement("iframe")}} that embeds the target URL, and listens for the violation event. If the violation event fires, the attacker knows that a redirect took place, and this in turn may reveal something about the user's relationship with the site (for example, that they are signed in, or that they have some other status on the site).

```html
<!DOCTYPE html>
<html>
  <head>
    <meta
      http-equiv="Content-Security-Policy"
      content="frame-src https://example.org" />
  </head>
  <body>
    <script>
      document.addEventListener("securitypolicyviolation", () => {
        console.log("Page was redirected");
      });
      const frame = document.createElement("iframe");
      document.body.appendChild(frame);
      frame.src = "https://example.org";
    </script>
  </body>
</html>
```

Note that this attack works even if the target site disallows embedding using a mechanism such as [`frame-ancestors`](/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).

## Defenses against cross-site leaks

Cross-site leaks exploit mechanisms in the web platform which enables websites to interact with each other. Correspondingly, the defenses against cross-site leaks all involve _isolating_ the target website from potential attackers, by disabling or controlling these cross-site interactions.

Since cross-site leaks can work in many different ways, there isn't a single defense that will work against all of them. However, there are several practices that will work against many of them, and we will summarize them here.

### Fetch metadata

{{glossary("Fetch metadata request header", "Fetch metadata")}} is the term used for a collection of HTTP request headers which provide information about the context of an HTTP request, including:

- {{httpheader("Sec-Fetch-Site")}}: Whether the request is same-origin, same-site, or cross-site.
- {{httpheader("Sec-Fetch-Mode")}}: The request's {{domxref("Request.mode", "mode")}}.
- {{httpheader("Sec-Fetch-User")}}: Whether the request is a user-initiated navigation.
- {{httpheader("Sec-Fetch-Dest")}}: The request's {{domxref("Request.destination", "destination")}}.

Fetch metadata headers are not a defense mechanism on their own, but enable a server to implement a policy which will deny requests that are used in cross-site leaks as well as other attacks such as [Cross-Site Request Forgery (CSRF)](/en-US/docs/Web/Security/Attacks/CSRF) attacks.

For example, the [Leaking page existence using error events](#leaking_page_existence_using_error_events) attack depends on the attacker being able to make cross-site requests to load, as resources, pages that belong to the target:

```js
// Attempt to load a page in the target as a resource
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

A server can use Fetch metadata to deny these requests, as in the following [Express](/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs) code:

```js
function isAllowed(req) {
  // Allow same-origin, same-site, and user-initiated requests
  const secFetchSite = req.headers["sec-fetch-site"];
  if (
    secFetchSite === "same-origin" ||
    secFetchSite === "same-site" ||
    secFetchSite === "none"
  ) {
    return true;
  }

  // Allow cross-site navigations, such as clicking links
  const secFetchMode = req.headers["sec-fetch-mode"];
  if (secFetchMode === "navigate" && req.method === "GET") {
    return true;
  }

  // Deny everything else
  return false;
}

app.get("/admin", (req, res) => {
  if (isAllowed(req)) {
    // Respond with the admin page if the user is admin
    getAdminPage(req, res);
  } else {
    res.status(404).send("Not found.");
  }
});
```

A policy like this is called a _Resource Isolation Policy_. To learn much more about implementing isolation policies with Fetch metadata, see [Protect your resources from web attacks with Fetch Metadata](https://web.dev/articles/fetch-metadata) and [Isolation Policies](https://xsleaks.dev/docs/defenses/isolation-policies/).

### SameSite cookies

The [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookie attribute determines whether or not the cookie will be sent in requests originating from a different site.

The `Lax` value of `SameSite` means that cross-site requests will only include the cookie if the request is a top-level navigation (meaning, essentially, that the value in the browser's address bar changes to the target site) and uses a {{glossary("Safe/HTTP", "safe")}} method (most notably, this excludes {{httpmethod("POST")}} requests).

This can protect against some cross-site leaks. For example, the [Leaking page existence using error events](#leaking_page_existence_using_error_events) attack depends on the attacker making cross-site resource requests that include the user's cookies. Setting `SameSite` to `Lax` on the user's session cookie would prevent this attack, because the cookie would not be included in the attacker's request, so the admin page would never be returned.

As a rule, `SameSite` should be treated as a defense in depth measure, and should be deployed as well as a more explicit isolation policy such as one based on Fetch metadata.

### Framing protection

Many cross-site leaks rely on the attacking site being able to embed the target as an {{htmlelement("iframe")}}. For example, this is one method an attacker can use to get a reference to the target's {{domxref("Window", "window")}}, to enable a [frame-counting](#frame_counting_using_window_references) attack.

This means it is a good practice to prevent a site from being embeddable unless you need to allow embedding, and if you do need to allow embedding, restrict it as far as you can.

There are two relevant tools here:

- The [`frame-ancestors` directive](/en-US/docs/Web/HTTP/CSP#clickjacking_protection) in a [content security policy](/en-US/docs/Web/HTTP/CSP).
- The {{httpheader("X-Frame-Options")}} response header.

The `frame-ancestors` directive is a replacement for `X-Frame-Options`. By setting `X-Frame-Options` as well as `frame-ancestors`, you can prevent embedding in browsers that don't support `frame-ancestors`. As [browser support for `frame-ancestors` is very good](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), this is not a major concern.

If `frame-ancestors` and `X-Frame-Options` are both set, then browsers that support `frame-ancestors` will ignore `X-Frame-Options`.

### Cross-Origin Opener Policy (COOP)

As we saw in the [frame-counting](#frame_counting_using_window_references) attack, another way to get a reference to the target's {{domxref("Window", "window")}} is as the return value of a call to {{domxref("Window.open()", "window.open()")}}:

```js
const target = window.open("https://example.com");
```

The {{httpheader("Cross-Origin-Opener-Policy")}} response header determines whether a document will be opened in the same {{glossary("Browsing context", "browsing context group")}} as the document that opened it.

If your server sends this header and sets it to any value except the default of `"unsafe-none"`, then if a document from a different origin tries to open your page using `window.open()`, your page will be loaded into a different browsing context group. Among other things, this means that the opener will not get a reference to the `window` object for your page, and will therefore not be able to use it in a frame counting attack.

### Defense summary checklist

As we've seen, cross-site leaks include a range of attacks targeting different parts of the web platform: a single defense doesn't work against any of them, and some leaks don't have any defenses yet.

In this guide we've outlined a few defenses that help to isolate your site from potential attackers, and we recommend implementing all of them:

- Use Fetch metadata to implement a resource isolation policy.
- Set the `SameSite` attribute for session cookies to `Strict` if you can, or `Lax` if you have to.
- Use the `frame-ancestors` CSP directive and the `X-Frame-Options` response header to prevent your site being embedded, or to control which sites can embed your site.
- Send the `Cross-Origin-Opener-Policy` response header to prevent other sites from accessing your `window` global object.

## See also

- [XS-Leaks Wiki](https://xsleaks.dev/) (xsleaks.dev)
- [Cross-site leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html) (OWASP)

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Security", "1", "0", "1")}}
</section>
