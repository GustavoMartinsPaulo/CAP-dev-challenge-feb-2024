const cds = require('@sap/cds');

cds.on('serving', service=>{
    addLinkToGraphQl(service)
})

function addLinkToGraphQl(service) {
    const provider = (entity) => {
        if (entity) return
        const hasGraphQL = service.endpoints.filter( (endpoint) => endpoint.kind == 'graphql')
        if(hasGraphQL.length > 0) return { href: 'graphql', name: 'GraphQL GustavoMartins', title: 'Show in GraphQL' }
        
      
    }
    // Needs @sap/cds >= 4.4.0
    service.$linkProviders ? service.$linkProviders.push(provider) : service.$linkProviders = [provider]
  }