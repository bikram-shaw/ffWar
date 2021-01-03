import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferEarnPage } from './refer-earn.page';

describe('ReferEarnPage', () => {
  let component: ReferEarnPage;
  let fixture: ComponentFixture<ReferEarnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferEarnPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferEarnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
