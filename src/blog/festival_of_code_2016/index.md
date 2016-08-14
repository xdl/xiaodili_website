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

Walking around the fourth floor of Wapping High on that first week of August felt like being in tall grass in a Pokémon game; every couple of steps led to an encounter with a child asking for advice. Festival of Code was an annual week-long coding event; it was started by Young Rewired State and is independently organised across the UK, aimed at nurturing programming skills and promoting the use of open data. At my school, the ages varied from 8 to 16 with a wide spectrum of programmimg experience.

In the space of half an hour, you could be asked to fix some HTML and CSS, play 'spot the syntax error' in JavaScript or Python, work out why assets weren't loading on an unfamiliar operating system, debug some Scratch blocks and figure out how layers worked on a foreign image editor. Mentally, it was surprisingly intense due to the constant context switches, but very fun.

For syntactic gaps in knowledge (usually the case in web development), pointing them in the right direction of what keyword to Google was often suffice. For unfamiliar environments, a more methodical way of obtaining knowledge was required; this was particularly telling in the case of a thirteen year old making a game in Unity, a sophisticated and complex piece of game development software. I tried to impart some of the standard software development techniques used when working with uncertainty:

1. Develop from a working program: figuring out what features can be generalised and extended is much easier to do when the program runs and responds to changes.
2. Minimise the number of unconfident changes simultaneously introduced to the program. If you aren't sure a fragment of code accurately reflects your logic, verify it first before building on top of it.

It was important to work through any request in good time to prevent the child from losing focus; for some, getting distracted and playing games was a perennial issue. If you weren't sure an answer could be provided in a reasonable time, e.g. uncertainty regarding the concrete details on implementing a feature, or not enough familiarity with the development environment, the best approach was to ask if the child had anything else they could get on with while you did some swift Googling on the matter and try to knock up a proof of concept. If you were completely stuck, other mentors provided a tremendous source of support and knowledge to draw from; we also opened a chat group where persistent issues could be posted and worked on whenever we had downtime.

The children doing visual programming (i.e. Scratch's block-based scripting) tended to need less support than those working with text. Most mentors had previous experience with Scratch and could resolve issues quickly. Many children had prior Scratch experience as well (and could be called upon to help their peers) but wanted to try out something new that week, like web development. For text-based programming, it was easy for newcomers to get bogged down on syntax, keywords and language quirks. The older children tended to be more self-starting; for a pair of keen sixteen year olds who had no prior web experience, a crash course on how HTML tags and CSS selectors worked, and pointers to some good web resources set them off and they needed minimal help throughout the rest of the week.

## On Technology

It's astonishing to reflect upon how much web technologies have lowered the barrier of entry to coding websites, games, music and mobile applications. Having a working development environment was only a matter of visiting a web URL: no fiddling around trying to install text editors, language runtimes, libraries or assets and linking them together needed. This is particularly encouraging in a school setting where the IT environment tends to be heavily locked down.

Visual programming has also reached an impressive level of sophistication; one of the prime reasons we tried to minimise the amount of time a child stayed blocked for was because the Scratch website had an impressive repetoire of playable game clones, all within a click away.

Many of the tools made it easy to publish and share the code; this was particularly useful when presenting at the end of the day; we could collect the public URLs from the majority of the children and demo them from one laptop.

### Tools

Since the technology landscape moves so fast, I tried to avoid explicitly naming any tools used. However, here is a listing of the free applications that we found useful:

* [MIT Scratch](https://scratch.mit.edu/): The de facto visual programming environment. I don't think I can heap enough praise onto it; I saw the epitome of the expressiveness this tool allows in form of a 10 year old making a 2D pixel side scroller and its graphics solely with it
* [MIT Appinventor](http://appinventor.mit.edu/explore/): Scratch, but for Android applications. One team used its barcode scanner block and created a book scanning app
* [Trinket](https://trinket.io/): A great way to experiment with Python and its graphics libraries on the web
* [Codepen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/): Provides split screen panes for editing HTML5 and previewing at the same time, and importing of popular libraries, e.g. JQuery, Google Maps and Prototype
* [CodeCombat](https://codecombat.com/): A gameified platform for learning JavaScript
* [Pixlr](https://pixlr.com/): Online raster editing application with sophisicated features
* [Unity Personal](https://unity3d.com/): Game development environment with 2D, 3D game engine
* [Slack](https://slack.com/): We set up a chatroom here to coordinate where children needed help
* [Soundtrap](https://www.soundtrap.com/): Online music generator supporting both visual and traditional methods

## Final Thoughts

As one mentor mentioned: for many children, this would be their first time working on a project for a sustained period of time. It wasn't like school, where the subject would switch every forty minutes or so, and the teacher dictated the flow of the class. Children were free to set up camp anywhere on the floor, and majority of the day was unstructured. They were responsible for setting their own pace and managing resources, namely willpower and time. It was a proud moment to watch them come through and present their work to their peers and the judges, but perhaps more rewarding was to see many of them enter 'the zone', that zenlike state of mind where all external stimuli vanishes and only the problem at hand remains. 

It was an incredible privilege to be working with the other mentors; the amount of breadth and depth they brought to the knowledge pool was indispensable. We had mentors jump in to help debug projects that had they hadn't previously worked on, fix broken projects fifteen minutes before demonstration time, and even during the judging. One mentor in particular did a fantastic job of preparing proof of concepts in the evening for popular web features, e.g. Google maps and visualisation.

Massive props also goes to Kerstyn, the organiser who put an incredible amount of effort and thought in planning and realising the event. At the start of the week, she kicked off introductions and ice-breakers so that the children could get to know each other and the mentors better. Children could showcase their achievements and talk about what they found difficult at the end of the day; this let them practice their presentation skills and, regardless of what was achieved, the prompt for applause was positive reinforcement that helped end the day on a high. At the end of the week, in spirit of the traditional hackathon, there was the option of presenting to judges, with prizes being offered in various categories. However, all participants went home with something.

{{#picture}}
blog/festival_of_code_2016/assets/judging.jpg|Demo-ing a Scratch project on the last day
{{/picture}}

Reflecting on some pedagogical shortcomings that technology could yet address: there is a huge gap in technical skill required between programming in Scratch and programming with text; children need to develop attention to detail since a missing semicolon or hyphen is the difference between a working and broken program (also, it has to be pointed out that they need enough familiarity with the keyboard to hit the common programming characters). The more complex, text-based programs tended to grow brittle with size; it would have been useful to revert a broken program to a previously working state, but the steep learning curve in current source control tools made it prohibitive to introduce. Finally, it's great to learn coding through a product-orientated endgoal, but the fundamentals of programming, i.e. variables, functions, control flow, data structures and information hiding should still be taught formally.

I'll end this article with one final vignette: it's about the child who was using Unity to make a ball rolling game. The player navigates a ball past obstacles; touching one should cause the game to reset. The next piece of the puzzle was getting collision detection working, and we were testing it by printing statements. In one iteration, we saw the correct console output from the ball hitting a wall. He cheered loudly, and a few moments later started typing frantically; he had realised he knew what code was needed to be substituted in place of the debug statement to finish implementing the feature.

Thirty minutes later, I came back to see him proudly showing off his working prototype to his friends.
