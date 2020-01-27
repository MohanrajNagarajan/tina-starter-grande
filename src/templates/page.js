import React from "react"
import { graphql } from "gatsby"
import { Paper } from "../components/style"
import { Form, FormBlock } from "../blocks/form"
import { Title, TitleBlock } from "../blocks/title"
import { Image, ImageBlock } from "../blocks/image"
import { Content, ContentBlock } from "../blocks/content"
import { PageLayout } from "../components/pageLayout"
import Gallery from "react-grid-gallery"

import { useLocalJsonForm } from "gatsby-tinacms-json"
import Mehandi from "../../content/images/Mehandi.jpg"
import image1 from "../../content/images/image1.jpg"
import image2 from "../../content/images/image2.jpg"
import image3 from "../../content/images/image3.jpg"
import image4 from "../../content/images/image4.jpg"
import image5 from "../../content/images/image5.jpg"
import image7 from "../../content/images/image7.jpg"
import image8 from "../../content/images/image8.jpg"
import image9 from "../../content/images/image9.jpg"
import image10 from "../../content/images/image10.jpg"
import image11 from "../../content/images/image11.jpg"
import image12 from "../../content/images/image12.jpg"
import image13 from "../../content/images/image13.jpg"
import image14 from "../../content/images/image14.jpg"
import image15 from "../../content/images/image15.jpg"
import image16 from "../../content/images/image16.jpg"
import image17 from "../../content/images/image17.jpg"
import image18 from "../../content/images/image18.jpg"
import image19 from "../../content/images/image19.jpg"
import image20 from "../../content/images/image20.jpg"
import image21 from "../../content/images/image21.jpg"
import image22 from "../../content/images/image22.jpg"
import image23 from "../../content/images/image23.jpg"
import image24 from "../../content/images/image24.jpg"
import image25 from "../../content/images/image25.jpg"
import image26 from "../../content/images/image26.jpg"
import image27 from "../../content/images/image27.jpg"
import image28 from "../../content/images/image28.jpg"
import image29 from "../../content/images/image29.jpg"
import image30 from "../../content/images/image30.jpg"
import image31 from "../../content/images/image31.jpg"
import image32 from "../../content/images/image32.jpg"
import image33 from "../../content/images/image33.jpg"
import image34 from "../../content/images/image34.jpg"

export default function Page({ data }) {
  const [page] = useLocalJsonForm(data.page, PageForm)
  const blocks = page.blocks ? page.blocks : []
  const IMAGES = [
    {
      src: image1,
      thumbnail: image1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image2,
      thumbnail: image2,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image3,
      thumbnail: image3,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image4,
      thumbnail: image4,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image1,
      thumbnail: image1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image5,
      thumbnail: image5,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image7,
      thumbnail: image7,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image8,
      thumbnail: image8,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image9,
      thumbnail: image9,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image10,
      thumbnail: image10,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image11,
      thumbnail: image11,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image12,
      thumbnail: image12,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image13,
      thumbnail: image13,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image14,
      thumbnail: image14,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image15,
      thumbnail: image15,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image16,
      thumbnail: image16,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image17,
      thumbnail: image17,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image18,
      thumbnail: image18,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image19,
      thumbnail: image19,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image20,
      thumbnail: image20,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image21,
      thumbnail: image21,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image22,
      thumbnail: image22,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image1,
      thumbnail: image1,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image23,
      thumbnail: image23,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image24,
      thumbnail: image24,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image25,
      thumbnail: image25,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image26,
      thumbnail: image26,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image27,
      thumbnail: image27,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image28,
      thumbnail: image28,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image29,
      thumbnail: image29,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image30,
      thumbnail: image30,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image31,
      thumbnail: image31,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image32,
      thumbnail: image32,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image33,
      thumbnail: image33,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
    {
      src: image34,
      thumbnail: image34,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
    },
  ]
  return (
    <PageLayout page={page}>
      <Paper>
        {blocks &&
          blocks.map(({ _template, ...data }, i) => {
            switch (_template) {
              case "TitleBlock":
                return <Title page={page} data={data} />
              case "ImageBlock":
                return <Image data={data} />
              case "FormBlock":
                return <Form form={data} />
              case "ContentBlock":
                if (data.content && page.childrenPagesJsonBlockMarkdown[i])
                  return (
                    <Content
                      data={data}
                      html={
                        page.childrenPagesJsonBlockMarkdown[i]
                          .childMarkdownRemark.html
                      }
                    />
                  )
                break
              case "GalleryBlock":
                return (
                  <div>
                    <Gallery images={IMAGES} />
                  </div>
                )
                break
              default:
                return true
            }
          })}
      </Paper>
    </PageLayout>
  )
}

const PageForm = {
  label: "Page",
  fields: [
    {
      label: "Title",
      name: "rawJson.title",
      component: "text",
    },
    {
      label: "Hero",
      name: "rawJson.hero",
      component: "group",
      fields: [
        {
          label: "Headline",
          name: "headline",
          component: "text",
        },
        {
          label: "Textline",
          name: "textline",
          component: "text",
        },
        {
          label: "Image",
          name: "image",
          component: "image",
          parse: filename => `../images/${filename}`,
          uploadDir: () => `/content/images/`,
          previewSrc: formValues => {
            if (!formValues.jsonNode.hero || !formValues.jsonNode.hero.image)
              return ""
            return formValues.jsonNode.hero.image.childImageSharp.fluid.src
          },
        },
        {
          label: "Actions",
          name: "ctas",
          component: "group-list",
          itemProps: item => ({
            key: item.link,
            label: item.label,
          }),
          fields: [
            {
              label: "Label",
              name: "label",
              component: "text",
            },
            {
              label: "Link",
              name: "link",
              component: "text",
            },
            {
              label: "Primary",
              name: "primary",
              component: "toggle",
            },
            {
              label: "Arrow",
              name: "arrow",
              component: "toggle",
            },
          ],
        },
        {
          label: "Large",
          name: "large",
          component: "toggle",
        },
      ],
    },
    {
      label: "Page Sections",
      name: "rawJson.blocks",
      component: "blocks",
      templates: {
        TitleBlock,
        ImageBlock,
        FormBlock,
        ContentBlock,
      },
    },
  ],
}

export const pageQuery = graphql`
  query($path: String!) {
    page: pagesJson(path: { eq: $path }) {
      title
      displayTitle
      hero {
        headline
        textline
        large
        overlay
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        ctas {
          label
          link
          primary
          arrow
        }
      }
      blocks {
        _template
        content
        name
        title
        underline
        center
        recipient
        fields {
          label
          inputType
          autocomplete
        }
        image {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      childrenPagesJsonBlockMarkdown {
        childMarkdownRemark {
          html
        }
      }

      rawJson
      fileRelativePath
    }
  }
`
