---
layout: default
export_to: site.blog
title: Festival of Code 2016
description: Some thoughts about mentoring at Festival of Code 2016
author: Eddie Li
link: blog/festival_of_code_2016
styles:
  - css/blog.css
date: 2016/08/14
---
<div class="article_heading">
<h1 class="title"><a href="{{url}}/blog/">Blog</a>/{{page.title}}</h1>
<span class="metadata">by <span class="author">{{page.author}}</span>, on <span class="date">{{page.date}}</span></span>
</div>

For the last couple of weeks before the summer break, my [company](https://www.huddle.com/) has been generously giving me time off to take up [Code Club](https://www.codeclub.org.uk/) again at a nearby secondary school. When Kersytn, the Code Club organiser, told me that she was organising a [Festival of Code](http://www.yrs.io/festival) for over the summer, I decided to take some time off to volunteer.

## On Mentoring

Walking around the fourth floor of Wapping High on that first week of August felt like being in tall grass in a Pokémon game; every couple of steps led to an encounter with a child asking for advice. Festival of Code was an annual week-long coding event; it was started by [Young Rewired State](http://www.yrs.io/) and is independently organised across the UK, aimed at nurturing programming skills and promoting the use of open data. At my school, the ages varied from 8 to 16 with a wide spectrum of programmimg experience.

In the space of half an hour, I was asked to fix some HTML and CSS, play 'spot the syntax error' in JavaScript or Python, work out why assets weren't loading on an unfamiliar operating system, debug some Scratch blocks and figure out how layers worked on a foreign image editor. Mentally, it was surprisingly intense due to the constant context switches, but very fun.

For syntax and keywords (usually the case in web development), pointing them in the right direction of what to Google was often enough. For complex development environments, e.g. a thirteen year old making a game in Unity, a more scientific approach was required, and we tried to impart the standard software development good practices:

1. Develop from a working program
2. Minimise the number of unconfident changes that are introduced to the program in one iteration

The children doing visual programming (i.e. Scratch) tended to need less support than those working with text. For text-based programming, it was easy for newcomers to get bogged down on syntax, keywords and language quirks. The older children tended to be more self-starting; a pair of keen sixteen year olds needed only a crash course on how HTML tags and CSS selectors worked to be able to create a website by the end of week.

{{#picture}}
blog/festival_of_code_2016/assets/real_workout.png|RE.AL's nutrition and health website, made with Codepen
{{/picture}}

## On Technology

It's astonishing to reflect upon how much web technologies have lowered the barrier of entry to creating websites, games, music and mobile applications. Having a working development environment can be accomplished by visiting a URL: no more fiddling around configuring text editors, language runtimes and libraries. This is particularly encouraging in a school setting where the IT environment tends to be heavily locked down.

Visual programming has also reached an impressive level of sophistication; the main reason we tried to minimise the amount of time a child stayed blocked for was because the Scratch website had an impressive repertoire of playable game clones, all within a click away.

Many of the online platforms made it easy to publish and share the code; this was particularly useful when presenting at the end of the day; we could collect the public URLs from the majority of the children and demo them from one laptop.

### Tools

The technology landscape moves fast, but here is a listing of the free applications that we found useful:

* [MIT Scratch](https://scratch.mit.edu/): The de facto visual programming environment. One child made a 2D pixel side scroller and its graphics solely within it
* [MIT Appinventor](http://appinventor.mit.edu/explore/): Scratch, but for Android applications. One team used its barcode scanner block and created a book scanning app
* [Trinket](https://trinket.io/): Exposes an online Python interpreter (amongst others) and its graphics libraries
* [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/): Split screen panes for editing HTML5 and live previewing, supports importing of popular libraries, e.g. JQuery, Google Maps and Prototype
* [CodeCombat](https://codecombat.com/): Game-ified platform for learning JavaScript
* [Pixlr](https://pixlr.com/): Online raster editing application with Photoshop-y features
* [Unity Personal](https://unity3d.com/): Game development environment with 2D, 3D game engine
* [Slack](https://slack.com/): We set up a chatroom here to coordinate where children needed help
* [Soundtrap](https://www.soundtrap.com/): Online music generator supporting both visual and score-based input methods

{{#picture}}
blog/festival_of_code_2016/assets/destroy_the_food.png|Akbar's Destroy the Food game, made with Scratch
{{/picture}}

## Final Thoughts

As one mentor observed: for many children, this would be their first time working on a project for a sustained period of time. It wasn't like school, where the subject would switch every forty minutes, and the teacher dictated the flow of the class. Children were free to set up camp anywhere on the floor, and majority of the day was unstructured. They were responsible for setting their own pace and managing resources, namely willpower and time.

It was a proud moment to watch them come through and present their work to their peers and the judges, but perhaps more rewarding was to see many of them enter 'the zone', that zenlike state of mind where all external stimuli vanishes and only the problem remains. 

It was a privilege to be working with Kerstyn and the other mentors; the breadth and depth they brought to the knowledge pool was indispensable. We had mentors jump in to help debug projects that had they hadn't previously worked on, fix broken projects fifteen minutes before demonstration time, and even during the judging.

{{#picture}}
blog/festival_of_code_2016/assets/judging.jpg|Demo-ing a Scratch project on the last day
{{/picture}}

Reflecting on some shortcomings that technology could yet address: there is a huge gap in the technical skill and attention to detail required between programming in Scratch and programming with text, where a misplaced or missing `:`, `)` or `;` is the difference between a working and broken program. This is compounded by the children's unfamiliarity with where these characters are positioned on the keyboard.

Text-based programs tended to grow brittle with size and it would have been useful to revert a broken program to a known working state, but the steep learning curve involved in current source control tools made it prohibitive to introduce. Finally, it's great to learn coding through a product-orientated endgoal, but that shouldn't be a substitute for teaching the fundamentals of programming formally.

I'll end this article with one final vignette: it's about the child who was using Unity to make a ball rolling game. The player navigates a ball past obstacles; touching one should cause the game to reset. The next piece of the puzzle was getting collision detection working, and we were testing it by printing statements.

In one iteration, we saw the correct console output from the ball hitting a wall. After cheering loudly, he suddenly went silent, and a few moments later began typing frantically. He had realised he knew what code was needed to be substituted in place of the debug statement to finish implementing the feature.

Thirty minutes later, I came back to see him proudly showing off the working prototype to his friends.
