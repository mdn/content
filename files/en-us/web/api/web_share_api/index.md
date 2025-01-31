---
title: Web Share API
slug: Web/API/Web_Share_API
page-type: web-api-overview
browser-compat:
  - api.Navigator.share
  - api.Navigator.canShare
spec-urls: https://w3c.github.io/web-share/
---

{{DefaultAPISidebar("Web Share API")}}{{securecontext_header}}

The **Web Share API** provides a mechanism for sharing text, links, files, and other content to an arbitrary _share target_ selected by the user.

> [!NOTE]
> This API is _not available_ in [Web Workers](/en-US/docs/Web/API/Web_Workers_API) (not exposed via {{domxref("WorkerNavigator")}}).

> [!NOTE]
> This API should not be confused with the [Web Share Target API](/en-US/docs/Web/Manifest/Reference/share_target), which allows a website to specify itself as a share target.

## Concepts and usage

The **Web Share API** allows a site to share text, links, files, and other content to user-selected share targets, utilizing the sharing mechanisms of the underlying operating system.
These share targets typically include the system clipboard, email, contacts or messaging applications, and Bluetooth or Wi-Fi channels.

The API has just two methods.
The {{domxref("navigator.canShare()")}} method may be used to first validate whether some data is "shareable", prior to passing it to {{domxref("navigator.share()")}} for sending.

The {{domxref("navigator.share()")}} method invokes the native sharing mechanism of the underlying operating system and passes the specified data.
It requires {{Glossary("transient activation")}}, and hence must be triggered off a UI event like a button click.
Further, the method must specify valid data that is supported for sharing by the native implementation.

The Web Share API is gated by the [web-share](/en-US/docs/Web/HTTP/Headers/Permissions-Policy/web-share) Permissions Policy.
If the policy is supported but has not been granted, both methods will indicate that the data is not shareable.

## Interfaces

### Extensions to other interfaces

- {{domxref("navigator.canShare()")}}
  - : Returns a boolean indicating whether the specified data is shareable.
- {{domxref("navigator.share()")}}
  - : Returns a {{jsxref("Promise")}} that resolves if the passed data was successfully sent to a share target.
    This method must be called on a button click or other user activation (requires {{Glossary("transient activation")}}).

## Example

The code below shows how you can share a link using {{domxref("navigator.share()")}}, triggered off a button click.

```js
const shareData = {
  title: "MDN",
  text: "Learn web development on MDN!",
  url: "https://developer.mozilla.org",
};

const btn = document.querySelector("button");
const resultPara = document.querySelector(".result");

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
    resultPara.textContent = "MDN shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
```

The above example is taken from our [Web share test](https://mdn.github.io/dom-examples/web-share/) ([see the source code](https://github.com/mdn/dom-examples/blob/main/web-share/index.html)). You can also see this as a live example in {{domxref("navigator.share()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Share Target API](/en-US/docs/Web/Manifest/Reference/share_target)
