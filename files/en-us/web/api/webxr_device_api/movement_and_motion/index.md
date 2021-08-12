---
title: 'Movement, orientation, and motion: A WebXR example'
slug: Web/API/WebXR_Device_API/Movement_and_motion
tags:
  - 3D
  - API
  - AR
  - Example
  - Guide
  - Reality
  - Tutorial
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - augmented
  - rendering
---
<p>{{DefaultAPISidebar("WebXR Device API")}}</p>

<p><span class="seoSummary">In this article, we'll make use of information introduced in the previous articles in our <a href="/en-US/docs/Web/API/WebXR_Device_API">WebXR</a> tutorial series to construct an example which animates a rotating cube around which the user can move freely using a VR headset, keyboard, and/or mouse.</span> This will help to solidify your understanding of how the geometry of 3D graphics and VR work, as well as to help ensure you understand the way the functions and data that are used during XR rendering work together.</p>

<strong>Figure: Screenshot of this example in action</strong>
  
<img alt="Screenshot of example showing a textured cube the user can move around" src="xr-sample.png">

<p>The core of this example—the spinning, textured, lighted cube—is taken from our WebGL tutorial series; namely, the penultimate article in the series, covering <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL">lighting in WebGL</a>.</p>

<p>While reading this article and the accompanying source code, it's helpful to keep in mind that the display for a 3D headset is a single screen, divided in half. The left half of the screen is seen only by the left eye, while the right half is only seen by the right eye. Rendering the scene for immersive presentation requires multiple renders of the scene—once from the perspective of each eye.</p>

<p>When rendering the left eye, the {{domxref("XRWebGLLayer")}} has its {{domxref("XRWebGLLayer.viewport", "viewport")}} configured to restrict drawing to the left half of the drawing surface. Contrarily, when rendering the right eye, the viewport is set to restrict drawing to the right half of the surface.</p>

<p>This example demonstrates this by showing the canvas on the screen, even when presenting a scene as an immersive display using an XR device.</p>

<h2 id="Dependencies">Dependencies</h2>

<p>While we will not rely upon any 3D graphics frameworks such as <code><a href="https://threejs.org/">three.js</a></code> or the like for this example, we do use the <code><a href="https://glmatrix.net/">glMatrix</a></code> library for matrix math, which we've used in other examples in the past. This example also imports the <a href="https://github.com/immersive-web/webxr-polyfill/">WebXR polyfill</a> maintained by the Immersive Web Working Group, which is the team responsible for the WebXR API's specification. By importing this polyfill, we allow the example to work on many browsers that don't yet have WebXR implementations in place, and we smooth out any transient deviations from the specification that occur during these still somewhat experimental days of the WebXR specification.</p>

<h2 id="Options">Options</h2>

<p>This example has a number of options you can configure by adjusting the values of constants before you load it in the browser. The code looks like this:</p>

<pre class="brush: js">const xRotationDegreesPerSecond = 25;
const yRotationDegreesPerSecond = 15;
const zRotationDegreesPerSecond = 35;
const enableRotation = true;
const allowMouseRotation = true;
const allowKeyboardMotion = true;
const enableForcePolyfill = false;
//const SESSION_TYPE = "immersive-vr";
const SESSION_TYPE = "inline";
const MOUSE_SPEED = 0.003;
</pre>

<dl>
 <dt><code>xRotationDegreesPerSecond</code></dt>
 <dd>The number of degrees of rotation to apply around the X axis per second.</dd>
 <dt><code>yRotationDegreesPerSecond</code></dt>
 <dd>The number of degrees to rotate around the Y axis each second.</dd>
 <dt><code>zRotationDegreesPerSecond</code></dt>
 <dd>The number of degrees per second to rotate around the Z axis.</dd>
 <dt><code>enableRotation</code></dt>
 <dd>A Boolean indicating whether or not to enable the rotation of the cube at all.</dd>
 <dt><code>allowMouseRotation</code></dt>
 <dd>If <code>true</code>, you can use the mouse to pitch and yaw the view angle.</dd>
 <dt><code>allowKeyboardMotion</code></dt>
 <dd>If <code>true</code>, the W, A, S, and D keys move the viewer up, left, down, and to the right, while the up and down arrow keys move forward and backward. If <code>false</code>, only XR device changes to the view are permitted.</dd>
 <dt><code>enableForcePolyfill</code></dt>
 <dd>If this Boolean is <code>true</code>, the example will attempt to use the WebXR polyfill even if the browser actually has support for WebXR. If <code>false</code>, the polyfill is only used if the browser doesn't implement {{domxref("navigator.xr")}}.</dd>
 <dt><code>SESSION_TYPE</code></dt>
 <dd>The type of XR session to create: <code>inline</code> for an inline session presented in the context of the document and <code>immersive-vr</code> to present the scene to an immersive VR headset.</dd>
 <dt><code>MOUSE_SPEED</code></dt>
 <dd>A multiplier used to scale the inputs from the mouse used for pitch and yaw control.</dd>
 <dt><code>MOVE_DISTANCE</code></dt>
 <dd>The distance to move in response to any of the keys used to move the viewer through the scene.</dd>
</dl>

<div class="notecard note">
<p><strong>Note:</strong> This example always displays what it renders on the screen, even if using <code>immersive-vr</code> mode. This lets you compare any differences in rendering between the two modes, and lets you see output from immersive mode even if you don't have a headset.</p>
</div>

<h2 id="Setup_and_utility_functions">Setup and utility functions</h2>

<p>Next, we declare the variables and constants used throughout the application, starting with those used to store WebGL and WebXR specific information:</p>

<pre class="brush: js">let polyfill = null;
let xrSession = null;
let xrInputSources = null;
let xrReferenceSpace = null;
let xrButton = null;
let gl = null;
let animationFrameRequestID = 0;
let shaderProgram = null;
let programInfo = null;
let buffers = null;
let texture = null;
let mouseYaw = 0;
let mousePitch = 0;
</pre>

<p>This is followed by a set of constants, mostly to contain various vectors and matrices used while rendering the scene.</p>

<pre class="brush: js">const viewerStartPosition = vec3.fromValues(0, 0, -10);
const viewerStartOrientation = vec3.fromValues(0, 0, 1.0);

const cubeOrientation = vec3.create();
const cubeMatrix = mat4.create();
const mouseMatrix = mat4.create();
const inverseOrientation = quat.create();
const RADIANS_PER_DEGREE = Math.PI / 180.0;
</pre>

<p>The first two—<code>viewerStartPosition</code> and <code>viewerStartOrientation</code>—indicate where the viewer will be placed relative to the center of the space, and the direction in which they'll initially be looking. <code>cubeOrientation</code> will store the current orientation of the cube, while <code>cubeMatrix</code> and <code>mouseMatrix</code> are storage for matrices used during the rendering of the scene. <code>inverseOrientation</code> is a quaternion which will be used to represent the rotation to apply to the reference space for the object in the frame being rendered.</p>

<p><code>RADIANS_PER_DEGREEE</code> is the value to multiply an angle in degrees by to convert the angle into radians.</p>

<p>The last four variables declared are storage for references to the {{HTMLElement("div")}} elements into which we'll output the matrices when we want to show them to the user.</p>

<h3 id="Logging_errors">Logging errors</h3>

<p>A function called <code>LogGLError()</code> is implemented to provide an easily customized way to output logging information for errors that occur while executing WebGL functions.</p>

<pre class="brush: js">function LogGLError(where) {
  let err = gl.getError();
  if (err) {
    console.error(`WebGL error returned by ${where}: ${err}`);
  }
}</pre>

<p>This takes as its only input a string, <code>where</code>, which is used to indicate what part of the program generated the error, since similar errors can have in multiple situations.</p>

<h3 id="The_vertex_and_fragment_shaders">The vertex and fragment  shaders</h3>

<p>The vertex and fragment shaders are both exactly the same as those used in the example for our article <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL">Lighting in WebGL</a>. <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL#update_the_shaders">Refer to that</a> if you're interested in the <a href="/en-US/docs/Web/API/WebGL_API/By_example/Hello_GLSL">GLSL</a> source code for the basic shaders used here.</p>

<p>Suffice it to say that the vertex shader computes the position of each vertex given the initial positions of each vertex and the transforms that need to be applied to convert them to simulate the viewer's current position and orientation. The fragment shader returns the color of each vertex, interpolating as needed from the values found in the texture and applying the lighting effects.</p>

<h2 id="Starting_up_and_shutting_down_WebXR">Starting up and shutting down WebXR</h2>

<p>Upon initially loading the script, we install a handler for the {{domxref("Window.load_event", "load")}} event, so that we can perform initialization.</p>

<pre class="brush: js">window.addEventListener("load", onLoad);

function onLoad() {
  xrButton = document.querySelector("#enter-xr");
  xrButton.addEventListener("click", onXRButtonClick);

  projectionMatrixOut = document.querySelector("#projection-matrix div");
  modelMatrixOut = document.querySelector("#model-view-matrix div");
  cameraMatrixOut = document.querySelector("#camera-matrix div");
  mouseMatrixOut = document.querySelector("#mouse-matrix div");

  if (!navigator.xr || enableForcePolyfill) {
    console.log("Using the polyfill");
    polyfill = new WebXRPolyfill();
  }
  setupXRButton();
}</pre>

<p>The <code>load</code> event handler gets a reference to the button that toggles WebXR on and off into <code>xrButton</code>, then adds a handler for {{domxref("Element.click_event", "click")}} events. Then references are obtained to the four {{HTMLElement("div")}} blocks into which we'll output the current contents of each of the key matrices for informational purposes while our scene is running.</p>

<p>Then we look to see if {{domxref("navigator.xr")}} is defined. If it isn't—and/or the <code>enableForcePolyfill</code> configuration constant is set to <code>true</code>—we install the WebXR polyfill by instantiating the <code>WebXRPolyfill</code> class.</p>

<h3 id="Handling_the_startup_and_shutdown_UI">Handling the startup and shutdown UI</h3>

<p>Then we call the <code>setupXRButton()</code> function, which handles configuring the "Enter/Exit WebXR" button to enable or disable it as necessary depending on the availability of WebXR support for the session type specified in the <code>SESSION_TYPE</code> constant.</p>

<pre class="brush: js">function setupXRButton() {
  if (navigator.xr.isSessionSupported) {
    navigator.xr.isSessionSupported(SESSION_TYPE)
    .then((supported) =&gt; {
      xrButton.disabled = !supported;
    });
  } else {
    navigator.xr.supportsSession(SESSION_TYPE)
    .then(() =&gt; {
      xrButton.disabled = false;
    })
    .catch(() =&gt; {
      xrButton.disabled = true;
    });
  }
}</pre>

<p>The label of the button gets adjusted in the code that handles actuallys starting and stopping the WebXR session; we'll see that below.</p>

<p>The WebXR session is toggled on and off by the handler for {{domxref("Element.click_event", "click")}} events on the button, whose label is appropriately set to either "Enter WebXR" or "Exit WebXR". This is done by the <code>onXRButtonClick()</code> event handler.</p>

<pre class="brush: js">async function onXRButtonClick(event) {
  if (!xrSession) {
    navigator.xr.requestSession(SESSION_TYPE)
    .then(sessionStarted);
  } else {
    await xrSession.end();

    if (xrSession) {
      sessionEnded();
    }
  }
}</pre>

<p>This begins by looking at the value of <code>xrSession</code> to see if we already have a {{domxref("XRSession")}} object representing an ongoing WebXR session. If we don't, the click represents a request to enable WebXR mode, so call {{domxref("XRSystem.requestSession", "requestSession()")}} to request a WebXR session of the desired WebXR session type, and then call <code>sessionStarted()</code> to begin running the scene in that WebXR session.</p>

<p>If we already have an ongoing session, on the other hand, we call its {{domxref("XRSession.end", "end()")}} method to stop the session.</p>

<p>The last thing we do in this code is to check to see if <code>xrSession</code> is still non-<code>NULL</code>. If it is, we call <code>sessionEnded()</code>, the handler for the {{domxref("XRSession.end_event", "end")}} event. This code should not be necessary, but there appears to be an issue in which at least some browsers are not correctly firing the <code>end</code> event. By running the event handler directly, we complete the close-out process manually in this situation.</p>

<h3 id="Starting_up_the_WebXR_session">Starting up the WebXR session</h3>

<p>The <code>sessionStarted()</code> function handles actually setting up and starting the session, by setting up event handlers, compiling and installing the GLSL code for the vertex and fragment shaders, and attaching the WebGL layer to the WebXR session before kicking off the rendering loop. It gets called as the handler for the promise returned by {{domxref("XRSystem.requestSession", "requestSession()")}}.</p>

<pre class="brush: js">function sessionStarted(session) {
  let refSpaceType;

  xrSession = session;
  xrButton.innerText = "Exit WebXR";
  xrSession.addEventListener("end", sessionEnded);

  let canvas = document.querySelector("canvas");
  gl = canvas.getContext("webgl", { xrCompatible: true });

  if (allowMouseRotation) {
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("contextmenu", (event) =&gt; { event.preventDefault(); });
  }

  if (allowKeyboardMotion) {
    document.addEventListener("keydown", handleKeyDown);
  }

  shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      vertexNormal: gl.getAttribLocation(shaderProgram, 'aVertexNormal'),
      textureCoord: gl.getAttribLocation(shaderProgram, 'aTextureCoord'),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
      normalMatrix: gl.getUniformLocation(shaderProgram, 'uNormalMatrix'),
      uSampler: gl.getUniformLocation(shaderProgram, 'uSampler')
    },
  };

  buffers = initBuffers(gl);
  texture = loadTexture(gl, 'https://cdn.glitch.com/a9381af1-18a9-495e-ad01-afddfd15d000%2Ffirefox-logo-solid.png?v=1575659351244');

  xrSession.updateRenderState({
    baseLayer: new XRWebGLLayer(xrSession, gl)
  });

  if (SESSION_TYPE == "immersive-vr") {
    refSpaceType = "local";
  } else {
    refSpaceType = "viewer";
  }

  mat4.fromTranslation(cubeMatrix, viewerStartPosition);

  vec3.copy(cubeOrientation, viewerStartOrientation);

  xrSession.requestReferenceSpace(refSpaceType)
  .then((refSpace) =&gt; {
    xrReferenceSpace = refSpace.getOffsetReferenceSpace(
          new XRRigidTransform(viewerStartPosition, cubeOrientation));
    animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
  });

  return xrSession;
}</pre>

<p>After storing the newly-created {{domxref("XRSession")}} object into <code>xrSession</code>, the label of the button is set to "Exit WebXR" to indicate its new function after starting the scene, and a handler is installed for the {{domxref("XRSession.end_event", "end")}} event, so we get notified when the <code>XRSession</code> ends.</p>

<p>Then we get a reference to the {{HTMLElement("canvas")}} found in our HTML—as well as its WebGL rendering context—which will be used as the drawing surface for the scene. The <code>xrCompatible</code> property is requested when calling {{domxref("HTMLCanvasElement.getContext", "getContext()")}} on the element to gain access to the WebGL rendering context for the canvas. This ensures that the context is configured for use as a source for WebXR rendering.</p>

<p>Next, we add event handlers for the {{domxref("Element.mousemove_event", "mousemove")}} and {{domxref("Element.contextmenu_event","contextmenu")}}, but only if the <code>allowMouseRotation</code> constant is <code>true</code>. The <code>mousemove</code> handler will deal with the pitching and yawing of the view based upon the movement of the mouse. Since the "mouselook" feature functions only while the right mouse button is held down, and clicking using the right mouse button triggers the context menu, we add a handler for the <code>contextmenu</code> event to the canvas to prevent the context menu fom appearing when the user initially begins their drag of the mouse.</p>

<p>Next, we compile the shader programs; get references to its variables; initialize the buffers that store the array of each position; the indexes into the position table for each vertex; the vertex normals; and the texture coordinates for each vertex. This is all taken directly from the WebGL sample code, so refer to <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL">Lighting in WebGL</a> and its preceding articles <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL">Creating 3D objects using WebGL</a> and <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL">Using textures in WebGL</a>. Then our <code>loadTexture()</code> function is called to load the texture file.</p>

<p>Now that the rendering structures and data are loaded, we start preparing to run the <code>XRSession</code>. We connect the session to the WebGL layer so it knows what to use as a rendering surface by calling {{domxref("XRSession.updateRenderState()")}} with a <code>baseLayer</code>  set to a new {{domxref("XRWebGLLayer")}}.</p>

<p>We then look at the value of the <code>SESSION_TYPE</code> constant to see whether the WebXR context should be immersive or inline. Immersive sessions use the <code>local</code> reference space, while inline sessions use the <code>viewer</code> reference space.</p>

<p>The <code>glMatrix</code> library's <code>fromTranslation()</code> function for 4x4 matrices is used to convert the viewer's start position as given in the <code>viewerStartPosition</code> constant into a transform matrix, <code>cubeMatrix</code>. The viewer's starting orientation, <code>viewerStartOrientation</code> constant, is copied into the <code>cubeOrientation</code>, which will be used to track the rotation of the cube over time.</p>

<p><code>sessionStarted()</code> finishes up by calling the session's {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} method to get a reference space object describing the space in which the object is being created. When the promise returned resolves to a {{domxref("XRReferenceSpace")}} object, we call its {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace")}} method to obtain a reference space object to represent the object's coordinate system. The  origin of the new space is located at the world coordinates specified by the <code>viewerStartPosition</code> and its orientation set to <code>cubeOrientation</code>. Then we let the session know we're ready to draw a frame by calling its {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} method. We record the returned request ID in case we need to cancel the request later.</p>

<p>Finally, <code>sessionStarted()</code> returns the {{domxref("XRSession")}}  representing the user's WebXR session.</p>

<h3 id="When_the_session_ends">When the session ends</h3>

<p>When the WebXR session ends—either because it's being shut down by the user or by calling {{domxref("XRSession.end()")}}—the {{domxref("XRSession.end_event", "end")}} event is sent; we have set this up to call a function called <code>sessionEnded()</code>.</p>

<pre class="brush: js">function sessionEnded() {
  xrButton.innerText = "Enter WebXR";

  if (animationFrameRequestID) {
    xrSession.cancelAnimationFrame(animationFrameRequestID);
    animationFrameRequestID = 0;
  }
  xrSession = null;
}</pre>

<p>We can also call <code>sessionEnded()</code> directly if we wish to programmatically end the WebXR session. In either case, the label of the button is updated to indicate that a click will start a session, and then, if there is a pending request for an animation frame, we cancel it by calling {{domxref("XRSession.cancelAnimationFrame", "cancelAnimationFrame")}}</p>

<p>Once that's done, the value of <code>xrSession</code> is changed to <code>NULL</code> to indicate that we're done with the session.</p>

<h2 id="Implementing_the_controls">Implementing the controls</h2>

<p>Now let's take a look at the code that handles turning keyboard and mouse events into something usable for controlling an avatar in a WebXR scenario.</p>

<h3 id="Moving_using_the_keyboard">Moving using the keyboard</h3>

<p>In order to allow the user to move through the 3D world even if they don't have a WebXR device with the inputs to perform movement through space, our handler for {{domxref("Element.keydown_event", "keydown")}} events, <code>handleKeyDown()</code>, responds by updating offsets from the object's origin based on which key was pressed.</p>

<pre class="brush: js">function handleKeyDown(event) {
  switch(event.key) {
    case "w":
    case "W":
      verticalDistance -= MOVE_DISTANCE;
      break;
    case "s":
    case "S":
      verticalDistance += MOVE_DISTANCE;
      break;
    case "a":
    case "A":
      transverseDistance += MOVE_DISTANCE;
      break;
    case "d":
    case "D":
      transverseDistance -= MOVE_DISTANCE;
      break;
    case "ArrowUp":
      axialDistance += MOVE_DISTANCE;
      break;
    case "ArrowDown":
      axialDistance -= MOVE_DISTANCE;
      break;
    case "r":
    case "R":
      transverseDistance = axialDistance = verticalDistance = 0;
      mouseYaw = mousePitch = 0;
      break;
    default:
      break;
  }
}</pre>

<p>The keys and their effects are:</p>

<ul>
 <li>The <kbd>W</kbd> key moves the viewer upward by <code>MOVE_DISTANCE</code>.</li>
 <li>The <kbd>S</kbd> key moves the viewer downward by <code>MOVE_DISTANCE</code>.</li>
 <li>The <kbd>A</kbd> key slides the viewer to the left by <code>MOVE_DISTANCE</code>.</li>
 <li>The <kbd>D</kbd> key slides the viewer to the right by <code>MOVE_DISTANCE</code>.</li>
 <li>The up arrow key, <kbd>↑</kbd>, slides the viewer forward by <code>MOVE_DISTANCE</code>.</li>
 <li>The down arrow key, <kbd>↓</kbd>, slides the viewer backward by <code>MOVE_DISTANCE</code>.</li>
 <li>The <kbd>R</kbd> key resets the viewer to their starting position and orientation by resetting the input offsets all to 0.</li>
</ul>

<p>These offsets will be applied by the renderer starting with the next frame drawn.</p>

<h3 id="Pitching_and_yawing_with_the_mouse">Pitching and yawing with the mouse</h3>

<p>We also have a {{domxref("Element.mousemove_event", "mousemove")}} event handler which checks to see if the right mouse button is down, and if so, calls the <code>rotateViewBy()</code> function, defined next, to calculate and store the new pitch (looking up and down) and yaw (looking left and right) values.</p>

<pre class="brush: js">function handlePointerMove(event) {
  if (event.buttons &amp; 2) {
    rotateViewBy(event.movementX, event.movementY);
  }
}</pre>

<p>Calculating the new pitch and yaw values is handled by the function <code>rotateViewBy()</code>:</p>

<pre class="brush: js">function rotateViewBy(dx, dy) {
  mouseYaw -= dx * MOUSE_SPEED;
  mousePitch -= dy * MOUSE_SPEED;

  if (mousePitch &lt; -Math.PI * 0.5) {
    mousePitch = -Math.PI * 0.5;
  } else if (mousePitch &gt; Math.PI * 0.5) {
    mousePitch = Math.PI * 0.5;
  }
}</pre>

<p>Given as input the mouse deltas, <code>dx</code> and <code>dy</code>, the new yaw value is computed by subtracting from the current value of <code>mouseYaw</code> the product of <code>dx</code> and the <code>MOUSE_SPEED</code> scaling constant. You can, then, control how responsive the mouse is by increasing the value of <code>MOUSE_SPEED</code>.</p>

<h2 id="Drawing_a_frame">Drawing a frame</h2>

<p>Our callback for {{domxref("XRSession.requestAnimationFrame()")}} is implemented in the <code>drawFrame()</code> function shown below. Its job is to obtain the viewer's reference space, compute how much movement needs to be applied to any animated objects given the amount of time that's elapsed since the last frame, and then to render each of the views specified by the viewer's {{domxref("XRPose")}}.</p>

<pre class="brush: js">let lastFrameTime = 0;

function drawFrame(time, frame) {
  let session = frame.session;
  let adjustedRefSpace = xrReferenceSpace;
  let pose = null;

  animationFrameRequestID = session.requestAnimationFrame(drawFrame);
  adjustedRefSpace = applyViewerControls(xrReferenceSpace);
  pose = frame.getViewerPose(adjustedRefSpace);

  if (pose) {
    let glLayer = session.renderState.baseLayer;

    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
    LogGLError("bindFrameBuffer");

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);                 // Clear everything
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    LogGLError("glClear");

    const deltaTime = (time - lastFrameTime) * 0.001;  // Convert to seconds
    lastFrameTime = time;

    for (let view of pose.views) {
      let viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);
      LogGLError(`Setting viewport for eye: ${view.eye}`);
      gl.canvas.width = viewport.width * pose.views.length;
      gl.canvas.height = viewport.height;
      renderScene(gl, view, programInfo, buffers, texture, deltaTime);
    }
  }
}</pre>

<p>The first thing we do is call {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} to request that <code>drawFrame()</code> be called again for the next frame to be rendered. Then we pass the object's reference space into the <code>applyViewerControls()</code> function, which returns a revised {{domxref("XRReferenceSpace")}} that transforms the position and orientation of the object to take into account the movement, pitch, and yaw applied by the user using the keyboard and mouse. Remember that, as always, the world's objects are moved and reoriented, not the viewer. The returned reference space makes it easy for us to do just that.</p>

<p>With the new reference space in hand, we get the {{domxref("XRViewerPose")}} representing the viewer's point of view—for both of their eyes. If that's successful, we begin preparing to render by getting the {{domxref("XRWebGLLayer")}} being used by the session and binding its frame buffer to be used as the WebGL frame buffer (so that rendering WebGL draws into the layer and therefore the XR device's display). With WebGL now configured to render to the XR device, we clear the frame to black and are ready to begin rendering.</p>

<p>The time elapsed since the last frame was rendered (in seconds) is computed by subtracting the previous frame's timestamp, <code>lastFrameTime</code>, from the current time as specified by the <code>time</code> parameter and then multiplying by 0.001 to convert milliseconds to seconds. The current time is then saved into <code>lastFrameTime</code>;</p>

<p>The <code>drawFrame()</code> function ends by iterating over every view found in the {{domxref("XRViewerPose")}}, setting up the viewport for the view, and calling <code>renderScene()</code> to render the frame. By setting the viewport for each view, we handle the typical scenario in which the views for each eye are each rendered onto half of the WebGL frame. The XR hardware then handles ensuring that each eye only sees the portion of that image that is intended for that eye.</p>

<div class="notecard note">
<p><strong>Note:</strong> In this example, we're visually presenting the frame both on the XR device <em>and</em> on the screen. To ensure that the on-screen canvas is the right size to allow us to do this, we set its width to be equal to the individual {{domxref("XRView")}} width multiplied by the number of views; the canvas height is always the same as the viewport's height. The two lines of code that adjust the canvas size are not needed in regular WebXR rendering loops.</p>
</div>

<h3 id="Applying_the_user_inputs">Applying the user inputs</h3>

<p>The <code>applyViewerControls()</code> function, which is called by <code>drawFrame()</code> before beginning to render anything, takes the offsets in each of the three directions, the yaw offset, and the pitch offset as recorded by the <code>handleKeyDown()</code> and <code>handlePointerMove()</code> functions in response to the user pressing keys and dragging their mouse with the right mouse button pressed. It takes as input the base reference space for the object, and returns a new reference space that alters the location and orientation of the object on match the result of the inputs.</p>

<pre class="brush: js">function applyViewerControls(refSpace) {
  if (!mouseYaw &amp;&amp; !mousePitch &amp;&amp; !axialDistance &amp;&amp;
      !transverseDistance &amp;&amp; !verticalDistance) {
    return refSpace;
  }

  quat.identity(inverseOrientation);
  quat.rotateX(inverseOrientation, inverseOrientation, -mousePitch);
  quat.rotateY(inverseOrientation, inverseOrientation, -mouseYaw);

  let newTransform = new XRRigidTransform({x: transverseDistance,
                                           y: verticalDistance,
                                           z: axialDistance},
                         {x: inverseOrientation[0], y: inverseOrientation[1],
                          z: inverseOrientation[2], w: inverseOrientation[3]});
  mat4.copy(mouseMatrix, newTransform.matrix);

  return refSpace.getOffsetReferenceSpace(newTransform);
}</pre>

<p>If all the input offsets are zero, we just return the original reference space. Otherwise, we create from the orientation changes in <code>mousePitch</code> and <code>mouseYaw</code> a quaternion specifying the inverse of that orientation, so that applying the <code>inverseOrientation</code> to  the cube will correctly appear to reflect the viewer's movement.</p>

<p>Then it's time to create a new {{domxref("XRRigidTransform")}} object representing the transform that will be used to create the new {{domxref("XRReferenceSpace")}} for the moved and/or re-oriented object. The position is a new vector whose <code>x</code>, <code>y</code>, and <code>z</code> correspond to the offsets moved along each of those axes. The orientation is the <code>inverseOrientation</code> quaternion.</p>

<p>We copy the transform's {{domxref("XRRigidTransform.matrix", "matrix")}} into <code>mouseMatrix</code>, which we'll use later to display the mouse tracking matrix to the user (so this is a step you normally can skip). Finally, we pass the <code>XRRigidTransform</code> into the object's current {{domxref("XRReferenceSpace")}} in order to obtain the reference space that integrates this transform to represent the placement of the cube relative to the user given the user's movements. That new reference space is returned to the caller.</p>

<h3 id="Rendering_the_scene">Rendering the scene</h3>

<p>The <code>renderScene()</code>  function is called to actually render the parts of the world that are visible to the user at the moment. It's called once for each eye, with slightly different positions for each eye, in order to establish the 3D effect needed for XR gear.</p>

<p>Most of this code is typical WebGL rendering code, taken directly from the <code>drawScene()</code> function in the <a href="/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL">Lighting in WebGL</a> article, and it's there that you should look for details on the WebGL rendering parts of this example [<a href="https://github.com/mdn/webgl-examples/blob/gh-pages/tutorial/sample7/webgl-demo.js">view the code on GitHub</a>]. But here it begins with some code specific to this example, so we'll take a deeper look at that part.</p>

<pre class="brush: js">const normalMatrix = mat4.create();
const modelViewMatrix = mat4.create();

function renderScene(gl, view, programInfo, buffers, texture, deltaTime) {
  const xRotationForTime = (xRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
  const yRotationForTime = (yRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;
  const zRotationForTime = (zRotationDegreesPerSecond * RADIANS_PER_DEGREE) * deltaTime;

  gl.enable(gl.DEPTH_TEST);           // Enable depth testing
  gl.depthFunc(gl.LEQUAL);            // Near things obscure far things

  if (enableRotation) {
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                zRotationForTime,     // amount to rotate in radians
                [0, 0, 1]);       // axis to rotate around (Z)
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                yRotationForTime, // amount to rotate in radians
                [0, 1, 0]);       // axis to rotate around (Y)
    mat4.rotate(cubeMatrix,  // destination matrix
                cubeMatrix,  // matrix to rotate
                xRotationForTime, // amount to rotate in radians
                [1, 0, 0]);       // axis to rotate around (X)
  }

  mat4.multiply(modelViewMatrix, view.transform.inverse.matrix, cubeMatrix);
  mat4.invert(normalMatrix, modelViewMatrix);
  mat4.transpose(normalMatrix, normalMatrix);

  displayMatrix(view.projectionMatrix, 4, projectionMatrixOut);
  displayMatrix(modelViewMatrix, 4, modelMatrixOut);
  displayMatrix(view.transform.matrix, 4, cameraMatrixOut);
  displayMatrix(mouseMatrix, 4, mouseMatrixOut);

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexPosition);
  }

  {
    const numComponents = 2;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.textureCoord);
    gl.vertexAttribPointer(
        programInfo.attribLocations.textureCoord,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.textureCoord);
  }

  {
    const numComponents = 3;
    const type = gl.FLOAT;
    const normalize = false;
    const stride = 0;
    const offset = 0;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffers.normal);
    gl.vertexAttribPointer(
        programInfo.attribLocations.vertexNormal,
        numComponents,
        type,
        normalize,
        stride,
        offset);
    gl.enableVertexAttribArray(
        programInfo.attribLocations.vertexNormal);
  }

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffers.indices);
  gl.useProgram(programInfo.program);

  gl.uniformMatrix4fv(
      programInfo.uniformLocations.projectionMatrix,
      false,
      view.projectionMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.modelViewMatrix,
      false,
      modelViewMatrix);
  gl.uniformMatrix4fv(
      programInfo.uniformLocations.normalMatrix,
      false,
      normalMatrix);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, texture);

  gl.uniform1i(programInfo.uniformLocations.uSampler, 0);

  {
    const vertexCount = 36;
    const type = gl.UNSIGNED_SHORT;
    const offset = 0;
    gl.drawElements(gl.TRIANGLES, vertexCount, type, offset);
  }
}</pre>

<p><code>renderScene()</code> begins by calculating how much rotation should occur around each of the three axes in the amount of time that has elapsed since the previous frame was rendered. These values let us adjust the rotation of our animating cube the right amount to ensure that its movement speed stays consistent regardless of variations in the frame rate that may occur due to system load. These values are calculated as the number of radians of rotation to apply given the elapsed time and stored into the constants <code>xRotationForTime</code>, <code>yRotationForTime</code>, and <code>zRotationForTime</code>.</p>

<p>After enabling and configuring depth testing, we check the value of the <code>enableRotation</code> constant to see if rotation of the cube is enabled; if it is, we use glMatrix to rotate the <code>cubeMatrix</code> (representing the cube's current orientation relative to the world space) around the three axes. With the cube's global orientation established, we then multiply that by the inverse of the view's transform matrix to get the final model view matrix—the matrix to apply to the object to both rotate it for its animation purposes, but to also move and reorient it to simulate the viewer's motion through the space.</p>

<p>Then the view's normal matrix is computed by taking the model view matrix, inverting it, and transposing it (swapping its columns and rows).</p>

<p>The last few lines of code added for this example are four calls to <code>displayMatrix()</code>, a function which displays the contents of a matrix for analysis by the user. The remainder of the function is identical or essentially identical to the older WebGL sample from which this code is derived.</p>

<h3 id="Displaying_a_matrix">Displaying a matrix</h3>

<p>For instructive purposes, this example displays the contents of the important matrices used while rendering the scene. The <code>displayMatrix()</code> function is used for this; this function uses MathML to render the matrix, falling back to a more array-like format if MathML isn't supported by the user's browser.</p>

<pre class="brush: js">function displayMatrix(mat, rowLength, target) {
  let outHTML = "";

  if (mat &amp;&amp; rowLength &amp;&amp; rowLength &lt;= mat.length) {
    let numRows = mat.length / rowLength;
    outHTML = "&lt;math xmlns='http://www.w3.org/1998/Math/MathML' display='block'&gt;\n&lt;mrow&gt;\n&lt;mo&gt;[&lt;/mo&gt;\n&lt;mtable&gt;\n";

    for (let y=0; y&lt;numRows; y++) {
      outHTML += "&lt;mtr&gt;\n";
      for (let x=0; x&lt;rowLength; x++) {
        outHTML += `&lt;mtd&gt;&lt;mn&gt;${mat[(x*rowLength) + y].toFixed(2)}&lt;/mn&gt;&lt;/mtd&gt;\n`;
      }
      outHTML += "&lt;/mtr&gt;\n";
    }

    outHTML += "&lt;/mtable&gt;\n&lt;mo&gt;]&lt;/mo&gt;\n&lt;/mrow&gt;\n&lt;/math&gt;";
  }

  target.innerHTML = outHTML;
}</pre>

<p>This replaces the contents of the element specified by <code>target</code> with a newly-created {{MathMLElement("math")}} element which contains the 4x4 matrix. Each entry is displayed with up to two decimal places.</p>

<h3 id="Everything_else">Everything else</h3>

<p>The rest of the code is identical to that found in the earlier examples:</p>

<dl>
 <dt><code>initShaderProgram()</code></dt>
 <dd>Initializes the GLSL shader program, calling <code>loadShader()</code> to load and compile each shader's program, then attaching each one to the WebGL context. Once they're compiled, the program is linked and returned to the caller.</dd>
 <dt><code>loadShader()</code></dt>
 <dd>Creates a shader object and loads the specified source code into it before compiling the code and checking to ensure that the compiler succeeded before returning the newly compiled shader to the caller. If an error occurs, <code>NULL</code> is returned instead.</dd>
 <dt><code>initBuffers()</code></dt>
 <dd>Initializes the buffers that contain data to be passed into WebGL. These buffers include the array of vertex positions, the array of vertex normals, the texture coordinates for each surface of the cube, and the array of vertex indices (specifying which entry in the vertex list represents each corner of the cube). An object containing references to eard</dd>
 <dt><code>loadTexture()</code></dt>
 <dd>Loads the image at a given URL and creates a WebGL texture from it. If the image's dimensions aren't both powers of two (see the <code>isPowerOf2()</code> function), mipmapping is disabled and wrapping is clamped to the edges. This is because optimized rendering of mipmapped textures only works for textures whose dimensions are powers of two in WebGL 1. WebGL 2 supports arbitratily-sized textures for mipmapping.</dd>
 <dt><code>isPowerOf2()</code></dt>
 <dd>Returns <code>true</code> if the specified value is a power of two; otherwise returns <code>false</code>.</dd>
</dl>

<h3 id="Putting_it_all_together">Putting it all together</h3>

<p>When you take all of this code and add in the HTML and the other JavaScript code not included above, you get what you see when you <a href="https://webxr-experiment.glitch.me/">try out this example on Glitch</a>. Remember: as you wander around, if you get lost, just hit the <kbd>R</kbd> key to reset yourself to the beginning.</p>

<p>A tip: if you don't have an XR device, you may be able to get some of the 3D effect if you bring your face very close to the screen, with your nose centered along the border between the left and right eye images in the canvas. By carefully focusing through the screen at the image, and slowly moving forward and backward, you should eventually be able to bring the 3D image into focus. It can take practice, and your nose may literally be touching the screen, depending on how sharp your eyesight is.</p>

<p>There are plenty of things you can do using this example as a starting point. Try adding more objects to the world, or improve the movement controls to move more realistically. Add walls, ceiling, and floor to enclose you in a space instead of having an infinite-seeming universe to get lost in. Add collision testing or hit testing, or the ability to change the texture of each face of the cube.</p>

<p>There are few limitations on what can be done if you set yourself to it.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="http://learnwebgl.brown37.net/#">Learn WebGL</a> (includes some great visualizations of the camera and how it relates to the virtual world)</li>
 <li><a href="https://webglfundamentals.org">WebGL Fundamentals</a></li>
 <li><a href="https://learnopengl.com/">Learn OpenGL</a></li>
</ul>
