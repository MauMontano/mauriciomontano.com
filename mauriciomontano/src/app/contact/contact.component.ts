import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {

  public formGroup: FormGroup;
  public formControls: {
    name: FormControl,
    email: FormControl,
    phone: FormControl,
    subject: FormControl,
    message: FormControl
  };

  public controlBounds: ControlConfig = {
    name: {
      minLength: 3,
      maxLength: 20
    },
    phone: {
      regex: "^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$"
    }, 
    subject: {
      minLength: 5,
      maxLength: 50
    },
    message: {
      minLength: 5,
      maxLength: 100
    }
  };

  public formDataStatus: FormDataStatus = FormDataStatus.IDLE;

  constructor(private changeDetectorRef: ChangeDetectorRef, private http: HttpClient) {
    this.formControls = {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.controlBounds.name.minLength),
        Validators.maxLength(this.controlBounds.name.maxLength)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      phone: new FormControl(null, [
        Validators.pattern(this.controlBounds.phone.regex)
      ]),
      subject: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.controlBounds.subject.minLength),
        Validators.maxLength(this.controlBounds.subject.maxLength)
      ]),
      message: new FormControl(null, [
        Validators.required,
        Validators.minLength(this.controlBounds.message.minLength),
        Validators.maxLength(this.controlBounds.message.maxLength)
      ]),
    };
    this.formGroup = new FormGroup(this.formControls);
  }

  ngOnInit(): void {
  }

  public getErrorMsg(control: FormControl, controlName: keyof ControlConfig): string {
    if (control.valid || control.pristine)
      return '';

    if (control.hasError('required'))
      return "This field is required";

    if (control.hasError('minlength'))
      return `The minimum length is ${this.controlBounds[controlName].minLength}`;

    if (control.hasError('maxlength'))
      return `The maximum length is ${this.controlBounds[controlName].maxLength}`;

    if (control.hasError('email'))
      return "Type a valid email";
    
    if (control.hasError('pattern'))
      return "Type a valid phone number.";

    console.log("I made a mistake. Requested form control error message for", control, "and controlName", controlName);
    return "I made a mistake while programming. Please report. Details are in console";
  }

  public async onSubmit() {
    this.formDataStatus = FormDataStatus.SENDING;
    this.changeDetectorRef.markForCheck();

    try {
      if (this.formGroup.invalid) {
        this.formControls.name.markAsDirty();
        this.formControls.email.markAsDirty();
        this.formControls.phone.markAsDirty();
        this.formControls.subject.markAsDirty();
        this.formControls.message.markAsDirty();
        this.formDataStatus = FormDataStatus.IDLE;
        return;
      }

      let body = new HttpParams().set("form-name", "contact");
      for (let [controlName, control] of Object.entries(this.formControls)) {
        body = body.set(controlName, control.value);
      }

      // if (environment.production) {
      //   const observable = this.http.post("/", body, {
      //     headers: {
      //       "Content-Type": "application/x-www-form-urlencoded"
      //     },
      //     responseType: "text"
      //   });
      //   await firstValueFrom(observable);
      // } else {
      //   await new Promise<void>(resolve => {
      //     setTimeout(() => {
      //       console.log("Not sending data on dev mode. Update the code if you want to really do so");
      //       resolve();
      //     }, 1_000);
      //   })
      // }

      this.formDataStatus = FormDataStatus.SENT;
    } catch (e) {
      console.error("Error while sending form data", e);
      this.formDataStatus = FormDataStatus.ERROR;
    } finally {
      this.changeDetectorRef.markForCheck();
    }
  }

}

type ControlConfig = {
  name?: any,
  email?: any,
  phone?: any,
  subject?: any,
  message?: any
};

enum FormDataStatus {
  IDLE = 'IDLE',
  SENT = 'SENT',
  SENDING = 'SENDING',
  ERROR = 'ERROR'
}
