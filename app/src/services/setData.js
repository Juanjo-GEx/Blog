import { directus } from '../utils/directus.config'

export const setComment = async (status, comment, userId) => {
    await directus.items('comments').createOne({
      status,
      comment,
      user: userId
    });
} 