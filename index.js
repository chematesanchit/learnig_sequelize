const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;
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
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6, 9]
        }

    },
    password: {
        type: DataTypes.STRING

    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 20


    },
    sanchitCode: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
},
    {
        freezeTableName: true,
        timestamps: false
    });

User.sync({ alter: true }).then((data) => {
    // working with updated table

    // return User.create({
    //     username: 'sanchit',
    //     password: 'Sanchit@123',
    //     age: 21,
    //     sanchitCode: false
    // });

    //  udating Inserted Data with Save()
    // }).then((data) => {
    //     console.log('user added to database'),
    //         data.username = 'satyajit';
    //         data.age =22;
    //     return data.save();
    // }).then((data) => {
    //     console.group('user updated')
    //     console.log(data.toJSON())
    // }).catch((err) => {
    //     console.log(err)

    // });



    //Deleting Inserted Data with Destroy()
    // }).then((data) => {
    //     console.log('user added to database'),
    //         data.username = 'satyajit';
    //     data.age = 22;
    //     return data.destroy();
    // }).then((data) => {
    //     console.group('user destroyed')
    //     console.log(data.toJSON())
    // }).catch((err) => {
    //     console.log(err)

    // });



    // Restoring Original User Data with Reload()
    // }).then((data) => {
    //     console.log('user added to database'),
    //         data.username = 'satyajit';
    //     data.age = 22;
    //     return data.reload();
    // }).then((data) => {
    //     console.group('user reurn to normal')
    //     console.log(data.toJSON())
    // }).catch((err) => {
    //     console.log(err)

    // });



    //Updating Specific telds With Save()
    // }).then((data) => {
    //     console.log('user added to database'),
    //         data.username = 'satyajit';
    //     data.age = 72;
    //     return data.save({ fields: ['age'] });
    // }).then((data) => {
    //     console.group('user updated')
    //     console.log(data.toJSON())
    // }).catch((err) => {
    //     console.log(err)

    // });

    //Incrementing() and Decrementing() Inserted Integer Data
    // }).then((data) => {
    //     //data.decrement({ age: 2 });
    //     data.increment({ age: 5 });

    // }).catch((err) => {
    //     console.log(err)

    // });

    //inserting Multiple Rows at Once with BulkCreate()
    //     return User.bulkCreate([
    //         {
    //             username: 'Tom',
    //             age: 25,
    //             password: 'pizzasoccer'
    //         },
    //         {
    //             username: 'Mike',
    //             age: 31,
    //             password: '12345'
    //         }
    //     ]);
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    //Validating Inserted Data made changes in line no 24 and 25
    return User.create(
        {
            username: 'vishnupriya'
        }
    );
}).then((data) => {
    data.forEach((element) => {
        console.log(element.toJSON());

    });

}).catch((err) => {
    console.log(err)

});