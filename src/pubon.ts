import { Subscription } from 'rxjs';

import  HttpCaller from './httpCaller';

export class Greeting {
    dataSub: Subscription;

    constructor() {
        this.greeting('');
    }

    greeting(greeting: string) {
       const caller = new HttpCaller("https://jsonplaceholder.typicode.com/posts");
   
        this.dataSub = caller.getResponseListener()
        .subscribe((response: string) => {
           document.getElementById("code").innerHTML = response;
           console.log('Hello from Typescript');
        });
       console.log(greeting);
   }
}

function start() {
    const greet = new Greeting();
    greet.greeting('');

}

start();
