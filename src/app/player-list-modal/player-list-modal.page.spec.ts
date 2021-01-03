import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayerListModalPage } from './player-list-modal.page';

describe('PlayerListModalPage', () => {
  let component: PlayerListModalPage;
  let fixture: ComponentFixture<PlayerListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
