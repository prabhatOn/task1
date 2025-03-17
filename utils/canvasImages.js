// Generate URLs for all pepper images
const generatePepperUrls = () => {
  const pepperVariants = ["A", "B", "C", "D", "E", "F", "G"]
  const imagesPerVariant = 150 // 0 to 149
  const urls = []

  pepperVariants.forEach((variant) => {
    for (let i = 0; i < imagesPerVariant; i++) {
      urls.push(`https://thirtysixstudio.com/peppers/pepper${variant}/${i}.png`)
    }
  })

  return urls
}

const canvasImages = generatePepperUrls()

export default canvasImages

