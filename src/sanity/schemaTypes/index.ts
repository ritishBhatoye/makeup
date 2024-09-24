import { type SchemaTypeDefinition } from 'sanity'
import appointment from './appointment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [appointment],
}
