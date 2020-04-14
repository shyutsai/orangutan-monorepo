import { buildInjectStyleScript } from './inject-style-script'
import { buildNestedData } from './build-nested-data'
import { ServerStyleSheet } from 'styled-components'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Timeline from '../components/timeline'

/**
 *
 *
 * @export
 * @param {Object[]} elements elements
 * @param {Object} theme custom theme
 * @param {Object} [appProps={}]
 * @param {string} [appProps.emphasizedLevel] `unit` or `group`. It will apply blocks with white background to the content of that section level (Not include the heading element).
 * @param {number} [appProps.maxHeadingTagLevel] If it's set to `3`, the heading element will start with html tag `h3`
 * @returns {string} html string with
 */
export function buildEmbeddedCode(elements, theme, appProps = {}) {
  const sheet = new ServerStyleSheet()
  try {
    const html = ReactDOMServer.renderToStaticMarkup(
      sheet.collectStyles(
        <Timeline
          content={buildNestedData(elements)}
          theme={theme}
          {...appProps}
        />
      )
    )
    const scriptTag = buildInjectStyleScript(sheet.getStyleTags())
    return html + scriptTag
  } catch (err) {
    throw err
  } finally {
    sheet.seal()
  }
}
