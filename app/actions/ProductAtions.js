export function getProductById(id) {
  return {
    type: 'GET_PRODUCT',
    promise: Promise.resolve({
      data: {
        title: 'testProduct',
        description: 'this is test product description',
        keywords: 'sns isomorphic product keywords'
      }
    })
  }
}
