import { Observable, Subject } from 'rxjs'; 

export default class HttpCaller {
  private _url = 'https://jsonplaceholder.typicode.com/posts';
  responseListener = new Subject<string>();

  constructor(url: string) {
    // this.url = url;
    this.getData();
  }

  get Url(): string {
    return this._url;
  }


  public ResponseListener() {
    return this.responseListener.asObservable();
  }

 getData() {
    let data: string;
    let url = this.Url;
    let resListener = this.responseListener;

    // const testUrl = 'https://jsonplaceholder.typicode.com/posts';
    console.log('Hello from getData()', this.Url);

    fetch(url)
      .then(function(response) {
        console.log('received a response from ', url);
        response.json()
        .then(res => {
          let newRes: string = JSON.stringify(res);
          resListener.next(newRes);
        })        
        
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }
}
