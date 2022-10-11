# Name that tune

Guess dat tune! Such gifs!

This was the glorious hack with the CareScribe design and dev team. Participants join, enter a name and then enter a series of guesses when they hear music.
The quiz runner needs a way to play short clips of music - we ran this over zoom playing clips from YouTube and Spotify using the "share sound" option in zoom.
The quiz runner should visit `/admin` to change rounds - clicking 'up' on the number input will make the UI change for all the participants, allowing them to enter a guess for that round.
It is all very manual and not very smooth. When we played there was a lot of people needing to go back and enter a guess for a previous round because their WebSocket connection had failed or something so they never saw the correct screen. This aspect made the game more enjoyable if anything.

To collate scores we just tailed the logs in Heroku and added up the answers - we'll do some more hacking next time we play the game and add a proper admin screen.

## Structure

It's a create-react-app app for front-end at `/react-ui`. All the usual CRA stuff applies once you are in that folder.
It's an express/socket.io server in the backend in the root.

## In development

```
npm install
yarn start
```

In another terminal:

```
cd react-ui
npm install
yarn start
```

## To make production build

In root

```
yarn build
```
