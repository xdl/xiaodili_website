---
layout: blog
export_to: site.blog
title: A Programmer's Sorting Hat
description: '"Yer an Apache Struts developer, Harry!"'
author: Eddie Li
link: blog/programmers_sorting_hat
styles:
  - css/blog/sorting_hat.css
  - css/footnotes.css
scripts:
  - blog/programmers_sorting_hat/scripts/quiz.js
date: 2016/10/02
---
{{#prelude}}
"Hagrid," Harry said quietly, "I think you must have made a mistake. I don't think I can be a programmer."

To his surprise, Hagrid chuckled.

"Not a programmer, eh? Never made things happen around computers when you were angry, bored or excited?"

Harry looked into the fire. Now that he thought about it... when he found a way to bypass the school's internet restrictions to play games on the library computer... when he wrote a script to automate his tedious data input ICT homework... when he found a way to access his science teacher's mark scheme for the Christmas exam on the intranet. And the last time Dudley copy-pasted his maths homework and printed it out, hadn't it come out in Wingdings?

"You'll be whisked away to a magical place of learning with a state of the art computer lab." said Hagrid, beaming. "However, we shan't need much to learn the fundamentals."

Hagrid withdrew some writing utensils from his tattered overcoat. He scrawled the word 'atom' on a piece of parchment, narrating as he wrote.

"Now, see this sequence of characters I have written... is it true that it is an atom? {{#ref}}little_schemer | [The Little Schemer](https://mitpress.mit.edu/books/little-schemer) is Hagrid's favourite book{{/ref}}"
{{/prelude}}


## The Sorting Hat Quiz

Have you ever wondered which of the four great magical houses of Hogwarts you would have belonged to? Take this magical quiz to find out!

{{#picture}}
{{#asset}}hogwarts_coat_of_arms.png{{/asset}}
{{/picture}}

{{#quizWrapper}}
### Scenario I

You have just received the worksheet for a programming homework. It is expected to take a **day** to complete.

{{#quiz}}
You have skimmed the problem outline on the first page and think you can complete it already. Do you:

* Finish reading the worksheet, making notes in order to divide up the work into separate tasks #H
* Finish reading the worksheet, sketching out the solution in your head #R #S
* Dive into writing code as fast as possible #G #R
{{/quiz}}

{{#quiz}}
You're stuck on one part of the homework. Do you first:

* Search the internet for a solution #S #G
* Ask a classmate or teacher for help #H #S
* Think about it for a while longer #G #R
{{/quiz}}

{{#quiz}}
You have completed the homework and have some free time remaining. Do you:

* Try to find a more efficient implementation of the solution #R
* Go outside and do something else #S #G
* Tidy up the comments and documentation #H
{{/quiz}}


### Scenario II

You have just received a programming assignment. It is expected to take a **week** to complete.

{{#quiz}}
After reading the specification, you decide the assignment is straightforward to complete. When choosing a programming language, do you pick:

* A mainstream, dynamically typed language (e.g. Python, Ruby, JavaScript) #S #G
* A mainstream, statically typed language (e.g. Java, C#, C++) #H
* An esoteric language you've been meaning to try out (e.g. Lisp, Erlang, Haskell) #R
{{/quiz}}

{{#quiz}}
You have hacked out a script to speed up the development process of the assignment. Do you:

* Share it with your classmates, as is #R #G
* Document it, then share it with all your classmates #H #G
* Use it personally #R #S
{{/quiz}}

{{#quiz}}
You have discovered last minute that there's a feature you forgot to implement. The deadline is tomorrow. Do you:

* Stay up late to implement it #R #G
* Write down what you haven't done and what you plan to do if you had more time #H
* Stay up a little while to search the internet/ask classmates for any pre-written code you can adapt #S

{{/quiz}}


### Scenario III

You have just received the assignment for a *group* software development project. It is expected to take a **month** to complete.

{{#quiz}}
After reading the features your team will have to implement, do you:

* Identify the feature that's most technically challenging and work on that #R #S
* Discuss with teammates who should work on which feature #H
* Jump in and try to implement as many features as you can by yourself #G
{{/quiz}}

{{#quiz}}
You are tasked with implementing a feature, but there is a bug in a classmate's function that you rely on. Do you:

* Hack around it in your code #S
* Notify your classmate of the bug and offer your help to fix it #H
* Reimplement that function from scratch #G
* Dive into the function and try to fix the bug yourself #R
{{/quiz}}

{{#quiz}}
The core features are completed and there is still some time left. There is a presentation at the end of the assignment, after which your team has agreed to open source the project. Would you rather now be working on:

* Optimising inefficiencies in the code #R
* Preparing for the presentation #G
* Fixing bugs and refactoring the codebase so that it will be easier to contribute to #H
* Writing up some documentation #S
{{/quiz}}


### Scenario IV

You are choosing your individual project assignment, which is expected to take a **few months** to complete.

{{#quiz}}
After identifying the domain you want to contribute to, you decide your project's primary focus is:

* Improving an existing piece of software #H
* Developing a new tool or library #S
* Mostly experimental work, with emphasis on the eventual write-up #R
* Creating a new product or platform #G

{{/quiz}}

{{#quiz}}
You find an open source project you can use for part of your project, but find that it no longer maintained and has fallen into disrepair. Do you:

* Reimplement from scratch as a new open source project #G
* Use the project as is and try to work around the poorly implemented parts #S
* Fork the project, submitting pull requests for any newly implemented features #R
* Fork the project; volunteer as a maintainer, offering to fix up implementation and documentation #H
{{/quiz}}

{{#quiz}}
Your project's deadline is in a fortnight; you have acquired some technical debt which is slowing down ongoing development. Do you:

* Spend a few days fixing the issues you identify that impede development the most, in order to try to maintain original project scope #R
* Pay back all the technical debt, with expectation that the scope of the project will be reduced #H
* Address only the easy-to-fix issues, but try to maintain original project scope at the expense of sleep #G
* Forge ahead without refactoring and hope you don't pay too much for it #S
{{/quiz}}
{{/quizWrapper}}


{{#quizSubmit}}
Sort!
{{/quizSubmit}}

{{#house}}
Congratulations, you are a **Gryffindor**!

You enjoy programming as a creative tool and as a means of expressing your individuality. It is important for you to be recognised in your work. You may enjoy making games, founding a startup or creating an ambitious open source project.

Other famous Gryffindors: [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)

{{#otherHouses}}gryffindor{{/otherHouses}}

{{/house}}

{{#house}}
Congratulations, you are a **Slytherin**!

You see programming as a tool to solve specific problems in your domain, or to scratch a personal itch. Perhaps you were trained as an engineer or scientist, but you may also enjoy being a data scientist, a systems engineer or working in security.

Other famous Slytherins: [Julian Assange](https://en.wikipedia.org/wiki/Julian_Assange), [Andrew Ng](https://en.wikipedia.org/wiki/Andrew_Ng)

{{#otherHouses}}slytherin{{/otherHouses}}

{{/house}}


{{#house}}
Congratulations, you are a **Hufflepuff**!

You enjoy working with others, establishing conventions and development practices in order to produce maintainable, bug-free software. You may enjoy being an enterprise developer, a software architect, or managing a development team.

Other famous Hufflepuffs: [Robert Martin](https://en.wikipedia.org/wiki/Robert_Cecil_Martin), the [Gang of Four](https://en.wikipedia.org/wiki/Design_Patterns)

{{#otherHouses}}hufflepuff{{/otherHouses}}

{{/house}}

{{#house}}
Congratulations, you are a **Ravenclaw**!

You enjoy the theoretical side of programming such as the pondering the nature of computation, type systems, and algorithm design. You may enjoy computer science research in academia, or inventing and implementing your own algorithms or programming languages.

Other famous Ravenclaws: [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_%28computer_scientist%29), [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)

{{#otherHouses}}ravenclaw{{/otherHouses}}

{{/house}}

{{#quizRetake}}{{/quizRetake}}


## Footnotes

{{#footnoteList}}{{/footnoteList}}
