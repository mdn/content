---
title: Explaining basic 3D theory
slug: Games/Techniques/3D_on_the_web/Basic_theory
tags:
  - 3D
  - Coordinates
  - Textures
  - basics
  - fragment
  - lighting
  - primitives
  - rendering
  - theory
  - vertex
  - vertices
---
<div>{{GamesSidebar}}</div><p>This article explains all of the basic theory that's useful to know when you are getting started working with 3D.</p>

<h2 id="Coordinate_system">Coordinate system</h2>

<p>3D essentially is all about representations of shapes in a 3D space, with a coordinate system used to calculate their position.</p>

<p><img alt="Coordinate system" src="mdn-games-3d-coordinate-system.png"></p>

<p>WebGL uses the right-hand coordinate system — the <code>x</code> axis points to the right, the <code>y</code> axis points up, and the <code>z</code> axis points out of the screen, as seen in the above diagram.</p>

<h2 id="Objects">Objects</h2>

<p>Different types of objects are built using vertices. A <strong>Vertex</strong> is a point in space having its own 3D position in the coordinate system and usually some additional information that defines it. Every vertex is described by these attributes:</p>

<ul>
 <li><strong>Position</strong>: Identifies it in a 3D space (<code>x</code>, <code>y</code>, <code>z</code>).</li>
 <li><strong>Color</strong>: Holds an RGBA value (R, G and B for the red, green, and blue channels, alpha for transparency — all values range from <code>0.0</code> to <code>1.0</code>).</li>
 <li><strong>Normal:</strong> A way to describe the direction the vertex is facing.</li>
 <li><strong>Texture</strong>: A 2D image that the vertex can use to decorate the surface it is part of instead of a simple color.</li>
</ul>

<p>You can build geometry using this information — here is an example of a cube:</p>

<p><img alt="Cube" src="mdn-games-3d-cube.png"></p>

<p>A face of the given shape is a plane between vertices. For example, a cube has 8 different vertices (points in space) and 6 different faces, each constructed out of 4 vertices. A normal defines which way the face is directed in. Also, by connecting the points we're creating the edges of the cube. The geometry is built from a vertex and the face, while material is a texture, which uses a color or an image. If we connect the geometry with the material we will get a mesh.</p>

<h2 id="Rendering_pipeline">Rendering pipeline</h2>

<p>The rendering pipeline is the process by which images are prepared and output onto the screen. The graphics rendering pipeline takes the 3D objects built from <strong>primitives</strong> described using <strong>vertices</strong>, applies processing, calculates the <strong>fragments</strong> and renders them on the 2D screen as <strong>pixels</strong>.</p>

<p><img alt="Rendering pipeline" src="mdn-games-3d-rendering-pipeline.png"></p>

<p>Terminology used in the diagram above is as follows:</p>

<ul>
 <li>A <strong>Primitive</strong>: An input to the pipeline — it's built from vertices and can be a triangle, point or line.</li>
 <li>A <strong>Fragment</strong>: A 3D projection of a pixel, which has all the same attributes as a pixel.</li>
 <li>A <strong>Pixel</strong>: A point on the screen arranged in the 2D grid, which holds an RGBA color.</li>
</ul>

<p>Vertex and fragment processing are programmable — you can <a href="/en-US/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders">write your own shaders</a> that manipulate the output.</p>

<h2 id="Vertex_processing">Vertex processing</h2>

<p>Vertex processing is about combining the information about individual vertices into primitives and setting their coordinates in the 3D space for the viewer to see. It's like taking a photo of the given scenery you have prepared — you have to place the objects first, configure the camera, and then take the shot.</p>

<p><img alt="Vertex processing" src="mdn-games-3d-vertex-processing.png"></p>

<p>There are four stages to this processing: the first one involves arranging the objects in the world, and is called <strong>model transformation</strong>. Then there's <strong>view transformation</strong> which takes care of positioning and setting the orientation of the camera in the 3D space. The camera has three parameters — location, direction, and orientation — which have to be defined for the newly created scene.</p>

<p><img alt="Camera" src="mdn-games-3d-camera.png"></p>

<p><strong>Projection transformation</strong> (also called perspective transformation) then defines the camera settings. It sets up what can be seen by the camera — the configuration includes <em>field of view</em>, <em>aspect ratio</em> and optional <em>near</em> and <em>far planes</em>. read the <a href="/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera">Camera paragraph</a> in the Three.js article to learn about those.</p>

<p><img alt="Camera settings" src="mdn-games-3d-camera-settings.png"></p>

<p>The last step is <strong>viewport transformation</strong>, which involves outputting everything for the next step in the rendering pipeline.</p>

<h2 id="Rasterization">Rasterization</h2>

<p>Rasterization converts primitives (which are connected vertices) to a set of fragments.</p>

<p><img alt="Rasterization" src="mdn-games-3d-rasterization.png"></p>

<p>Those fragments — which are 3D projections of the 2D pixels — are aligned to the pixel grid, so eventually they can be printed out as pixels on a 2D screen display during the output merging stage.</p>

<h2 id="Fragment_processing">Fragment processing</h2>

<p>Fragment processing focuses on textures and lighting — it calculates final colors based on the given parameters.</p>

<p><img alt="Fragment processing" src="mdn-games-3d-fragment-processing.png"></p>

<h3 id="Textures">Textures</h3>

<p>Textures are 2D images used in the 3D space to make the objects look better and more realistic. Textures are combined from single texture elements called texels the same way picture elements are combined from pixels. Applying textures onto objects during the fragment processing stage of the rendering pipeline allows us to adjust it by wrapping and filtering it if necessary.</p>

<p>Texture wrapping allows us to repeat the 2D image around the 3D object. Texture filtering is applied when the original resolution or the texture image is different from the displayed fragment — it will be minified or magnified accordingly.</p>

<h3 id="Lighting">Lighting</h3>

<p>The colors we see on the screen is a result of the light source interacting with the surface colors of the object's material. Light might be absorbed or reflected. The standard <strong>Phong Lighting Model</strong> implemented in WebGL has four basic types of lighting:</p>

<ul>
 <li><strong>Diffuse</strong>: A distant directional light, like the sun.</li>
 <li><strong>Specular</strong>: A point of light, just like a light bulb in a room or a flash light.</li>
 <li><strong>Ambient</strong>: The constant light applied to everything on the scene.</li>
 <li><strong>Emissive</strong>: The light emitted directly by the object.</li>
</ul>

<h2 id="Output_merging">Output merging</h2>

<p>During the output manipulation stage all the fragments of the primitives from the 3D space are transformed into a 2D grid of pixels that are then printed out on the screen display.</p>

<p><img alt="Output merging" src="mdn-games-3d-output-merging.png"></p>

<p>During output merging some processing is also applied to ignore information that is not needed — for example the parameters of objects that are outside of the screen or behind other objects, and thus not visible, are not calculated.</p>

<h2 id="Conclusion">Conclusion</h2>

<p>Now you know the basic theory behind 3D manipulation. If you want to move on to practice and see some demos in action, follow up with the tutorials below:</p>

<ul>
 <li><a href="/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js">Building up a basic demo with Three.js</a></li>
 <li><a href="/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js">Building up a basic demo with Babylon.js</a></li>
 <li><a href="/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas">Building up a basic demo with PlayCanvas</a></li>
 <li><a href="/en-US/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame">Building up a basic demo with A-Frame</a></li>
</ul>

<p>Go ahead and create some cool cutting-edge 3D experiments yourself!</p>
