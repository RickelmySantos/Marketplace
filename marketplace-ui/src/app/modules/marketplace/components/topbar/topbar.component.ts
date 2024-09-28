

import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';


@Component({
  selector: 'topbar-app',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SharedModule, RouterLink, ReactiveFormsModule, ButtonModule],
})
export class TopbarComponent {

  searchControl = new FormControl('');

  constructor() { }

}
