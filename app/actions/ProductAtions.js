

export function getProductById (id) {
  return {
    type: 'GET_PRODUCT',
    promise: Promise.resolve({data:'teststeeste'})
  }
}
