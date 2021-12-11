import UrlModel from '../Models/Url.js'

const GetUrl = async (req, res, next) => {
  try {
    const { shr } = req.params
    if (!shr) throw { id: 3 }

    const url = await UrlModel.findOne({ shr })
    if (!url) throw { id: 3 }

    url.clicks++
    await url.save()

    res.redirect(url.source)
  } catch (error) {
    next(error)
  }
}

export default { GetUrl }
