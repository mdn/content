---
title: "Challenge: Fundamental layout comprehension"
short-title: "Challenge: Fundamental layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

This challenge will test your knowledge of the layout features we've covered so far in the module, namely flexbox, floats, grid, and positioning. By the end, you will have developed a webpage layout using all of these fundamental tools.

## Starting point

We are going to get you to solve this challenge in your local development environment; ideally, you'll want to view the example in a full browser window to make sure the layout features are working as expected.

1. Create a new folder on your computer called `layout-challenge`.
2. Inside the folder, create an `index.html` file and paste the following content into it:

   ```html
   <!DOCTYPE html>
   <html lang="en-US">
     <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Layout Task</title>
       <link href="style.css" rel="stylesheet" type="text/css" />
     </head>

     <body>
       <div class="logo">My exciting website!</div>

       <nav>
         <ul>
           <li><a href="">Home</a></li>
           <li><a href="">Blog</a></li>
           <li><a href="">About us</a></li>
           <li><a href="">Our history</a></li>
           <li><a href="">Contacts</a></li>
         </ul>
       </nav>

       <main class="grid">
         <article>
           <h1>An Exciting Blog Post</h1>
           <img src="images/square6.jpg" alt="placeholder" class="feature" />
           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
             justo at erat egestas porttitor vel nec tortor. Mauris in molestie
             ipsum. Vivamus diam elit, ornare ornare nisi vitae, ullamcorper
             pharetra ligula. In vel lacus quis nulla sollicitudin pellentesque.
           </p>

           <p>
             Nunc vitae eleifend odio, eget tincidunt sem. Cras et varius justo.
             Nulla sollicitudin quis urna vitae efficitur. Pellentesque
             hendrerit molestie arcu sit amet lacinia. Vivamus vulputate sed
             purus at eleifend. Phasellus malesuada sem vel libero hendrerit,
             sed finibus massa porta. Vestibulum luctus scelerisque libero, sit
             amet sagittis eros sollicitudin ac. Class aptent taciti sociosqu ad
             litora torquent per conubia nostra, per inceptos himenaeos.
           </p>

           <p>
             Phasellus tincidunt eros iaculis, feugiat mi at, eleifend mauris.
             Quisque porttitor lacus eu massa condimentum, eu tincidunt nisl
             consequat. Nunc egestas lacus dolor, id scelerisque ante tincidunt
             ac. In risus massa, sodales ac enim eu, iaculis eleifend lorem.
           </p>

           <p>
             Maecenas euismod condimentum enim, non rhoncus neque tempor ut.
             Vestibulum eget nisi ornare, vehicula felis id, aliquet nibh. Donec
             in mauris in diam aliquam commodo nec ac nunc. Aliquam nisl risus,
             eleifend a iaculis id, tempor vel tortor. Nam ullamcorper dictum
             tellus id rhoncus. Sed quis nulla in mi aliquam euismod nec eu
             metus.
           </p>

           <p>
             Nam orci nulla, convallis aliquet ante ut, lobortis hendrerit
             risus. Nulla malesuada porta turpis in consequat. Duis suscipit
             nulla a mauris pellentesque vehicula. Fusce euismod, mi malesuada
             venenatis vestibulum, metus erat faucibus dui, vel rutrum turpis
             nibh ut diam.
           </p>

           <p>
             Nam ornare et mauris eget tincidunt. Nam ornare et mauris eget
             tincidunt. Donec et ipsum a orci elementum commodo et ut ex.
             Vivamus porttitor sem in purus maximus, eu imperdiet felis
             lobortis.
           </p>

           <p>
             Pellentesque ullamcorper dolor ut ullamcorper convallis. Duis a
             orci aliquet, pretium neque ut, auctor purus. Proin viverra
             tincidunt nisi id fringilla. Maecenas interdum risus in ultricies
             finibus. Vestibulum volutpat tincidunt libero, a feugiat leo
             suscipit in. Sed eget lacus rutrum, semper ligula a, vestibulum
             ipsum. Mauris in odio fringilla, accumsan eros blandit, mattis
             odio. Ut viverra mollis augue, vitae ullamcorper velit hendrerit
             eu. Curabitur mi lacus, condimentum in auctor sed, ornare sed leo.
           </p>
         </article>

         <aside>
           <h2>Photography</h2>
           <ul class="photos">
             <li><img src="images/square1.jpg" alt="placeholder" /></li>
             <li><img src="images/square2.jpg" alt="placeholder" /></li>
             <li><img src="images/square3.jpg" alt="placeholder" /></li>
             <li><img src="images/square4.jpg" alt="placeholder" /></li>
             <li><img src="images/square5.jpg" alt="placeholder" /></li>
           </ul>
         </aside>
       </main>
     </body>
   </html>
   ```

3. Inside the folder, create a `style.css` file and paste the following content into it:

   ```css
   * {
     box-sizing: border-box;
   }

   body {
     background-color: white;
     color: #333333;
     margin: 0;
     font: 1.2em / 1.6 sans-serif;
   }

   img {
     max-width: 100%;
     display: block;
     border: 1px solid black;
   }

   .logo {
     font-size: 200%;
     padding: 50px 20px;
     margin: 0 auto;
     max-width: 980px;
   }

   .grid {
     margin: 0 auto;
     max-width: 980px;
   }

   nav {
     background-color: black;
     padding: 0.5em;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   nav a {
     color: white;
     text-decoration: none;
     padding: 0.5em 1em;
   }

   .photos {
     list-style: none;
     margin: 0;
     padding: 0;
   }

   .feature {
     width: 200px;
   }
   ```

4. Inside the folder, create a subfolder called `images` and save the following image files inside it:
   - [`square1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square1.jpg)
   - [`square2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square2.jpg)
   - [`square3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square3.jpg)
   - [`square4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square4.jpg)
   - [`square5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square5.jpg)
   - [`square6.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/balloons/square6.jpg)
5. Save your files and load `index.html` in a browser, ready to test. The starting point of the page has basic styling but no layout, and should look something like this:

   ![Starting point of the layout task. The elements are not laid out neatly. There is a website title, above a black nav bar with 5 links flush left, followed by the blog post title and post content. Between the blog title and blog content there is a photo that is flush left.](layout-task-start.png)

## Project brief

You have been provided with some raw HTML, basic CSS, and images — now you need to create a layout for the design.

The tasks you need to achieve are:

1. Display the navigation items in a row, with an equal amount of space between the items and a smaller amount of space at either end of the row.
2. Style the navigation bar so it scrolls with the content normally but then becomes stuck at the top of the viewport when it reaches it.
3. Cause the "feature" image inside the article to have text wrapped around it to the right and bottom, with a suitable amount of space between the image and the text.
4. Display the {{htmlelement("article")}} and {{htmlelement("aside")}} elements as a two-column layout, with the former three times as wide as the latter. The columns should be a flexible size so that if the browser window gets narrower, the columns become narrower. Include a 20-pixel gap between the two columns.
5. The photographs should display as a two-column grid with equal-sized columns and a 5-pixel gap between the images.

## Hints and tips

- You don't need to edit the HTML to complete this challenge.
- There are a few ways to achieve some of the tasks in the project brief, and there often isn't a single right or wrong way to do things. Try a few different approaches and see what works best. Make notes as you experiment.

## Example

The following screenshot shows an example of what the finished layout for the design should look like:

![Finished layout task website. The elements are laid out neatly. There is a website title, above a black nav bar containing 5 equally spaced links. Below the nav bar, there are two sections. On the left there is a blog post: A blog post title followed by the post content. The blog content wraps around a photo that is flush left. On the right side there is a 'photography' title about a group of images laid out in a two-image wide grid.](layout-task-complete.png)

<details>
<summary>Click here to show a potential solution</summary>

The finished CSS looks like so:

```css
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  margin: 0;
  font: 1.2em / 1.6 sans-serif;
}

img {
  max-width: 100%;
  display: block;
  border: 1px solid black;
}

.logo {
  font-size: 200%;
  padding: 50px 20px;
  margin: 0 auto;
  max-width: 980px;
}

.grid {
  margin: 0 auto;
  max-width: 980px;
  /* Solution: Display <article> and <aside> as two flexible
  columns, with <article> three times the width of <aside>,
  and a 20px gap */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

nav {
  background-color: black;
  padding: 0.5em;
  /* Solution: Make navigation bar scroll with content normally but
  then stick to top of viewport */
  top: 0;
  position: sticky;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* Solution: Display the navigation items in a row with equal space
  in between and less space at the ends  */
  display: flex;
  justify-content: space-around;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  /* Solution: Display photos in two-column grid with equal columns
  and a 5px gap */
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  /* Solution: Wrap text around the "feature" image to the right and bottom,
  with suitable space between image and text */
  float: left;
  margin: 8px 30px 20px 0;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}
