module.exports = (sequelize, Sequelize) => {
    const People = sequelize.define('people', {
        // id: {
        //     type: Sequelize.INTEGER,
        //     primaryKey: true,
        //     autoIncrement: true
        //     // defaultValue: DataTypes.UUIDV4
        // },
        name: {
            type: Sequelize.STRING,
            required: true
        },
        address: {
            type: Sequelize.STRING,
            required: true
        },
        age: {
            type: Sequelize.INTEGER,
            required: true
        },
        interests: {
            type: Sequelize.ARRAY(Sequelize.TEXT) ,
            required: false
        },
        picture: {
            type: Sequelize.STRING
        }
    });
    return People;
};