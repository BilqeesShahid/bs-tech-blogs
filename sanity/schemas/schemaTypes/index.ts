import { type SchemaTypeDefinition } from 'sanity'
import { post } from '../post'
import { tag } from '../tag'
import { comment } from '../comment'
import { author } from '../author'
 
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,tag,comment,author],
}