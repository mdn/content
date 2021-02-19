---
title: Using files from web applications
slug: Web/API/File/Using_files_from_web_applications
tags:
  - Files
  - HTML5
  - Intermediate
  - NeedsUpdate
  - ajax upload
  - upload
---
<div>{{APIRef("File API")}}</div>

<p>Using the File API, which was added to the DOM in HTML5, it's now possible for web content to ask the user to select local files and then read the contents of those files. This selection can be done by either using an HTML <code>{{HTMLElement("input/file", '&lt;input type="file"&gt;')}}</code> element or by drag and drop.</p>

<p>If you want to use the DOM File API from extensions or other browser chrome code, you can; however, note there are some additional features to be aware of. See <a href="/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code">Using the DOM File API in chrome code</a> for details.</p>

<h2 id="Accessing_selected_files">Accessing selected file(s)</h2>

<p>Consider this HTML:</p>

<pre class="brush: html">&lt;input type="file" id="input" multiple&gt;</pre>

<p>The File API makes it possible to access a {{DOMxRef("FileList")}} containing {{DOMxRef("File")}} objects representing the files selected by the user.</p>

<p>The <code>multiple</code> attribute on the <code>input</code> element allows the user to select multiple files.</p>

<p>Accessing the first selected file using a classical DOM selector:</p>

<pre class="brush: js">const selectedFile = document.getElementById('input').files[0];</pre>

<h3 id="Accessing_selected_files_on_a_change_event">Accessing selected file(s) on a change event</h3>

<p>It is also possible (but not mandatory) to access the {{DOMxRef("FileList")}} through the <code>change</code> event. You need to use {{DOMxRef("EventTarget.addEventListener()")}} to add the <code>change</code> event listener, like this:</p>

<pre class="brush: js">const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
}</pre>

<h2 id="Getting_information_about_selected_files">Getting information about selected file(s)</h2>

<p>The {{DOMxRef("FileList")}} object provided by the DOM lists all of the files selected by the user, each specified as a {{DOMxRef("File")}} object. You can determine how many files the user selected by checking the value of the file list's <code>length</code> attribute:</p>

<pre class="brush: js">const numFiles = fileList.length;</pre>

<p>Individual {{DOMxRef("File")}} objects can be retrieved by accessing the list as an array:</p>

<pre class="brush: js">for (let i = 0, numFiles = fileList.length; i &lt; numFiles; i++) {
  const file = fileList[i];
  // ...
}
</pre>

<p>This loop iterates over all the files in the file list.</p>

<p>There are three attributes provided by the {{DOMxRef("File")}} object that contain useful information about the file.</p>

<dl>
 <dt><code>name</code></dt>
 <dd>The file's name as a read-only string. This is just the file name, and does not include any path information.</dd>
 <dt><code>size</code></dt>
 <dd>The size of the file in bytes as a read-only 64-bit integer.</dd>
 <dt><code>type</code></dt>
 <dd>The MIME type of the file as a read-only string or <code>""</code> if the type couldn't be determined.</dd>
</dl>

<h3 id="Example_Showing_files_size">Example: Showing file(s) size</h3>

<p>The following example shows a possible use of the <code>size</code> property:</p>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;File(s) size&lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;form name="uploadForm"&gt;
    &lt;div&gt;
      &lt;input id="uploadInput" type="file" name="myFiles" multiple&gt;
      selected files: &lt;span id="fileNum"&gt;0&lt;/span&gt;;
      total size: &lt;span id="fileSize"&gt;0&lt;/span&gt;
    &lt;/div&gt;
    &lt;div&gt;&lt;input type="submit" value="Send file"&gt;&lt;/div&gt;
  &lt;/form&gt;

  &lt;script&gt;
  function updateSize() {
    let nBytes = 0,
        oFiles = this.files,
        nFiles = oFiles.length;
    for (let nFileId = 0; nFileId &lt; nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    let sOutput = nBytes + " bytes";
    // optional code for multiples approximation
    const aMultiples = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
    for (nMultiple = 0, nApprox = nBytes / 1024; nApprox &gt; 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] + " (" + nBytes + " bytes)";
    }
    // end of optional code
    document.getElementById("fileNum").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
  }

  document.getElementById("uploadInput").addEventListener("change", updateSize, false);
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Using_hidden_file_input_elements_using_the_click_method">Using hidden file input elements using the click() method</h2>

<p>You can hide the admittedly ugly file {{HTMLElement("input")}} element and present your own interface for opening the file picker and displaying which file or files the user has selected. You can do this by styling the input element with <code>display:none</code> and calling the {{DOMxRef("HTMLElement.click","click()")}} method on the {{HTMLElement("input")}} element.</p>

<p>Consider this HTML:</p>

<pre class="brush: html">&lt;input type="file" id="fileElem" multiple accept="image/*" style="display:none"&gt;
&lt;button id="fileSelect"&gt;Select some files&lt;/button&gt;</pre>

<p>The code that handles the <code>click</code> event can look like this:</p>

<pre class="brush: js">const fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
}, false);
</pre>

<p>You can style the new button for opening the file picker as you wish.</p>

<h2 id="Using_a_label_element_to_trigger_a_hidden_file_input_element">Using a label element to trigger a hidden file input element</h2>

<p>To allow opening the file picker without using JavaScript (the click() method), a {{HTMLElement("label")}} element can be used. Note that in this case the input element must not be hidden using <code>display: none</code> (nor <code>visibility: hidden</code>), otherwise the label would not be keyboard-accessible. Use the <a href="https://a11yproject.com/posts/how-to-hide-content/">visually-hidden technique</a> instead.</p>

<p>Consider this HTML:</p>

<pre class="brush: html">&lt;input type="file" id="fileElem" multiple accept="image/*" class="visually-hidden"&gt;
&lt;label for="fileElem"&gt;Select some files&lt;/label&gt;</pre>

<p>and this CSS:</p>

<pre class="brush: css">.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

/* Separate rule for compatibility, :focus-within is required on modern Firefox and Chrome */
input.visually-hidden:focus + label {
  outline: thin dotted;
}
input.visually-hidden:focus-within + label {
  outline: thin dotted;
}
</pre>

<p>There is no need to add JavaScript code to call <code>fileElem.click()</code>. Also in this case you can style the label element as you wish. You need to provide a visual cue for the focus status of the hidden input field on its label, be it an outline as shown above, or background-color or box-shadow. (As of time of writing, Firefox doesn’t show this visual cue for <code>&lt;input type="file"&gt;</code> elements.)</p>

<h2 id="Selecting_files_using_drag_and_drop">Selecting files using drag and drop</h2>

<p>You can also let the user drag and drop files into your web application.</p>

<p>The first step is to establish a drop zone. Exactly what part of your content will accept drops may vary depending on the design of your application, but making an element receive drop events is easy:</p>

<pre class="brush: js">let dropbox;

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);
</pre>

<p>In this example, we're turning the element with the ID <code>dropbox</code> into our drop zone. This is done by adding listeners for the {{event('dragenter')}}, {{event('dragover')}}, and {{event('drop')}} events.</p>

<p>We don't actually need to do anything with the <code>dragenter</code> and <code>dragover</code> events in our case, so these functions are both simple. They just stop propagation of the event and prevent the default action from occurring:</p>

<pre class="brush: js">function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}
</pre>

<p>The real magic happens in the <code>drop()</code> function:</p>

<pre class="brush: js">function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  const dt = e.dataTransfer;
  const files = dt.files;

  handleFiles(files);
}
</pre>

<p>Here, we retrieve the <code>dataTransfer</code> field from the event, pull the file list out of it, and then pass that to <code>handleFiles()</code>. From this point on, handling the files is the same whether the user used the <code>input</code> element or drag and drop.</p>

<h2 id="Example_Showing_thumbnails_of_user-selected_images">Example: Showing thumbnails of user-selected images</h2>

<p>Let's say you're developing the next great photo-sharing website and want to use HTML to display thumbnail previews of images before the user actually uploads them. You can establish your input element or drop zone as discussed previously and have them call a function such as the <code>handleFiles()</code> function below.</p>

<pre class="brush: js">function handleFiles(files) {
  for (let i = 0; i &lt; files.length; i++) {
    const file = files[i];

    if (!file.type.startsWith('image/')){ continue }

    const img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
  }
}
</pre>

<p>Here our loop handling the user-selected files looks at each file's <code>type</code> attribute to see if its MIME type begins with the string "<code>image/</code>"). For each file that is an image, we create a new <code>img</code> element. CSS can be used to establish any pretty borders or shadows and to specify the size of the image, so that doesn't need to be done here.</p>

<p>Each image has the CSS class <code>obj</code> added to it, making it easy to find in the DOM tree. We also add a <code>file</code> attribute to each image specifying the {{DOMxRef("File")}} for the image; this will let us fetch the images for actual upload later. We use {{DOMxRef("Node.appendChild()")}} to add the new thumbnail to the preview area of our document.</p>

<p>Next, we establish the {{DOMxRef("FileReader")}} to handle asynchronously loading the image and attaching it to the <code>img</code> element. After creating the new <code>FileReader</code> object, we set up its <code>onload</code> function and then call <code>readAsDataURL()</code> to start the read operation in the background. When the entire contents of the image file are loaded, they are converted into a <code>data:</code> URL which is passed to the <code>onload</code> callback. Our implementation of this routine sets the <code>img</code> element's <code>src</code> attribute to the loaded image which results in the image appearing in the thumbnail on the user's screen.</p>

<h2 id="Using_object_URLs">Using object URLs</h2>

<p>The DOM {{DOMxRef("URL.createObjectURL()")}} and {{DOMxRef("URL.revokeObjectURL()")}} methods let you create simple URL strings that can be used to reference any data that can be referred to using a DOM {{DOMxRef("File")}} object, including local files on the user's computer.</p>

<p>When you have a {{DOMxRef("File")}} object you'd like to reference by URL from HTML, you can create an object URL for it like this:</p>

<pre class="brush: js">const objectURL = window.URL.createObjectURL(fileObj);</pre>

<p>The object URL is a string identifying the {{DOMxRef("File")}} object. Each time you call {{DOMxRef("URL.createObjectURL()")}}, a unique object URL is created even if you've created an object URL for that file already. Each of these must be released. While they are released automatically when the document is unloaded, if your page uses them dynamically you should release them explicitly by calling {{DOMxRef("URL.revokeObjectURL()")}}:</p>

<pre class="brush: js">URL.revokeObjectURL(objectURL);</pre>

<h2 id="Example_Using_object_URLs_to_display_images">Example: Using object URLs to display images</h2>

<p>This example uses object URLs to display image thumbnails. In addition, it displays other file information including their names and sizes.</p>

<p>The HTML that presents the interface looks like this:</p>

<pre class="brush: html">&lt;input type="file" id="fileElem" multiple accept="image/*" style="display:none"&gt;
&lt;a href="#" id="fileSelect"&gt;Select some files&lt;/a&gt;
&lt;div id="fileList"&gt;
  &lt;p&gt;No files selected!&lt;/p&gt;
&lt;/div&gt;
</pre>

<p>This establishes our file {{HTMLElement("input")}} element as well as a link that invokes the file picker (since we keep the file input hidden to prevent that less-than-attractive user interface from being displayed). This is explained in the section {{anch("Using hidden file input elements using the click() method")}}, as is the method that invokes the file picker.</p>

<p>The <code>handleFiles()</code> method follows:</p>

<pre class="brush: js">const fileSelect = document.getElementById("fileSelect"),
    fileElem = document.getElementById("fileElem"),
    fileList = document.getElementById("fileList");

fileSelect.addEventListener("click", function (e) {
  if (fileElem) {
    fileElem.click();
  }
  e.preventDefault(); // prevent navigation to "#"
}, false);

fileElem.addEventListener("change", handleFiles, false);

function handleFiles() {
  if (!this.files.length) {
    fileList.innerHTML = "&lt;p&gt;No files selected!&lt;/p&gt;";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i &lt; this.files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);

      const img = document.createElement("img");
      img.src = URL.createObjectURL(this.files[i]);
      img.height = 60;
      img.onload = function() {
        URL.revokeObjectURL(this.src);
      }
      li.appendChild(img);
      const info = document.createElement("span");
      info.innerHTML = this.files[i].name + ": " + this.files[i].size + " bytes";
      li.appendChild(info);
    }
  }
}
</pre>

<p>This starts by fetching the URL of the {{HTMLElement("div")}} with the ID <code>fileList</code>. This is the block into which we'll insert our file list, including thumbnails.</p>

<p>If the {{DOMxRef("FileList")}} object passed to <code>handleFiles()</code> is <code>null</code>, we set the inner HTML of the block to display "No files selected!". Otherwise, we start building our file list, as follows:</p>

<ol>
 <li>A new unordered list ({{HTMLElement("ul")}}) element is created.</li>
 <li>The new list element is inserted into the {{HTMLElement("div")}} block by calling its {{DOMxRef("Node.appendChild()")}} method.</li>
 <li>For each {{DOMxRef("File")}} in the {{DOMxRef("FileList")}} represented by <code>files</code>:
  <ol>
   <li>Create a new list item ({{HTMLElement("li")}}) element and insert it into the list.</li>
   <li>Create a new image ({{HTMLElement("img")}}) element.</li>
   <li>Set the image's source to a new object URL representing the file, using {{DOMxRef("URL.createObjectURL()")}} to create the blob URL.</li>
   <li>Set the image's height to 60 pixels.</li>
   <li>Set up the image's load event handler to release the object URL since it's no longer needed once the image has been loaded. This is done by calling the {{DOMxRef("URL.revokeObjectURL()")}} method and passing in the object URL string as specified by <code>img.src</code>.</li>
   <li>Append the new list item to the list.</li>
  </ol>
 </li>
</ol>

<p>Here is a live demo of the code above:</p>

<p>{{EmbedLiveSample('Example_Using_object_URLs_to_display_images', '100%', '300px')}}</p>

<h2 id="Example_Uploading_a_user-selected_file">Example: Uploading a user-selected file</h2>

<p>Another thing you might want to do is let the user upload the selected file or files (such as the images selected using the previous example) to a server. This can be done asynchronously very easily.</p>

<h3 id="Creating_the_upload_tasks">Creating the upload tasks</h3>

<p>Continuing with the code that built the thumbnails in the previous example, recall that every thumbnail image is in the CSS class <code>obj</code> with the corresponding {{DOMxRef("File")}} attached in a <code>file</code> attribute. This allows us to select all of the images the user has chosen for uploading using {{DOMxRef("Document.querySelectorAll()")}}, like this:</p>

<pre class="brush: js">function sendFiles() {
  const imgs = document.querySelectorAll(".obj");

  for (let i = 0; i &lt; imgs.length; i++) {
    new FileUpload(imgs[i], imgs[i].file);
  }
}
</pre>

<p>Line 2 fetches a {{DOMxRef("NodeList")}}, called <code>imgs</code>, of all the elements in the document with the CSS class <code>obj</code>. In our case, these will be all of the image thumbnails. Once we have that list, it's trivial to go through it and create a new <code>FileUpload</code> instance for each. Each of these handles uploading the corresponding file.</p>

<h3 id="Handling_the_upload_process_for_a_file">Handling the upload process for a file</h3>

<p>The <code>FileUpload</code> function accepts two inputs: an image element and a file from which to read the image data.</p>

<pre class="brush: js">function FileUpload(img, file) {
  const reader = new FileReader();
  this.ctrl = createThrobber(img);
  const xhr = new XMLHttpRequest();
  this.xhr = xhr;

  const self = this;
  this.xhr.upload.addEventListener("progress", function(e) {
        if (e.lengthComputable) {
          const percentage = Math.round((e.loaded * 100) / e.total);
          self.ctrl.update(percentage);
        }
      }, false);

  xhr.upload.addEventListener("load", function(e){
          self.ctrl.update(100);
          const canvas = self.ctrl.ctx.canvas;
          canvas.parentNode.removeChild(canvas);
      }, false);
  xhr.open("POST", "http://demos.hacks.mozilla.org/paul/demos/resources/webservices/devnull.php");
  xhr.overrideMimeType('text/plain; charset=x-user-defined-binary');
  reader.onload = function(evt) {
    xhr.send(evt.target.result);
  };
  reader.readAsBinaryString(file);
}
</pre>

<p>The <code>FileUpload()</code> function shown above creates a throbber, which is used to display progress information, and then creates an {{DOMxRef("XMLHttpRequest")}} to handle uploading the data.</p>

<p>Before actually transferring the data, several preparatory steps are taken:</p>

<ol>
 <li>The <code>XMLHttpRequest</code>'s upload <code>progress</code> listener is set to update the throbber with new percentage information so that as the upload progresses the throbber will be updated based on the latest information.</li>
 <li>The <code>XMLHttpRequest</code>'s upload <code>load</code> event handler is set to update the throbber progress information to 100% to ensure the progress indicator actually reaches 100% (in case of granularity quirks during the process). It then removes the throbber since it's no longer needed. This causes the throbber to disappear once the upload is complete.</li>
 <li>The request to upload the image file is opened by calling <code>XMLHttpRequest</code>'s <code>open()</code> method to start generating a POST request.</li>
 <li>The MIME type for the upload is set by calling the <code>XMLHttpRequest</code> function <code>overrideMimeType()</code>. In this case, we're using a generic MIME type; you may or may not need to set the MIME type at all depending on your use case.</li>
 <li>The <code>FileReader</code> object is used to convert the file to a binary string.</li>
 <li>Finally, when the content is loaded the <code>XMLHttpRequest</code> function <code>send()</code> is called to upload the file's content.</li>
</ol>

<h3 id="Asynchronously_handling_the_file_upload_process">Asynchronously handling the file upload process</h3>

<p>This example, which uses PHP on the server side and JavaScript on the client side, demonstrates asynchronous uploading of a file.</p>

<pre class="brush: js">&lt;?php
if (isset($_FILES['myFile'])) {
    // Example:
    move_uploaded_file($_FILES['myFile']['tmp_name'], "uploads/" . $_FILES['myFile']['name']);
    exit;
}
?&gt;&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;dnd binary upload&lt;/title&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"&gt;
    &lt;script type="application/javascript"&gt;
        function sendFile(file) {
            const uri = "/index.php";
            const xhr = new XMLHttpRequest();
            const fd = new FormData();

            xhr.open("POST", uri, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 &amp;&amp; xhr.status == 200) {
                    alert(xhr.responseText); // handle response.
                }
            };
            fd.append('myFile', file);
            // Initiate a multipart/form-data upload
            xhr.send(fd);
        }

        window.onload = function() {
            const dropzone = document.getElementById("dropzone");
            dropzone.ondragover = dropzone.ondragenter = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }

            dropzone.ondrop = function(event) {
                event.stopPropagation();
                event.preventDefault();

                const filesArray = event.dataTransfer.files;
                for (let i=0; i&lt;filesArray.length; i++) {
                    sendFile(filesArray[i]);
                }
            }
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div&gt;
        &lt;div id="dropzone" style="margin:30px; width:500px; height:300px; border:1px dotted grey;"&gt;Drag &amp; drop your file here...&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h2 id="Example_Using_object_URLs_to_display_PDF">Example: Using object URLs to display PDF</h2>

<p>Object URLs can be used for other things than just images! They can be used to display embedded PDF files or any other resources that can be displayed by the browser.</p>

<p>In Firefox, to have the PDF appear embedded in the iframe (rather than proposed as a downloaded file), the preference <code>pdfjs.disabled</code> must be set to <code>false</code> {{non-standard_inline()}}.</p>

<pre class="brush: html">&lt;iframe id="viewer"&gt;
</pre>

<p>And here is the change of the <code>src</code> attribute:</p>

<pre class="brush: js">const obj_url = URL.createObjectURL(blob);
const iframe = document.getElementById('viewer');
iframe.setAttribute('src', obj_url);
URL.revokeObjectURL(obj_url);</pre>

<h2 id="Example_Using_object_URLs_with_other_file_types">Example: Using object URLs with other file types</h2>

<p>You can manipulate files of other formats the same way. Here is how to preview uploaded video:</p>

<pre class="brush: js">const video = document.getElementById('video');
const obj_url = URL.createObjectURL(blob);
video.src = obj_url;
video.play();
URL.revokeObjectURL(obj_url);</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'number-state.html#concept-input-type-file-selected', 'File upload state')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('File API')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{DOMxRef("File")}}</li>
 <li>{{DOMxRef("FileList")}}</li>
 <li>{{DOMxRef("FileReader")}}</li>
 <li>{{DOMxRef("URL")}}</li>
 <li>{{DOMxRef("XMLHttpRequest")}}</li>
 <li><a href="/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest">Using XMLHttpRequest</a></li>
</ul>
