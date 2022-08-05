import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PageNotFoundComponent from './youtube/pages/page-not-found/page-not-found.component';
import PageMainSearchResultComponent from './youtube/pages/page-main-search-result/page-main-search-result.component';

const routes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  { path: '', component: PageMainSearchResultComponent },
  { path: 'login', component: PageNotFoundComponent },
  { path: 'detailed/:id', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
