import fetchAPI from '../Api';
import axiosAPI from './Axios';

export async function getContactContent() {
  const data = await fetchAPI(`
      {
        contactPage {
          pageTitle,
          pageInfo
        }
      }
    `);
  return data?.contactPage;
}

export function sendMessage(data) {
  return axiosAPI.post('/messages', data);
}
