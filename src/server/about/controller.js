export const aboutController = {
  handler(_request, h) {
    return h.view('about/index', {
      pageTitle: 'About this service - Pet Travel Advice',
      heading: 'About this service',
      phaseTag: 'Beta',
      breadcrumbs: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'About this service'
        }
      ]
    })
  }
}
