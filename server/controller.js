const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
    addUser: (req, res) => {
        const db = req.app.get('db');
        const { firstName, lastName, address, age, interests, picture } = req.body;
        db.People.create({
            firstName: firstName,
            lastName: lastName,
            address: address,
            age: age,
            interests: interests,
            picture: picture
        })
            .then(person => {
                res.status(200).send(person)
            }).catch(err => res.status(500).send(err))
    },
    getUser: (req, res) => {
        const db = req.app.get('db');
        const { name } = req.query;
        setTimeout(function () {
            db.People.findAll({
                where: {
                    $or: [
                        {
                            firstName: {
                                [Op.iLike]: `%${name}%`
                            }
                        },
                        {
                            lastName: {
                                [Op.iLike]: `%${name}%`
                            }
                        }
                    ]
                }
            })
                .then(results => {
                    res.status(200).send(results)
                }).catch(err => res.status(500).send(err))
        }, 2000)
    },
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.People.findAll({
        })
            .then(results => {
                res.status(200).send(results)
            }).catch(err => res.status(500).send(err))
    }
}
