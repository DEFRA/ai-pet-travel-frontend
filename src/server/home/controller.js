import { getModels } from '../chat/models-api.js'

export const homeController = {
  get: {
    handler: async (request, h) => {
      const models = await getModels()

      return h.view('home/index', {
        pageTitle: 'Pet Travel Advice - Taking Your Pet Abroad',
        heading: 'Get Pet Travel Advice',
        phaseTag: 'Beta',
        phaseTagText:
          'This is a new service – your feedback will help us to improve it.',
        models
      })
    }
  }
}
