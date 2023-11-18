const Sequelize = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '1234', {
    dialect: 'mysql'
});

async function myFunction() {
    await sequelize.authenticate();
    console.log("Connection successful! ");
}
myFunction();


const User = sequelize.define('user', {
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        primeryKey: true,
        autoincrement: true

    },
    username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false

    },
    password: {
        type: Sequelize.DataTypes.STRING

    },
    age: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 20


    },
    sanchitCode: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    });

User.sync({ alter: true }).then((data) => {
    console.log('Table and model synced successfully');

}).catch((err) => {
    console.log('Table and model not synced successfully')

})