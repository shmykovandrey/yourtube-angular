import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PageNotFoundComponent from './youtube/pages/page-not-found/page-not-found.component';
import PageMainSearchResultComponent from './youtube/pages/page-main-search-result/page-main-search-result.component';
import PageLoginComponent from './youtube/pages/page-login/page-login.component';

const routes: Routes = [
  { path: '', component: PageMainSearchResultComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'detailed/:id', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
