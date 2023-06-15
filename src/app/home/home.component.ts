import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  browserName = '';
  browserVersion = '';
  
  ngOnInit() {
      this.browserName = this.detectBrowserName();
      this.browserVersion = this.detectBrowserVersion();
}
detectBrowserName() { 
  const agent = window.navigator.userAgent.toLowerCase()
  switch (true) {
    case agent.indexOf('edg') > -1:
      return 'edge';
    case agent.indexOf('opr') > -1 && !!(<any>window).opr:
      return 'opera';
    case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
      return 'chrome';
    case agent.indexOf('trident') > -1:
      return 'ie';
    case agent.indexOf('firefox') > -1:
      return 'firefox';
    case agent.indexOf('safari') > -1:
      return 'safari';
    default:
      return 'other';
  }
}
 
detectBrowserVersion(){
    var userAgent = navigator.userAgent, tem, 
    matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    
    if(/trident/i.test(matchTest[1])){
        tem =  /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        return 'IE '+(tem[1] || '');
    }
    if(matchTest[1]=== 'Chrome'){
        tem = userAgent.match(/\b(OPR|Edg)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    matchTest= matchTest[2]? [matchTest[1], matchTest[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= userAgent.match(/version\/(\d+)/i))!= null) matchTest.splice(1, 1, tem[1]);
    return matchTest.join(' ');
}

value1=''
value2=''
value3=''
value4=''
counter = 0;
counter1 = 0;counter2 = 0;counter3 = 0;counter4 = 0;counter5 = 0;counter6 = 0;counter7 = 0;counter8 = 0;
constructor() { }


click(){
 return this.counter++;
}

dblclick(){
  return this.counter1++;
 }
 
 drag(){
  return this.counter2++;
 }
 dragover(){
  return this.counter3++;
 }
 mousedown(){
  return this.counter4++;
 }
 mouseenter(){
  return this.counter5++;
 }
 mouseleave(){
  return this.counter6++;
 }
 mouseover(){
  return this.counter7++;
 }
 mouseup(){
  return this.counter8++;
 }
}