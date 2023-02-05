import { ZepetoScriptBehaviour } from "ZEPETO.Script";
import {
  SpawnInfo,
  ZepetoPlayers,
  LocalPlayer,
  ZepetoCharacter,
} from "ZEPETO.Character.Controller";

export default class CharacterController extends ZepetoScriptBehaviour {
  Start() {
    ZepetoPlayers.instance.CreatePlayerWithZepetoId(
      "",
      "r4sen",
      new SpawnInfo(),
      true
    );
    ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
      let _player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
    });
  }
}
