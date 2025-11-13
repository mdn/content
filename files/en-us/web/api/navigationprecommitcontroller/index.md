---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
page-type: web-api-interface
status:
  - experimental
browser-compat: api.NavigationPrecommitController
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

The **`NavigationPrecommitController`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} defines redirect behavior for a navigation [precommit handler](/en-US/docs/Web/API/NavigateEvent/intercept#precommithandler).

{{InheritanceDiagram}}

## Instance methods

- {{domxref("NavigationPrecommitController.redirect", "redirect()")}} {{Experimental_Inline}}
  - : Redirects the browser to a specified URL and specifies history behavior and any desired state information.

## Description

When specifying same-document navigation behavior via the {{domxref("NavigateEvent.intercept()")}} method, it is possible to specify navigation precommit actions via the [`precommitHandler`](/en-US/docs/Web/API/NavigateEvent/intercept#precommithandler) callback. Precommit actions are used to modify or cancel in-flight navigation, or to perform work while the navigation is ongoing and before it is committed (see [Basic precommit navigation example](#basic_precommit_navigation_example)).

To specify the redirect behavior, you pass a `NavigationPrecommitController` object into the `precommitHandler` callback function. Inside the function body, you can call the `NavigationPrecommitController.redirect()` method, which takes as an argument an object containing the redirect URL, plus any required history behavior and state information.

See the [`intercept()` description](/en-US/docs/Web/API/NavigateEvent/intercept#description) for additional context.

## Examples

### Basic precommit navigation example

The following snippet shows how you would redirect the browser to a sign-in page if the user navigates to a restricted page and is not signed in.

```js
navigation.addEventListener("navigate", (event) => {
  const url = new URL(event.destination.url);

  if (url.pathname.startsWith("/restricted/") && !userSignedIn) {
    event.intercept({
      async precommitHandler(controller) {
        controller.redirect("/signin/", {
          state: "signin-redirect",
          history: "push",
        });
      },
    });
  }
});
```

This pattern is simpler than the alternative of canceling the original navigation and starting a new one to the redirect location, because it avoids exposing the intermediate state. For example, only one {{domxref("Navigation.navigatesuccess_event", "navigatesuccess")}} or {{domxref("Navigation.navigateerror_event", "navigateerror")}} event fires, and if the navigation was triggered by a call to {{domxref("Navigation.navigate()")}}, the promise only fulfills once the redirect destination is reached.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
