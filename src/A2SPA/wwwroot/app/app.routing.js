"use strict";
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var index_component_1 = require("./index.component");
var contact_component_1 = require("./contact.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Index' } },
    { path: 'contact', component: contact_component_1.ContactComponent, data: { title: 'Contact' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, index_component_1.IndexComponent, contact_component_1.ContactComponent];
//# sourceMappingURL=app.routing.js.map