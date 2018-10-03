---
id: 886
title: Policy Hackathon @IIM Bangalore
date: 2013-08-15T15:00:12+00:00
author: admin
layout: post
guid: http://neependra.net/?p=886
permalink: /2013/08/15/policy-hackathon-iim-bangalore/
categories:
  - Data Analysis
  - geek
tags:
  - data analysis
  - opendata
  - public policy
---
<p style="text-align: left;">
  <span style="font-size: 13px; line-height: 19px;">On <a href="https://groups.google.com/forum/#!topic/datameet/9FWyl-ZJM14">datameet group I saw a mail regarding the Policy Hackathon</a>, which was <a href="http://hrm.iimb.ernet.in/iimb/Public_Policy_&_Management/index.htm">pre-event for </a></span><a href="http://hrm.iimb.ernet.in/iimb/Public_Policy_&_Management/index.htm">8th Annual International Conference on Public Policy and Management at IIM Bangalore </a> on 10 &#8211; 11 August&#8217;13. I have been to hackathons earlier but not sure what would be the policy hackathon. Anyways I thought to give it a try. I dropped a mail to the <a href="http://datameet.org/">datameet </a>to see if I can someone would be interested to join me. I got few replies and we made a team.
</p>

The event started 10th at 3 PM. The first thing we need to do is to have the team name. We did not thought about it. So I suggested Shadowfax and finalized it. After the initial briefing we were given the [census data](http://censusindia.gov.in/) from 2001 and 2011, [NSSO](http://en.wikipedia.org/wiki/National_Sample_Survey_Organisation) data form 2002, 2004-05, 2006-07, 2009-10 district wise. We need look at the census data and see what has changed over time and the support it with [NSSO](http://en.wikipedia.org/wiki/National_Sample_Survey_Organisation) data. After  that we need to relate that to the government policy. If there is any existing policy then we need to check how it performed and any changes that we can suggest. But if can&#8217;t find policy then what policy we can suggest.
  
As soon as I unzipped the data, I saw one of the largest dataset I played with. For the first hour I had no idea what to look for. As some of the team-mates came late and went in-out between, some time was lost. As policy hackathon was all new to us, we had no idea where to start. But we started discussing different topics like health, education,  migration, sanitation etc. Rest of the evening on 10th just went up discussing some random ideas to see if can see some relation between two different sector like education and healthcare. All these discussions were fun and very productive. In the end we decided that we want to do something with education but details were not decided.
  
After coming back home I thought of looking back into the data and see if I can find something interesting. With further exploration I decided to check what percentage of the monthly expenditure people are spending on education and health-care. I worked almost all night to write R code to see this behavior across different states. I noticed that though people&#8217;s per month expenditure has not gone much up but share of education and health-care has gone up  significantly. What does this mean ?
  
_&#8211; If the expenditure on education and health-care has gone up then expenditure on other items would come down?_
  
 _&#8211; Are people saving less because of this ?_
  
On next day 11th August I discussed my finding with [Arnab](http://www.iimb.ernet.in/user/55/arnab-mukherji) and he suggested that may be I should  look at the how does tuition fees of the school/colleges has gone up during those period. I got following after I plotted that for Karnataka.
  
[<img class="aligncenter size-full wp-image-897" alt="urban" src="http://neependra.net/wp-content/uploads/2013/08/urban1.png" width="685" height="400" />](http://neependra.net/wp-content/uploads/2013/08/urban1.png)

> mpce = Monthly per capita expenditure
  
> urbanEE = Total Education expenditure in Urban area
  
> urbanPE = private tutor/ coaching centre in Urban area
  
> urbanTE = Education expenditure for tuition and other fees (school, college, etc.) in Urban area

From above we see that because of rise in tuition fee, expenditure in education has gone up till  2007. What is surprising is that even though after 2007 the tuition fee has not gone up, we still  see rise in overall education expenditure. This trend is same for urban and rural area. So, some other kind of expenditure in education might have caused this. Looking at more closely we found the post 2007, the expenditure on the private coaching/tutor has gone up. So now people are paying high tuition fee and spending in private coaching as well. The new graph look like following:-
  
[<img class="aligncenter size-full wp-image-894" alt="urban_withPE" src="http://neependra.net/wp-content/uploads/2013/08/urban_withPE1.png" width="970" height="400" />](http://neependra.net/wp-content/uploads/2013/08/urban_withPE1.png)
  
Is this good for overall society ?
  
The above graphs is just for Karnataka. It is very easy to look above data for other states with &#8220;R&#8221; :-

> &#8211; install.packages(&#8220;shiny&#8221;)
  
> &#8211; shiny::runGist(&#8216;6217186&#8217;)

It would open up a interactive web-UI.
  
So this was [our final submission for the hackathon competition.](https://dl.dropboxusercontent.com/u/109338774/PolicyMemo_Shadowfax.doc) We were not able find a relevent policy and was not able to coin new policy due to lack of time. But to my surprise we were selected for the final round and invited to present it on 13th August in front of judges. The entire team of judges for the Hackthon was [Varsha Joshi, (Director Census Operation, GoI)](http://www.linkedin.com/pub/varsha-joshi/27/b40/167)[Sridhar Pabbisetty (Policy Consultant, Govt. of Karnataka) ](http://www.linkedin.com/in/psridhar)[Hema Swaminathan (IIM Bangalore](http://www.iimb.ernet.in/user/66/hema-swaminathan)), [Arnab Mukherji (IIM Bangalore)](http://www.iimb.ernet.in/user/55/arnab-mukherji).Though we gave our best shot but because of lack of policy statement we were not able to make it  for any rewards.
  
I anyway need to at IIM on 13th, so I decided to attend the entire day event. I attended Plenary Address by [Professor Gita Sen](http://www.iimb.ernet.in/user/120/gita-sen), which was about human development. She mentioned that India has not spent much on the human development like in education as compared to other countries. This raised a question to me :-

> From the data I showed earlier it is clear that people are spending thier own money to get education. Shouldn&#8217;t the government make policies to make the sure that teachers in the college/schools teach properly so that student should have to go the private coaching/tutor. The money spent on private coaching can be saved and used some where else.

The other sessions I attended on:-
  
&#8211; Affordable Housing (Ideas from the ground)
  
&#8211; ICTs as Infrastructure &#8211; Through the Gender Prism &#8211; Anita Gurumurthy (IT for Change)
  
&#8211; Rural Women Journalists Take on New Media Shalini Joshi ([Khabar Lehariya](http://www.khabarlahariya.org/))
  
&#8211; The Janaagraha-Brown Citizenship Index:Rationale, Bangalore Study and Plans
  
&#8211; Public Problem Solving
  
At the end of day I saw documentary about group of women who created all [ladies Jamaat](http://www.stepswomenjamaat.org/) (Jamaat is caste based group which can legal action in the community) to challenge Jamaat which were only run the males. It was very inspiring.
  
I had learnt a lot of new things in last few days. I got new perspective to look at things.
  
Even after  66 years independence we have not progressed as we should have been. Somehow this can be co-related to to policy that has been chosen by our leaders. To have a impact on large scale, right policy is needed. I&#8217;ll try to dig more into policies using different datasets in coming months.
  
Happy policy hacking!!!