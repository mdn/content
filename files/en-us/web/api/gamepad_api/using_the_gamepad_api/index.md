---
title: Using the Gamepad API
slug: Web/API/Gamepad_API/Using_the_Gamepad_API
page-type: guide
browser-compat: api.Gamepad
---

{{DefaultAPISidebar("Gamepad API")}}

HTML provides the necessary components for rich, interactive game development. Technologies like `<canvas>`, WebGL, `<audio>`, and `<video>`, along with JavaScript implementations, support tasks that provide similar, if not the same, features as native code. The Gamepad API allows developers and designers to access and use gamepads and other game controllers.

The [Gamepad API](/en-US/docs/Web/API/Gamepad_API) introduces new events on the {{ domxref("Window") }} object for reading gamepad and controller (hereby referred to as _gamepad_) state. In addition to these events, the API also adds a {{ domxref("Gamepad") }} object, which you can use to query the state of a connected gamepad, and a {{ domxref("navigator.getGamepads()") }} method which you can use to get a list of gamepads known to the page.

## Connecting to a gamepad

When a new gamepad is connected to the computer, the focused page first receives a {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} event. If a gamepad is already connected when the page loaded, the {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} event is dispatched to the focused page when the user presses a button or moves an axis.

> **Note:** In Firefox, gamepads are only exposed to a page when the user interacts with one with the page visible. This helps prevent gamepads from being used for [fingerprinting](/en-US/docs/Glossary/Fingerprinting) the user. Once one gamepad has been interacted with, other gamepads that are connected will automatically be visible.

You can use {{domxref("Window/gamepadconnected_event", "gamepadconnected")}} like this:

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

Each gamepad has a unique ID associated with it, which is available on the event's {{domxref("GamepadEvent.gamepad", "gamepad")}} property.

## Disconnecting a gamepad

When a gamepad is disconnected, and if a page has previously received data for that gamepad (e.g. {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }}), a second event is dispatched to the focused window, {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}}:

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

The gamepad's {{domxref("Gamepad.index", "index")}} property will be unique per-device connected to the system, even if multiple controllers of the same type are used. The `index` property also functions as the index into the {{jsxref("Array")}} returned by {{ domxref("Navigator.getGamepads()") }}.

```js
const gamepads = {};

function gamepadHandler(event, connected) {
  const gamepad = event.gamepad;
  // Note:
  // gamepad === navigator.getGamepads()[gamepad.index]

  if (connected) {
    gamepads[gamepad.index] = gamepad;
  } else {
    delete gamepads[gamepad.index];
  }
}

window.addEventListener(
  "gamepadconnected",
  (e) => {
    gamepadHandler(e, true);
  },
  false,
);
window.addEventListener(
  "gamepaddisconnected",
  (e) => {
    gamepadHandler(e, false);
  },
  false,
);
```

This previous example also demonstrates how the `gamepad` property can be held after the event has completed — a technique we will use for device state querying later.

## Querying the Gamepad object

As you can see, the **gamepad** events discussed above include a `gamepad` property on the event object, which returns a {{ domxref("Gamepad") }} object. We can use this in order to determine which gamepad (i.e., its ID) had caused the event, since multiple gamepads might be connected at once. We can do much more with the {{ domxref("Gamepad") }} object, including holding a reference to it and querying it to find out which buttons and axes are being pressed at any one time. Doing so is often desirable for games or other interactive web pages that need to know the state of a gamepad now vs. the next time an event fires.

Performing such checks tends to involve using the {{ domxref("Gamepad") }} object in conjunction with an animation loop (e.g., {{ domxref("Window.requestAnimationFrame","requestAnimationFrame") }}), where developers want to make decisions for the current frame based on the state of the gamepad or gamepads.

The {{domxref("Navigator.getGamepads()")}} method returns an array of all devices currently visible to the webpage, as {{ domxref("Gamepad") }} objects (the first value is always `null`, so `null` will be returned if there are no gamepads connected.) This can then be used to get the same information. For example, the first code example above you be rewritten as shown below:

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

The {{ domxref("Gamepad") }} object's properties are as follows:

- `id`: A string containing some information about the controller. This is not strictly specified, but in Firefox it will contain three pieces of information separated by dashes (`-`): two 4-digit hexadecimal strings containing the USB vendor and product id of the controller, and the name of the controller as provided by the driver. This information is intended to allow you to find a mapping for the controls on the device as well as display useful feedback to the user.
- `index`: An integer that is unique for each gamepad currently connected to the system. This can be used to distinguish multiple controllers. Note that disconnecting a device and then connecting a new device may reuse the previous index.
- `mapping`: A string indicating whether the browser has remapped the controls on the device to a known layout. Currently there is only one supported known layout — the [standard gamepad](https://w3c.github.io/gamepad/gamepad.html#remapping). If the browser is able to map controls on the device to that layout the `mapping` property will be set to the string `standard`.
- `connected`: A boolean indicating whether the gamepad is still connected to the system. If this is so the value is `True`; if not, it is `False`.
- `buttons`: An array of {{ domxref("GamepadButton") }} objects representing the buttons present on the device. Each {{ domxref("GamepadButton") }} has a `pressed` and a `value` property:

  - The `pressed` property is a boolean indicating whether the button is currently pressed (`true`) or unpressed (`false`).
  - The `value` property is a floating point value used to enable representing analog buttons, such as the triggers on many modern gamepads. The values are normalized to the range 0.0..1.0, with 0.0 representing a button that is not pressed, and 1.0 representing a button that is fully pressed.

- `axes`: An array representing the controls with axes present on the device (e.g. analog thumb sticks). Each entry in the array is a floating point value in the range -1.0 - 1.0, representing the axis position from the lowest value (-1.0) to the highest value (1.0).
- `timestamp`: This returns a {{ domxref("DOMHighResTimeStamp") }} representing the last time the data for this gamepad was updated, allowing developers to determine if the `axes` and `button` data have been updated from the hardware. The value must be relative to the `navigationStart` attribute of the {{ domxref("PerformanceTiming") }} interface. Values are monotonically increasing, meaning that they can be compared to determine the ordering of updates, as newer values will always be greater than or equal to older values. Note that this property is not currently supported in Firefox.

> **Note:** The Gamepad object is available on the {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} event rather than the {{ domxref("Window") }} object itself, for security reasons. Once we have a reference to it, we can query its properties for information about the current state of the gamepad. Behind the scenes, this object will be updated every time the gamepad's state changes.

### Using button information

Let's look at a simple example that displays connection information for one gamepad (it ignores subsequent gamepad connections) and allows you to move a ball around the screen using the four gamepad buttons on the right-hand side of the gamepad. You can [view the demo live](https://chrisdavidmills.github.io/gamepad-buttons/), and [find the source code](https://github.com/chrisdavidmills/gamepad-buttons/tree/master) on GitHub.

To start with, we declare some variables: The `gamepadInfo` paragraph that the connection info is written into, the `ball` that we want to move, the `start` variable that acts as the ID for `requestAnimation Frame`, the `a` and `b` variables that act as position modifiers for moving the ball, and the shorthand variables that will be used for the {{ domxref("Window.requestAnimationFrame", "requestAnimationFrame()") }} and {{ domxref("Window.cancelAnimationFrame", "cancelAnimationFrame()") }} cross browser forks.

```js
const gamepadInfo = document.getElementById("gamepad-info");
const ball = document.getElementById("ball");
let start;
let a = 0;
let b = 0;
```

Next we use the {{domxref("Window/gamepadconnected_event", "gamepadconnected")}} event to check for a gamepad being connected. When one is connected, we grab the gamepad using {{ domxref("Navigator.getGamepads()") }}`[0]`, print information about the gamepad into our gamepad info `div`, and fire the `gameLoop()` function that starts the whole ball movement process up.

```js
window.addEventListener("gamepadconnected", (e) => {
  const gp = navigator.getGamepads()[e.gamepad.index];
  gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;

  gameLoop();
});
```

Now we use the {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}} event to check if the gamepad is disconnected again. If so, we stop the {{DOMxRef("Window.requestAnimationFrame", "requestAnimationFrame()")}} loop (see below) and revert the gamepad information back to what it was originally.

```js
window.addEventListener("gamepaddisconnected", (e) => {
  gamepadInfo.textContent = "Waiting for gamepad.";

  cancelAnimationFrame(start);
});
```

Chrome does things differently here. Instead of constantly storing the gamepad's latest state in a variable it only stores a snapshot, so to do the same thing in Chrome you have to keep polling it and then only use the {{ domxref("Gamepad") }} object in code when it is available. We have done this below using {{ domxref("setInterval()") }}; once the object is available the gamepad info is outputted, the game loop is started, and the interval is cleared using {{ domxref("clearInterval") }}.

```js
let interval;

if (!("ongamepadconnected" in window)) {
  // No gamepad events available, poll instead.
  interval = setInterval(pollGamepads, 500);
}

function pollGamepads() {
  const gamepads = navigator.getGamepads();
  for (const gp of gamepads) {
    gamepadInfo.textContent = `Gamepad connected at index ${gp.index}: ${gp.id}. It has ${gp.buttons.length} buttons and ${gp.axes.length} axes.`;
    gameLoop();
    clearInterval(interval);
  }
}
```

Now on to the main game loop. In each execution of the loop we check if one of four buttons is being pressed; if so, we update the values of the `a` and `b` movement variables appropriately, then update the {{ cssxref("left") }} and {{ cssxref("top") }} properties, changing their values to the current values of `a` and `b` respectively. This has the effect of moving the ball around the screen.

After all this is done, we use our `requestAnimationFrame()` to request the next animation frame, running `gameLoop()` again.

```js
function buttonPressed(b) {
  if (typeof b === "object") {
    return b.pressed;
  }
  return b === 1.0;
}

function gameLoop() {
  const gamepads = navigator.getGamepads();
  if (!gamepads) {
    return;
  }

  const gp = gamepads[0];
  if (buttonPressed(gp.buttons[0])) {
    b--;
  } else if (buttonPressed(gp.buttons[2])) {
    b++;
  }
  if (buttonPressed(gp.buttons[1])) {
    a++;
  } else if (buttonPressed(gp.buttons[3])) {
    a--;
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  start = requestAnimationFrame(gameLoop);
}
```

## Complete example: Displaying gamepad state

This example shows how to use the {{ domxref("Gamepad") }} object, as well as the {{ domxref("Window/gamepadconnected_event", "gamepadconnected") }} and {{domxref("Window/gamepaddisconnected_event", "gamepaddisconnected")}} events in order to display the state of all gamepads connected to the system. You can find a [working demo](https://luser.github.io/gamepadtest/) and look at the [full source code](https://github.com/luser/gamepadtest) on GitHub.

```js
const haveEvents = "ongamepadconnected" in window;
const controllers = {};

function connecthandler(e) {
  addgamepad(e.gamepad);
}

function addgamepad(gamepad) {
  controllers[gamepad.index] = gamepad;

  const d = document.createElement("div");
  d.setAttribute("id", `controller${gamepad.index}`);

  const t = document.createElement("h1");
  t.textContent = `gamepad: ${gamepad.id}`;
  d.appendChild(t);

  const b = document.createElement("ul");
  b.className = "buttons";
  gamepad.buttons.forEach((button, i) => {
    const e = document.createElement("li");
    e.className = "button";
    e.textContent = `Button ${i}`;
    b.appendChild(e);
  });

  d.appendChild(b);

  const a = document.createElement("div");
  a.className = "axes";

  gamepad.axes.forEach((axis, i) => {
    const p = document.createElement("progress");
    p.className = "axis";
    p.setAttribute("max", "2");
    p.setAttribute("value", "1");
    p.textContent = i;
    a.appendChild(p);
  });

  d.appendChild(a);

  // See https://github.com/luser/gamepadtest/blob/master/index.html
  const start = document.getElementById("start");
  if (start) {
    start.style.display = "none";
  }

  document.body.appendChild(d);
  requestAnimationFrame(updateStatus);
}

function disconnecthandler(e) {
  removegamepad(e.gamepad);
}

function removegamepad(gamepad) {
  const d = document.getElementById(`controller${gamepad.index}`);
  document.body.removeChild(d);
  delete controllers[gamepad.index];
}

function updateStatus() {
  if (!haveEvents) {
    scangamepads();
  }

  Object.entries(controllers).forEach(([i, controller]) => {
    const d = document.getElementById(`controller${i}`);
    const buttons = d.getElementsByClassName("button");

    controller.buttons.forEach((button, i) => {
      const b = buttons[i];
      let pressed = button === 1.0;
      let val = button;

      if (typeof button === "object") {
        pressed = val.pressed;
        val = val.value;
      }

      const pct = `${Math.round(val * 100)}%`;
      b.style.backgroundSize = `${pct} ${pct}`;
      b.textContent = pressed ? `Button ${i} [PRESSED]` : `Button ${i}`;
      b.style.color = pressed ? "#42f593" : "#2e2d33";
      b.className = pressed ? "button pressed" : "button";
    });

    const axes = d.getElementsByClassName("axis");
    controller.axes.forEach((axis, i) => {
      const a = axes[i];
      a.textContent = `${i}: ${axis.toFixed(4)}`;
      a.setAttribute("value", axis + 1);
    });
  });

  requestAnimationFrame(updateStatus);
}

function scangamepads() {
  const gamepads = navigator.getGamepads();
  document.querySelector("#noDevices").style.display = gamepads.filter(Boolean)
    .length
    ? "none"
    : "block";
  for (const gamepad of gamepads) {
    if (gamepad) {
      // Can be null if disconnected during the session
      if (gamepad.index in controllers) {
        controllers[gamepad.index] = gamepad;
      } else {
        addgamepad(gamepad);
      }
    }
  }
}

window.addEventListener("gamepadconnected", connecthandler);
window.addEventListener("gamepaddisconnected", disconnecthandler);

if (!haveEvents) {
  setInterval(scangamepads, 500);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
