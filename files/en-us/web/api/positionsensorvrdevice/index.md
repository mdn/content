---
title: PositionSensorVRDevice
slug: Web/API/PositionSensorVRDevice
tags:
  - API
  - Experimental
  - Interface
  - Deprecated
  - PositionSensorVRDevice
  - Reference
  - VR
  - Virtual Reality
  - WebVR
browser-compat: api.PositionSensorVRDevice
---
<p>{{deprecated_header}}{{APIRef("WebVR API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>PositionSensorVRDevice</code></strong> interface of the <a href="/en-US/docs/Web/API/WebVR_API">WebVR API</a> represents VR hardware's position sensor. You can access information such as the current position and orientation of the sensor in relation to the head mounted display through the {{domxref("PositionSensorVRDevice.getState()")}} method.</p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{domxref("PositionSensorVRDevice.getState()")}}</dt>
 <dd>Returns the current state of the position sensor for the current frame (e.g. within the current {{domxref("window.requestAnimationFrame")}} callback) or for the previous frame, contained with a {{domxref("VRPose")}} object. This is the method you'd normally want to use, versus <code>getImmediateState()</code>.</dd>
 <dt>{{domxref("PositionSensorVRDevice.getImmediateState()")}}</dt>
 <dd>Returns the current instantaneous position sensor state. This is intended to only be used rarely, for certain special uses, for example sampling the immediate position of a hand orientation sensor — or at least it will be, in the future.</dd>
 <dt>{{domxref("PositionSensorVRDevice.resetSensor()")}}</dt>
 <dd><dfn>Can be used to reset the sensor if desired, returning the</dfn> position and orientation values to zero.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em>This interface doesn't define any properties of its own, but it does inherit the properties of its parent interface, {{domxref("VRDisplay")}}.</em></p>

<dl>
 <dt>{{domxref("VRDisplay.hardwareUnitId")}} {{readonlyInline}}</dt>
 <dd>Returns the distinct hardware ID for the overall hardware unit that this <code>VRDevice</code> is a part of. All devices that are part of the same physical piece of hardware will have the same <code>hardwareUnitId</code>.</dd>
 <dt>{{domxref("VRDisplay.displayId")}} {{readonlyInline}}</dt>
 <dd>Returns the ID for this specific <code>VRDevice</code>. The ID shouldn’t change across browser restarts, allowing configuration data to be saved based on it.</dd>
 <dt>{{domxref("VRDisplay.displayName")}} {{readonlyInline}}</dt>
 <dd>A human-readable name to identify the <code>VRDevice</code>.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example is taken from our <a href="https://mdn.github.io/webvr-tests/positionsensorvrdevice/">positionsensorvrdevice</a> demo, which uses the WebVR API to update the view of a simple {{domxref("CanvasRenderingContext2D","2D canvas")}} scene on each frame of a {{domxref("window.requestAnimationFrame()","requestAnimationFrame")}} loop.</p>

<pre class="brush: js">function setView() {
  var posState = gPositionSensor.getState();
  if(posState.hasPosition) {
    posPara.textContent = 'Position: x' + roundToTwo(posState.position.x) + " y"
                                + roundToTwo(posState.position.y) + " z"
                                + roundToTwo(posState.position.z);
    xPos = -posState.position.x * WIDTH * 2;
    yPos = posState.position.y * HEIGHT * 2;
    if(-posState.position.z &gt; 0.01) {
      zPos = -posState.position.z;
    } else {
      zPos = 0.01;
    }
  }

  if(posState.hasOrientation) {
    orientPara.textContent = 'Orientation: x' + roundToTwo(posState.orientation.x) + " y"
                                + roundToTwo(posState.orientation.y) + " z"
                                + roundToTwo(posState.orientation.z);
    xOrient = posState.orientation.x * WIDTH;
    yOrient = -posState.orientation.y * HEIGHT * 2;
    zOrient = posState.orientation.z * 180;

  }
}</pre>

<p>Here we are grabbing a {{domxref("VRPose")}} object using {{domxref("PositionSensorVRDevice.getState()")}} and storing it in <code>posState</code>. We then check to make sure that position and orientation info is present in the current frame using {{domxref("VRPose.hasPosition")}} and {{domxref("VRPose.hasOrientation")}} (these return <code>null</code> if, for example the head mounted display is turned off or not pointing at the position sensor, which would cause an error.)</p>

<p>We then output the x, y and z position and orientation values for informational purposes, and use those values to update the <code>xPos</code>, <code>yPos</code>, <code>zPos, </code><code>xOrient</code>, <code>yOrient</code>, and <code>zOrient</code> variables, which are used to update the scene rendering on each frame.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="https://mixedreality.mozilla.org/">https://mixedreality.mozilla.org/</a> — demos, downloads, and other resources from the Mozilla VR team.</li>
</ul>
