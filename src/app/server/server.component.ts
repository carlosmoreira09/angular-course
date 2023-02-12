import { getLocaleTimeFormat } from "@angular/common";
import { Component } from "@angular/core";

@Component({ 
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})
export class ServerComponent { 
    serverId: number = 10;
    serverStatus: string = 'offline';
    textButton = "Display Details";
    colorP = '';
    constructor() { 
        this.serverStatus = Math.random()  > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() { 
        return this.serverStatus;
    }
    getColor() { 
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
    changeColor() { 

        this.colorP = '#'+Math.floor(Math.random()*16777215).toString(16);
        
    }
}