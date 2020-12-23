import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppSettings } from '../../../app.settings';
import { Settings } from '../../../app.settings.model';
import { TablesService, Element } from '../../tables/tables.service';
import { ApiService } from '../../../@core/services/api.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  public displayedColumns = ['position', 'name', 'weight', 'symbol'];
  public dataSource: any;
  public settings: Settings;
  @Input() cards = [];
  constructor(
    public appSettings: AppSettings,
    private tablesService: TablesService,
    // private apiService: ApiService
  ) {
    this.settings = this.appSettings.settings;
    this.dataSource = new MatTableDataSource<Element>(this.tablesService.getData());
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.apiService.getCards().subscribe(
    //   data => {
    //     // @ts-ignore
    //     this.cards = data;
    //   },
    //   error => console.log(error)
    // );
  }
  // tslint:disable-next-line:typedef
  cardClicked(card) {
    console.log(card);
  }
}
