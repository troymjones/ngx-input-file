import { Component } from '@angular/core';

@Component({
    selector: 'demo',
    templateUrl: 'demo.component.html'
})

export class DemoComponent {
    public model = new Array<File>();
    public model2 = new Array<File>();
}
