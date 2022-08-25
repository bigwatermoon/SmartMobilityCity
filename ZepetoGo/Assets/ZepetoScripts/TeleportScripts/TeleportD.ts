import { Collider, Vector3,Quaternion } from 'UnityEngine';
import { ZepetoCharacter, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
// import ClientStater from './ZepetoScripts/Multiplay/ClientStater'

export default class TeleportD extends ZepetoScriptBehaviour 
{
    
    private zepetoCharacter: ZepetoCharacter;


    Start()
    {    
        //Zepeto character object
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
        });
    
    }

    OnTriggerEnter(collider: Collider) 
    {
        
        if (this.zepetoCharacter == null || collider.gameObject != this.zepetoCharacter.gameObject) 
            return;
        
     
        this.zepetoCharacter.Teleport(new Vector3(-343.761993,17.5009995,523.234985), Quaternion.identity);
    }
}