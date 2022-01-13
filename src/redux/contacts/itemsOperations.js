import { createAsyncThunk } from '@reduxjs/toolkit';

import { getContactsAPI, addContactAPI, deleteContactAPI } from '../../services/contactsAPI';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
  const contacts = await getContactsAPI();
  return contacts;
});

export const addContact = createAsyncThunk('contacts/addContact', async contact => {
  const responsedContact = await addContactAPI(contact);
  return responsedContact;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  await deleteContactAPI(id);
  return id;
});
