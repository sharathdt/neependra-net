---
id: 78
title: How do log every thing printed on the terminal
date: 2008-09-17T00:29:00+00:00
author: admin
layout: post
guid: http://neependra.net/?p=78
permalink: /2008/09/17/how-do-log-every-thing-printed-on-the-terminal/
blogger_blog:
  - techieneeps.blogspot.com
blogger_permalink:
  - /2008/09/how-do-log-every-thing-printed-on.html
blogger_author:
  - Neeps
categories:
  - Uncategorized
tags:
  - tips and tricks
---
Sometimes we just keep working on a terminal and get lost what all we did.  
Isn&#8217;t it good if we can get some kind of logs which can give us all steps we followed.

First thing which comes in mind is the &#8220;history&#8221; command, but that will not give the standard outputs which we got after running the commands.

So, here is the solution.Use a command called &#8220;script&#8221;.

e.g.

<span style="font-style: italic;">$ script standard_out.txt</span>  
<span style="font-style: italic;">Script started, file is standard_out.txt</span>  
<span style="font-style: italic;">$ date</span>  
<span style="font-style: italic;">Mon Sep 8 07:57:20 IST 2008</span>  
<span style="font-style: italic;">$ asdf</span>  
<span style="font-style: italic;">bash: asdf: command not found</span>  
<span style="font-style: italic;">$ exit</span>  
<span style="font-style: italic;">Script done, file is standard_out.txt</span>  
<span style="font-style: italic;"></span>  
<span style="font-style: italic;">To exit you need to press &#8220;ctrl+D&#8221;.</span>

Now lets check the content of &#8220;standard_out.txt&#8221; file.<span style="font-style: italic;"></p> 

<p>
  $ cat standard_out.txt<br />Script started on Mon 08 Sep 2008 07:57:10 AM IST<br />$ date<br />Mon Sep 8 07:57:20 IST 2008<br />$ asdf<br />bash: asdf: command not found<br />$ exit<br />Script done on Mon 08 Sep 2008 07:57:38 AM IST
</p>

<p>
  For more information look at the man page of &#8221;script&#8221;&#8216;.</span>
</p>