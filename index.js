const Sequelize = require('sequelize');
const { DataTypes, Op } = Sequelize;
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



    // Select Rows with FindAll()
    //     return User.findAll();
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });


    //Selecting Columns with an Alias

    //     return User.findAll({ attributes: [['username', 'mayName'], ['password', 'pwd']] });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });


    //Aggregations with Sequelize.fn() 

    //     return User.findAll({ attributes: [[sequelize.fn('SUM', sequelize.col('age')), 'howOld']] });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    // Excluding Specific Columns with FindAll()

    //     return User.findAll({ attributes: { exclude: ['password'] } });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    // Selecting Rows with Where Filter

    //     return User.findAll({ attribute: ['username'], where: { age: 19 } });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    //Limiting Amount of Returned Rows


    //     return User.findAll({ limit: 2 });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    //Ordering Returned Rows

    //return User.findAll({ order: [['age', 'DESC']] });
    //return User.findAll({ order: [['age', 'ASC']] });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    //Grouping and Ordering Returned Rows

    //     return User.findAll({
    //         attributes: [
    //             'username',
    //             [sequelize.fn('SUM', sequelize.col('age')), 'sum_age']
    //         ],
    //         group: ['username'] // Include all non-aggregated columns in the GROUP BY clause
    //     });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    // Selecting Rows with Operators


    //     return User.findAll({
    //         where: {
    //             [Op.or]: { username: 'socer', age: 21 }
    //         }

    //     });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    // Functions in Where Clause

    //     return User.findAll({
    //         where: {
    //             [Op.and]: [
    //                 sequelize.where(
    //                     sequelize.fn('CHAR_LENGTH', sequelize.col('username')),
    //                     '<=',
    //                     6
    //                 )
    //             ]
    //         }
    //     });
    // }).then((data) => {
    //     data.forEach((element) => {
    //         console.log(element.toJSON());

    //     });

    // }).catch((err) => {
    //     console.log(err)

    // });

    // Updating Rows with Update()

    //     return User.update({ username: 'satyajit' }, {
    //         where: { age: 25 }
    //     });
    // }).then((data) => {

    //     console.log(data);


    // }).catch((err) => {
    //     console.log(err)

    // });

    // Deleting Rows with Destroy()

    //     return User.destroy({
    //         where: { age: 25 }
    //     });
    // }).then((data) => {

    //     console.log(data);


    // }).catch((err) => {
    //     console.log(err)

    // });


    // Deleting Every Row with Truncate

    // return User.destroy({ truncate : true

    // });
    // }).then((data) => {

    //     console.log(data);


    // }).catch((err) => {
    //     console.log(err)

    // });



    // Utility Methods

    return User.max(
        'age'

    );
}).then((data) => {

    console.log(data);


}).catch((err) => {
    console.log(err)

});

