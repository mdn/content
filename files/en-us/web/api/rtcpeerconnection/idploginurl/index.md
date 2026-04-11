---
title: "RTCPeerConnection: idpLoginUrl property"
short-title: idpLoginUrl
slug: Web/API/RTCPeerConnection/idpLoginUrl
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.idpLoginUrl
---

{{APIRef("WebRTC")}}

The **`idpLoginUrl`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns a string containing the URL the application can open to allow the user to log in to the {{Glossary("Identity provider", "identity provider")}} (IdP). This value is `null` until the IdP indicates that login is needed.

When a call to {{domxref("RTCPeerConnection.getIdentityAssertion()")}} fails because the IdP requires user authentication, the resulting promise is rejected with an {{domxref("RTCError")}} whose {{domxref("RTCError.errorDetail", "errorDetail")}} is `"idp-need-login"`. The browser then sets this property to the login URL provided by the IdP. The application can open this URL (for example, in a popup window or iframe) to allow the user to complete the login process before retrying the identity assertion.

## Value

A string containing the IdP login URL, or `null` if no login is needed.

## Examples

### Handling an IdP login requirement

In this example, the application attempts to gather an identity assertion. If the IdP rejects the attempt because the user is not authenticated, the application opens the login URL provided in `idpLoginUrl`.

```js
const pc = new RTCPeerConnection();
pc.setIdentityProvider("login.example.com");

pc.getIdentityAssertion().catch((error) => {
  if (pc.idpLoginUrl) {
    console.log(`IdP login required at: ${pc.idpLoginUrl}`);
    // Open the login page in a popup window
    const loginWindow = window.open(
      pc.idpLoginUrl,
      "idp-login",
      "width=500,height=600",
    );
  } else {
    console.error("Identity assertion failed:", error);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCPeerConnection.peerIdentity")}}
- {{domxref("RTCPeerConnection.getIdentityAssertion()")}}
- {{domxref("RTCPeerConnection.setIdentityProvider()")}}
- {{domxref("RTCIdentityAssertion")}}
