module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("review", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    });
  
    return Review;
  };
  