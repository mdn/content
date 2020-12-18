---
title: Data in WebGL
slug: Web/API/WebGL_API/Data
tags:
  - 3D
  - 3D Graphics
  - Attributes
  - Drawing
  - Graphics
  - Guide
  - Intermediate
  - NeedsContent
  - NeedsExample
  - Uniforms
  - Varyings
  - WebGL
  - WebGL API
---
<div>{{WebGLSidebar}}{{draft}}</div>

<p>Shader programs have access to three kinds of data storage, each of which has a specific use case. Each kind of variable is accessible by one or both types of shader program (depending on the data store type) and possibly by the site's JavaScript code, depending on the specific type of variable.</p>

<h2 id="GLSL_data_types">GLSL data types</h2>

<p>&lt;&lt;document the basic types, vectors, etc; see <a href="https://www.khronos.org/opengl/wiki/Data_Type_(GLSL)">Data Type (GLSL)</a> on the Khronos WebGL wiki&gt;&gt;</p>

<h2 id="GLSL_variables">GLSL variables</h2>

<p>There are three kinds of "variable" or data storage available in GLSL, each of which with its own purpose and use cases: <strong>{{anch("Attributes", "attributes")}}</strong>, <strong>{{anch("Varyings", "varyings")}}</strong>, and <strong>{{anch("Uniforms", "uniforms")}}</strong>.</p>

<h3 id="Attributes">Attributes</h3>

<p><strong>Attributes</strong> are GLSL variables which are only available to the vertex shader (as variables) and the JavaScript code. Attributes are typically used to store color information, texture coordinates, and any other data calculated or retrieved that needs to be shared between the JavaScript code and the vertex shader.</p>


<pre class="brush: js">//init colors
    var vertexColors = [
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
    ];
    var cBuffer = gl.createBuffer();
</pre>


<pre class="brush: js">//continued
//create buffer to store colors and reference it to "vColor" which is in GLSL
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );
</pre>


<pre class="brush: cpp">//glsl
attribute  vec4 vColor;

void main()
{

fColor = vColor;
}

</pre>


<h3 id="Varyings">Varyings</h3>

<p><strong>Varyings</strong> are variables that are declared by the vertex shader and used to pass data from the vertex shader to the fragment shader. This is commonly used to share a vertex's {{interwiki("wikipedia", "Normal_(geometry)", "normal vector")}} after it has been computed by the vertex shader.</p>

<p>&lt;&lt;how to use&gt;&gt;</p>

<h3 id="Uniforms">Uniforms</h3>

<p><strong>Uniforms</strong> are set by the JavaScript code and are available to both the vertex and fragment shaders. They're used to provide values that will be the same for everything drawn in the frame, such as lighting positions and magnitudes, global transformation and perspective details, and so forth.</p>

<p>&lt;&lt;add details&gt;&gt;</p>

<h2 id="Buffers">Buffers</h2>

<p>&lt;&lt;add information&gt;&gt;</p>

<h2 id="Textures">Textures</h2>

<p>&lt;&lt;add information&gt;&gt;</p>
