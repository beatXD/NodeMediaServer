import { config as DotenvConfig } from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV === undefined) {
  DotenvConfig({ path: path.join(__dirname, '../../.env') })
}

export const configs = {
  SERVER_PORT: process.env.SERVER_PORT,
  SERVER_MEDIA: process.env.SERVER_MEDIA,
  SERVER_STREAM: process.env.SERVER_STREAM,

  APP_MDOE: process.env.NODE_ENV
}
