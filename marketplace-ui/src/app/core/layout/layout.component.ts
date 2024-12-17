import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/core/layout/components/footer/footer.component';
import { SidebarComponent } from 'src/app/core/layout/components/sidebar/sidebar.component';
import { TopbarComponent } from 'src/app/core/layout/components/topbar/topbar.component';
import { LayoutService } from 'src/app/core/layout/service/layout.service';
import { BaseComponent } from 'src/app/core/util/base.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    templateUrl: './layout.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [SharedModule, SidebarComponent, TopbarComponent, FooterComponent, RouterOutlet, NgIf, NgClass, AsyncPipe],
})
export class LayoutComponent extends BaseComponent {
    constructor(public layoutService: LayoutService) {
        super();
    }
}
