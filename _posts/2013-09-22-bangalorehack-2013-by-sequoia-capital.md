---
id: 929
title: Bangalore::Hack 2013 by Sequoia Capital
date: 2013-09-22T12:01:48+00:00
author: admin
layout: post
guid: http://neependra.net/?p=929
permalink: /2013/09/22/bangalorehack-2013-by-sequoia-capital/
categories:
  - Data Analysis
  - geek
tags:
  - bigdata
  - data analysis
  - data.gov.in
  - hack
  - opendata
  - R
  - Shiny
---
I participated in [Bangalore::Hack 2013](https://www.facebook.com/bangalorehack2013) last week and was planning to do a blog post about my participation. So I started to collect the relevant link to put on the blog post and came across this :-
  
<a href="http://yourstory.in/2013/09/sequoia-capital-bangalore-hack/" target="_blank">http://yourstory.in/2013/09/sequoia-capital-bangalore-hack/</a>
  
and saw the mention about my work.

> 4) Government information aggregator – This one is close to my heart; a tool that aggregated government information to empower journalists with data.

I am very happy to get comment like this from <a href="yourstory.in" target="_blank">Yourstory</a>. Thanks to <a href="http://yourstory.in/" target="_blank">Yourstory</a> for covering it.
  
Though I had not given any name for my project but lets call it as_ Government information aggregator  _for now. So here is the pitch about my idea:-

> With this tool I would like to help journalists and socially active people who are trying to make difference at ground level. Being in metros we have access good new papers like The Hindu, good internet access to visit different news sites. But if you go any tier II or III cities and read the local news paper there then we do not see similar quality content. This is because journalists or people do not have access to technology by which they can backup their stories with relevant data.
  
> So the idea here is to get the data from government website like<a href=" data.gov.in" target="_blank"> data.gov.in</a> and list of policies government has implemented over time. And then try link them together to see what difference those policies have made.

Lets take an example to [literacy rates o](http://data.gov.in/dataset/state-wise-literacy-rates-1951-2001)f different states in India over different census. It has varied state by state. This can be visualized using the app the I wrote and made it online during hackathon:
  
<http://spark.rstudio.com/nkhare/banghack/>
  
If we can relate the percentage changes in given state with the policies it has implemented over the years then we can get a sense about what caused that percentage change. I did not figured out exact way to relate the change with policies but I did google query for policies from sites sites like gov.in, nic.in and list down the result as shown in following screenshot:-
  
[<img alt="MP_Education" src="http://farm8.staticflickr.com/7425/9872291236_54f0435166.jpg" width="500" height="281" />](http://www.flickr.com/photos/neependra/9872291236/ "MP_Education by neependra, on Flickr")
  
Education is just an example. We can get the similar data from sites like data.gov.in for health, food producation, manufacturing etc. For now the user have to look at the listed policies manually but this narrows down search.
  
We talked about state wise here but this can be extended to district level. If we can visualize percentage changes in different sectors for a given district over the years then journalist or others can pick up that data and ask questions to local governing bodies. The data-set would be picked from the government websites, so there is no question about authencity. We just need to visualize them and share.
  
I have written the app using [R](http://cran.r-project.org/) and [Shiny](http://www.rstudio.com/shiny/) for which I recently reviewed a book. The book  should get publish in a next month.
  
I never heard about Sequioa Captial, till I came to know about Bangalore Hackday sometime last month. I came to know more about it during the Hackday. And since last week I am reading more about it through the books I am reading about Google for my coursera course[ Understanding Media by Understanding Google ](https://www.coursera.org/instructor/youngowen).
  
I participate alone using team name &#8220;Shadowfax&#8221;. It was great event. I learnt many things, met interesting people and saw wonderful projects. I hope to participate in events likes this in future.