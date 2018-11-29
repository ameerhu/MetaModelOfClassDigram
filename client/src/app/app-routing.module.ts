import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';

const routes: Route[] = [
  { path: '', component: ProductListComponent },
  { path: 'advSearch', component: AdvSearchComponent},
  { path: 'searchDetail', component: SearchDetailComponent},
  { path: 'list', component: ProductListComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
