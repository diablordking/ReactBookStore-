/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

 var defaultstate = [{
   "isbn": "9781593275846",
   "title": "Eloquent JavaScript, Second Edition",
   "subtitle": "A Modern Introduction to Programming",
   "author": "Marijn Haverbeke",
   "published": "2014-12-14T00:00:00.000Z",
   "publisher": "No Starch Press",
   "pages": 472,
   "website": "http://eloquentjavascript.net/"
 },
 {
   "isbn": "9781449331818",
   "title": "Learning JavaScript Design Patterns",
   "subtitle": "A JavaScript and jQuery Developer's Guide",
   "author": "Addy Osmani",
   "published": "2012-07-01T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 254,
   "website": "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
 },
 {
   "isbn": "9781449365035",
   "title": "Speaking JavaScript",
   "subtitle": "An In-Depth Guide for Programmers",
   "author": "Axel Rauschmayer",
   "published": "2014-02-01T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 460,
   "website": "http://speakingjs.com/"
 },
 {
   "isbn": "9781491950296",
   "title": "Programming JavaScript Applications",
   "subtitle": "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
   "author": "Eric Elliott",
   "published": "2014-07-01T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 254,
   "website": "http://chimera.labs.oreilly.com/books/1234000000262/index.html"
 },
 {
   "isbn": "9781593277574",
   "title": "Understanding ECMAScript 6",
   "subtitle": "The Definitive Guide for JavaScript Developers",
   "author": "Nicholas C. Zakas",
   "published": "2016-09-03T00:00:00.000Z",
   "publisher": "No Starch Press",
   "pages": 352,
   "website": "https://leanpub.com/understandinges6/read"
 },
 {
   "isbn": "9781491904244",
   "title": "You Don't Know JS",
   "subtitle": "ES6 & Beyond",
   "author": "Kyle Simpson",
   "published": "2015-12-27T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 278,
   "website": "https://github.com/getify/You-Dont-Know-JS/tree/master/es6%20&%20beyond"
 },
 {
   "isbn": "9781449325862",
   "title": "Git Pocket Guide",
   "subtitle": "A Working Introduction",
   "author": "Richard E. Silverman",
   "published": "2013-08-02T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 234,
   "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
 },
 {
   "isbn": "9781449337711",
   "title": "Designing Evolvable Web APIs with ASP.NET",
   "subtitle": "Harnessing the Power of the Web",
   "author": "Glenn Block, et al.",
   "published": "2014-04-07T00:00:00.000Z",
   "publisher": "O'Reilly Media",
   "pages": 538,
   "website": "http://chimera.labs.oreilly.com/books/1234000001708/index.html"
 }]

 export default function (state = defaultstate , action,payload ) {

   switch (action.type) {

     case 'BOOK_ADDED':
       console.log(action.payload)
       return [...state, {
           isbn: action.payload.isbn,
           title: action.payload.title,
           subtitle: action.payload.subtitle,
           author: action.payload.author,
           published: action.payload.published,
           publisher: action.payload.publisher,
           pages: action.payload.pages,
           website: action.payload.website

     }];
       break;
      default:
       return state
       break;
   }
 }
