import { Subscription } from 'rxjs';

import  HttpCaller from './httpCaller';

export class Posts {
    dataSub: Subscription;

    constructor() {        
    }

    getPosts() {
       const caller = new HttpCaller("https://jsonplaceholder.typicode.com/posts");
   
        this.dataSub = caller.ResponseListener()
        .subscribe((response: string) => {
           document.getElementById("code").innerHTML = response;
           console.log('Hello from Typescript');
        });   
   }

   onDestroy() {
       this.dataSub.unsubscribe();
   }
}

function start() {
    const posts = new Posts();
    posts.getPosts();

}

start();
