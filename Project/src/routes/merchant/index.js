/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Merchant from './Merchant';

const title = 'Merchant';

function action() {
  return {
    chunks: ['merchant'],
    title,
    component: (
      <Layout>
        <Merchant title={title} />
      </Layout>
    ),
  };
}

export default action;
