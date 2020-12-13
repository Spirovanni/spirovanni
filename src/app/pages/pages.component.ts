import { Component, OnInit, ViewChild, HostListener, ViewChildren, QueryList } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarDirective, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppSettings } from '../app.settings';
import { Settings } from '../app.settings.model';
import { rotate } from '../@theme/utils/app-animation';
import { MenuService } from '../@theme/components/menu/menu.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [ rotate ],
  providers: [ MenuService ]
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav: any;
  @ViewChild('backToTop') backToTop: any;
  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<PerfectScrollbarDirective>;
  public optionsPsConfig: PerfectScrollbarConfigInterface = {};
  public settings: Settings;
  public showSidenav = false;
  public showInfoContent = false;
  public toggleSearchBar = false;
  private defaultMenu: string; // declared for return default menu when window resized
  public menus = ['vertical', 'horizontal'];
  public menuOption: string;
  public menuTypes = ['default', 'compact', 'mini'];
  public menuTypeOption: string;

  constructor(public appSettings: AppSettings, public router: Router, private menuService: MenuService){
    this.settings = this.appSettings.settings;
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.optionsPsConfig.wheelPropagation = false;
    if (window.innerWidth <= 960){
      this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
    }
    this.menuOption = this.settings.menu;
    this.menuTypeOption = this.settings.menuType;
    this.defaultMenu = this.settings.menu;
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngAfterViewInit(){
    setTimeout(() => { this.settings.loadingSpinner = false; }, 300);
    this.backToTop.nativeElement.style.display = 'none';
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToTop();
      }
      if (window.innerWidth <= 960){
        this.sidenav.close();
      }
    });
    if (this.settings.menu === 'vertical') {
      this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    }
  }

  // tslint:disable-next-line:typedef
  public toggleSidenav(){
    this.sidenav.toggle();
  }

  // tslint:disable-next-line:typedef
  public chooseMenu(){
    this.settings.menu = this.menuOption;
    this.defaultMenu = this.menuOption;
    if (this.menuOption === 'horizontal'){
      this.settings.fixedSidenav = false;
    }
    this.router.navigate(['/']);
  }

  // tslint:disable-next-line:typedef
  public chooseMenuType(){
    this.settings.menuType = this.menuTypeOption;
  }

  // tslint:disable-next-line:typedef
  public changeTheme(theme){
    this.settings.theme = theme;
  }

  // tslint:disable-next-line:typedef
  public closeInfoContent(showInfoContent){
    this.showInfoContent = !showInfoContent;
  }

  @HostListener('window:resize')
  public onWindowResize(): void {
    if (window.innerWidth <= 960){
      this.settings.sidenavIsOpened = false;
      this.settings.sidenavIsPinned = false;
      this.settings.menu = 'vertical';
    }
    else{
      (this.defaultMenu === 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
      this.settings.sidenavIsOpened = true;
      this.settings.sidenavIsPinned = true;
    }
  }

  // tslint:disable-next-line:typedef
  public onPsScrollY(event){
    (event.target.scrollTop > 300) ? this.backToTop.nativeElement.style.display = 'flex' : this.backToTop.nativeElement.style.display = 'none';
  }

  // tslint:disable-next-line:typedef
  public scrollToTop() {
    this.pss.forEach(ps => {
      if (ps.elementRef.nativeElement.id === 'main'){
        ps.scrollToTop(0, 250);
      }
    });
  }

  // tslint:disable-next-line:typedef
  public closeSubMenus(){
    if (this.settings.menu === 'vertical'){
      this.menuService.closeAllSubMenus();
    }
  }
}
