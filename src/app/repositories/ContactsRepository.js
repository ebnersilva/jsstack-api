const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Ebner',
    email: 'ebner.suporte@hotmail.com',
    phone: '123123123',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Jenifer',
    email: 'jenifer@hotmail.com',
    phone: '123123123',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const findedContact = contacts.find((contact) => contact.id === id);

      resolve(findedContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();
