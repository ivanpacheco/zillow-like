import { Component} from '@angular/core';

//Services
import { SearchService } from '../../../services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  searchText:string = ''

  constructor(private searchService: SearchService){

  }

  setSearch(){       
    this.searchService.setSearch(this.searchText)
  }



}
