import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    console.log(contacts.length);
  } catch {
    console.error('Getting contacts error');
  }
};

await countContacts();
