---
title: Using the Document Picture-in-Picture API
slug: Web/API/Document_Picture-in-Picture_API/Using
page-type: guide
---

{{SeeCompatTable}}{{DefaultAPISidebar("Document Picture-in-Picture API")}}{{securecontext_header}}

This guide provides a walkthrough of typical usage of the {{domxref("Document Picture-in-Picture API", "Document Picture-in-Picture API", "", "nocode")}}.

> [!NOTE]
> You can see the featured demo in action at [Document Picture-in-Picture API Example](https://mdn.github.io/dom-examples/document-picture-in-picture/) (see the full [source code](https://github.com/mdn/dom-examples/tree/main/document-picture-in-picture) also).

## Sample HTML

The following HTML sets up a basic video player.

```html
<div id="container">
  <p class="in-pip-message">
    Video player is currently in the separate Picture-in-Picture window.
  </p>
  <div id="player">
    <video
      src="assets/bigbuckbunny.mp4"
      id="video"
      controls
      width="320"></video>

    <div id="credits">
      <a href="https://peach.blender.org/download/" target="_blank">
        Video by Blender </a
      >;
      <a href="https://peach.blender.org/about/" target="_blank">
        licensed CC-BY 3.0
      </a>
    </div>

    <div id="control-bar">
      <p class="no-picture-in-picture">
        Document Picture-in-Picture API not available
      </p>

      <p></p>
    </div>
  </div>
</div>
```

## Feature detection

To check if the Document Picture-in-Picture API is supported, you can test whether `documentPictureInPicture` is available on `window`:

```js
if ("documentPictureInPicture" in window) {
  document.querySelector(".no-picture-in-picture").remove();

  const togglePipButton = document.createElement("button");
  togglePipButton.textContent = "Toggle Picture-in-Picture";
  togglePipButton.addEventListener("click", togglePictureInPicture, false);

  document.getElementById("control-bar").appendChild(togglePipButton);
}
```

If it is available, we remove the "Document Picture-in-Picture API not available" message and instead add a {{htmlelement("button")}} element to open the video player in a Document Picture-in-Picture window.

## Open a Picture-in-Picture window

The following JavaScript calls {{domxref("DocumentPictureInPicture.requestWindow", "window.documentPictureInPicture.requestWindow()")}} to open a blank Picture-in-Picture window. The returned {{jsxref("Promise")}} fulfills with a Picture-in-Picture {{domxref("Window")}} object. The video player is moved to that window using {{domxref("Element.append()")}}, and we display the message informing the user that it has been moved.

The `width` and `height` options of `requestWindow()` set the Picture-in-Picture window to the desired size. Browsers may clamp the option values if they are too large or too small to fit a user-friendly window size.

```js
async function togglePictureInPicture() {
  // Early return if there's already a Picture-in-Picture window open
  if (window.documentPictureInPicture.window) {
    return;
  }

  // Open a Picture-in-Picture window.
  const pipWindow = await window.documentPictureInPicture.requestWindow({
    width: videoPlayer.clientWidth,
    height: videoPlayer.clientHeight,
  });

  // ...

  // Move the player to the Picture-in-Picture window.
  pipWindow.document.body.append(videoPlayer);

  // Display a message to say it has been moved
  inPipMessage.style.display = "block";
}
```

## Copy style sheets to the Picture-in-Picture window

To copy all CSS style sheets from the originating window, loop through all style sheets explicitly linked into or embedded in the document (via {{domxref("Document.styleSheets")}}) and append them to the Picture-in-Picture window. Note that this is a one-time copy.

```js
// ...

// Copy style sheets over from the initial document
// so that the player looks the same.
[...document.styleSheets].forEach((styleSheet) => {
  try {
    const cssRules = [...styleSheet.cssRules]
      .map((rule) => rule.cssText)
      .join("");
    const style = document.createElement("style");

    style.textContent = cssRules;
    pipWindow.document.head.appendChild(style);
  } catch (e) {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.type = styleSheet.type;
    link.media = styleSheet.media;
    link.href = styleSheet.href;
    pipWindow.document.head.appendChild(link);
  }
});

// ...
```

## Target styles when in Picture-in-Picture mode

The `picture-in-picture` value of the {{cssxref("@media/display-mode", "display-mode")}} [media feature](/en-US/docs/Web/CSS/@media#media_features) allows developers to apply CSS to a document based on whether it is being displayed in Picture-in-Picture mode. Basic usage looks like so:

```css
@media (display-mode: picture-in-picture) {
  body {
    background: red;
  }
}
```

This snippet will turn the background of the document `<body>` red, only when it is displayed in Picture-in-Picture mode.

In [our demo](https://mdn.github.io/dom-examples/document-picture-in-picture/), we combine the `display-mode: picture-in-picture` value with the {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} media feature to create light and dark color schemes that are applied based on the user's color scheme preference, only when the app is being shown in Picture-in-Picture mode.

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

## Handle when the Picture-in-Picture window closes

The code for toggling the Picture-in-Picture window closed again when the button is pressed a second time looks like this:

```js
inPipMessage.style.display = "none";
playerContainer.append(videoPlayer);
window.documentPictureInPicture.window.close();
```

Here we reverse the DOM changes — hiding the message and putting the video player back in the player container in the main app window. We also close the Picture-in-Picture window programmatically using the {{domxref("Window.close()")}} method.

However, you also need to consider the case where the user closes the Picture-in-Picture window by pressing the browser-supplied UI close control on the window itself. You can handle this by detecting when the window closes using the [`pagehide`](/en-US/docs/Web/API/Window/pagehide_event) event:

```js
pipWindow.addEventListener("pagehide", (event) => {
  inPipMessage.style.display = "none";
  playerContainer.append(videoPlayer);
});
```

> [!NOTE]
> The browser-supplied UI close control can be hidden by setting the [`disallowReturnToOpener`](/en-US/docs/Web/API/DocumentPictureInPicture/requestWindow#disallowreturntoopener) hint to `true` in the options object when calling `DocumentPictureInPicture.requestWindow()` to open the Picture-in-Picture window in the first place.

## Listen to when the website enters Picture-in-Picture

Listen to the {{domxref("DocumentPictureInPicture.enter_event", "enter")}} event on the `DocumentPictureInPicture` instance to know when a Picture-in-Picture window is opened.

In our demo, we use the `enter` event to add a mute toggle button to the Picture-in-Picture window:

```js
documentPictureInPicture.addEventListener("enter", (event) => {
  const pipWindow = event.window;
  console.log("Video player has entered the pip window");

  const pipMuteButton = pipWindow.document.createElement("button");
  pipMuteButton.textContent = "Mute";
  pipMuteButton.addEventListener("click", () => {
    const pipVideo = pipWindow.document.querySelector("#video");
    if (!pipVideo.muted) {
      pipVideo.muted = true;
      pipMuteButton.textContent = "Unmute";
    } else {
      pipVideo.muted = false;
      pipMuteButton.textContent = "Mute";
    }
  });

  pipWindow.document.body.append(pipMuteButton);
});
```

> [!NOTE]
> The {{domxref("DocumentPictureInPictureEvent")}} event object contains a `window` property to access the Picture-in-Picture window.

## Access elements and handle events

You can access elements in the Picture-in-Picture window in several different ways:

- The {{domxref("Window")}} instance returned by the {{domxref("DocumentPictureInPicture.requestWindow()")}} method, as seen above.
- Via the `window` property of the {{domxref("DocumentPictureInPictureEvent")}} event object (on the {{domxref("DocumentPictureInPicture.enter_event", "enter")}} event), as seen above.
- Via the {{domxref("DocumentPictureInPicture.window")}} property:

```js
const pipWindow = window.documentPictureInPicture.window;
if (pipWindow) {
  // Mute video playing in the Picture-in-Picture window.
  const pipVideo = pipWindow.document.querySelector("#video");
  pipVideo.muted = true;
}
```

Once you've got a reference to the Picture-in-Picture `window` instance, you can manipulate the DOM (for example creating buttons) and respond to user input events (such as [`click`](/en-US/docs/Web/API/Element/click_event)) as you would do normally in the regular browser window context.
