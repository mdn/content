---
title: Cross-site leaks (XS-leaks)
slug: Web/Security/Attacks/XS-leaks
page-type: guide
---

Cross-site leaks (also called XS-leaks) are a class of attack which exploit the ways in which a target site can leak information to an attacker's site, either through web platform APIs that are available cross-site, or through {{glossary("side channels")}} such as timing attacks. The information leaked could include, for example:

- Whether the user has visited a particular site.
- Whether the user is logged into a particular site.
- What the user's ID on the site is.
- What the user has recently searched for on the site.

Unlike other attacks such as [XSS](/en-US/docs/Web/Security/Attacks/XSS) or [Clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking), cross-site leaks are not a single technique. Instead, they are a term for a whole class of attack which exploit weaknesses in the ways that browsers isolate websites from each other.

In this guide we will not attempt to describe every cross-site leak attack and defense. Instead, we'll start by describing a few example attacks, then outline the common underlying weaknesses that enable them, then describe some general defenses that can work against many known attacks.

## Sample cross-site leaks

In this section we'll describe three different cross-site leaks attacks, to give an idea of how they work. However, this is not an exhaustive list: for a more complete catalog, see the [XS-Leaks Wiki](https://xsleaks.dev/) and the [OWASP Cross-site Leaks Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/XS_Leaks_Cheat_Sheet.html).

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

Note that this attack works even if the target site disallows embedding using a mechanism such as [`frame-ancestors`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).

## Defenses against cross-site leaks

The three attacks described above target quite different parts of the web platform, but they have a common underlying cause: the extent to which the browser enables websites to connect to and interact with each other by mechanisms such as framing, loading subresources, or opening new windows.

Correspondingly, the defenses against cross-site leaks all involve isolating the target website from potential attackers, by disabling or controlling these cross-site interactions.

Since cross-site leaks can work in many different ways, there isn't a single defense that will work against all of them. However, there are several practices that will work against many of them, and we will summarise them here.

### Fetch metadata

### SameSite cookies

Setting the [`SameSite`](/en-US/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) cookie attribute to `Lax` means that cross-site requests will only include a user's cookies if the request is a top-level navigation (meaning essentially that the value in the browser's address bar changes to the target site).

This protects against many cross-site leaks which depend on a site making a cross-site request that includes cookies. For example, [an attack that uses error events to check for pages](#leaking_page_existence_using_error_events) relies on the attacker making cross-site requests to load the target's pages as subresources:

```js
const script = document.createElement("script");
script.src = "https://example.org/admin";
document.head.appendChild(script);
```

The idea is that, if the user is logged in on the target site as admin, then a request to get the admin page will succeed. However, if the user's cookie has `SameSite=Lax` set, the user's cookies will not be included in the request, and the request will fail.

### Framing protection

Many other cross-site leaks rely on the attacking site being able to embed the target as an {{htmlelement("iframe")}}. For example, this is one method an attacker can use to get a reference to the target's {{domxref("Window", "window")}}, to enable a [frame-counting](#frame_counting_using_window_references) attack.

This means it is a good practice to prevent a site from being embeddable unless you need to allow embedding, and if you do need to allow embedding, restrict it as far as you can.

There are two relevant tools here:

- The [`frame-ancestors` directive](/en-US/docs/Web/HTTP/CSP#clickjacking_protection) in a [content security policy](/en-US/docs/Web/HTTP/CSP)
- The {{httpheader("X-Frame-Options")}} response header.

The `frame-ancestors` directive is a replacement for `X-Frame-Options`. By setting `X-Frame-Options` as well as `frame-ancestors`, you can prevent embedding in browsers that don't support `frame-ancestors`. As [browser support for `frame-ancestors` is very good](/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors#browser_compatibility), this is not a major concern.

If `frame-ancestors` and `X-Frame-Options` are both set, then browsers that support `frame-ancestors` will ignore `X-Frame-Options`.

### Cross-Origin Opener Policy (COOP)

## See also

<section id="Quick_links">
{{ListSubpages("/en-US/docs/Web/Security", "1", "0", "1")}}
</section>
