import { InjectionToken } from '@angular/core';
import { CoreIcons, CoreIconsType } from 'src/app/core/util/styles/core.icons';
import { HomeIcons, HomeIconsType } from 'src/app/modules/marketplace/home/home.icons';

type AppIconsType = {
    readonly core: CoreIconsType;
    readonly home: HomeIconsType;
};

export const AppIcons: AppIconsType = {
    core: CoreIcons,
    home: HomeIcons,
};

export const APP_ICONS = new InjectionToken<AppIconsType>('appIcons');
