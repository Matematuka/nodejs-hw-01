import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    for (let i = 0; i < contacts.length; i += 1) {
      if (Math.random() < 0.5) {
        contacts.splice(i, 1);
      }
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('Good luck');
  } catch (error) {
    console.log(error, 'So-so');
  }
};

await thanos();
