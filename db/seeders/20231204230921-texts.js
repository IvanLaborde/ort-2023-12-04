'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Texts', [
      {
      text: 'Pellentesque felis ex, varius quis sagittis a, posuere a libero. Nullam erat ipsum, faucibus at elementum ac, vulputate quis nibh. Donec libero velit, aliquam sit amet dolor malesuada, elementum mattis ipsum. Suspendisse egestas lectus nisi, a posuere mi aliquam a. Nam odio turpis, semper ac accumsan quis, varius id elit. Praesent venenatis risus nisi, sit amet imperdiet enim vehicula feugiat. Donec malesuada ante ut massa commodo tincidunt nec ullamcorper risus. Curabitur semper aliquam lacus, ut accumsan nisi pulvinar tempus. Nunc volutpat ipsum libero, eu luctus est tempus nec. Cras pretium tellus cursus ligula ullamcorper aliquet. Phasellus maximus dapibus nisl, ac suscipit orci tristique nec. Mauris ut tristique ipsum. Cras justo eros, consequat eu nulla vel, vehicula finibus tortor. Praesent elit eros, convallis at mi nec, finibus sagittis sem. Fusce in tortor fermentum, porttitor sapien id, auctor ante. Fusce augue purus, fringilla ac imperdiet a, molestie et elit.',
      total_length: 100,
      words_count: 25,
      paragraphs_count: 3,
      createdAt: '2023-12-04',
      updatedAt: '2023-12-04'
    } 
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Texts', null, {});
  }
};
