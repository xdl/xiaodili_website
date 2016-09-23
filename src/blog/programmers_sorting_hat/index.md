---
layout: blog
title: A Programmer's Sorting Hat
description: '"Yer an Apache Struts developer, Harry!"'
author: Eddie Li
link: blog/programmers_sorting_hat
styles:
  - css/blog/sorting_hat.css
scripts:
  - blog/programmers_sorting_hat/scripts/quiz.js
date: 2016/08/16
---
{{#prelude}}
"Hagrid," Harry said quietly, "I think you must have made a mistake. I don't think I can be a programmer."

To his surprise, Hagrid chuckled.

"Not a programmer, eh? Never made things happen around computers when you were angry, bored or excited?"

Harry looked into the fire. Now that he thought about it... when he found a way to bypass the school's internet restrictions to play games on the library computer... when he wrote a script to automate his tedious data input ICT homework... when he found a way to access his science teacher's mark scheme for the Christmas exam on the intranet. And the last time Dudley copy-pasted his mathematics homework and printed it out, hadn't it come out in Wingdings?

"You will begin by learning the fundamentals," said Hagrid, beaming. "Later, you'll be whisked away to a magical place of learning with a state of the art computer lab. However, we don't need much to get started."

Hagrid withdrew some writing utensils from his tattered overcoat. He scrawled the word 'atom' on a piece of parchment, narrating as he wrote.

"Now, see this sequence of characters I have written... is it true that it is an atom?"
{{/prelude}}


## The Sorting Hat Quiz

Have you ever wondered which of the four great magical houses of Hogwarts you would have belonged to? Take this magical quiz to find out!

{{#picture}}
{{#asset}}hogwarts_coat_of_arms.png{{/asset}}
{{/picture}}

{{#quizWrapper}}
### Scenario I

You have just received the worksheet for a programming homework. It is expected to take a **day** to complete.

The worksheet consists of two sections: the problem outline, and a detailed guide consisting of step-by-step instructions.

{{#quiz}}
You have read the problem outline and think you can complete it already. Do you:

* Dive into writing code as fast as possible #G #R
* Finish reading the worksheet, sketching out the solution in your head #R #S
* Finish reading the worksheet, make notes in order to divide up the work into separate tasks #H
{{/quiz}}

{{#quiz}}
There is one aspect of the homework you aren't sure how to complete. Do you first:

* Search the internet for a solution #S #G
* Ask a classmate or teacher for help #H #S
* Think about it for a while longer #G #R
{{/quiz}}

{{#quiz}}
You have completed the homework and have some free time remaining. Do you:

* Try to find a more efficient way of doing it #R
* Go outside and do something else #S #G
* Polish up the comments or documentation #H
{{/quiz}}


### Scenario II

You have just received a programming assignment. It is expected to take a **week** to complete.

{{#quiz}}
After reading the specification, it once again looks like the assignment will be straightforward to complete. When choosing a programming language, do you pick:

* A mainstream, dynamically typed language (e.g. Python, Ruby, JavaScript) #S #G
* A mainstream, statically typed language (e.g. Java, C#, C++) #H
* An esoteric language you've been meaning to try out (e.g. Lisp, Erlang, Haskell) #R
{{/quiz}}

{{#quiz}}
You have identified an area in the development process of the assignment that could benefit with writing a script. Do you:

* Write the script and use it personally #R #S
* Write the script and share it with your classmates #R #G
* Write the script, document it, then share it with classmates #H #G
{{/quiz}}

{{#quiz}}
You have discovered last minute that there's a feature you haven't implemented. The deadline is tomorrow. Do you:

* Write down what you haven't done and what you plan to do if you had more time #H
* Stay up a little while to search the internet/ask classmates to see if anyone else has already solved the problem #S
* Stay up late and implement the feature yourself #R #G

{{/quiz}}


### Scenario III

You have just received the assignment for a *group* software development project. It is expected to take a **month** to complete.

{{#quiz}}
After reading the feature set, do you:

* Jump in and try to implement as many features as you can by yourself #G
* Identify the feature that's most technically challenging and work on that #R #S
* Discuss with teammates who should work on which feature #H
{{/quiz}}

{{#quiz}}
You are tasked with implementing a feature, but there is a bug in a classmate's function that you rely on. Do you:

* Hack around it in your code #S
* Raise a ticket to the classmate to fix the bug #H
* Dive into the function and try to fix the bug yourself #R
* Reimplement that function from scratch #G
{{/quiz}}

{{#quiz}}
The core features are completed and there is still some time left. There is a presentation at the end of the assignment, after which your team has agreed to open source the project. Would you rather now be working on:

* Preparing for the presentation #G
* Writing up the documentation #H #S
* Optimising some slow code #R
* Fixing some bugs and refactoring the codebase so that it will be easier to contribute to #H #R
{{/quiz}}


### Scenario IV

You are choosing your individual project assignment, which is expected to take a **few months** to complete.

{{#quiz}}
After identifying the domain you want to contribute to, you decide your project's primary focus is:

* Creating a new product or platform #G
* Developing a new tool or library #S
* Mostly experimental work, with emphasis on the eventual write-up #R
* Improving an existing piece of software #H

{{/quiz}}

{{#quiz}}
You find a closed source solution that can accomplish part of your project. Do you:

* Reimplement the solution as an open source project #G #R
* Use it for the parts it can be used for, reimplement the rest as open source #H #S
{{/quiz}}

{{#quiz}}
You find an open source project that can accomplish part of your project, but on closer inspection find it's poorly implemented, documented, and needs refactoring. Do you:

* Use the project as is and try to work around the poorly implemented parts #S
* Fork of the project, submitting pull requests for the reimplemented features #R
* Fork the project, refactoring first before fixing up implementation and documentation #H
* Reimplement from scratch as a new project #G
{{/quiz}}
{{/quizWrapper}}


{{#quizSubmit}}
Sort!
{{/quizSubmit}}

{{#house}}
Congratulations, you are a **Gryffindor**!

You enjoy programming as a creative tool and as a means of expressing your individuality. It is important for you to be recognised in your work. You may enjoy making games, founding a startup or creating an ambitious open source project.

Other famous Gryffindors: [Richard Stallman](https://en.wikipedia.org/wiki/Richard_Stallman), [Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds)
{{/house}}

{{#house}}
Congratulations, you are a **Slytherin**!

You see programming as a tool to solve specific problems in your domain. Perhaps you were trained as an engineer, applied mathematician or scientist, but you may also enjoy being a data scientist, a systems engineer or working in security.

Other famous Slytherins: [Julian Assange](https://en.wikipedia.org/wiki/Julian_Assange),
{{/house}}


{{#house}}
Congratulations, you are a **Hufflepuff**!

You enjoy working with others, establishing conventions and development practices in order to produce maintainable, bug-free code. You may enjoy being an enterprise developer, a software architect, or a team manager.

Other famous Hufflepuffs: [Robert Martin](https://en.wikipedia.org/wiki/Robert_Cecil_Martin), the [Gang of Four](https://en.wikipedia.org/wiki/Design_Patterns)
{{/house}}

{{#house}}
Congratulations, you are a **Ravenclaw**!

You enjoy the theoretical side of programming such as the pondering the nature of computation, type systems, and algorithm design. You may enjoy doing computer science research in academia, or inventing and implementing your own programming language.

Other famous Ravenclaws: [John McCarthy](https://en.wikipedia.org/wiki/John_McCarthy_%28computer_scientist%29), [Edsger Dijkstra](https://en.wikipedia.org/wiki/Edsger_W._Dijkstra)
{{/house}}

{{#quizRetake}}{{/quizRetake}}
