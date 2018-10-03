---
id: 1206
title: 'Sequoia::Hack&#039;14  &#8211; Social Listening with Docker Containers'
date: 2014-09-21T13:52:15+00:00
author: admin
layout: post
guid: http://neependra.net/?p=1206
permalink: /2014/09/21/sequoiahack14-social-listening-with-docker-containers/
categories:
  - Data Analysis
  - docker
  - geek
tags:
  - bangalore
  - data analysis
  - docker
  - geek
  - hack
  - linux
---
I participated in [Sequoia Hack&#8217;14 ](https://www.sequoiahack.com) with [Shireeh Anjal](https://twitter.com/anjalshireesh). We worked in different teams at Red Hat. [In last year&#8217;s Sequoia hack](http://neependra.net/?p=929) we participated in different teams. This years we decided to form a team and use the tea[m name I used last time Shadowfax.](http://neependra.net/?p=929) As currently I am playing with Docker, so I wanted to do some hack around Docker.
  
Our project name was _**Social Listening with Docker Containers**_. Though our idea of the project did not change but we changed the pitch of the it. So we pitched it like following:-

> Lets say you created a product and hired a PR to market in social media. The PR firms charges you with X amount of money saying that because of their marketing your product has generated N tweets/FB posts etc. You want to make sure that PR firms have done their job. In simple terms you want to a litmus test.

We were just able to do just with twitter in limited time. So you come to our app and either give your twitter credentials or just let us know what keyword you want to search.
  

  
After that we would start looking for that keyword and collecting tweets and save it. Once the observation time gets over we get analyse the tweets give the results. As of now we just generate the word cloud and give the location from it got tweeted,if it has been geo-tagged.
  

  
So where is Docker in it ? As soon as someone submits a request, we start a container with its environment variables set to ones passed by the user. Then we use those environment variables to call twitter APIs to collect tweets and save it to ElasticSearch. When we want to do the analysis we query the ElasticSearch and get the dataset and do the analysis.The front to our app is written in RoR and we used to python APIs to connect twitter.
  
It was great experience overall, learned few things saw some great hacks. Hope to participate in future hackathons and at-least reach in final N.