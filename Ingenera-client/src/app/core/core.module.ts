import {
    ModuleWithProviders,
    NgModule,
    Optional,
    SkipSelf
} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthGuard } from './guards';
import { AppRoutingModule } from '../../app/app-routing.module';




// Import components
import {
    AppHeaderComponent
} from '../core/components/app-header';

const APP_COMPONENTS = [
    AppHeaderComponent
];

// Pipes
import {
    OrderBy,
    TranslatePipe
} from '../core/pipes';
const PIPES=[TranslatePipe]

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    declarations: [...APP_COMPONENTS,...PIPES],
    providers: [
        AuthGuard
    ],
    exports: [
        ...APP_COMPONENTS,
        ...PIPES,
        BrowserAnimationsModule,
        AppRoutingModule
        ]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
