import { Component,OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = 'No Server was created'
  serverName = 'TesteServer';
  userName = '';
  allowClick = false;
  Disable = "Desabilitado"
  serverCreated = false;
  servers = ['TesteServer', 'TesteServer2', 'TestServer3'];
  
 
  constructor() {
    setTimeout(() => { 
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }
 
  onCreateServer() { 
    this.serverCreationStatus = 'Server was created' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;

  }
  onUpdateServerName(event: any) { 
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onUserName(event: any) { 
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onChangeUserName() { 
    if(this.userName.length > 0) { 
      this.allowClick = true;
      this.Disable = "Habilitado";
    } else { 
      this.allowClick = false;
      this.Disable = "Desabilitado";
    }
  }
  emptyString() { 
    this.userName = '';
  }
  
}
