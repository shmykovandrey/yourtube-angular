import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import PageNotFoundComponent from './page-not-found/page-not-found.component';
import SearchResultsBlockComponent from './youtube/components/search-results-block/search-results-block.component';

const routes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  { path: '', component: SearchResultsBlockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
