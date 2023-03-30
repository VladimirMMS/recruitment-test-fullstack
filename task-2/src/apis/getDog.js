
export const getDogs = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all')
    return response.json()
  }