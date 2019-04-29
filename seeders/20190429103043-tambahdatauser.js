'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Users', 
    [
      {
        "id": 1,
        "username": "kentut pelangi",
        "password": "123456",
        "updatedAt": "2019-04-29T09:19:14.449Z",
        "createdAt": "2019-04-29T09:19:14.449Z"
    }], 
{})

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
