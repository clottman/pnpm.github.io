/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');


const CompLibrary = require('../../core/CompLibrary');
const translate = require("../../server/translate.js").translate;

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

function Versions(props) {
  const { config: siteConfig } = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${
    siteConfig.projectName
    }`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            <h1>{siteConfig.title} <translate>Versions</translate></h1>
          </header>
          <p><translate>New versions of this project are released every so often.</translate></p>
          <h3 id="latest"><translate>Current version (Stable)</translate></h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                    props.language
                    }/installation`}><translate>Documentation</translate></a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <translate> This is the version that is configured automatically when you first
            install this project.</translate>
          </p>
          <h3 id="archive">Past Versions</h3>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr>
                      <th>{version}</th>
                      <td>
                        <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                          props.language
                          }/${version}/installation`}><translate>Documentation</translate></a>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
