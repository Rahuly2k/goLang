import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeExecutionPanelComponent } from './code-execution-panel.component';

describe('CodeExecutionPanelComponent', () => {
  let component: CodeExecutionPanelComponent;
  let fixture: ComponentFixture<CodeExecutionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeExecutionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeExecutionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
