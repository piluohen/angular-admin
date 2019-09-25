import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngCountupComponent } from './ang-countup/ang-countup.component';
import { AngPreviewComponent } from './ang-preview/ang-preview.component';
import { AngScrollListComponent } from './ang-scroll-list/ang-scroll-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/demo/ang-countup',
        pathMatch: 'full'
      },
      {
        path: 'ang-countup',
        component: AngCountupComponent,
        data: {
          breadcrumb: 'ang-countup 组件'
        }
      },
      {
        path: 'ang-preview',
        component: AngPreviewComponent,
        data: {
          breadcrumb: 'ang-preview',
        }
      },
      {
        path: 'ang-scroll-list',
        component: AngScrollListComponent,
        data: {
          breadcrumb: 'ang-scroll-list',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
