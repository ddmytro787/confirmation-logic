import { Injector } from '@angular/core';

export let ModuleInjector: Injector;

export function setModuleInjector(injector: Injector) {
    ModuleInjector = injector;
}
