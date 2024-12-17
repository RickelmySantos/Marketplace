import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
    selector: 'app-marketplace',
    template: ``,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styles: [':host { display: block; padding: 7rem 20rem; }'],
    imports: [SharedModule],
})
export class MarketplaceComponent {}
