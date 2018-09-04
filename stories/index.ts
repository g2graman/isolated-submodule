import { storiesOf } from '@storybook/angular';

import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CounterModule, routes } from '../src/counter/counter.module';
import { CounterComponent } from '../src/counter/counter.component';
import { counterReducer } from '../src/counter/counter.reducer';
import { CounterEffects } from '../src/counter/counter.effects';

storiesOf('Counter Component', module)
  .add('Rendered as root', () => ({
    component: CounterComponent,
    moduleMetadata: {
      declarations: (CounterModule as NgModule).declarations,
      imports: [
        CommonModule,

        RouterModule.forRoot([
          ...routes,
          {
            path: 'iframe.html', component: CounterComponent
          }
        ]),
        // @ts-ignore
        StoreModule.forRoot({ count: counterReducer }),
        EffectsModule.forRoot([CounterEffects])
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
  }}));
