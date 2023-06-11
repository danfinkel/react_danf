//races model
module.exports = (sequelize, DataTypes) => {
   const Races = sequelize.define( "races", {
       userName: {
            type: DataTypes.STRING,
           allowNull: false
       },
       raceName: {
           type: DataTypes.STRING,
           allowNull: false
       },
       raceDate: {
           type: DataTypes.DATE,
           allowNull: false
       },
       raceNotes: {
           type: DataTypes.STRING,
           allowNull: true
       },
   }, {timestamps: true}, )
   return Races
}