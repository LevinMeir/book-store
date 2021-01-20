import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title() {
  throw new Error('Method not implemented.');
}
books = [
  {
    title: 'שולחן ערוך',
    author: 'יוסף קארו',
    price: 100,
    quantity:1,
    desc:'ספר עיקרי בהלכה',
    cover: 'https://www.greenfieldjudaica.com/itemimageslarge/SAFE-SLL.JPG'
  },
  {
    title: 'ערוך השולחן',
    author: 'רב אפשטיין',
    price: 70,
    quantity:10,
    desc:'פירוש על שו"ע',
    cover: 'https://lh3.googleusercontent.com/proxy/F2mDtDwfnkdnmefQVnnjj4aLnzlDDwoxaxeyCt6tePV8vYFHJ1RyqMMeGV1DkfWnWWnjm6aBSzpq-H3qzdMZNAROWGRS1FaK45Ema1WuTA'
  },
  {
    title: 'תלמוד בבלי',
    author: 'רבינא רב אשי',
    price: 2070,
    quantity:0,
    desc:'שס ',
    cover: 'https://lh3.googleusercontent.com/proxy/F2mDtDwfnkdnmefQVnnjj4aLnzlDDwoxaxeyCt6tePV8vYFHJ1RyqMMeGV1DkfWnWWnjm6aBSzpq-H3qzdMZNAROWGRS1FaK45Ema1WuTA'
  }
]
}
