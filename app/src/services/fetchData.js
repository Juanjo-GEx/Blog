import { directus } from '../utils/directus.config'

const getFields = (fields) => {
  
  let fieldsCollection = {};

  if(fields === undefined){
    fieldsCollection = {limit: -1};
  } else {
    fieldsCollection = {fields};
  }

  return fieldsCollection;
}

export const getData = async (collection, fields) => {  
  const fieldsCollection = getFields(fields);
  const { data } = await directus.items(collection).readByQuery(fieldsCollection);

  if(!data || data?.length === 0) {
      throw new Error(`No existen ${collection} para mostrar`)
  }
  return data;
} 

export const getFile = async (fileID, fields) => {
  const fieldsCollection = getFields(fields);
  const data = await directus.files.readOne(fileID, fieldsCollection);

  if(!data || data?.length === 0) {
      throw new Error(`El archivo solicitado no está disponible`)
  }
  return data;
} 