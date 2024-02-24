import { Component, OnInit, Input } from '@angular/core';
import { data } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoCover:string="https://thmais.com.br/wp-content/uploads/2024/01/20170724-velozes-furiosos-papo-de-cinema.jpg";
  @Input()
  contentTitle:string="";
  @Input()
  contentDescription:string="";
  private Id:string|void="0"

  constructor(
    // private route:ActivatedRoute;
  ) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe( value => console.log(this.id.get("id")))
  }

  // setValuesToComponent(Id:string | null){
  //   const result = data.filter(article => article.Id === Id)
    
  //   if(!result){
  //     this.contentTitle = result.title
  //   }
  // }

}
