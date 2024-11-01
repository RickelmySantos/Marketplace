import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'topbar-header',
    template: `
        <h1 class="cursor-pointer">{{ title }}</h1>
    `,
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [SharedModule, RouterLink],
    styles: [':host{display:block; padding: 4rem; color: white; font-size: 3rem;}'],
})
export class TopBarHeaderComponent {
    @Input()
    title: string;
}
