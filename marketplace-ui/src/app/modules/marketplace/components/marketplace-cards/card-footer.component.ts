import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActionButtonComponent } from 'src/app/core/components/crud/actions/action-button.component';
import { RefreshableComponent } from 'src/app/core/util/refreshable.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'card-footer',
    template: `
        <div>
            <action-button type="link" label="visualizar" [icon]=""></action-button>
        </div>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styles: [':host { display: block; }'],
    imports: [SharedModule, ActionButtonComponent],
})
export class CardFooterComponent extends RefreshableComponent {}
