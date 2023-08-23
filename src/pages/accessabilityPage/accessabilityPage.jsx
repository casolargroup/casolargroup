import React from 'react';
import './accessabilityPage.scss';

const AccessabilityPage = () => {
  return (
    <div className="accessabilityPage">
      <div className="container">
        <h2 className="fw-bold">Accessibility Statement</h2>
        <br />
        <h4 className="fw-bold">Keyboard Shortcuts</h4>
        <p>
          Most modern browsers support jumping to specific links within a website through the use of
          keyboard shortcuts (called access keys) defined by the website. On Windows, you can press{' '}
          <kbd>ALT</kbd> + <kbd>AccessKey</kbd>; on Macintosh, you can press <kbd>Control</kbd> +{' '}
          <kbd>Option</kbd> + <kbd>AccessKey</kbd>.
        </p>

        <table className="table">
          <caption>Access Keys</caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Access Key</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Home page</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Skip navigation and go directly to content</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Site Map</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>0</td>
              <td>Accessibility Statement and access key listing</td>
            </tr>
          </tbody>
        </table>

        <h4 className="fw-bold">Standards Compliance</h4>
        <p>
          All pages throughout this website comply with priority 1 guidelines of the W3 Web Content
          Accessibility Guidelines and the U.S. Federal Government Section 508 Guidelines.
        </p>

        <p>
          All pages throughout this website validate as XHTML 1 Strict. They are structured using
          semantic markup. For example, an <code>&lt;h1&gt;</code> tag is used for the title of each
          page, <code>&lt;h2&gt;</code> is used for subheadings, <code>&lt;h3&gt;</code> for
          tertiary headings, etc. In particular, this enables JAWS users to skip to the next post
          using <kbd>ALT</kbd> + <kbd>INSERT</kbd> + <kbd>2</kbd>.
        </p>

        <p>
          All table cells are explicitly associated with their corresponding header cells to aid
          screen readers in rendering them in a clear and meaningful way. Where applicable, all
          tables contain captions and summaries.
        </p>

        <br />

        <h4 className="fw-bold">Navigation Aids</h4>
        <p>
          All pages have <code>rel="home"</code> links to aid navigation in text-only browsers.
        </p>
        <p>A Site Map is available, which contains links to all of the pages within the website.</p>
        <br />
        <h4 className="fw-bold">Links</h4>
        <p>
          Whenever possible, link text is written to make sense out of context to aid browsers (such
          as JAWS, Home Page Reader, Lynx, and Opera) that allow the user to browse a list of links
          culled from a page. Many links contain additional descriptive information in the title
          tag.
        </p>

        <p>
          There are no links that contain JavaScript in their <code>href</code> attributes. All
          links can be followed by any browser, regardless of whether scripting is turned off. All
          links that open new windows inform the user within the contents of the <code>title</code>{' '}
          attribute.
        </p>
        <br />
        <h4 className="fw-bold">Images</h4>
        <p>
          All images include descriptive text provided through the <code>alt</code> attribute.
        </p>
        <br />
        <h4 className="fw-bold">Design</h4>
        <p>
          This site uses cascading style sheets for visual layout. If your browser does not support
          style sheets, the content of the page is still readable.
        </p>

        <p>
          This site uses only relative font sizes to ensure compatibility with text resizing
          features in visual browsers.
        </p>
      </div>
    </div>
  );
};

export default AccessabilityPage;
