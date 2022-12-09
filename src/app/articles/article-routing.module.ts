import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
    {
        path:'article',
        component:ArticleListComponent
    },
    {path:'article/:id',
    component:ArticleDetailsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
