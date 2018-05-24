import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { CalbmiPage } from '../calbmi/calbmi';
import { CalbmrPage } from '../calbmr/calbmr';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalbmiPage;
  tab3Root = CalbmrPage;

  constructor() {

  }
}
