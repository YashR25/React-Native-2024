export class Place {
  constructor(title, image, location) {
    this.title = title;
    this.image = image;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
