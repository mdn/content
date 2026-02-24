---
title: NavigationPrecommitController
slug: Web/API/NavigationPrecommitController
page-type: web-api-interface
browser-compat: api.NavigationPrecommitController
---

{{APIRef("Navigation API")}}

The **`NavigationPrecommitController`** interface of the {{domxref("Navigation API", "Navigation API", "", "nocode")}} is passed as an argument to a navigation [precommit handler](/en-US/docs/Web/API/NavigateEvent/intercept#precommithandler) callback.

The callback is used to handle any modifications to the navigation that are required before it is committed (and the destination URL is actually displayed in the browser), such as cancelling or redirecting it somewhere else as required.
This interface provides methods to redirect to a new URL and update history and state, and to dynamically configure post-commit navigation behavior.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("NavigationPrecommitController/addHandler", "addHandler()")}}
  - : Adds a handler callback function that will be run after the navigation has committed, as though it has been added to {{domxref("NavigateEvent.intercept()")}} using the [`options.handler`](/en-US/docs/Web/API/NavigateEvent/intercept#handler) argument.
- {{domxref("NavigationPrecommitController.redirect", "redirect()")}}
  - : Redirects the browser to a specified URL and specifies history behavior and any desired state information.

## Description

When specifying same-document navigation behavior via the {{domxref("NavigateEvent.intercept()")}} method, it is possible to specify navigation precommit actions via the [`precommitHandler`](/en-US/docs/Web/API/NavigateEvent/intercept#precommithandler) callback. Precommit actions are used to modify or cancel in-flight navigation, or to perform work while the navigation is ongoing and before it is committed (see [Basic precommit navigation example](#basic_precommit_navigation_example)).

To specify the redirect behavior, you use the `NavigationPrecommitController` object that is passed into your the `precommitHandler` callback function.
Inside the function body, you can call the `NavigationPrecommitController.redirect()` method, which takes as an argument an object containing the redirect URL, plus any required history behavior and state information.

After a navigation is committed, a post-commit handler callback can be run in order to perform operations such as fetching and rendering content.
If the post-commit navigation code depends on data gathered at runtime in your `precommitHandler`, you can call the {{domxref("NavigationPrecommitController/addHandler", "addHandler()")}} in your precommit handler to dynamically add this post-commit handler callback.
Note that if the post-commit code is independent of the pre-commit code you can instead pass the [`handler`](/en-US/docs/Web/API/NavigateEvent/intercept#handler) callback to the {{domxref("NavigateEvent.intercept()")}} method.

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

### Add handler that is conditional on precommit behavior

This is a small modification of the previous example that also shows a message to the user indicating the reason they have landed on the sign-in page after the redirection.
This uses `addHandler()` in the pre-commit handler to add the post-commit handler that displays the message.

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

        // Use addHandler to trigger logic once the /signin/ page commits
        controller.addHandler(() => {
          showMessage("Please sign in to view that content.");
        });
      },
    });
  }
});
```

One benefit of this approach is that the handler only runs if the redirect is committed.
The handler would be run for all events if it were added by passing [`options.handler`](/en-US/docs/Web/API/NavigateEvent/intercept) to `intercept()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
