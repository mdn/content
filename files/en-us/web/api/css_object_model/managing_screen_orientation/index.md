---
title: Managing screen orientation
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
page-type: guide
---

{{DefaultAPISidebar("Screen Orientation API")}}

The term _screen orientation_ refers to whether a browser [viewport](/en-US/docs/Glossary/Viewport) is in landscape mode (that is, the width of the viewport is greater than its height), or else in portrait mode (the height of the viewport is greater than its width)

CSS provides the [`orientation`](/en-US/docs/Web/CSS/@media/orientation) media feature to allow adjusting layout based on screen orientation.

The [Screen Orientation API](/en-US/docs/Web/API/Screen_Orientation_API) provides a programmatic JavaScript API for working with screen orientation — including the ability to lock the viewport to a specific orientation.

## Adjusting layout based on the orientation

One of the most common cases for orientation changes is when you want to revise the layout of your content based on the orientation of the device. For example, perhaps you want a button bar to stretch along the longest dimension of the device's display. By using a media query, you can do this easily and automatically.

Let's have an example with the following HTML code

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

CSS relies on the orientation media query to handle specific styles based on the screen orientation

```css
/* First let's define some common styles */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0.5em;
  background: white;
}
```

Once we have some common styles we can start defining a special case for the orientation

```css
/* For portrait, we want the toolbar on top */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* For landscape, we want the toolbar stick on the left */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: 0.5em;
  }
}
```

And here's the result

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Portrait</th>
      <th scope="col">Landscape</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 180, 350) }}
        </div>
      </td>
      <td>
        <div>
          {{ EmbedLiveSample('Adjusting_layout_based_on_the_orientation', 350, 180) }}
        </div>
      </td>
    </tr>
  </tbody>
</table>

> **Note:** The orientation media query actually applies based on the orientation of the browser window (or iframe) not the orientation of the device.

## Locking the screen orientation

Some devices (mainly mobile devices) can dynamically change the orientation of the screen based on their own orientation, ensuring that the user will always be able to read what's on the screen. While this behavior is perfectly suited for text content, there is some content that can be negatively affected by such a change. For example, games based on the orientation of the device could be messed up by such a change of the orientation.

The Screen Orientation API is made to prevent or handle such a change.

### Listening to orientation changes

Each time the orientation of the screen changes, the {{domxref("ScreenOrientation.change_event", "change")}} event of the {{domxref("ScreenOrientation")}} interface is triggered:

```js
screen.orientation.addEventListener("change", () => {
  console.log(`The orientation of the screen is: ${screen.orientation}`);
});
```

### Preventing orientation change

Any web application can lock the screen to suits its own needs. The screen is locked using the {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} method and unlocked using the {{domxref("ScreenOrientation.unlock()", "screen.orientation.unlock()")}} method.

The {{domxref("ScreenOrientation.lock()", "screen.orientation.lock()")}} method accepts one of the following values to define the kind of lock to apply: `any`, `natural`. `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait`, and `landscape`:

```js
screen.orientation.lock();
```

It returns a [promise](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves after the lock succeeds.

> **Note:** A screen lock is web application dependent. If application A is locked to `landscape` and application B is locked to `portrait`, switching from application A to B or B to A will not fire a `change` event on `ScreenOrientation` because both applications will keep the orientation they had.
>
> However, locking the orientation can fire an `change` event if the orientation had to be changed to satisfy the lock requirements.

## See also

- {{domxref("Screen.orientation", "screen.orientation")}}
- {{domxref("ScreenOrientation")}}
- {{DOMxRef("ScreenOrientation.change_event", "change")}} event of {{domxref("ScreenOrientation")}}
- [The orientation media query](/en-US/docs/Web/CSS/@media/orientation)
