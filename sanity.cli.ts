/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'

const projectId = 'sttf02s5'
const dataset = 'production'
const studioHost='makeup-sttf02s5'

export default defineCliConfig({ api: { projectId, dataset} })
