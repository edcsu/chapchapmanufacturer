
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { ChapNavComponent } from './chap-nav/chap-nav.component';
import { ChapLoginComponent } from './chap-login/chap-login.component';
import { ChapOrderComponent } from './chap-order/chap-order.component';
import { ChapMonitorComponent } from './chap-monitor/chap-monitor.component';
import { ChapHelpComponent } from './chap-help/chap-help.component';
import { ChapSettingsComponent } from './chap-settings/chap-settings.component';
import { ChapAdminComponent } from './chap-admin/chap-admin.component';
import { ChapInventoryComponent } from './chap-inventory/chap-inventory.component';
import { ChapProductsComponent } from './chap-products/chap-products.component';
import { ChapStatisticsComponent } from './chap-statistics/chap-statistics.component';
import { ChapCheckoutComponent } from './chap-checkout/chap-checkout.component';
import { ChapCartDetailComponent } from './chap-cart-detail/chap-cart-detail.component';
import { ChapEditProductComponent } from './chap-edit-product/chap-edit-product.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: ChapLoginComponent
     },
    {
        path: 'nav',
        component: ChapNavComponent
    },
    {
        path: 'dashboard',
        component: ChapDashboardComponent
    },
    {
        path: 'stats',
        component: ChapStatisticsComponent
    },
    {
        path: 'products',
        component: ChapProductsComponent
    },
    {
        path: 'inventory',
        component: ChapInventoryComponent
    },
    {
        path: 'order',
        component: ChapOrderComponent
    },
    {
        path: 'admin',
        component: ChapAdminComponent
    },
    {
        path: 'settings',
        component: ChapSettingsComponent
    },
    {
        path: 'help',
        component: ChapHelpComponent
    },
    {
        path: 'monitor',
        component: ChapMonitorComponent
    }
    ,
    {
        path: 'cartdetail',
        component: ChapCartDetailComponent
    },
    {
        path: 'checkout',
        component: ChapCheckoutComponent
    },
    {
        path: 'editproduct',
        component: ChapEditProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
