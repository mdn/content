---
title: "Challenge: Fundamental layout comprehension"
short-title: "Challenge: Fundamental layout"
slug: Learn_web_development/Core/CSS_layout/Fundamental_Layout_Comprehension
page-type: learn-module-assessment
sidebar: learnsidebar
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}

This challenge will test your knowledge of the layout features we've covered so far in the module, namely flexbox, floats, grid, and positioning. By the end you will have developed a webpage layout using a variety of techniques.

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
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
           </p>

           <p>
             Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
             courgette tatsoi pea sprouts fava bean collard greens dandelion
             okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
             zucchini.
           </p>

           <p>
             Nori grape silver beet broccoli kombu beet greens fava bean potato
             quandong celery. Bunya nuts black-eyed pea prairie turnip leek
             lentil turnip greens parsnip. Sea lettuce lettuce water chestnut
             eggplant winter purslane fennel azuki bean earthnut pea sierra
             leone bologi leek soko chicory celtuce parsley jícama salsify.
           </p>

           <p>
             Celery quandong swiss chard chicory earthnut pea potato. Salsify
             taro catsear garlic gram celery bitterleaf wattle seed collard
             greens nori. Grape wattle seed kombu beetroot horseradish carrot
             squash brussels sprout chard.
           </p>

           <p>
             Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
             welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
             garlic.
           </p>

           <p>
             Turnip greens yarrow ricebean rutabaga endive cauliflower sea
             lettuce kohlrabi amaranth water spinach avocado daikon napa
             asparagus winter purslane kale. Celery potato scallion desert
             raisin horseradish spinach carrot soko. Lotus root water spinach
             fennel kombu maize bamboo shoot green bean swiss chard seakale
             pumpkin onion chickpea gram corn pea. Brussels sprout coriander
             water chestnut gourd swiss chard wakame kohlrabi beetroot carrot
             watercress. Corn amaranth salsify bunya nuts nori azuki bean
             chickweed potato bell pepper artichoke.
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
     background-color: #fff;
     color: #333;
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
     background-color: #000;
     padding: 0.5em;
   }

   nav ul {
     margin: 0;
     padding: 0;
     list-style: none;
   }

   nav a {
     color: #fff;
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
<summary>Click here to show the solution</summary>

The finished CSS looks like so:

```css
* {
  box-sizing: border-box;
}

body {
  background-color: #fff;
  color: #333;
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
  /* 4. Display <article> and <aside> as two flexible columns */
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}

nav {
  background-color: #000;
  padding: 0.5em;
  /* 2. Make navigation bar stick to top of viewport */
  top: 0;
  position: sticky;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
  /* 1. Lay out navigation items in a row with space
     in between and at the ends  */
  display: flex;
  justify-content: space-around;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 0.5em 1em;
}

.photos {
  list-style: none;
  margin: 0;
  padding: 0;
  /* 5. Display photos in two-column grid */
  display: grid;
  gap: 5px;
  grid-template-columns: 1fr 1fr;
}

.feature {
  width: 200px;
  /* 3. Wrap text around feature image to the right and bottom */
  float: left;
  margin: 8px 30px 20px 0;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Grid", "Learn_web_development/Core/CSS_layout/Responsive_Design", "Learn_web_development/Core/CSS_layout")}}
