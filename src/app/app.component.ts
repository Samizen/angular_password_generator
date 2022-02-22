import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Property:
  length: number = 0;
  password: string = '';
  hasLetters: boolean =  false;
  hasNumbers: boolean = false;
  hasSpecialCharacters: boolean = false;

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters() {
    this.hasLetters = !this.hasLetters;
  }

  onChangeUseNumbers() {
    this.hasNumbers = !this.hasNumbers;
  }

  onChangeUseSpecialCharacters() {
    this.hasSpecialCharacters = !this.hasSpecialCharacters;
  }

  // Function to run anytime a user clicks the button
  onButtonClick() {
    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const specialCharacters = '!@#$%^&*()_-+:'

    let validChars = '';

    if(this.hasLetters){
      validChars += letters
    }
    if(this.hasNumbers){
      validChars += numbers
    }
    if(this.hasSpecialCharacters){
      validChars += specialCharacters 
    }

    let generatedPassword = ''
    for(let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length); 
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
    
  }
}
