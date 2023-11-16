<img width="868" alt="image" src="https://github.com/fjh321/personal-express-project-FJH/assets/64885403/d23a60b5-0b7b-4bca-8faa-b6b35ff941f6">

## Personal Express Project

For this app I wanted to create a movie rating app where users can submit a movie, a corresponding review and the rating they think it deserves. Then, other users could show their agreement with certain reviews but upvoting that specific review.

## What I did to build this app:
I used HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB to code this project.

I used three inputs for this projects to extract values from the user. One input was for the movie name, the second for movie review from the user, and the third for the user's rating of that movie from 0-9 (9 being the best/highest rating). I then used a thumbs up icon as an element with an event listener that would then trigger a put request on the back end to increment its score by one showing how many people were in agreement with the users three inputs. 

I enjoyed making this app because I enjoy watching movies in almost every genre and wanted to implement something that could take into account other users' opinions in a simple way. I decided an upvote counter in the form of a CRUD PUT request would be a simple solution that would satisfy this idea. 

## Lessons Learned :
* CRUD requests became more easy to decipher and implement
* window location reload methods can affect the results shown on your page/DOM.


## Installation

1. Clone repo
2. run `npm install`

## Usage

1. run `npm run savage`
2. Navigate to `localhost:5050`
