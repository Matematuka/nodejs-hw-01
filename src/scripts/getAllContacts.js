import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const allContacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    console.log(allContacts);
  } catch (error) {
    console.log(error, 'File read error');
  }
};

await getAllContacts();
