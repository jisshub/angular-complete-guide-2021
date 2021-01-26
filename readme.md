## Creating component using cli

```terminal
ng g c <component-name> --skipTests=true
```

# Data Binding

Output data from typeScript code to template

![](./screenshot/image-1.jpg)

## String Interpolation

```ts
export class ServerComponent implements OnInit {
  serverId = 'Server455';
  serverStatus = 'Online';

```

```html
<p>server {{serverId}} is {{serverStatus}} now!</p>
```

## Property Binding

- We bind code into a property of html element.

```html
<button mat-raised-button color="primary" [disabled]="allowDisable">
  Add Server
</button>
```

```ts
allowDisable = true;
  constructor() {
  setTimeout(() => {
    this.allowDisable = false;
  }, 2000);}
```

- We set a property to enable/disable the button. Initially button disabled,
  after 2sec it's enables.

## Event Binding

- Binding a function/method to an event and execute that function when that event fires.

```ts
serverChangeData = 'Server not created';
onServerChange(){
    this.serverChangeData = "server created!";
  }
```

```html
<button
  mat-raised-button
  color="primary"
  [disabled]="allowDisable"
  (click)="onServerChange()"
>
  Add Server
</button>
<mat-toolbar-row>{{serverChangeData}}</mat-toolbar-row>
```

## Passing and using data with event binding

_$event_ is the data emitted with the event. To get the data, v pass $event as
an argument to the method v r calling.

```html
<form>
  <mat-form-field>
    <mat-label>Server Name: </mat-label>
    <input matInput name="server" id="server" (input)="onServerAdd($event)" />
  </mat-form-field>
  <p>{{serverName}}</p>
</form>
```

```ts
serverName = null;
  onServerAdd(eventData:any){
    this.serverName = eventData.target.value;
  }
```

- _input_ event fires and entered data is stored in _$event_. value later passed to
  _serverName_ variable.

## Two Way Binding - Using ngModel Directive

- Combination of property and event binding

  ```ts
  serverAddress = null;
  ```

  ```html
  <mat-form-field>
    <mat-label>Server Address: </mat-label>
    <input
      matInput
      name="serverAdde"
      id="serverAddr"
      [(ngModel)]="serverAddress"
    />
  </mat-form-field>
  ```

  - here data inputted is read and printed on template at same time. no need to use
    an input event neither use an $event to get event data.

---

# Directives

Directives are instructions in the DOM.

## using ngIf to output data conditionally

```ts
  serverCreated: boolean = false;
  onServerChange(){
    this.serverCreated = true;
  }

```

```html
<p *ngIf="serverCreated">
  server is created, name is {{serverName}} with address {{serverAddress}}
</p>
```

- Show paragraph element when serverCreated turns to true.

## Styling element with ngStyle directive

```html
<p [ngStyle]="{backgroundColor: checkServerStatus()}">
  server {{serverId}} is {{serverStatus}} now!
</p>
```

```ts
  checkServerStatus(){
    return this.serverStatus === 'Online' ? 'red': 'yellow'
  }
```

here v bind css style to ngStyle directive. and based on server Status, background color of p element updates.

## Outputtin list using ngFor

```html
<ul *ngFor="let item of serverArr">
  <li>{{item}}</li>
</ul>
```

```ts
serverArr = ['server1', 'server2', 'server3'];
```

---

# Components and DataBinding

## Binding to Custom properties

### Input Decorator

Binding a custom property of child component to parent component using **@Input()** decorator.

**Example:**

Child Component is _server-element component_.

**server-element.component.ts**

```ts
@Input() element: {type: string, name: string, content: string};
```

Parent component is _app component_.

**app.component.html**

```html
<app-server-element
  *ngFor="let serverElement of serverElements"
  [element]="serverElement"
></app-server-element>
```

---

## Binding to Custom Events

Bind custom events to app-cockpit component.

**app.component.html**

```html
<app-cockpit
  (serverCreated)="onServerAdded($event)"
  (blueprintCreated)="onBlueprintAdded($event)"
>
</app-cockpit>
```

**app.component.ts**

```ts
onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
  });
  }
```

Next v create two **EventEmitter** objects in app cockpit component.

**EventEmitter** is an object that allows to emit events.

**cockpit.component.ts**

```ts
export class CockpitComponent implements OnInit {
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
}
```

Next v can emit the custom events _serverCreated_ and _blueprintCreated_.

**cockpit.component.ts**

```ts
onAddServer() {
    this.serverCreated.emit({serverName: "jjfgd", serverContent: "dasdasd"})
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: "kjhk", serverContent: "rtyrt"})
  }
```

Next v have to make this events listenable from outside the **cockpit component**. To do that v attach **@Ouput()** decorator before both events. Then this events are listenable to **App component**. Thus components can communicate each other.

**cockpit.component.ts**

```ts
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
}
```

---

## Using Local Reference in Template

A **Local Reference** can be placed with any html element in the template.

This local reference we set hold as a reference to that html element not just to the value v enter.

We can use this local reference anywhere in the template, but not in typescript code.

**cockpit.component.html**

```html
<input type="text" class="form-control" #newServerName />
<button class="btn btn-primary" (click)="onAddServer(newServerName)">
  Add Server
</button>
```

_newServerName_ is the local reference set to the input element.

Pass that reference as an arg to **onAddServer()** function.

**cockpit.component.ts**

```ts
  onAddServer(name: string) {
    console.log(name);
    this.serverCreated.emit({serverName: "jjfgd", serverContent: "dasdasd"})
  }
```

On Component file, v get that argument passed to a parameter called name.

**Note**: This local reference refers the element v set into.

To get the value of that element, use _value_ property on it.

**cockpit.component.ts**

```ts
onAddServer(name: HTMLInputElement) {
  console.log(name.value);
}
```

---

## Getting Access to Template & DOM with @ViewChild

First v have to set a local reference to the element.

**cockpit.component.html**

```html
<input type="text" class="form-control" #serverContentInput />
```

**cockpit.component.ts**

```ts
@ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

onAddServer(name: HTMLInputElement) {
  this.serverCreated.emit({serverName: name.value, serverContent: this.serverContentInput.nativeElement.value})
}
```

Argument v pass to **@ViewChild** is the selector of the element.

**@ViewChild** is of type **ElementRef**.

To get access to the value of element, v use _nativeElement.value_ property.

Thus v get access to the underlying element and it's value by setting a **local reference** and **@ViewChild**

---
