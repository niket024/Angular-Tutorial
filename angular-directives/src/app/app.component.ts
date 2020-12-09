import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show1: boolean = true;
  show2: boolean = true;

  title: string = "Top 10 Movies";
  movies: Movie[] = [
    { title: 'Zootopia', director: 'Byron Howard, Rich Moore', cast: 'Idris Elba, Ginnifer Goodwin, Jason Bateman', releaseDate: 'March 4, 2016' },
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder', cast: 'Ben Affleck, Henry Cavill, Amy Adams', releaseDate: 'March 25, 2016' },
    { title: 'Captain America: Civil War', director: 'Anthony Russo, Joe Russo', cast: 'Scarlett Johansson, Elizabeth Olsen, Chris Evans', releaseDate: 'May 6, 2016' },
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer', cast: 'Jennifer Lawrence, Olivia Munn, Oscar Isaac', releaseDate: 'May 27, 2016' },
  ]

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];  
  selectedValue: string= 'One'; 
}
  

class Movie {
  title: string |undefined;
  director!: string;
  cast!: string;
  releaseDate!: string;
}

class item {  
  name!: string;  
  val!: number;  
}  