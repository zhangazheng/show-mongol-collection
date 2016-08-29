if(Meteor.isClient){
  Meteor.setTimeout(()=>{
    Mongo.Collection.getAll().forEach((d)=> {
      if (d.name && d.name.indexOf('MeteorToys') === -1 && d.name.indexOf('meteor_') ===-1) {
        Package["msavin:mongol"].Mongol.showCollection(d.name);
      }
    });
  },3000)

}

if(Meteor.isServer){
}
