import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material';
import { LayoutModule } from '@angular/cdk/layout';
import {OverlayContainer} from '@angular/cdk/overlay';
import { HighchartsChartModule } from 'highcharts-angular';
import { ModelModule } from './model/model.module';


import { AppComponent } from './app.component';
import { ChapNavComponent } from './chap-nav/chap-nav.component';
import { ChapDashboardComponent } from './chap-dashboard/chap-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { ChapLoginComponent } from './chap-login/chap-login.component';
import { ChapStatisticsComponent } from './chap-statistics/chap-statistics.component';
import { ChapProductsComponent } from './chap-products/chap-products.component';
import { ChapInventoryComponent } from './chap-inventory/chap-inventory.component';
import { ChapAdminComponent } from './chap-admin/chap-admin.component';
import { ChapSettingsComponent } from './chap-settings/chap-settings.component';
import { ChapHelpComponent } from './chap-help/chap-help.component';
import { ChapMonitorComponent } from './chap-monitor/chap-monitor.component';
import { ChapProductsalesComponent } from './chap-productsales/chap-productsales.component';
import { ChapSalesgrowthComponent } from './chap-salesgrowth/chap-salesgrowth.component';
import { ChapugMapComponent } from './chapug-map/chapug-map.component';
import { ChapOrderComponent } from './chap-order/chap-order.component';
import { ProdDashboardComponent } from './prod-dashboard/prod-dashboard.component';
import { ChapCartDetailComponent } from './chap-cart-detail/chap-cart-detail.component';
import { ChapCheckoutComponent } from './chap-checkout/chap-checkout.component';
import { ChapEditProductComponent } from './chap-edit-product/chap-edit-product.component';
import { ChapContactComponent } from './chap-contact/chap-contact.component';
import { ChapDistroComponent } from './chap-distro/chap-distro.component';
import { ChapPieComponent } from './chap-pie/chap-pie.component';
import { ChapAddMemberComponent } from './chap-add-member/chap-add-member.component';

@NgModule({
  declarations: [
    AppComponent,
    ChapNavComponent,
    ChapDashboardComponent,
    ChapLoginComponent,
    ChapStatisticsComponent,
    ChapProductsComponent,
    ChapInventoryComponent,
    ChapAdminComponent,
    ChapSettingsComponent,
    ChapHelpComponent,
    ChapMonitorComponent,
    ChapProductsalesComponent,
    ChapSalesgrowthComponent,
    ChapugMapComponent,
    ChapOrderComponent,
    ProdDashboardComponent,
    ChapCartDetailComponent,
    ChapCheckoutComponent,
    ChapEditProductComponent,
    ChapContactComponent,
    ChapDistroComponent,
    ChapPieComponent,
    ChapAddMemberComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    HighchartsChartModule,
    AppRoutingModule,
    ModelModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(overlayContainer: OverlayContainer ) {

    overlayContainer.getContainerElement().classList.add('chapchap-light-theme');

  }

 }
