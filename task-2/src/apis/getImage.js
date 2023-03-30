
export const getImages = async (name) => {
    const response = await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
    return response.json()
}
