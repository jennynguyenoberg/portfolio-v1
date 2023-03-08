Hi Jenny!

First the bad news...nothing works!!

The reason is the file paths. Whenever you use a '/' without any dots it is an absolute path - it tells the computer to look in the very base folder of the current drive the file is in.

So a file path such as : <link rel="stylesheet" href="/jennys-portfolio-2.0/styles/index.css"> is only ever going to work on your local machine due to where you have your projects DIR and what your project is called (when you git clone something you can change thhe name). If you move your project this link will likely break.

What you need to do is change all the file paths to relative paths. That link above is from index.html, so since the 'styles' directory is a sibling (ie in the same directory) to index.html you should use './' (which means the current directory).  So <link rel="stylesheet" href="./styles/index.css"> will ALWAYS work as long as the styles dir stays in the same place relative to index.html.

In  a file such as skills.html which is inside the html dir, you need to go up one level to the common ancestor of /html and /styles.  <link rel="stylesheet" href="../styles/index.css"> should work inside any of the html directory files. Check images, and the font paths

Now the good news!

Check the comments below, you did a fantastic job. There's a Välgokänt waiting for you as soon as you fix the file paths.

YOu'll have to resubmit, please shoot me a message when I should check again, or if you have any questions.

*************************************

CRITERIA FOR GRADING

*************************************

GODKÄNT:
-------------------------------------

HTML
  index.html at root level for publishing on github pages ✅

  Multiple pages ✅

  Header, footer and navigational menu on all main pages (where possible) ✅

  H1 on every page ✅ ❌
    You have two in index.html

  Mail to Contact form ✅

  Links to specific projects opening in new windows ✅

CSS
  External CSS ✅

  General style sheets for common elements ✅
    Excellent!

  Typography style sheet ✅

  Locally installed font ✅
  
  Separate stylesheets for each page ✅

  RWD
    Desktop ✅
    Mobile ✅  ❌
      Check the program menu on  inddx.html ans about.html. A white bg on the menu could fix it.

JS
  jQuery plugin (such as a carousel) ✅ 

  JS/jQuery multi level menu (min 2 levels) ✅
    Nice!
  

-------------------------------------

VÄLGODKÄNT:
-------------------------------------

  Project organisation ✅
    Vey nice!

  CSS prefixing where required ✅ ❌
    Check about.css

  jQuery effects  ✅

  Semantic element naming ✅

  Code style
   HTML: ✅
     +1 for alts on imgs
   CSS: ✅
   JS: ✅
     The jQuery opening - $(function () { - is shorthand for  $(document).ready(function ($) { so you don't need the second one