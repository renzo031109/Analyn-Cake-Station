import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages(){
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id === id)
  }

  constructor() { }

}

const IMAGES = [
  {"id":1, "category": "adult", "caption":"Customize Two piece Bra Cake", "url": "assets/img/2piece.jpg"},
  {"id":2, "category": "kids", "caption":"Customize Barbie Cake", "url": "assets/img/barbie1.jpg"},
  {"id":3, "category": "adult", "caption":"Customize Alcohol in a Barrel", "url": "assets/img/barrel1.jpg"},
  {"id":4, "category": "adult", "caption":"Customize Alcohol in a Barrel", "url": "assets/img/barrel2.jpg"},
  {"id":5, "category": "kids", "caption":"Customize Ben10 Cake", "url": "assets/img/ben10.jpg"},
  {"id":6, "category": "adult", "caption":"Customize Bomb", "url": "assets/img/bomb.jpg"},
  {"id":7, "category": "kids", "caption":"Customize Cars Cake", "url": "assets/img/cars.jpg"},
  {"id":8, "category": "baby", "caption":"Customize Christening Cake", "url": "assets/img/christening1.jpg"},
  {"id":9, "category": "baby", "caption":"Customize Christening Cake", "url": "assets/img/christening2.jpg"},
  {"id":10, "category": "kids", "caption":"Customize Clash of Clan Cake", "url": "assets/img/clashofclan.jpg"},
  {"id":11, "category": "kids", "caption":"Cupcake Ben 10", "url": "assets/img/cupben10.jpg"},
  {"id":12, "category": "kids", "caption":"Cupcake Cars", "url": "assets/img/cupcars.jpg"},
  {"id":13, "category": "kids", "caption":"Cupcake Flower", "url": "assets/img/cupflower1.jpg"},
  {"id":14, "category": "kids", "caption":"Customize Flower Cake", "url": "assets/img/flower1.jpg"},
  {"id":15, "category": "kids", "caption":"Customize Flower Cake", "url": "assets/img/flower2.jpg"},
  {"id":16, "category": "kids", "caption":"Customize Hello Kitty Cake", "url": "assets/img/hellokitty1.jpg"},
  {"id":17, "category": "kids", "caption":"Customize Hello Kitty Cake", "url": "assets/img/hellokitty2.jpg"},
  {"id":18, "category": "adult", "caption":"Customize Mothers day Cake", "url": "assets/img/mothersday.jpg"},
  {"id":19, "category": "kids", "caption":"Customize Patroll Cake", "url": "assets/img/patroll.jpg"},
  {"id":20, "category": "kids", "caption":"Customize Piggy Cake", "url": "assets/img/piggy.jpg"},
  {"id":21, "category": "adult", "caption":"Customize Red horse Cake", "url": "assets/img/redhorse1.jpg"},
  {"id":22, "category": "kids", "caption":"Customize Shirt Cake", "url": "assets/img/shirt.jpg"},
  {"id":23, "category": "kids", "caption":"Customize Smiley Cake", "url": "assets/img/smiley1.jpg"},
  {"id":24, "category": "kids", "caption":"Customize Sofia Cake", "url": "assets/img/sofia1.jpg"},
  {"id":25, "category": "kids", "caption":"Customize Sofia Cake", "url": "assets/img/sofia2.jpg"},
  {"id":26, "category": "adult", "caption":"Customize Teacher Cake", "url": "assets/img/teacher.jpg"},
  {"id":27, "category": "adult", "caption":"Customize Wedding Cake", "url": "assets/img/wedding1.jpg"},
  {"id":28, "category": "adult", "caption":"Customize Wedding Cake", "url": "assets/img/wedding2.jpg"},
  {"id":29, "category": "adult", "caption":"Customize Wedding Cake", "url": "assets/img/wedding3.jpg"},
  {"id":30, "category": "adult", "caption":"Customize Pink Cake", "url": "assets/img/pink.jpg"},
  {"id":31, "category": "kids", "caption":"Customize Spiderman Cake", "url": "assets/img/spiderman1.jpg"},
  {"id":32, "category": "kids", "caption":"Cupcake Spiderman", "url": "assets/img/cupcakespiderman1.jpg"},
  
  
]
