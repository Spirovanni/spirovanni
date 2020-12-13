import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
// import { BlankComponent } from './pages2/blank/blank.component';
// import { SearchComponent } from './pages2/search/search.component';
// import { NotFoundComponent } from './pages2/errors/not-found/not-found.component';
// import { ErrorComponent } from './pages2/errors/error/error.component';

export const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
            // { path: '', loadChildren: () => import('./pages2/dashboard/dashboard.module').then(m => m.DashboardModule), data: { breadcrumb: 'Dashboard' } },
            // { path: 'users', loadChildren: () => import('./pages2/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            // { path: 'dynamic-menu', loadChildren: () => import('./pages2/dynamic-menu/dynamic-menu.module').then(m => m.DynamicMenuModule), data: { breadcrumb: 'Dynamic Menu' }  },
            // { path: 'ui', loadChildren: () => import('./pages2/ui/ui.module').then(m => m.UiModule), data: { breadcrumb: 'UI' } },
            // { path: 'mailbox', loadChildren: () => import('./pages2/mailbox/mailbox.module').then(m => m.MailboxModule), data: { breadcrumb: 'Mailbox' } },
            // { path: 'chat', loadChildren: () => import('./pages2/chat/chat.module').then(m => m.ChatModule), data: { breadcrumb: 'Chat' } },
            // { path: 'form-controls', loadChildren: () => import('./pages2/form-controls/form-controls.module').then(m => m.FormControlsModule), data: { breadcrumb: 'Form Controls' } },
            // { path: 'tables', loadChildren: () => import('./pages2/tables/tables.module').then(m => m.TablesModule), data: { breadcrumb: 'Tables' } },
            // { path: 'schedule', loadChildren: () => import('./pages2/schedule/schedule.module').then(m => m.ScheduleModule), data: { breadcrumb: 'Schedule' } },
            // { path: 'maps', loadChildren: () => import('./pages2/maps/maps.module').then(m => m.MapsModule), data: { breadcrumb: 'Maps' } },
            // { path: 'charts', loadChildren: () => import('./pages2/charts/charts.module').then(m => m.ChartsModule), data: { breadcrumb: 'Charts' } },
            // { path: 'drag-drop', loadChildren: () => import('./pages2/drag-drop/drag-drop.module').then(m => m.DragDropModule), data: { breadcrumb: 'Drag & Drop' } },
            // { path: 'icons', loadChildren: () => import('./pages2/icons/icons.module').then(m => m.IconsModule), data: { breadcrumb: 'Material Icons' } },
            // { path: 'profile', loadChildren: () => import ('./pages2/profile/profile.module').then(m => m.ProfileModule), data: { breadcrumb: 'Profile' } },
            // { path: 'blank', component: BlankComponent, data: { breadcrumb: 'Blank page' } },
            // { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' } },
            // { path: 'search/:name', component: SearchComponent, data: { breadcrumb: 'Search' } }
      ]
    },
    // { path: 'landing', loadChildren: () => import('./pages2/landing/landing.module').then(m => m.LandingModule) },
    // { path: 'login', loadChildren: () => import('./pages2/login/login.module').then(m => m.LoginModule) },
    // { path: 'register', loadChildren: () => import('./pages2/register/register.module').then(m => m.RegisterModule) },
    // { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
    // { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules, // <- comment this line for activate lazy load
            relativeLinkResolution: 'legacy',
            // useHash: true
        })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
