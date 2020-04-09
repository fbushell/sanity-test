export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-boqjz8qq',
                  apiId: '30cf3478-74fd-4be6-ba0d-2a4b4e925577'
                },
                {
                  buildHookId: '5e8ea7de7d3a3933518264f6',
                  title: 'Events Website',
                  name: 'sanity-test-web-h8hovqvb',
                  apiId: 'd193eb44-1d81-4208-a451-0c674e53a520'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fbushell/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-h8hovqvb.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
