import fetchAPI from '../Api';

export async function getHomeProfile() {
  const data = await fetchAPI(`
      {
        profile {
          introduction,
          fullName
        }
      }
    `);
  return data?.profile;
}

export async function getMainProfile() {
  const data = await fetchAPI(`
      {
        profile {
          introduction,
          fullName,
          mainProfile,
          photo {
            url
          }
          skills {
            label,
            value
          }
          experiences {
            company,
            dateInfo,
            position
          }
          projects {
            title,
            dateInfo,
            category
          }
        }
      }
    `);
  return data?.profile;
}
