module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define("book", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        noPages: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })

    return Book
}
