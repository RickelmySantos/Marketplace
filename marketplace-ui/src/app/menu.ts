import { MenuItem } from 'primeng/api';
import { IconUtils } from 'src/app/core/util/styles/icon-util';
import { AppIcons } from 'src/app/icons';

export const MENU: MenuItem[] = [
    {
        label: `Home`,
        icon: IconUtils.convertToString(AppIcons.home.module),
        routerLink: ['/'],
    },
];
