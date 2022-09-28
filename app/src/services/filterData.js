import { directus } from '../utils/directus.config'

export const filterData = async (collection, key) => {  
    
  const data = await directus.items(collection).readOne(key);
  
  if(!data || data?.length === 0) {
      throw new Error(`No existen ${collection} para mostrar`)
  }
  return data;
}

export const filterDatas = async (collection, keys) => {  
  
  const data = await directus.items(collection).readMany(keys);
  
  if(!data || data?.length === 0) {
      throw new Error(`No existen ${collection} para mostrar`)
  }
  return data.data;
}