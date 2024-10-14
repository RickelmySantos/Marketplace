import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './layout.component.html',
 changeDetection: ChangeDetectionStrategy.OnPush,
 standalone: true,
 imports: []
})
export class LayoutComponent {
}
