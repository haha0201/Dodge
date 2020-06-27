static pack(){
    let pack = []
    for(let i in Player.list){
      let player = Player.list[i];
      player.updateSpd()
      pack.push({
        x:player.x,
        y:player.y,
        number:player.number,
      })
    }
    return pack;
  }
