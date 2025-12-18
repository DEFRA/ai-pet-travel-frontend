import {
  chatGetController,
  chatPostController,
  clearConversationController
} from './controller.js'

/**
 * Sets up the routes used for authentication.
 * These routes are registered in src/server/router.js.
 */
export const chat = {
  plugin: {
    name: 'chat',
    register(server) {
      server.route([
        {
          method: 'GET',
          path: '/chat',
          ...chatGetController
        },
        {
          method: 'POST',
          path: '/chat',
          ...chatPostController
        },
        {
          method: ['GET'],
          path: '/chat/clear',
          ...clearConversationController
        }
      ])
    }
  }
}
