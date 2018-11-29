import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GravatarModule } from 'ngx-gravatar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CategoriesComponent } from './categories/categories.component';

import { MatToolbarModule, MatInputModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule, MatNativeDateModule, MatBadgeModule, MatMenuModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvSearchComponent } from './adv-search/adv-search.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    ProductListComponent,
    CategoriesComponent,
    SearchDetailComponent,
    AdvSearchComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    GravatarModule,
    LayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatBadgeModule,
    MatListModule,
    MatMenuModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
