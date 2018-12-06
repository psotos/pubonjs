# PuBONjs
**Pu**sh **B**ased **O**bject **N**otification. A framework agnostic Javascript library, for interfacing with [Pubon-Spring](https://github.com/psotos/pubon), in order to deliver a full stack reactive platform similar to Google's Firestore.

# goal
The goal of this library is to create a free, framework agnostic, full stack reactive platform for receiving object change notifications when they occur on the Spring 5 back end, even if the receiving client didn't make those changes.

# technology
Spring 5 Reactive via our PuBON Spring library will send change notifications, which contain the updated document or collection along with some metadata via HTTP-2 push notitifications. Pubonjs will then take that data and either create a new observable or update an existing one.
