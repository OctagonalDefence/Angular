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
  it ('should have 5 language options in select', () => {
    const languageOptions = fixture.nativeElement.querySelectorAll('select option');
    expect(languageOptions.length).toBe(5);
  });
  it ('should have Spanish, English, French and Italian as language options and they should be ordered alfabetically', () => {
    const languageOptions = fixture.nativeElement.querySelectorAll('select option');
    expect(languageOptions[0].textContent).toBe('English');
    expect(languageOptions[1].textContent).toBe('French');
    expect(languageOptions[2].textContent).toBe('German');
    expect(languageOptions[3].textContent).toBe('Italian');
    expect(languageOptions[4].textContent).toBe('Spanish');

  });

  it('should have a submit button', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });
  it('button should be initially disabled', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();    
  });
  it('button should be enabled when all inputs are filled', () => {
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    const userInput = fixture.nativeElement.querySelector('input[type="text"]');
    const emailInput = fixture.nativeElement.querySelector('input[type="email"]');
    const passwordInput = fixture.nativeElement.querySelector('input[type="password"]');
    const repeatPasswordInput = fixture.nativeElement.querySelector('input[type="repeatpassword"]');
    userInput.value = 'user';
    userInput.dispatchEvent(new Event("input"));
    emailInput.value = 'email@gmail.com';
    emailInput.dispatchEvent(new Event("input"));
    passwordInput.value = 'password';
    passwordInput.dispatchEvent(new Event("input"));
    repeatPasswordInput.value = 'password';
    repeatPasswordInput.dispatchEvent(new Event("input"));
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
});

});