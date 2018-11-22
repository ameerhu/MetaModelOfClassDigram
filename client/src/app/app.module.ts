import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { GravatarModule } from 'ngx-gravatar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule, MatBadgeModule } from '@angular/material';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Route[] = [
  { path: '', component: ProductListComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GravatarModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
