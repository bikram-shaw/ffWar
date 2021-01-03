import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultModelPage } from './result-model.page';

describe('ResultModelPage', () => {
  let component: ResultModelPage;
  let fixture: ComponentFixture<ResultModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
