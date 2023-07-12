import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandleService implements ErrorHandler {

  constructor() { }

  handleError(error: any): void {
    console.log("handleError---------------------");
    console.error(error);
    console.log("================================");
    
  }
}
