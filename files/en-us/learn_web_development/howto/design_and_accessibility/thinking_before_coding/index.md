---
title: How do I start to design my website?
slug: Learn_web_development/Howto/Design_and_accessibility/Thinking_before_coding
page-type: learn-faq
sidebar: learn-how-to
---

This article covers the all-important first step of every project: define what you want to accomplish with it.

<table>
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>None</td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>Learn to define goals to give direction to your web project.</td>
    </tr>
  </tbody>
</table>

## Summary

When starting with a web project, many people focus on the technical side. Of course you must be familiar with the technique of your craft, but what really matters is _what you want to accomplish_. Yes, it seems obvious, but too many projects fail not from a lack of technical know-how, but from lack of goals and vision.

So when you get an idea and want to turn it into a website, there are a few questions you should answer before anything else:

- What exactly do I want to accomplish?
- How will a website help me reach my goals?
- What needs to be done, and in what order, to reach my goals?

All of this is called _project ideation_ and is a necessary first step to reach your goal, whether you are a beginner or an experienced developer.

## Active Learning

_There is no active learning available yet. [Please, consider contributing](/en-US/docs/MDN/Community/Getting_started)._

## Deeper dive

A project never starts with the technical side. Musicians will never make any music unless they first have an idea of what they want to play—and the same is true for painters, writers, and web developers. Technique comes second.

Technique is obviously critical. Musicians must master their instrument. But good musicians can never produce good music without an idea. Therefore, before jumping into the technical side — for example, code and tools—you must first step back and decide in detail what you want to do.

An hour's discussion with friends is a good start, but inadequate. You must sit down and structure your ideas to get a clear view of what path you must take to make your ideas a reality. To do this, you need only pen and paper and some time to answer at least the following questions.

> [!NOTE]
> There are countless ways to carry out project ideation. We cannot lay them all out here (a whole book wouldn't be enough). What we will present here is a simple method to handle what professionals call [Project Ideation](<https://en.wikipedia.org/wiki/Ideation_(idea_generation)>), [Project Planning](https://en.wikipedia.org/wiki/Project_planning), and [Project Management](https://en.wikipedia.org/wiki/Project_management).

### What exactly do I want to accomplish?

This is the most important question to answer, since it drives everything else. List all the goals you want to reach. It can be anything: selling goods to make money, expressing political opinions, meeting new friends, gigging with musicians, collecting cat pictures, or whatever you want.

Suppose you are a musician. You could wish to:

- Let people hear your music.
- Sell goodies.
- Meet other musicians.
- Talk about your music.
- Teach music through videos.
- Publish photos of your cats.
- Find a new apartment.

Once you have such a list, you need to prioritize. Order the goals from most important to least important:

1. Find a new apartment.
2. Let people hear your music.
3. Talk about your music.
4. Meet other musicians.
5. Sell goodies.
6. Teach music through videos.
7. Publish photos of your cats.

Doing this simple exercise—writing goals and sorting them—will help you out when you have decisions to make. (Should I implement these features, use these services, create these designs?)

So now that you have a prioritized list of goals, let's move on to the next question.

### How could a website bring me to my goals?

So you have a list of goals and you feel you need a website to reach those goals. Are you sure?

Let's look back at our example. We have five goals connected to music, one goal related to personal life (finding a new apartment), and the completely unrelated cat photos. Is it reasonable to build a single website to cover all those goals? Is it even necessary? After all, scores of existing web services might bring you to your goals without building a new website.

Finding a new apartment is a prime case where it makes more sense to use existing resources rather than build a whole new site. Why? Because we'll spend more time building and maintaining the website rather than actually searching for a new apartment. Since our goal is what matters most, we should spend our energy on leveraging existing tools rather than starting from scratch. Again, there are so many web services already available for showcasing photos that it isn't worth the effort to build a new site just to spread the word about how cute our cats are.

The other five goals are all connected to music. There are, of course, many web services that could handle these goals, but it makes sense in this case to build a dedicated website of our own. Such a website is the best way to _aggregate_ all the stuff we want to publish in a single place (good for goals 3, 5, and 6) and promote _interaction_ between us and the public (good for goals 2 and 4). In short, since these goals all revolve around the same topic, having everything in one place will help us meet our goals and help our followers connect with us.

How can a website help me reach my goals? By answering that, you'll find the best way to reach your goals and save yourself from wasted effort.

### What needs to be done, and in what order, to reach my goals?

Now that you know what you want to accomplish, it's time to turn those goals into actionable steps. As a side note, your goals are not necessarily set in stone. They evolve over time even in the course of the project, especially if you run across unexpected obstacles or just change your mind.

Rather than go through a long explanation, let's go back to our example with this table:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Goals</th>
      <th scope="col">Things to do</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Let people hear your music</td>
      <td>
        <ol>
          <li>Record music</li>
          <li>
            Prepare some audio files usable online (Could you do this with
            existing web services?)
          </li>
          <li>Give people access to your music on some part of your website</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Talk about your music</td>
      <td>
        <ol>
          <li>Write a few articles to start the discussion</li>
          <li>Define how articles should look</li>
          <li>Publish those articles on the website (How to do this?)</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Meet other musicians</td>
      <td>
        <ol>
          <li>
            Provide ways for people to contact you (Email? Facebook? Phone?
            Mail?)
          </li>
          <li>
            Define how people will find those contact channels from your website
          </li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Sell goodies</td>
      <td>
        <ol>
          <li>Create the goodies</li>
          <li>Store the goodies</li>
          <li>Find a way to handle shipping</li>
          <li>Find a way to handle payment</li>
          <li>Make a mechanism on your site for people to place orders</li>
        </ol>
      </td>
    </tr>
    <tr>
      <td>Teach music through videos</td>
      <td>
        <ol>
          <li>Record video lessons</li>
          <li>
            Prepare video files viewable online (Again, could you do this with
            existing web services?)
          </li>
          <li>
            Give people access to your videos on some part of your website
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

Two things to notice. First, some of these items are not web-related (e.g., record music, write articles). Often those offline activities matter even more than the web side of the project. In sales, for instance, it's far more important and time-consuming to handle supply, payment, and shipment than to build a website where people can place orders.

Second, setting out actionable steps leads to new questions you'll need to answer. Usually there turn out to be more questions than we originally thought. (For example, should I learn how to do all this myself, ask someone to do it for me, or use third-party services?)

## Conclusion

As you can see, the simple idea "I want to make a website" generates a long to-do list, which only grows longer as you think about it. Soon it may look overwhelming, but don't panic. You don't need to answer all the questions and you don't need to do everything on your list. What matters is to have a vision of what you want and how to get there. Once you have that clear vision, you need to decide how and when to do it. Break down big tasks into small, actionable steps. And those small steps will add up to great achievements.

From this article, you should now be able to make a rough plan for creating a website. A next step might be to read [how the Internet works](/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work).
