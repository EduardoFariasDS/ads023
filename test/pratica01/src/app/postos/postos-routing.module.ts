import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostosPage } from './postos.page';

const routes: Routes = [
  {
    path: '',
    component: PostosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostosPageRoutingModule {}
