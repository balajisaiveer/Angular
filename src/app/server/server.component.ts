import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  newServerStatus = 'No new server';
  allowNewServer = false;
  servername='TestServer';
  newservercreated= false;
  serverstatus: string = 'offfline';
  servernames = ['server1','server2']
  log=[]
  isblue = true;
  showSecret = false;
  truth="";
  constructor() {
    this.serverstatus = Math.random() > 0.5 ?'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }
  serverid: number = 10;


  onToogleDeatils(){
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
  ontrue(){
    this.truth="false";
    return this.truth;
  }
  onServerCreated(){
    this.newservercreated= true;
    this.servernames.push(this.servername);
    this.newServerStatus = 'New server is created' + this.servername;
  }
  getServerStatus(){
    return this.serverstatus;
  }
  getcolor(){
    if(this.serverstatus=="offline"){
      return "red";

    }
    else{
      return "green";
    }
  }
  onEnterEvent(event: any){
    this.servername =   (<HTMLInputElement>event.target).value;
  }
  
}
