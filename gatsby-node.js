const path = require('path')

const allRecipesQuery = `{
  allContentfulRecipe {
    edges {
      node {
        title
        slug
        date
        subtext
        accent
        thumb {
          fixed {
            src
          }
        }
        image {
          fixed {
            src
            height
            width
          }
        }
        intro {
          intro
        }
        prepTime
        cookingTime
        serves
        ingredients {
          name
          quantity
        }
        steps {
          content
        }
      }
    }
  }
}`

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const recipeTemplate = path.resolve(`src/templates/recipe.js`)

    resolve(
      graphql(allRecipesQuery)
        .then(result => {

          if (result.errors) {
            reject(result.errors)
          }

          result
            .data
            .allContentfulRecipe
            .edges
            .forEach(
              createRecipePage(createPage, recipeTemplate)
            )
        })
    )
  })
}

const createRecipePage = (action, template) => ({ node }) => {
  const path = `/recipe/${node.slug}`

  action({
    path,
    component: template,
    context: {
      ...node,
      path,
    },
  })
}