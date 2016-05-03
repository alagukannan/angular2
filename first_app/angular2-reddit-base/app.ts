import { bootstrap } from "angular2/platform/browser";
import { Component } from "angular2/core";

@Component({
 selector: 'hello-world',
template: `
<div>
 Hello world  {{name}}
 <ul>
    <li *ngFor="#name of names">Hello {{name}}</li>
 </ul>
</div>
 `
})
class HelloWorld {
    names: String[];
    constructor()
    {
        this.names = ['Al','Kananna','Alagu'];
    }
}

bootstrap(HelloWorld);