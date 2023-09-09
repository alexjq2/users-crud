const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    first_name: {
		type: DataTypes.STRING,
		allowNull: false
    },

    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    }

});

module.exports = Users;