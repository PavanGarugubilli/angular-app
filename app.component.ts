import { Component , OnInit} from '@angular/core';
import { TaleserviceService } from './taleservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  
 
  title = 'angualarapp';
  
  posts:any;

  constructor(private service:TaleserviceService) {}
   
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
  }

}