import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"
import AboutPagePreview from "./aboutPagePreview"
import ProductPagePreview from "./productPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate("about", AboutPagePreview)
CMS.registerPreviewTemplate("product", ProductPagePreview)
