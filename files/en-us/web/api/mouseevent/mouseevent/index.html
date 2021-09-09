---
title: MouseEvent()
slug: Web/API/MouseEvent/MouseEvent
tags:
- API
- Constructor
- DOM
- MouseEvent
- Reference
- events
browser-compat: api.MouseEvent.MouseEvent
---
<div>{{APIRef("DOM Events")}}</div>

<p>The <strong><code>MouseEvent()</code></strong> constructor creates a new
  {{domxref("MouseEvent")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"> <em>event</em> = new MouseEvent(<em>typeArg</em>, <em>mouseEventInit</em>);</pre>

<h3 id="Values">Values</h3>

<dl>
  <dt><em>typeArg</em></dt>
  <dd>Is a {{domxref("DOMString")}} representing the name of the event.</dd>
  <dt><em>mouseEventInit</em> {{optional_inline}}</dt>
  <dd>Is a <code>MouseEventInit</code> dictionary, having the following fields:

    <ul>
      <li>
        <code>"screenX"</code>, optional <code>long</code>, defaulting to <code>0</code>,
        that is the horizontal position of the mouse event on the user's screen;
        setting this value doesn't move the mouse pointer.
      </li>
      <li>
        <code>"screenY"</code>, optional <code>long</code>, defaulting to <code>0</code>,
        that is the vertical position of the mouse event on the user's screen;
        setting this value doesn't move the mouse pointer.
      </li>
      <li>
        <code>"clientX"</code>, optional <code>long</code>, defaulting to <code>0</code>,
        that is the horizontal position of the mouse event on the client window of user's screen;
        setting this value doesn't move the mouse pointer.
      </li>
      <li>
        <code>"clientY"</code>, optional <code>long</code>, defaulting to <code>0</code>,
        that is the vertical position of the mouse event
        on the client window of the user's screen;
        setting this value doesn't move the mouse pointer.
      </li>
      <li>
        <code>"ctrlKey"</code>, optional boolean value, defaulting to <code>false</code>,
        that indicates if the <kbd>ctrl</kbd> key was simultaneously pressed.
      </li>
      <li>
        <code>"shiftKey"</code>, optional boolean value, defaulting to <code>false</code>,
        that indicates if the <kbd>shift</kbd> key was simultaneously pressed.
      </li>
      <li>
        <code>"altKey"</code>, optional boolean value, defaulting to <code>false</code>,
        that indicates if the <kbd>alt</kbd> key was simultaneously pressed.
      </li>
      <li>
        <code>"metaKey"</code>, optional boolean value, defaulting to <code>false</code>,
        that indicates if the <kbd>meta</kbd> key was simultaneously pressed.
      </li>
      <li>
        <code>"button"</code>, optional <code>short</code>, defaulting to <code>0</code>,
        that describes which button is pressed
        during events related to the press or release of a button:
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>0</code></td>
              <td>Main button pressed (usually the left button) or un-initialized</td>
            </tr>
            <tr>
              <td><code>1</code></td>
              <td>Auxiliary button pressed (usually the middle button)</td>
            </tr>
            <tr>
              <td><code>2</code></td>
              <td>Secondary button pressed (usually the right button)</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <code>"buttons"</code>, optional <code>unsigned short</code>, defaulting to <code>0</code>,
        that describes which buttons are pressed
        when the event is launched:
        <table class="standard-table">
          <thead>
            <tr>
              <th scope="col">Bit-field value</th>
              <th scope="col">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>0</code></td>
              <td>No button pressed</td>
            </tr>
            <tr>
              <td><code>1</code></td>
              <td>Main button pressed (usually the left button)</td>
            </tr>
            <tr>
              <td><code>2</code></td>
              <td>Secondary button pressed (usually the right button)</td>
            </tr>
            <tr>
              <td><code>4</code></td>
              <td>Auxiliary button pressed (usually the middle button)</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <code>"relatedTarget"</code>, optional {{domxref("EventTarget")}}, defaulting to <code>null</code>
        that is the element just left
        (in case of a {{event("mouseenter")}} or {{event("mouseover")}})
        or is entering (in case of a {{event("mouseout")}} or {{event("mouseleave")}}).
      </li>
      <li>
        <code>"region"</code>, optional {{domxref("DOMString")}}, defaulting to <code>null</code>,
        that is the ID of the hit region affected by the event.
        The absence of any affected hit region is represented with the <code>null</code> value.
      </li>
    </ul>

    <p>In some implementations, passing anything other than a number for the screen and
      client fields will throw a <code>TypeError</code>.</p>

    <div class="note">
      <p><strong>Note:</strong> The <code>MouseEventInit</code> dictionary also accepts fields from
          {{domxref("UIEvent.UIEvent", "UIEventInit")}} and from {{domxref("Event.Event",
          "EventInit")}} dictionaries.</p>
    </div>
  </dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Polyfill">Polyfill</h2>

<p>You can polyfill the <code>MouseEvent()</code> constructor functionality in Internet
  Explorer 9 and higher with the following code:</p>

<pre class="brush: js">(function (window) {
  try {
    new MouseEvent('test');
    return false; // No need to polyfill
  } catch (e) {
		// Need to polyfill - fall through
  }

    // Polyfills DOM4 MouseEvent
	var MouseEventPolyfill = function (eventType, params) {
		params = params || { bubbles: false, cancelable: false };
		var mouseEvent = document.createEvent('MouseEvent');
		mouseEvent.initMouseEvent(eventType,
			params.bubbles,
			params.cancelable,
			window,
			0,
			params.screenX || 0,
			params.screenY || 0,
			params.clientX || 0,
			params.clientY || 0,
			params.ctrlKey || false,
			params.altKey || false,
			params.shiftKey || false,
			params.metaKey || false,
			params.button || 0,
			params.relatedTarget || null
		);

		return mouseEvent;
	}

	MouseEventPolyfill.prototype = Event.prototype;

	window.MouseEvent = MouseEventPolyfill;
})(window);
</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("MouseEvent")}}, the interface of the objects it constructs.</li>
</ul>
