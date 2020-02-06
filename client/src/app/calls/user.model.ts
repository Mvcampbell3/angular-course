export class User {
  constructor(
    first_name: string,
    last_name: string,
    title: string,
    location: {},
    dob: { date: string, age: number },
    picture: { large: string, medium: string, thumbnail: string }
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.title = title;
    this.location = location;
    this.dob = dob;
    this.picture = picture
  }

  first_name: string;
  last_name: string;
  title: string;
  location: {};
  dob: { date: string, age: number };
  picture: { large: string, medium: string, thumbnail: string }
}