import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const deleteContacts = allContacts.splice(0);
    await fs.writeFile(PATH_DB, JSON.stringify(deleteContacts));
    console.log('Successfully removed all contacts');
  } catch (error) {
    console.log(error, 'Failed to remove contacts');
  }
};

await removeAllContacts();
