import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinModalPage } from './join-modal.page';

describe('JoinModalPage', () => {
  let component: JoinModalPage;
  let fixture: ComponentFixture<JoinModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
