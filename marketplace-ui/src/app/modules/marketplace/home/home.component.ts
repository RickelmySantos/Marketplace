import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from 'src/app/core/util/base.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-home',
    template: `
        <div>
            <h1>Home</h1>
        </div>
    `,

    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SharedModule],
})
export class HomeComponent extends BaseComponent {}
