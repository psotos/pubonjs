import { Observable, Subject } from 'rxjs'; 

export default class HttpCaller {
  url = 'https://jsonplaceholder.typicode.com/posts';
  responseListener = new Subject<string>();

  constructor(url: string) {
    // this.url = url;
    this.getData();
  }

  getResponseListener(): Observable<string> {
    return this.responseListener.asObservable();
  }

 getData() {
    let data: string;
    // const testUrl = 'https://jsonplaceholder.typicode.com/posts';
    console.log('Hello from getData()');

    fetch(this.url)
      .then(function(response) {
        console.log(`received a response from ${this.url}`);

        this.responseListener.next(response.json());
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }
}
