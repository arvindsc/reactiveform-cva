import { Component, VERSION } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    address: new FormControl()
  
  });
  onSubmit() {
    console.log(this.form.value);
  }
}
