import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import createFakeContact from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const existingContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newContact = createFakeContact();
    const allContacts = existingContacts.concat(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
    console.log(`Successfully added new contact`);
  } catch (error) {
    console.log(error, 'Adding contact error');
  }
};

await addOneContact();
