import { StoreComponent } from '../store/store.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { CartComponent } from '../cart/cart.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
export var routes = [
    { path: 'about', component: AboutComponent },
    { path: 'store', component: StoreComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'cart', component: CartComponent },
    { path: 'productdetail/:productId', component: ProductDetailComponent },
    { path: '', redirectTo: '/store', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map