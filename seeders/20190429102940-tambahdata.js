'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Todos', 
      [
        {
          "id": 1,
          "title": "kentut pelangi",
          "description": "agar kita beruntung",
          "UserId": 1,
          "updatedAt": "2019-04-29T09:19:14.449Z",
          "createdAt": "2019-04-29T09:19:14.449Z"
      },
      {
        "id": 2,
        "title": "mandi pelangi",
        "description": "agar kita bahagia",
        "UserId": 1,
        "updatedAt": "2019-04-29T09:19:14.449Z",
        "createdAt": "2019-04-29T09:19:14.449Z"
      }
      ], 
{});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Todos', null, {});
  
  }
};
