import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';
import { FormsModule } from '@angular/forms';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Sign Up');
  });

  it('has a h1', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should have a user input', () => {
    const userInput = fixture.nativeElement.querySelector('input[type="text"]');
    expect(userInput).toBeTruthy();
  });

  it('should have an email input', () => {
    const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
    expect(emailInput).toBeTruthy();
  });

  it('should have a password input', () => {
    const passwordInput = fixture.nativeElement.querySelector('input[type="password"]');
    expect(passwordInput).toBeTruthy();
  });

  it('should have a repeatPassword input', () => {
const repeatPasswordInput = fixture.nativeElement.querySelector('input[type="repeatpassword"]');
expect(repeatPasswordInput).toBeTruthy();
  });

  it('should have a language select', () => {
    const languageSelect = fixture.nativeElement.querySelector('select[type="languages"]');
    expect(languageSelect).toBeTruthy();
  });
  it ('should have 4 language options in select', () => {
    const languageOptions = fixture.nativeElement.querySelectorAll('select option');
    expect(languageOptions.length).toBe(4);
  });
  it ('should have Spanish, English, French and Italian as language options', () => {
    const languageOptions = fixture.nativeElement.querySelectorAll('select option');
    expect(languageOptions[0].textContent).toBe('Spanish');
    expect(languageOptions[1].textContent).toBe('English');
    expect(languageOptions[2].textContent).toBe('French');
    expect(languageOptions[3].textContent).toBe('Italian');
  });
});

