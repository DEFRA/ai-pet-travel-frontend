import { howWeGenerateAnswersController } from './controller.js'

export const howWeGenerateAnswers = {
  plugin: {
    name: 'how-we-generate-answers',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/how-we-generate-answers',
          ...howWeGenerateAnswersController.get
        }
      ])
    }
  }
}
